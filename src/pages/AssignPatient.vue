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
                 <mu-select-field v-model="patient.UserName" :labelFocusClass="['label-foucs']" :label="hint + patient.UserName">
                    <mu-menu-item v-for="user, index in hosUsers" :key="index" :value="user.Email" :title="user.Email"/>
                  </mu-select-field>
                  <!-- <mu-select-field v-model="game1" :labelFocusClass="['label-foucs']" label="选择你喜欢的游戏">
                    <mu-menu-item v-for="text,index in list" :key="index" :value="text.name" :title="text.name" />
                  </mu-select-field> -->

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
        // hosUsers: [],
        hint: 'Default assigned user: ',
        game1: '影之刃',
        list: [{name: '阴阳师'},{ name: '影之刃'},{ name: '天下HD'}, {name: '穿越火线'}],

        value: 1,
        csvConfig: {
          colNumber: 6,
          hasHeader: true
        }
      }
    },
    computed: {
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

          let patient = {}
          patient.PName = commaSeperatedString[0]
          patient.NRIC = commaSeperatedString[1]
          patient.MeanTest = commaSeperatedString[2]
          patient.WardNo = commaSeperatedString[3]
          patient.Region = commaSeperatedString[4]
          patient.Tier = commaSeperatedString[5]
          patient.PStatus = 0

          let matchedUser = this.matchAssignedUser(parseInt(patient.WardNo))
          patient.UserName = matchedUser.UserName
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
      handleChange (value) {
        this.value = value
      },
      matchAssignedUser(wardNo) {
        // type == 1 : return username/email
        // tyle == 2 : return display name
        let user = {}
        this.$store.state.wardAssignment.forEach(assignment => {
          if (wardNo === assignment.WardNo) {
            console.log(assignment.UserName)
            user = assignment
          }
        })
        return user
      },
      postAssignment() {
        this.$post('BulkPatients', this.parsed).then(response=> {
          alert('Added successfully!' + response.data)
        }).catch(err => {
          alert(err.response.data.Message)
        })
      }
    }
  }
</script>

<style lang="css" scoped>

</style>
