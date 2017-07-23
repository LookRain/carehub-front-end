<template>
	<div class="row">
		<section class="col-lg-12 col-xs-12 connectedSortable">
			<div class="box box-primary">
				<div class="box-header">


					<i class="fa fa-map-marker"></i>

					<h3 class="box-title">
						Upload Protocol
					</h3>
					<br>
					<hr>
					
		
						<p>Please upload pdf file</p>
							<div class="excel-upload">
								<!-- <mu-raised-button label="Upload Excel" default onclick="document.getElementById('protocol').click();"/> -->
								{{ proFileName }}
								<input type="file" id="protocol" name="file" @change="onFileChange"/>
							</div>
							<mu-raised-button label="Submit" primary @click="uploadPro"/>

							<!-- <form action="/api/uploading" method="post" enctype="multipart/form-data">
    <label for="somefile">File</label>
    <input name="somefile" type="file" />
    <input type="submit" value="Submit" />
</form> -->
					
					
				</div>
				<div class="box-body">

				</div>
			</div>
		</section>
	</div>
</template>
<script>
	export default {
		name: 'UploadProtocol',
		data () {
			return {
				file: '',
				proFileName: ''
			}
		},
		methods: {
			onFileChange (e) {
				let data = new FormData()
        data.append('file', document.getElementById('protocol').files[0])
        this.file = data
        this.proFileName = data.get('file').name
				// let files = e.target.files || e.dataTransfer.files;
	   //    if (!files.length)
	   //      return;
	   //    this.file = files[0]
	   //    console.log(this.file)
			},
			uploadPro() {
				this.$postFile('uploading', this.file).then(res => {
					alert('Upload Successful!')
					window.location.reload()
				}).catch(err => {
					alert('Something went wrong! ' + err.message)
					window.location.reload()
				})
			}
		}
	}
</script>
<style lang="css" scoped>
</style>