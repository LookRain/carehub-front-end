<template>
	<div>
		<div class="row">

			<div class="col-xs-2" id="protocol-list">
				<div class="row">
					<div class="container">
						<h3>Guided Protocols</h3>
						<br>
						<ul>
							<li><router-link to="/protocols/1">Chest Pain</router-link></li>
							<li><router-link to="/protocols/2">Congestive Heart Failure</router-link></li>
							<li><router-link to="/protocols/3">Breathing Problem</router-link></li>
							<li><router-link to="/protocols/4">Dizziness</router-link></li>
							<li><router-link to="/protocols/5">Escalation</router-link></li>
							<li><router-link to="/protocols/6">Heart Rate problem</router-link></li>
						</ul>
					</div>
				</div>

				<div class="row">
					<div class="container"><h3>Others</h3>
						<br>
						<ul>
							<li v-for="p in protocolsList">
							<a :href="p.FilePath" target="_blank">{{ p.Filename }}</a>
							</li>

						</ul></div>

					</div>
				</div>
				<div class="col-xs-10">
					<router-view></router-view>
				</div>
			</div>
		</div>
	</template>
	<script>
		export default {
			name: 'Protocols',
			data () {
				return {
					protocolsList: []
				}
			},
			created() {
				this.$get('protocols').then( res => {
					this.protocolsList = res.data
				})
			}
		}
	</script>

	<style lang="css">
	/*
 * jQuery / jqLite Wizard Plugin
 * version: 0.0.7
 * Author: Girolamo Tomaselli http://bygiro.com
 *
 * Copyright (c) 2013 G. Tomaselli
 * Licensed under the MIT license.
 */
 #protocol-list {
 	padding-top: 60px;

 }
 @font-face {
 	font-family: 'wizard-font';
 	font-weight: normal;
 	font-style: normal;
 	src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SDGQAAAC8AAAAYGNtYXD6RMuEAAABHAAAAGRnYXNwAAAAEAAAAYAAAAAIZ2x5Zh39Yw4AAAGIAAAArGhlYWQGSx/bAAACNAAAADZoaGVhB8MDxwAAAmwAAAAkaG10eA9/ACAAAAKQAAAAHGxvY2EAbgCcAAACrAAAABBtYXhwAAkACQAAArwAAAAgbmFtZZ+vDy0AAALcAAABtnBvc3QAAwAAAAAElAAAACAAAwLgAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADwWgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQASAAAAA4ACAACAAYAAQAg6jTqOPBa//3//wAAAAAAIOo06jjwWv/9//8AAf/jFdAVzQ+sAAMAAQAAAAAAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAA/+AD4AOgAAYAAAkBESERIRED4P4g/gACAAHAAeD+4P6A/uAAAAEAIP/gBAADoAAGAAATAREhESERIAHgAgD+AAHA/iABIAGAASAAAAABAAAAQAGAA0AAAwAAEwkBEQABgP6AA0D+gP6AAwAAAAEAAAABAAB0IT+bXw889QALBAAAAAAA0ZXtrwAAAADRle2vAAD/4AQAA6AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAP//BAAAAQAAAAAAAAAAAAAAAAAAAAcEAAAAAAAAAAAAAAACAAAABAAAAAQAACABfwAAAAAAAAAKABQAHgAyAEYAVgABAAAABwAHAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEACwAAAAEAAAAAAAIABwCEAAEAAAAAAAMACwBCAAEAAAAAAAQACwCZAAEAAAAAAAUACwAhAAEAAAAAAAYACwBjAAEAAAAAAAoAGgC6AAMAAQQJAAEAFgALAAMAAQQJAAIADgCLAAMAAQQJAAMAFgBNAAMAAQQJAAQAFgCkAAMAAQQJAAUAFgAsAAMAAQQJAAYAFgBuAAMAAQQJAAoANADUd2l6YXJkLWZvbnQAdwBpAHoAYQByAGQALQBmAG8AbgB0VmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2l6YXJkLWZvbnQAdwBpAHoAYQByAGQALQBmAG8AbgB0d2l6YXJkLWZvbnQAdwBpAHoAYQByAGQALQBmAG8AbgB0UmVndWxhcgBSAGUAZwB1AGwAYQByd2l6YXJkLWZvbnQAdwBpAHoAYQByAGQALQBmAG8AbgB0Rm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('truetype');
 }
 [class^="wiz-icon-"], [class*=" wiz-icon-"] {
 	font-family: 'wizard-font';
 	speak: none;
 	font-style: normal;
 	font-weight: normal;
 	font-variant: normal;
 	text-transform: none;
 	line-height: 1;
 	font-size: inherit;
 	-webkit-font-smoothing: antialiased;
 	-moz-osx-font-smoothing: grayscale;
 }
 .wiz-icon-chevron-right:before {
 	content: "\f05a";
 	font-size: 64px;
 	position: absolute;
 }
 .wiz-icon-arrow-right:before {
 	content: "\ea34";
 	margin-left: 4px;
 }
 .wiz-icon-arrow-left:before {
 	content: "\ea38";
 	margin-right: 4px;
 }
 .wizard {
 	border: 1px solid #d4d4d4;
 }
 .wizard .steps-index-container {
 	position: relative;
 	overflow: hidden;
 }
 .wizard .steps-content{
 	border-top: 1px solid #d4d4d4;
 }
 .wizard ul.steps {
 	padding: 0;
 	margin: 0;
 	width: 5000px;
 	position:relative;
 	top: 0;
 	left: 0;
 	overflow: hidden;
 }
 .wizard ul.steps > li{
 	height: 46px;
 	width: 100px;
 	line-height: 46px;
 	display: table-cell;
 	list-style: none outside none;
 	padding: 0;
 	margin: 0;
 	background: #ededed;
 	color: #b5b5b5;
 	position: relative;
 }
 .wizard ul.steps > li.active {
 	background-color: #F1F6FC;
 	color: #337ab7;
 }
 .wizard ul.steps > li.completed {
 	cursor: pointer;
 	background-color: #EFF9F0;
 	color: #5cb85c;
 }
 .wizard ul.steps > li > span{
 	display: table-cell;
 	vertical-align: middle;
 }
 .wizard ul.steps > li .step-index {
 	padding-left: 30px;
 	padding-right: 5px;
 }
 .wizard ul.steps > li .step-text {
 	padding-right: 5px;
 }
 .wizard ul.steps > li .step-index .label {
 	background-color: #b5b5b5;
 }
 .wizard ul.steps > li.active .step-index .label {
 	background-color: #337ab7;
 }
 .wizard ul.steps > li.completed .step-index .label {
 	background-color: #5cb85c;
 }
 .wizard ul.steps > li:first-child .step-index {
 	padding-left: 10px;
 }
 .wizard .top-actions {
 	z-index: 99;
 	position: absolute;
 	right: 0;
 	top: 0;
 	line-height: 46px;
 	height: 46px;
 	float: right;
 	vertical-align: middle;
 	background-color: #e5e5e5;
 	border-left: 1px solid #d4d4d4;
 	padding: 0 10px;
 	display: table;
 	box-shadow: -3px 0 2px -1px #888;
 	-webkit-box-shadow: -3px 0 2px -1px #888;
 	-moz-box-shadow: -3px 0 2px -1px #888;
 	-o-box-shadow: -3px 0 2px -1px #888;
 }
 .wizard .top-actions .btn-group {
 	display: table-cell;
 	vertical-align: middle;
 }
 .wizard .bottom-actions,
 .wizard .stable-panel {
 	width: 100%;
 	display: table;
 }
 .wizard .left-actions,
 .wizard .right-actions,
 .wizard .stable-actions {
 	display: table-cell;
 	width: 50%;
 }
 .wizard .left-actions{
 	text-align: left;
 }
 .wizard .right-actions,
 .wizard .stable-actions {
 	text-align: right;
 }
 .wizard .bottom-actions .btn-next,
 .wizard .bottom-actions .btn-prev,
 .wizard .finished-btn,
 .wizard .cancel-btn {
 	margin: 10px;
 }
 .wizard .steps-content .step-pane:not(.active){
 	display: none;
 }
 .wizard .steps-content .step-pane{
 	padding: 10px;
 }
 .wizard .btn-next,
 .wizard .btn-prev,
 .wizard .finished-btn,
 .wizard .cancel-btn {
 	white-space: nowrap;
 }
 .wizard .btn-next:not(.final-step) .finished-btn {
 	display: none;
 }
 .wizard .btn-next.final-step .next-text,
 .wizard .btn-next.final-step .wiz-icon-arrow-right {
 	display: none;
 }
 .wizard .wiz-icon-chevron-right.colorA::before {
 	right: -23px;
 	top: -9.5px;
 	z-index: 2;
 	color: #ededed;
 }
 .wizard .wiz-icon-chevron-right.colorB::before {
 	right: -24px;
 	top: -9.5px;
 	z-index: 1;
 	color: #b5b5b5;
 }
 .wizard li.active .wiz-icon-chevron-right.colorA::before {
 	color: #f1f6fc;
 }
 .wizard li.completed .wiz-icon-chevron-right.colorA::before {
 	color: #EFF9F0;
 }
 .protocol-menu {
 	padding-left: 40px;
 }
 .protocol-menu li {
 	font-size: 120%;
 	padding-top: 10px;
 }
 .important-color {
 	color: #FF0000;
 }
 .attention-color {
 	color: #3c8dbc;
 }
 .steps-content {
 	background: #ffffff;
 }
 .steps-content {
 	padding-left: 2%;
 	padding-right: 2%;
 	padding-top: 1%;
 	padding-bottom: 1%;
 }
 .checkboxgroup ul li {
 	list-style-type: none;
 }
 .checkboxgroup ul {
 	margin-left: 0;
 	list-style-position: outside;
 }
 .checkboxgroup ul input {
 	margin-right: 1em;
 	margin-left: -2em;
 	padding-top: 0;
 	margin-top: 0;
 }
 .nested-ul label {
 	font-weight: normal;
 }
 .summary-result {
 	padding-top: 20px;
 	padding-bottom: 20px;
 	padding-left: 5px;
 	padding-left: 5px;
 	margin-top: 20px;
 }
 .summary-btn-panel {
 	padding-right: 0;
 }
</style>