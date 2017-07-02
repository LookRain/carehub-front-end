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
                <mu-tr v-for="patient in parsed" :key="patient.nric">
                  <mu-td>{{ patient.nric }}</mu-td>
                  <mu-td>{{ patient.name }}</mu-td>
                  <mu-td>{{ patient.wardNo }}</mu-td>
                  <mu-td>{{ patient.nric }}</mu-td>
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
        csvConfig: {
          colNumber: 6,
          hasHeader: true
        }
      }
    },
    methods: {

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
    }
  }
</script>

<style lang="css" scoped>

</style>
