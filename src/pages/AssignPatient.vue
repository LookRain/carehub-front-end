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
                  <mu-td>{{ patient.NRIC }}</mu-td>
                  <mu-td>{{ patient.PName }}</mu-td>
                  <mu-td>{{ patient.WardNo }}</mu-td>
                  <mu-td>
                 
                  <div v-on:patient.nric="listenNewUser">default: {{ patient.UserName }}</div>
                  <select v-model="patient.UserName">
                  <option v-for="user in hosUsers" :value="user.Email">{{user.DisplayName}}</option>
                  </select>

                  <!-- {{ patient.userAssigned }} -->
                  </mu-td>
                  <mu-td>
                    
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
        hosUsers: [],
        value:'0',
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
          patient.PName = commaSeperatedString[0]
          patient.NRIC = commaSeperatedString[1]
          patient.MeanTest = commaSeperatedString[2]
          patient.WardNo = commaSeperatedString[3]
          patient.Region = commaSeperatedString[4]
          patient.PStatus = commaSeperatedString[5]
          patient.UserName = this.matchAssignedUser(parseInt(patient.WardNo))

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
      },
      postAssignment() {
        this.$post('BulkPatients', this.parsed).then(response=> {
          alert('Added successfully!' + response.data)
        }).catch(err=> {
          alert(err.response.data.Message)
        })
      }
    },
    created() {
      this.$get('hospitalteamusers').then(response => {
        this.hosUsers = response.data
      }).catch(err=>{console.log(err)})
    }
  }
</script>

<style lang="css" scoped>

</style>
