/*! This file is auto-generated */
wp.customHtmlWidgets=function(a){"use strict";var s={idBases:["custom_html"],codeEditorSettings:{},l10n:{errorNotice:{singular:"",plural:""}}};return s.CustomHtmlWidgetControl=Backbone.View.extend({events:{},initialize:function(e){var n=this;if(!e.el)throw new Error("Missing options.el");if(!e.syncContainer)throw new Error("Missing options.syncContainer");Backbone.View.prototype.initialize.call(n,e),n.syncContainer=e.syncContainer,n.widgetIdBase=n.syncContainer.parent().find(".id_base").val(),n.widgetNumber=n.syncContainer.parent().find(".widget_number").val(),n.customizeSettingId="widget_"+n.widgetIdBase+"["+String(n.widgetNumber)+"]",n.$el.addClass("custom-html-widget-fields"),n.$el.html(wp.template("widget-custom-html-control-fields")({codeEditorDisabled:s.codeEditorSettings.disabled})),n.errorNoticeContainer=n.$el.find(".code-editor-error-container"),n.currentErrorAnnotations=[],n.saveButton=n.syncContainer.add(n.syncContainer.parent().find(".widget-control-actions")).find(".widget-control-save, #savewidget"),n.saveButton.addClass("custom-html-widget-save-button"),n.fields={title:n.$el.find(".title"),content:n.$el.find(".content")},_.each(n.fields,function(t,i){t.on("input change",function(){var e=n.syncContainer.find(".sync-input."+i);e.val()!==t.val()&&(e.val(t.val()),e.trigger("change"))}),t.val(n.syncContainer.find(".sync-input."+i).val())})},updateFields:function(){var e,t=this;t.fields.title.is(document.activeElement)||(e=t.syncContainer.find(".sync-input.title"),t.fields.title.val(e.val())),t.contentUpdateBypassed=t.fields.content.is(document.activeElement)||t.editor&&t.editor.codemirror.state.focused||0!==t.currentErrorAnnotations.length,t.contentUpdateBypassed||(e=t.syncContainer.find(".sync-input.content"),t.fields.content.val(e.val()))},updateErrorNotice:function(e){var t,i=this,n="";1===e.length?n=s.l10n.errorNotice.singular.replace("%d","1"):1<e.length&&(n=s.l10n.errorNotice.plural.replace("%d",String(e.length))),i.fields.content[0].setCustomValidity&&i.fields.content[0].setCustomValidity(n),wp.customize&&wp.customize.has(i.customizeSettingId)?((t=wp.customize(i.customizeSettingId)).notifications.remove("htmlhint_error"),0!==e.length&&t.notifications.add("htmlhint_error",new wp.customize.Notification("htmlhint_error",{message:n,type:"error"}))):0!==e.length?((e=a('<div class="inline notice notice-error notice-alt"></div>')).append(a("<p></p>",{text:n})),i.errorNoticeContainer.empty(),i.errorNoticeContainer.append(e),i.errorNoticeContainer.slideDown("fast"),wp.a11y.speak(n)):i.errorNoticeContainer.slideUp("fast")},initializeEditor:function(){var e,t=this;s.codeEditorSettings.disabled||(e=_.extend({},s.codeEditorSettings,{onTabPrevious:function(){t.fields.title.focus()},onTabNext:function(){t.syncContainer.add(t.syncContainer.parent().find(".widget-position, .widget-control-actions")).find(":tabbable").first().focus()},onChangeLintingErrors:function(e){t.currentErrorAnnotations=e},onUpdateErrorNotice:function(e){t.saveButton.toggleClass("validation-blocked disabled",0<e.length),t.updateErrorNotice(e)}}),t.editor=wp.codeEditor.initialize(t.fields.content,e),a(t.editor.codemirror.display.lineDiv).attr({role:"textbox","aria-multiline":"true","aria-labelledby":t.fields.content[0].id+"-label","aria-describedby":"editor-keyboard-trap-help-1 editor-keyboard-trap-help-2 editor-keyboard-trap-help-3 editor-keyboard-trap-help-4"}),a("#"+t.fields.content[0].id+"-label").on("click",function(){t.editor.codemirror.focus()}),t.fields.content.on("change",function(){this.value!==t.editor.codemirror.getValue()&&t.editor.codemirror.setValue(this.value)}),t.editor.codemirror.on("change",function(){var e=t.editor.codemirror.getValue();e!==t.fields.content.val()&&t.fields.content.val(e).trigger("change")}),t.editor.codemirror.on("blur",function(){t.contentUpdateBypassed&&t.syncContainer.find(".sync-input.content").trigger("change")}),wp.customize&&t.editor.codemirror.on("keydown",function(e,t){27===t.keyCode&&t.stopPropagation()}))}}),s.widgetControls={},s.handleWidgetAdded=function(e,t){var i,n,o,d=t.find("> .widget-inside > .form, > .widget-inside > form"),r=d.find("> .id_base").val();-1!==s.idBases.indexOf(r)&&(n=d.find(".widget-id").val(),s.widgetControls[n]||(r=a("<div></div>"),(d=t.find(".widget-content:first")).before(r),i=new s.CustomHtmlWidgetControl({el:r,syncContainer:d}),s.widgetControls[n]=i,(o=function(){(wp.customize?t.parent().hasClass("expanded"):t.hasClass("open"))?i.initializeEditor():setTimeout(o,50)})()))},s.setupAccessibleMode=function(){var e,t=a(".editwidget > form");0!==t.length&&(e=t.find(".id_base").val(),-1!==s.idBases.indexOf(e)&&(e=a("<div></div>"),(t=t.find("> .widget-inside")).before(e),new s.CustomHtmlWidgetControl({el:e,syncContainer:t}).initializeEditor()))},s.handleWidgetUpdated=function(e,t){var i=t.find("> .widget-inside > .form, > .widget-inside > form"),t=i.find("> .id_base").val();-1!==s.idBases.indexOf(t)&&(i=i.find("> .widget-id").val(),(i=s.widgetControls[i])&&i.updateFields())},s.init=function(e){var t=a(document);_.extend(s.codeEditorSettings,e),t.on("widget-added",s.handleWidgetAdded),t.on("widget-synced widget-updated",s.handleWidgetUpdated),a(function(){"widgets"===window.pagenow&&(a(".widgets-holder-wrap:not(#available-widgets)").find("div.widget").one("click.toggle-widget-expanded",function(){var e=a(this);s.handleWidgetAdded(new jQuery.Event("widget-added"),e)}),"complete"===document.readyState?s.setupAccessibleMode():a(window).on("load",function(){s.setupAccessibleMode()}))})},s}(jQuery);