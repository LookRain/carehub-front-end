<template>
  <div>
    <br>
    
    {{parsed}}
    <div class="row">
      <section class="col-lg-12 col-xs-12 connectedSortable">
        <div class="box box-success">
          <div class="box-header">
            <i class="fa fa-map-marker"></i>
            <h3 class="box-title">
              Assign Patients
            </h3>
          </div>
          <div class="box-body">
         
            <mu-table :showCheckbox="false">
              <mu-thead>
                <mu-tr>
                  <mu-th>Patient NRIC</mu-th>
                  <mu-th>Patient Name</mu-th>
                  <mu-th>Patient Ward</mu-th>
                  <mu-th>Staff Assigned</mu-th>
                </mu-tr>
              </mu-thead>
              <mu-tbody>
                <mu-tr v-for="(patient, index) in parsed" :key="patient.nric">
                  <mu-td>{{ patient.nric }}</mu-td>
                  <mu-td>{{ patient.name }}</mu-td>
                  <mu-td>{{ patient.wardNo }}</mu-td>
                  <mu-td><div v-on:patient.nric="listenNewUser">default: {{ patient.userAssigned }}</div>
                  <!-- <button @click="sendNewUser(patient.nric)">aaa</button> -->

                  <select v-model="valueArray[index]">
                  <!-- <option selected="selected">{{patient.userAssigned}}</option> -->
                  <option v-for="user in hosUsers" :value="user.Email" @click.preventDefault="consolelog('123')">{{user.DisplayName}}</option>
                  </select>

                  <!-- {{ patient.userAssigned }} -->
                  </mu-td>
                  <mu-td>
                    
                  </mu-td>
                </mu-tr>                
              </mu-tbody>
            </mu-table> 
            <mu-raised-button label="find" @click="matchAssignedUser(1)"></mu-raised-button>
          </div>
          <!-- /.box-body-->
        </div>
      </section>      
    </div>
  </div>
</template>

<script>
  import AvContentHeader from '../components/AvContentHeader.vue'

  export default {
    components: { AvContentHeader },
    name: 'AssignPatient',

    data () {
      return {
        hosUsers: [],
        value:'0',
        valueArray: [
        {id: 1, data: 'a'},
        {id: 2, data: 'b'},
        {id: 3, data: 'c'},
        {id: 4, data: 'd'},
        {id: 5, data: 'e'},
        ],
        csvConfig: {
          colNumber: 6,
          hasHeader: true
        }
      }
    },
    computed: {
      raw() {
        return this.$store.state.rawCSV
      },
      parsed() {
        let trimedCSV = this.raw.trim()
        let lineSplitCSV = trimedCSV.split('\r\n')
        let result = []
        lineSplitCSV.forEach(line => {
          let commaSeperatedString = line.split(',')

          let patient = {}
          patient.name = commaSeperatedString[0]
          patient.nric = commaSeperatedString[1]
          patient.meanTest = commaSeperatedString[2]
          patient.wardNo = commaSeperatedString[3]
          patient.region = commaSeperatedString[4]
          patient.status = commaSeperatedString[5]
          patient.userAssigned = this.matchAssignedUser(parseInt(patient.wardNo))
          patient.newAssigned = ''
          result.push(patient)
        })
        if (this.csvConfig.hasHeader) {
          return result.slice(1)
        } else {
          return result
        }
      }
    },
    methods: {
      sendNewUser(msg) {
        console.log(msg)
        this.$emit(msg)
      },
      handleChange (value) {
        this.value = value
      },
      matchAssignedUser(wardNo) {
        let username = 'init'
        this.$store.state.wardAssignment.forEach(assignment => {
          if (wardNo === assignment.WardNo) {
            console.log(assignment.UserName)
            username = assignment.UserName
          }
        })
        return username
      }
    },
    mounted() {
      this.$get('hospitalteamusers').then(response => {
        this.hosUsers = response.data
      })
    }
  }
</script>

<style lang="css" scoped>

</style>
