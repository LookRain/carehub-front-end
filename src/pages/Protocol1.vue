<template>
	<div>
		<div class="container-fluid">
  <h3><strong>Chest Pain</strong></h3>
  <div class="guide-panel"><div data-wizard-init>
    <ul class="steps">
      <li data-step="1">Notes</li>
      <li data-step="2">Step A</li>
      <li data-step="3">Step B</li>
      <li data-step="4">Step C</li>
      <li data-step="5">Step D</li>
      <li data-step="6">Home Care</li>
    </ul>
    <div class="steps-content">
      <div data-step="1">
        <h4 class="important-color"><b>Key Questions to take note:</b></h4>
        <p>Description of pain, what was patient doing prior to chest pain, ciated symptoms, any medications taken, duration of pain, relieved by medication, pain s</p>
        <h4 class="attention-color"><b>Other Protocols to consider:</b></h4>
        <p>Breathing Problems, Common Cold Symptoms, Congestion, Congestive Heart Failure, Cough, Dizziness, Heartburn, Heart Rate Problems, Indigestion, Nausea/Vomiting</p>
      </div>
      <div data-step="2" class="container-fluid row">
        <div class="col-xs-6">
          <h4><b>Assessment</b></h4><hr>
          <h4><b class="attention-color">Are any of the complaints present?</b></h4>
          <fieldset class="checkboxgroup">
            <ul>
              <li><label><input type="checkbox" id="ntul-parent">Continuous or intermittent pain tightness, pressure, or discomfort accompanied by the following:</label></li>
              <ul class="nested-ul">
                <li><label><input type="checkbox">shortness of breath</label></li>
                <li><label><input type="checkbox">dizziness or weakness</label></li>
                <li><label><input type="checkbox">diaphoresis</label></li>
                <li><label><input type="checkbox">nausea or vomiting</label></li>
                <li><label><input type="checkbox">pain radiated to jaw, neck, back, shoulder or arm</label></li>
                <li><label><input type="checkbox">fast heart rate</label></li>
              </ul>
              <li><label><input type="checkbox">Chest pain persists, unrelieved by rest, pain medication (eg, analgesia, antacid) or nitroglycerin every 5 minutes (number of doses taken, spray or sublingual)</label></li>
              <li><label><input type="checkbox">Anginal chest pain at rest (eg, pale, diaphoresis, SOB, near syncope)</label></li>
              <li><label><input type="checkbox">Pain not relieved by two nitroglycerin tablets</label></li>
              <li><label><input type="checkbox">Coughing up blood (moderate to large amount)</label></li>
              <li><label><input type="checkbox">Heart palpitations with dizziness or near syncope</label></li>
            </ul>
          </fieldset>
        </div>
        <div class="col-xs-6">
          <h4><b>Action Taken</b></h4><hr>
            <div class="action-content">
              <h4>IF <b class="important-color">YES</b>,</h4>
              <p>Instruct care giver or patient to <b class="important-color">ACTIVATE 995</b> Ambulance for help</p>
              <p>CareHub Team to activate 995 Ambulance on behalf if:</p>
              <ul>
                <li>Patient sounded in distress</li>
                <li>Drowsy</li>
                <li>Altered mental status</li>
              </ul>
              <p>Instruct patient to take one adult aspirin (if prescribed by doctor) or one sublingual GTN before ambulance arrives</p>
            </div>
        </div>
      </div>
      <div data-step="3" class="container-fluid row">
        <div class="col-xs-6">
          <h4><b>Assessment</b></h4><hr>
          <h4><b class="attention-color">Are any of the complaints present?</b></h4>
          <fieldset class="checkboxgroup">
            <ul>
              <li><label><input type="checkbox">Non anginal chest pain at rest</label></li>
              <li><label><input type="checkbox">Recent period of prolong sitting (such as travelling)</label></li>
              <li><label><input type="checkbox">Sudden onset of swollen ankle</label></li>
              <li><label><input type="checkbox">Pain, swelling, warmth or redness of leg</label></li>
              <li><label><input type="checkbox">Fever, cough, congestion and shortness of breath</label></li>
              <li><label><input type="checkbox">Trauma, child birth or surgery in past month</label></li>
              <li><label><input type="checkbox">History of blood clotting problems</label></li>
              <li><label><input type="checkbox">Heart palpitations with no associated symptoms</label></li>
            </ul>
          </fieldset>
        </div>
        <div class="col-xs-6">
          <h4><b>Action Taken</b></h4><hr>
            <div class="action-content">
              <h4>IF <b class="important-color">YES</b>,</h4>
              <ul>
                <li>Consult nearest GP immediately</li>
                <li>Check if medications are taken (if not taken yet)</li>
                <li>(take pain score of 1 to 10, 10 being severe and 1 being minor and 0 for no pain)</li>
                <li>If not better after medication and pain score still above 5</li>
                <li>Consider Escalation Protocol</li>
                <li>Consider early SOC appointment</li>
              </ul>
              <p>&#10033 Get earlier Cardiac Outpatient appointment or primary health care</p><br>
              <p>Instruct care giver or patient to <b class="important-color">ACTIVATE 995</b> Ambulance for help</p>
              <p>CareHub Team to activate 995 Ambulance on behalf if:</p>
              <ul>
                <li>Patient sounded in distress</li>
                <li>Drowsy</li>
                <li>Altered mental status</li>
              </ul>
            </div>
        </div>
      </div>
      <div data-step="4">
        <div class="col-xs-6">
          <h4><b>Assessment</b></h4><hr>
          <h4><b class="attention-color">Are any of the complaints present?</b></h4>
          <fieldset class="checkboxgroup">
            <ul>
              <li><label><input type="checkbox">Localised area with painful blisters or rash</label></li>
              <li><label><input type="checkbox">Recent injury and pain increases with movement</label></li>
              <li><label><input type="checkbox">Chest pain with exertion that is relieved with rest (duration, recurrence)</label></li>
            </ul>
          </fieldset>
        </div>
        <div class="col-xs-6">
          <h4><b>Action Taken</b></h4><hr>
            <div class="action-content">
              <h4>IF <b class="important-color">YES</b>,</h4>
              <ul>
                <li>Consult nearest GP immediately</li>
                <li>Check if medications are taken (if not taken yet)</li>
                <li>If chest pain relieved by GTN and pain score is less than 4,</li>
                <li>Call back patient the next day to check on patient</li>
              </ul>
            </div>
        </div>
      </div>
      <div data-step="5">
        <div class="col-xs-6">
          <h4><b>Assessment</b></h4><hr>
          <h4><b class="attention-color">Are any of the complaints present?</b></h4>
          <fieldset class="checkboxgroup">
            <ul>
              <li><label><input type="checkbox">Pain occurs with deep breathing</label></li>
              <li><label><input type="checkbox">Pain occurs when pressure is applied to the area</label></li>
              <li><label><input type="checkbox">Intermittent mild chest discomfort with productive coughing</label></li>
            </ul>
          </fieldset>
        </div>
        <div class="col-xs-6">
          <h4><b>Action Taken</b></h4><hr>
            <div class="action-content">
              <h4>IF <b class="important-color">YES</b>,</h4>
              <ul>
                <li>Consult nearest GP or polyclinic</li>
                <li>Check if medications are taken (if not taken yet)</li>
              </ul>
            </div>
        </div>
      </div>
      <div data-step="6">
        <h4><b class="attention-color">Home Care Instructions</b></h4><hr>
        <ul>
          <li>Consult with a General Practitioner or polyclinic when pain is relieved</li>
          <li>Avoid eating 2 to 3 hours before bedtime if heart burn or GERD</li>
          <li>Take your usual pain medication (aspirin, panadol, or NSAIDS). Avoid acetaminophen or panadol if liver disease is present.</li>
          <li>Take nitroglycerin as directed by Primary Doctor if pain is typical chest angina pain; if no relief after 3 to 5 minutes, take aspirin (if prescribed by doctor) and another nitroglycerin dose and have someone drive you to the Emergency Department or call 995 ambulance.</li>
        </ul>
      </div>
    </div>
  </div></div><!--/.guide-panel-->
</div>

		</div>
	</template>
	<script>
		export default {
		  data () {
		    return {
	
		    }
		  },
		  created() {
		  	/*
 * jQuery / jqLite Wizard Plugin
 * version: 0.0.7
 * Author: Girolamo Tomaselli http://bygiro.com
 *
 * Copyright (c) 2013 G. Tomaselli
 * Licensed under the MIT license.
 */
// compatibility for jQuery / jqLite
var bg = bg || false;
if(!bg){
    if(typeof jQuery != 'undefined'){
        bg = jQuery;
    } else {
        console.log("No jQuery");
    }
}
;(function ($, document, window){
    "use strict";
    var pluginName = "wizardByGiro",
    // the name of using in .data()
    dataPlugin = "plugin_" + pluginName,
    defaults = {
        currentStep: 0,
        checkStep: false,
        onCompleted: false,
        bottomButtons: true,
        topButtons: true,
        autoSubmit: false,
        keyboard: false,
        btnClass: 'btn',
        btnClassDefault: 'btn-default',
        btnClassCompleted: 'btn-success',
        text:{
            finished: 'Complete',
            next: 'Next',
            previous: 'Previous'
        }
    },
    attachEventsHandler = function(){
        var that = this,
        opts = this.options;
        that.$element.find('.btn-next, .btn-prev').on('click', function(e){
            if($(this).attr('disabled') || $(this).hasClass('disabled') || !$(this).is(':visible')) return;
            var type = $(this).hasClass('btn-next') ? 'next' : 'previous';
            e.stopPropagation();
            that[type].call(that,true,e);
        });
        that.$element.find('.steps > li').on('click', function(e){
            e.stopPropagation();
            var step = $(this).attr('data-step'),
            isCompleted = $(this).hasClass('completed');
            if(!isCompleted) return true;
            that.setStep.call(that,step,e);
        });
        $(document).on('keydown', function(e){
            if(!that.$element.is(':visible')) return;
            // arrow left
            if(e.ctrlKey && e.keyCode == 37){
                e.stopPropagation();
                e.preventDefault();
                that.previous.call(that,true,e);
            }
            // arrow right
            if(e.ctrlKey && e.keyCode == 39){
                e.stopPropagation();
                e.preventDefault();
                that.next.call(that,true,e);
            }
        });
    },
    checkStatus = function(){
        var that = this,
            currentWidth,
            stepsWidth = 0,
            stepPosition = false,
            steps = that.$element.find('.steps'),
            stepsItems = that.$element.find('.steps > li'),
            opts = that.options;
        if(!this.currentStep) this.currentStep = 1;
        stepsItems.removeClass('active');
        that.$element
            .find('.steps > li[data-step="'+ that.currentStep +'"]')
            .addClass('active');
        that.$element.find('.steps-content .step-pane').removeClass('active');
        var current = that.$element.find('.steps-content .step-pane[data-step="'+ that.currentStep +'"]');
            current.addClass('active');
        for(var i=0;i<stepsItems.length;i++){
            var stepLi = $(stepsItems[i]);
            if(that.currentStep > (i+1)){
                stepLi.addClass('completed');
            } else {
                stepLi.removeClass('completed');
            }
            currentWidth = stepLi.outerWidth();
            if(!stepPosition && stepLi.hasClass('active')){
                stepPosition = stepsWidth + (currentWidth / 2);
            }
            stepsWidth += currentWidth;
        }
        // set buttons based on current step
        //qiyun that.$element.find('.btn-next').removeClass('final-step '+ opts.btnClassCompleted).addClass(opts.btnClassDefault);
        that.$element.find('.btn-next').removeClass('disabled hidden').addClass(opts.btnClassDefault);
        that.$element.find('.btn-prev').removeClass('disabled hidden');
        that.$element.find('.finished-btn').addClass('final-step btn btn-success'); //qiyun
        that.$element.find('.cancel-btn').addClass('btn btn-default'); //qiyun
        if(that.currentStep == stepsItems.length){
            // we are in the last step
            //qiyun that.$element.find('.btn-next').removeClass(opts.btnClassDefault).addClass('final-step '+ opts.btnClassCompleted);
            that.$element.find('.btn-next').removeClass(opts.btnClassDefault).addClass('disabled hidden');
        } else if(that.currentStep == 1){
            that.$element.find('.btn-prev').addClass('disabled hidden');
        }
        // move steps view if needed
        var totalWidth = that.$element.width() - that.$element.find('.actions').outerWidth();
        if(stepsWidth < totalWidth) return;
        var offsetDiff = stepPosition - (totalWidth / 2);
        if(offsetDiff > 0){
            // move it forward
            steps.css('left',-offsetDiff);
        } else {
            // move it backward
            steps.css('left',0);
        }
    },
    moveStep = function(step, direction, event, checkStep){
        var that = this, canMove = true,
        steps = that.$element.find('.steps > li'),
        triggerEnd = false;
        checkStep = checkStep === false ? false : true;
        // check we can move
        if(checkStep && typeof that.options.checkStep == 'function'){
            canMove = that.options.checkStep(that,direction,event);
        }
        if(!canMove) return;
        if(step){
            that.currentStep = parseInt(step);
        } else {
            if(direction){
                that.currentStep++;
            } else {
                that.currentStep--;
            }
        }
        that.$element.triggerHandler('step_changed.wizardByGiro');
        if(that.currentStep < 0) that.currentStep = 0;
        if(that.currentStep > steps.length){
            that.currentStep = steps.length;
            triggerEnd = true;
        }
        checkStatus.call(that);
        if(triggerEnd){
            if(typeof that.options.onCompleted == 'function'){
                that.options.onCompleted(that);
            } else if(that.options.autoSubmit) {
                // search if wizard is inside a form and submit it.
                var form = that.$element.closest('form');
                if(form.length) form.submit();
            }
        }
    },
    methods = {
        init: function (element, options) {
            var that = this;
            this.$element = $(element);
            this.options = $.extend({}, defaults, options);
            var opts = this.options;
            this.$element.addClass('wizard');
            // add the buttons
            var stepsBar = this.$element.find('.steps'),
            topActions = this.$element.find('.top-actions'),
            bottomActions = this.$element.find('.bottom-actions'),
            // qiyun
            stableActions = this.$element.find('.stable-actions'),
            progressBar = this.$element.find('.progress-bar'),
            html = '';
            // wrap steps in a container with hidden overflow, if it doesn't have a container
            if(stepsBar.parent().hasClass('wizard')){
                // let's add a container
                stepsBar.wrap('<div class="steps-index-container"></div>');
            } else {
                stepsBar.parent().addClass('steps-index-container');
            }
            if(opts.topButtons && stepsBar.length && !topActions.length){
                html += '<div class="top-actions"><div class="btn-group">';
                html += '<span class="'+ opts.btnClass +' '+ opts.btnClassDefault +' btn-prev"><span class="previous-text">'+ opts.text.previous +'</span></span>';
                html += '<span class="'+ opts.btnClass +' '+ opts.btnClassDefault +' btn-next"><span class="next-text">'+ opts.text.next +'</span></span>';
                //qiyun <span class="finished-text">'+ opts.text.finished +'</span>
                html += '</div></div>';
                stepsBar.after(html);
            }
            html = '';
            if(opts.bottomButtons && !bottomActions.length){
                html += '<div class="bottom-actions">';
                html += '<div class="left-actions"><span class="'+ opts.btnClass +' '+ opts.btnClassDefault +' btn-prev"><span class="previous-text">'+ opts.text.previous +'</span></span></div>';
                html += '<div class="right-actions"><span class="'+ opts.btnClass +' '+ opts.btnClassDefault +' btn-next"><span class="next-text">'+ opts.text.next +'</span></span></div></div>';
                //<qiyun <span class="finished-text">'+ opts.text.finished +'</span>
                html += '<div class="stable-panel"><div class="stable-actions">';
                html += '<div><span class="finished-btn">' + opts.text.finished +'</span><a class="cancel-btn">Cancel</a></div></div></div>';
                //qiyun>
                that.$element.find('.steps-content').append(html);
            }
            // add arrows to btn
            this.$element.find('.btn-prev').prepend('<i class="wiz-icon-arrow-left"></i>');
            this.$element.find('.btn-next').append('<i class="wiz-icon-arrow-right"></i>');
            // get steps and prepare them
            var stepsLi = this.$element.find('.steps > li');
            for(var i=0;i<stepsLi.length;i++){
                var step = $(stepsLi[i]),
                target = step.attr('data-step'),
                content = '<span class="step-text">'+ step.html() +'</span>';
                step.empty().html('<span class="step-index"><span class="label" style="color: #000;>'+ (i+1) +'</span></span>'+ content + '<span class="wiz-icon-chevron-right colorA"></span><span class="wiz-icon-chevron-right colorB"></span>');
                that.$element.find('.steps-content [data-step="'+ target +'"]').addClass('step-pane');
                // detect currentStep
                if(step.hasClass('active') && !that.currentStep){
                    that.currentStep = i+1;
                }
            }
            this.$element.find('.steps > li:last-child').addClass('final');
            attachEventsHandler.call(this);
            var callbacks = ['checkStep','onCompleted'],cb;
            for(var i=0;i<callbacks.length;i++){
                cb = callbacks[i];
                if(typeof this.options[cb] == 'string' && typeof window[this.options[cb]] == 'function'){
                    this.options[cb] = window[this.options[cb]];
                }
            }
            checkStatus.call(this);
        },
        next: function(checkStep,event){
            moveStep.call(this,false,true,event,checkStep);
        },
        previous: function(checkStep,event){
            moveStep.call(this,false,false,event,checkStep);
        },
        setStep: function(step, checkStep, event){
            moveStep.call(this,step,null,event,checkStep);
        }
    };
    var main = function (method) {
        var thisPlugin = this.data(dataPlugin);
        if (thisPlugin) {
            if (typeof method === 'string' && thisPlugin[method]) {
                return thisPlugin[method].apply(thisPlugin, Array.prototype.slice.call(arguments, 1));
            }
            return console.log('Method ' + arg + ' does not exist on jQuery / jqLite' + pluginName);
        } else {
            if (!method || typeof method === 'object') {
                thisPlugin = $.extend({}, methods);
                thisPlugin.init(this, method);
                this.data(dataPlugin, thisPlugin);
                return this;
            }
            return console.log( pluginName +' is not instantiated. Please call $("selector").'+ pluginName +'({options})');
        }
    };
    // plugin integration
    if($.fn){
        $.fn[ pluginName ] = main;
    } else {
        $.prototype[ pluginName ] = main;
    }
    $(document).ready(function(){
        var mySelector = document.querySelector('[data-wizard-init]');
        $(mySelector)[ pluginName ]({});
    });
}(bg, document, window));
		  	jQuery(document).ready(function() {
        //color change for checked/unchecked box
        $('input:checkbox').each(function(){
          var $t = $(this);
          $t.on('change', function(){
            $t.is(':checked') ? $t.parent().css('color','red') : $t.parent().css('color','#636b6f');
          })
        });
        //check the parent checkbox if any sublist is checked
        $('.nested-ul input[type=checkbox]').each(function(){
          var $el = $(this);
          $el.on('change', function(){
            var len = $('.nested-ul input[type=checkbox]:checked').length;
            if(len) {
              $('#ntul-parent').prop('checked', true);
              $('#ntul-parent').parent().css('color', 'red');
            } else {
              $('#ntul-parent').prop('checked', false);
              $('#ntul-parent').parent().css('color', '#636b6f');
            }
          })
        });
        //generate quick summary by clicking complete button
        var quick_summary='';
        $('.finished-btn').on('click', function(){
          window.getSelection().removeAllRanges();
          quick_summary=''; //clear the string content
          $('input[type=checkbox]:checked').each(function() {
            var $t = $(this);
            quick_summary = quick_summary + '<li>' + $t.parent().text() + '</li>';
          });
          $('.container-fluid').empty().html('<div class="row1"><div id="content" class="col-xs-8 col-xs-offset-2 panel panel-default summary-result"><ul>' + quick_summary + '</ul></div></div>' + '<div class="row2"><div class="col-xs-8 col-xs-offset-2 summary-btn-panel"></div></div>');});
        //Copy to clickboard JH
        var clipboard = new Clipboard('.btn-success');
        clipboard.on('success', function(e) {
          console.log(e);
          window.getSelection().removeAllRanges();
        });
        clipboard.on('error', function(e) {
          console.log(e);
        });
        //attach href to redirect to protocolIndex page when clicking
        $('.cancel-btn').attr("href", "{{ url('/protocol')}}")
      });
		  }
		}
	</script>