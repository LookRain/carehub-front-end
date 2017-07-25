<template>
  <div>
    <br>
    

    <div class="row">
    <section class="col-lg-4 col-xs-12 connectedSortable">
        <div class="box box-warning">
          <div class="box-header">

            <h3 class="box-title">
              Hospital Team Staff Workload
            </h3>
          </div>

          <div class="box-body">
            <mu-table :showCheckbox="showCheckbox">
              <mu-thead>
                <mu-tr>
                  <mu-th>Name</mu-th>
                  <!-- <mu-th>Email</mu-th> -->
                  <mu-th>Workload</mu-th>             
                </mu-tr>
              </mu-thead>
              <mu-tbody>
                <mu-tr v-for="user, index in hosWorkload" key="index">
                  <mu-td>{{ user.DisplayedName }}</mu-td>
                  <!-- <mu-td>{{ user.UserName }}</mu-td> -->
                  <mu-td>{{ user.Workload }}</mu-td>
                </mu-tr>
              </mu-tbody>
            </mu-table>
          </div>
        </div>
      </section>


      <section class="col-lg-8 col-xs-12 connectedSortable">
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
                  <!-- <mu-th>Patient NRIC</mu-th> -->
                  <mu-th>Case ID</mu-th>
                  <mu-th>Patient Ward</mu-th>
                  <mu-th>Remark</mu-th>
                  <mu-th>Staff Assigned</mu-th>
                  
                </mu-tr>
              </mu-thead>
              <mu-tbody>
                <mu-tr v-for="(patient, index) in parsed" :key="patient.CaseId">
                  <mu-td>{{ patient.CaseId }}</mu-td>
                  <!-- <mu-td>{{ patient.PName }}</mu-td> -->
                  <mu-td>{{ patient.WardNo }}</mu-td> 
                  <mu-td>{{ patient.CallRemark }}</mu-td>                 
                  <mu-td>
                  <mu-select-field v-model="patient.UserName" autoWidth fullWidth :labelFocusClass="['label-foucs']" :label="hint + patient.UserDisplayName" :maxHeight="500">
                    <mu-menu-item v-for="user, index in hosUsers" :key="index" :value="user.Email" :title="user.DisplayName"/>
                  </mu-select-field>
                  {{ matchWorkload(patient.UserName) }}
                </mu-td>
                
              </mu-tr>                
            </mu-tbody>
          </mu-table> 

          <mu-raised-button label="submit" @click="postAssignment"></mu-raised-button>
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
        // hosWorkload: [],
        hint: 'Default assigned user: ',
        showCheckbox: false,
        csvConfig: {
          colNumber: 4,
          hasHeader: true
        }
      }
    },
    computed: {
      hosWorkload() {
        return this.$store.state.hosWorkload
      },
      hosUsers() {
        return this.$store.state.allHosUsers
      },
      raw() {
        return this.$store.state.rawCSV
      },
      parsed() {

        let trimedCSV = this.raw.trim()
        let lineSplitCSV = trimedCSV.split('\r\n')
        let result = []
        lineSplitCSV.forEach(line => {
          let commaSeperatedString = line.split(',')
          if (!commaSeperatedString[0] || !commaSeperatedString[1] || !commaSeperatedString[2]) {
            return 
          }
          let patient = {}
          patient.CaseId = commaSeperatedString[0]
          // patient.NRIC = commaSeperatedString[1]
          patient.MeanTest = commaSeperatedString[1]
          patient.WardNo = commaSeperatedString[2]
          patient.CallRemark = commaSeperatedString[3]
          // patient.Region = commaSeperatedString[3]

          patient.PStatus = 0

          let matchedUser = this.matchAssignedUser(patient.WardNo)

          patient.UserName = matchedUser.UserName
          patient.UserDisplayName = matchedUser.DisplayedName
          // patient.UserDisplayName = matchedUser.

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
      matchWorkload(email) {
        let result = ''
        this.hosWorkload.forEach(w => {
          if (w.UserName === email) {
            result = w.Workload
          }
        })
        return result
      },
      matchAssignedUser(wardNo) {
        // type == 1 : return username/email
        // tyle == 2 : return display name
        let user = {}
        // console.log(123)
        this.$store.state.wardAssignment.forEach(assignment => {
          if (wardNo === assignment.WardNo) {
            console.log(assignment.UserName)
            user = assignment
          } else {
            // console.log(wardNo)
          }
        })
        return user
      },
      postAssignment() {
        this.$post('BulkPatients', this.parsed).then(response=> {
          alert('Added successfully!')
          this.$router.push({name: 'Admin'})
        }).catch(err => {
          alert(err.response.data.Message)
        })
      }
    },
    watch: {

    },
    created() {
      this.$get('hospitalteamworkload').then(response=> {
        this.hosWorkload = response.data
      })
    }
  }
</script>

<style lang="css" scoped>

</style>
