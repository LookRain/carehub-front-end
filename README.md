# CareHub Web Service -DEVELOPER GUIDE - Front End
Author: LU YU, LIU JIAHAO

     Frontend Language: JavaScript
     Framework: Vue.js 2.2.6


## Set up development environment
1. Install and setup Node.js and NPM
2. Navigate to the front end project root folder where the `package.json` file is present
3. Run `npm install` to install all the JS libraries and dependencies
4. Run `npm run dev` for development. At the same time build and run the ASP.NET project from Visual Studio, replace the `app.js` script tag with `http://localhost:8080/app.js`
5. Refresh with clearing browser cache and start developing

## Build for production
1. Run `npm run build`
2. Copy all files in `dist` folder to the root directory of the Visual Studio project



&ensp;
&ensp;
---

# Project Structure Overview
The `index.html` is the entry and only html file. The entry JavaScript file is `main.js` under `src/`. 
`src/App.vue` holds the common UI structure shared by all pages in the app such as `av-navbar`, `av-left-sidebar`, and the main content holder `av-content`
&ensp;
### Components
All `.vue` files under `src/components/` are components that are reusable in multiple pages in the app. Such as the navbar, sidebar footer and content.
### Pages
All `.vue` files under `src/pages/` are components that are the actual content pages that get rendered inside `<av-content></av-content>` tag according to the route.
### Routing
This projects uses Vue Router to achieve the user experience of a single-page application (SPA). All routing happens in the front end instead of handled by the server. The `src/router/index.js` is the router configuration file that defines all the routes and their behaviours (Vue components to render, sub-routes).
To add new routes, simply create new components/pages and import them in `router/index.js`, then define a new route.
### State Management
This projects uses Vuex for state management. Vuex is a central state management solution for Vue.js. However not all data are stored in here for convenient reasons. The most important data that is in here include is the logged in user information.
### Utils
`src/utils/` folder contains util tools or classes that are reused in multiple files. Currently there is only one file called `DateFormat.js` which formats date for the date picker component for `MUSE UI` library. (http://www.muse-ui.org/#/datePicker)
### External Libraries
This project ueses multiple open-source JavaScript and Vue.js libraries. 
- Muse-UI: http://www.muse-ui.org
-- Any component tag that starts with `mu-` is most likely from this library, such as `<mu-date-picker/>`. Refer to their official documentation for any problems encountered.
- Axios: https://github.com/mzabriskie/axios
-- All http request made to the server are performed using Axios
- Admin LTE: https://github.com/almasaeed2010/AdminLTE
-- The template of the UI of this project

### App Logic
After user logs in, `main.js` sends out `store.dispatch('initUser')` action to Vuex store to initialize the user data in the store.
Then depending on what user group the user belongs to, different components sends out different requests to fetch relevant data from the server using the API provided.
The UI difference between different user groups is achieved using Vue directives like `v-if` and `v-show` in `<template></template>`. For example in `App.vue`:
```
<av-left-sidebar v-if='user.UserGroup == 1'></av-left-sidebar>
<av-hos-left-sidebar v-if='user.UserGroup == 2'></av-hos-left-sidebar>
<av-call-left-sidebar v-if='user.UserGroup == 3'></av-call-left-sidebar>
```
Depending on what the user group is, the component renders different sub-components, `<left-sidebar>`s in this case.

### HTTP Requests
All http requests are made using Axios.
In `main.js`, you can see:
```
import axios from 'axios'
const instance = window.axios.create({
  baseURL: '/api/',
  timeout: 1000,
  headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}
})

Vue.prototype.$post = instance.post
Vue.prototype.$get = instance.get
Vue.prototype.$put = instance.put
```
This allows the usage of Axios like this: `this.$get(); this.$post()`, etc through out the project in any components. 

&ensp;

---

&ensp;
## Components

**AvLeftSidebar.vue**
Left sidebar of The Admin UI.

**AvHosLeftSidebar.vue**
Left sidebar of The Hospital Team UI.

**AvCallLeftSidebar.vue**
Left sidebar of The Call Centre Team UI.

**AvNavbar.vue**
The navigation bar at the top of the page in all pages.

**AvContent.vue**
A place holder for the `<router-view></router-view>`, in which Vue renders components according to the route.

**AvContentHeader.vue**
A header component that appears at the top of all content pages to show the location of the page.

&ensp;
## Pages
**Admin.vue**
The main page of the Admin user UI. 
- This page contains the input field for CSV uploading:
```
    onFileChange(e) {
		let data = new FormData()
        data.append('file', document.getElementById('csv').files[0])
        this.file = data
        this.csvFilename = data.get('file').name
	}
			
    parseCSV() {

		let reader = new FileReader()
		reader.onload = ()=> {
			this.$store.commit('setCSV', reader.result)
				// this.parsedResult = reader.result
						
			}
			let fileInput = document.getElementById("csv")
			reader.readAsText(fileInput.files[0])

			this.$router.push({name: 'AssignPatient'})
	}
```
The above 2 methods handle the parsing of the csv file and store the parsed raw data into the store then redirect to `AssignPatient.vue` Page
- This page also fetches data like the workload sunmmary and the `patiententrychart` from the server to be displayed.

**AssignPatient.vue**
This page can only be redirected from `Admin.vue` in the previous step. It takes the raw csv file from the store and parse it into JSON to be rendered in a `<mu-table>`.
In the data there is:
```
csvConfig: {
          colNumber: 4,
          hasHeader: true
        }
```
If the `hasHeader` bool is set to true, the first row of the csv file will be sliced.
The component also fetches the ward assignment table from the server, and do a search in the method `matchAssignedUser`:
```
matchAssignedUser(wardNo) {
        let user = {}

        this.$store.state.wardAssignment.forEach(assignment => {
          if (wardNo === assignment.WardNo) {
            console.log(assignment.UserName)
            user = assignment
        })
        return user
      }
```
This founds the default assigned user and is bound to a `<mu-select-field>` using `v-model`.
After adjustments are made, it uses an HTTP request to send out the bulk patient entries array.

**HospitalTasks.vue**
The main page of the Hospital Team UI.
&ensp;
There are 3 tabs in this page, in each page there is a `<mu-table>` that shows the patients assigned for today, recruited patients history and rejected patients history respectively. The recruited patients history and rejected patients history are fetched using a single API `'assignedpatientshistory/values?username='` and filtered into `recruit_history()` and `reject_history()` in as computed properties.
&ensp;
There are 3 dialog(pop up) Muse UI components controlled by `recruitDialogOpen`, `rejectDialogOpen`, and `reasonDialog` respectively.
&ensp;
There are several filters to parse the status, date of the data fetched from the server. The date is parsed using moment.js library.
The final post and put requests are sent out with these 2 methods: `confirmRecruit()` and `confirmReject()`, which can only be triggered from the confirm button in recruit dialog and reject dialog.
&ensp;
This page can be further optimized by splitting into smaller components for easier maintenance and development.
&ensp;
**CallTasks.vue**
The main page of the Call Centre Team UI.

`value` holds the value for filtering/sorting of the results, which are bound to the `<mu-radio>` components using `v-model`
There are 2 `<mu-table>` present in the page. The full table is displayed when `value` is empty, the search result table is displayed otherwise.

`allTasks` holds all the raw call tasks fetched from server:
```
this.$get('claimedcalls/values?username=' + this.$store.state.user.Email).then(response=>{this.allTasks = response.data})
```

&ensp;
The watcher watches changes happened to `value` and change `searchResult` data according to the user's choice.
It also watches for changes happened to `allTasks` since when a call is completed from the table rendered from `searchResult`, although it gets deleted from `allTasks`, but it does not trigger immediate re-rendering of the `searchResult` table.
&ensp;
Escalation and completion are done in these two methods by sending out API requests to the server: `openElevate()`, `confirmComplete()`
&ensp;
**CallClaim.vue**
This page is responsible for the claiming of new calls for call centre team user.
It roughly follows the same structure of `CallTasks.vue`.
&ensp;
**CallHistory.vue**
This page is responsible for the viewing all call history that was completed by the call centre team user.
It roughly follows the same structure of `CallTasks.vue`.

&ensp;
**Settings.vue**
This page is responsible for holding the registration link for Admin user,
as well as update and creation of ward assignments.
&ensp;
**StatsSummary.vue**
This page is responsible for the generation of statistics summaries for the Admin user.
&ensp;
**UploadProtocol.vue**
This page is responsible for the upload of protocols for the Admin user.
&ensp;
**Protocols.vue**
This page actually uses `jQuery` to display a step form made during the prototype phase of this project. Due to time limit I did not transform it into a Vue component, so it is a bit clunky in size.
Please optimize this component in the future.
&ensp;
--------


