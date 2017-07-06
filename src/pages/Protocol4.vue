<template>
<div class="container-fluid">
  <h3><strong>Dizziness</strong></h3>
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
        <p>Description of dizziness (vertigo or non-vertigo), what was patient doing prior to the dizziness, associated symptoms, any medications taken, duration of the condition, symptoms relieved by medication</p>
        <h4 class="attention-color"><b>Other Protocols to consider:</b></h4>
        <p>Breathing Problems, Chest Pain, Congestive Heart Failure, Heart Rate Problems</p>
        <p><b class="important-color">Alert: </b>Dizziness can be described as light headedness, feeling faint, fuzzy or a sensation of motion or the environment such as spinning or whirling</p>
      </div>
      <div data-step="2">
        <div class="col-xs-6">
          <h4><b>Assessment</b></h4><hr>
          <h4><b class="attention-color">Is Chest pain present? Heart Rate Problems?</b></h4>
        </div>
        <div class="col-xs-6">
          <h4><b>Action Taken</b></h4><hr>
            <div class="action-content">
              <h4>IF <b class="important-color">YES</b>,</h4>
              <router-link to="1">Go to Chest Pain Protocol</router-link></br>
              <router-link to="7">Go to Heart Rate Problem Protocol</router-link>
            </div>
        </div>
      </div>
      <div data-step="3">
        <div class="col-xs-6">
          <h4><b>Assessment</b></h4><hr>
          <h4><b class="attention-color">In addition to the dizziness, are any of the following present?</b></h4>
          <fieldset class="checkboxgroup">
            <ul>
              <li><label><input type="checkbox">Sudden onset of weakness or numbness in the face, arms or legs on one side of body</label></li>
              <li><label><input type="checkbox">Difficulty speaking or walking, confusion, facial droop</label></li>
              <li><label><input type="checkbox">Loss of consciousness</label></li>
              <li><label><input type="checkbox">Heart rate < 50 or >130 beats per minute or irregular heart rhythm</label></li>
              <li><label><input type="checkbox">Fever, pale skin and weakness</label></li>
              <li><label><input type="checkbox">Persistent severe headache or change in vision</label></li>
              <li><label><input type="checkbox">History of blood clotting problems</label></li>
              <li><label><input type="checkbox">Heart palpitations with no associated symptoms</label></li>
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
            </div>
        </div>
      </div>
      <div data-step="4" class="container-fluid row">
        <div class="col-xs-6">
          <h4><b>Assessment</b></h4><hr>
          <h4><b class="attention-color">Are any of the complaints present?</b></h4>
          <fieldset class="checkboxgroup">
            <ul>
              <li><label><input type="checkbox">History of recent trauma or injury to the head < 48 hours</label></li>
              <li><label><input type="checkbox">Recent history of severe vomiting, diarrhea, or bleeding and dizziness when changing of position from sitting to standing</label></li>
              <li><label><input type="checkbox">History of diabetes (check the blood sugar if patient has a blood glucose machine or if a caregiver can help)</label></li>
              <li><label><input type="checkbox">Dizziness occurs after taking a new medication</label></li>
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
                <li>Initiate by bringing forward the SOC appointment (arrange for force booking if requested by on-call physician)</li>
                <li>Engage service support as required or as per physician requested (Home care or Home Visit)</li>
                <li>Consult on-call physician for advice only when  all interventions are attempted (refer to CareHub On-Call Physician List)</li>
              </ul>
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
      <div data-step="5" class="container-fluid row">
        <div class="col-xs-6">
          <h4><b>Assessment</b></h4><hr>
          <h4><b class="attention-color">Are any of the complaints present?</b></h4>
          <fieldset class="checkboxgroup">
            <ul>
              <li><label><input type="checkbox">Ear pain, ringing in the ears, or loss of hearing</label></li>
              <li><label><input type="checkbox">Fever and unresponsive to fever reducing measures</label></li>
              <li><label><input type="checkbox">Persistent light-headedness > 3 days</label></li>
              <li><label><input type="checkbox">Increase in stress</label></li>
              <li><label><input type="checkbox">Dizziness occurs during or after consuming alcohol</label></li>
            </ul>
          </fieldset>
        </div>
        <div class="col-xs-6">
          <h4><b>Action Taken</b></h4><hr>
            <div class="action-content">
              <h4>IF <b class="important-color">YES</b>,</h4>
              <ul>
                <li>Consult nearest GP or polyclinic immediately</li>
                <li>Check if medications are taken (if not taken yet)</li>
              </ul>
            </div>
        </div>
      </div>
      <div data-step="6">
        <h4><b class="attention-color">Home Care Instructions</b></h4><hr>
        <ul>
          <li>Consult with a General Practitioner or polyclinic when pain is relieve during a
          dizzy spell, reach out and touch something, then lie down flat or sit up. Take
          deep breaths for a few minutes.</li>
          <li>If dizziness is accompanied by anxiety, rapid breathing and numbess in the face or fingers, breathe slowly and control your breathing as much as possible. Breathe in through your nose and blow out from your mouth slowly for 5 to 10 minutes</li>
          <li>Increase fluid intake unless your physician has prescribed a fluid restrictive regime</li>
          <li>Sit up or stand up slowly. Avoid sudden changes in posture</li>
          <li>Limit intake of caffeinated beverages and alcohol</li>
          <li>If dehydrated, drink plenty of water or sports drink</li>
        </ul>
      </div>
    </div>
  </div></div><!--/.guide-panel-->
</div><!--/.fluid-container-->
</template>
<script>
export default {
  name: 'Protocol4',
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
<style lang="css" scoped>
</style>