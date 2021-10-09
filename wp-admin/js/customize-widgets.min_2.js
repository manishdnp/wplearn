/*! This file is auto-generated */
!function(u,h){var p,f;function c(e){var t={number:null,id_base:null},i=e.match(/^(.+)-(\d+)$/);return i?(t.id_base=i[1],t.number=parseInt(i[2],10)):t.id_base=e,t}u&&u.customize&&((p=u.customize).Widgets=p.Widgets||{},p.Widgets.savedWidgetIds={},p.Widgets.data=_wpCustomizeWidgetsSettings||{},f=p.Widgets.data.l10n,p.Widgets.WidgetModel=Backbone.Model.extend({id:null,temp_id:null,classname:null,control_tpl:null,description:null,is_disabled:null,is_multi:null,multi_number:null,name:null,id_base:null,transport:null,params:[],width:null,height:null,search_matched:!0}),p.Widgets.WidgetCollection=Backbone.Collection.extend({model:p.Widgets.WidgetModel,doSearch:function(e){this.terms!==e&&(this.terms=e,0<this.terms.length&&this.search(this.terms),""===this.terms&&this.each(function(e){e.set("search_matched",!0)}))},search:function(e){var t,i;e=(e=e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")).replace(/ /g,")(?=.*"),t=new RegExp("^(?=.*"+e+").+","i"),this.each(function(e){i=[e.get("name"),e.get("description")].join(" "),e.set("search_matched",t.test(i))})}}),p.Widgets.availableWidgets=new p.Widgets.WidgetCollection(p.Widgets.data.availableWidgets),p.Widgets.SidebarModel=Backbone.Model.extend({after_title:null,after_widget:null,before_title:null,before_widget:null,class:null,description:null,id:null,name:null,is_rendered:!1}),p.Widgets.SidebarCollection=Backbone.Collection.extend({model:p.Widgets.SidebarModel}),p.Widgets.registeredSidebars=new p.Widgets.SidebarCollection(p.Widgets.data.registeredSidebars),p.Widgets.AvailableWidgetsPanelView=u.Backbone.View.extend({el:"#available-widgets",events:{"input #widgets-search":"search","focus .widget-tpl":"focus","click .widget-tpl":"_submit","keypress .widget-tpl":"_submit",keydown:"keyboardAccessible"},selected:null,currentSidebarControl:null,$search:null,$clearResults:null,searchMatchesCount:null,initialize:function(){var t=this;this.$search=h("#widgets-search"),this.$clearResults=this.$el.find(".clear-results"),_.bindAll(this,"close"),this.listenTo(this.collection,"change",this.updateList),this.updateList(),this.searchMatchesCount=this.collection.length,h("#customize-controls, #available-widgets .customize-section-title").on("click keydown",function(e){e=h(e.target).is(".add-new-widget, .add-new-widget *");h("body").hasClass("adding-widget")&&!e&&t.close()}),this.$clearResults.on("click",function(){t.$search.val("").trigger("focus").trigger("input")}),p.previewer.bind("url",this.close)},search:_.debounce(function(e){var t;this.collection.doSearch(e.target.value),this.updateSearchMatchesCount(),this.announceSearchMatches(),this.selected&&!this.selected.is(":visible")&&(this.selected.removeClass("selected"),this.selected=null),this.selected&&!e.target.value&&(this.selected.removeClass("selected"),this.selected=null),!this.selected&&e.target.value&&(t=this.$el.find("> .widget-tpl:visible:first")).length&&this.select(t),""!==e.target.value?this.$clearResults.addClass("is-visible"):""===e.target.value&&this.$clearResults.removeClass("is-visible"),this.searchMatchesCount?this.$el.removeClass("no-widgets-found"):this.$el.addClass("no-widgets-found")},500),updateSearchMatchesCount:function(){this.searchMatchesCount=this.collection.where({search_matched:!0}).length},announceSearchMatches:function(){var e=f.widgetsFound.replace("%d",this.searchMatchesCount);this.searchMatchesCount||(e=f.noWidgetsFound),u.a11y.speak(e)},updateList:function(){this.collection.each(function(e){var t=h("#widget-tpl-"+e.id);t.toggle(e.get("search_matched")&&!e.get("is_disabled")),e.get("is_disabled")&&t.is(this.selected)&&(this.selected=null)})},select:function(e){this.selected=h(e),this.selected.siblings(".widget-tpl").removeClass("selected"),this.selected.addClass("selected")},focus:function(e){this.select(h(e.currentTarget))},_submit:function(e){"keypress"===e.type&&13!==e.which&&32!==e.which||this.submit(h(e.currentTarget))},submit:function(e){(e=e||this.selected)&&this.currentSidebarControl&&(this.select(e),e=h(this.selected).data("widget-id"),(e=this.collection.findWhere({id:e}))&&((e=this.currentSidebarControl.addWidget(e.get("id_base")))&&e.focus(),this.close()))},open:function(e){this.currentSidebarControl=e,_(this.currentSidebarControl.getWidgetFormControls()).each(function(e){e.params.is_wide&&e.collapseForm()}),p.section.has("publish_settings")&&p.section("publish_settings").collapse(),h("body").addClass("adding-widget"),this.$el.find(".selected").removeClass("selected"),this.collection.doSearch(""),p.settings.browser.mobile||this.$search.trigger("focus")},close:function(e){(e=e||{}).returnFocus&&this.currentSidebarControl&&this.currentSidebarControl.container.find(".add-new-widget").focus(),this.currentSidebarControl=null,this.selected=null,h("body").removeClass("adding-widget"),this.$search.val("").trigger("input")},keyboardAccessible:function(e){var t=13===e.which,i=27===e.which,n=40===e.which,s=38===e.which,d=9===e.which,a=e.shiftKey,o=null,r=this.$el.find("> .widget-tpl:visible:first"),l=this.$el.find("> .widget-tpl:visible:last"),c=h(e.target).is(this.$search),g=h(e.target).is(".widget-tpl:visible:last");if(n||s)return n?c?o=r:this.selected&&0!==this.selected.nextAll(".widget-tpl:visible").length&&(o=this.selected.nextAll(".widget-tpl:visible:first")):s&&(c?o=l:this.selected&&0!==this.selected.prevAll(".widget-tpl:visible").length&&(o=this.selected.prevAll(".widget-tpl:visible:first"))),this.select(o),void(o||this.$search).trigger("focus");t&&!this.$search.val()||(t?this.submit():i&&this.close({returnFocus:!0}),this.currentSidebarControl&&d&&(a&&c||!a&&g)&&(this.currentSidebarControl.container.find(".add-new-widget").focus(),e.preventDefault()))}}),p.Widgets.formSyncHandlers={rss:function(e,t,i){var n=t.find(".widget-error:first"),i=h("<div>"+i+"</div>").find(".widget-error:first");n.length&&i.length?n.replaceWith(i):n.length?n.remove():i.length&&t.find(".widget-content:first").prepend(i)}},p.Widgets.WidgetControl=p.Control.extend({defaultExpandedArguments:{duration:"fast",completeCallback:h.noop},initialize:function(e,t){var i=this;i.widgetControlEmbedded=!1,i.widgetContentEmbedded=!1,i.expanded=new p.Value(!1),i.expandedArgumentsQueue=[],i.expanded.bind(function(e){var t=i.expandedArgumentsQueue.shift(),t=h.extend({},i.defaultExpandedArguments,t);i.onChangeExpanded(e,t)}),i.altNotice=!0,p.Control.prototype.initialize.call(i,e,t)},ready:function(){var n=this;n.section()?p.section(n.section(),function(t){var i=function(e){e&&(n.embedWidgetControl(),t.expanded.unbind(i))};t.expanded()?i(!0):t.expanded.bind(i)}):n.embedWidgetControl()},embedWidgetControl:function(){var e,t=this;t.widgetControlEmbedded||(t.widgetControlEmbedded=!0,e=h(t.params.widget_control),t.container.append(e),t._setupModel(),t._setupWideWidget(),t._setupControlToggle(),t._setupWidgetTitle(),t._setupReorderUI(),t._setupHighlightEffects(),t._setupUpdateUI(),t._setupRemoveUI())},embedWidgetContent:function(){var e,t=this;t.embedWidgetControl(),t.widgetContentEmbedded||(t.widgetContentEmbedded=!0,t.notifications.container=t.getNotificationsContainerElement(),t.notifications.render(),e=h(t.params.widget_content),t.container.find(".widget-content:first").append(e),h(document).trigger("widget-added",[t.container.find(".widget:first")]))},_setupModel:function(){var i=this,e=function(){p.Widgets.savedWidgetIds[i.params.widget_id]=!0};p.bind("ready",e),p.bind("saved",e),this._updateCount=0,this.isWidgetUpdating=!1,this.liveUpdateMode=!0,this.setting.bind(function(e,t){_(t).isEqual(e)||i.isWidgetUpdating||i.updateWidget({instance:e})})},_setupWideWidget:function(){var n,s,e,t,i,d=this;!this.params.is_wide||h(window).width()<=640||(n=this.container.find(".widget-inside"),s=n.find("> .form"),e=h(".wp-full-overlay-sidebar-content:first"),this.container.addClass("wide-widget-control"),this.container.find(".form:first").css({"max-width":this.params.width,"min-height":this.params.height}),i=function(){var e=d.container.offset().top,t=h(window).height(),i=s.outerHeight();n.css("max-height",t),i=Math.max(0,Math.min(Math.max(e,0),t-i)),n.css("top",i)},t=h("#customize-theme-controls"),this.container.on("expand",function(){i(),e.on("scroll",i),h(window).on("resize",i),t.on("expanded collapsed",i)}),this.container.on("collapsed",function(){e.off("scroll",i),h(window).off("resize",i),t.off("expanded collapsed",i)}),p.each(function(e){0===e.id.indexOf("sidebars_widgets[")&&e.bind(function(){d.container.hasClass("expanded")&&i()})}))},_setupControlToggle:function(){var t=this;this.container.find(".widget-top").on("click",function(e){e.preventDefault(),t.getSidebarWidgetsControl().isReordering||t.expanded(!t.expanded())}),this.container.find(".widget-control-close").on("click",function(){t.collapse(),t.container.find(".widget-top .widget-action:first").focus()})},_setupWidgetTitle:function(){var i=this,e=function(){var e=i.setting().title,t=i.container.find(".in-widget-title");e?t.text(": "+e):t.text("")};this.setting.bind(e),e()},_setupReorderUI:function(){var t,e,d=this,s=function(e){e.siblings(".selected").removeClass("selected"),e.addClass("selected");e=e.data("id")===d.params.sidebar_id;d.container.find(".move-widget-btn").prop("disabled",e)};this.container.find(".widget-title-action").after(h(p.Widgets.data.tpl.widgetReorderNav)),e=_.template(p.Widgets.data.tpl.moveWidgetArea),t=h(e({sidebars:_(p.Widgets.registeredSidebars.toArray()).pluck("attributes")})),this.container.find(".widget-top").after(t),(e=function(){var e=t.find("li"),i=0,n=e.filter(function(){return h(this).data("id")===d.params.sidebar_id});e.each(function(){var e=h(this),t=e.data("id"),t=p.Widgets.registeredSidebars.get(t).get("is_rendered");e.toggle(t),t&&(i+=1),e.hasClass("selected")&&!t&&s(n)}),1<i?d.container.find(".move-widget").show():d.container.find(".move-widget").hide()})(),p.Widgets.registeredSidebars.on("change:is_rendered",e),this.container.find(".widget-reorder-nav").find(".move-widget, .move-widget-down, .move-widget-up").each(function(){h(this).prepend(d.container.find(".widget-title").text()+": ")}).on("click keypress",function(e){var t,i;"keypress"===e.type&&13!==e.which&&32!==e.which||(h(this).trigger("focus"),h(this).is(".move-widget")?d.toggleWidgetMoveArea():(t=h(this).is(".move-widget-down"),i=h(this).is(".move-widget-up"),e=d.getWidgetSidebarPosition(),i&&0===e||t&&e===d.getSidebarWidgetsControl().setting().length-1||(i?(d.moveUp(),u.a11y.speak(f.widgetMovedUp)):(d.moveDown(),u.a11y.speak(f.widgetMovedDown)),h(this).trigger("focus"))))}),this.container.find(".widget-area-select").on("click keypress","li",function(e){"keypress"===e.type&&13!==e.which&&32!==e.which||(e.preventDefault(),s(h(this)))}),this.container.find(".move-widget-btn").click(function(){d.getSidebarWidgetsControl().toggleReordering(!1);var e=d.params.sidebar_id,t=d.container.find(".widget-area-select li.selected").data("id"),i=p("sidebars_widgets["+e+"]"),n=p("sidebars_widgets["+t+"]"),s=Array.prototype.slice.call(i()),e=Array.prototype.slice.call(n()),t=d.getWidgetSidebarPosition();s.splice(t,1),e.push(d.params.widget_id),i(s),n(e),d.focus()})},_setupHighlightEffects:function(){var e=this;this.container.on("mouseenter click",function(){e.setting.previewer.send("highlight-widget",e.params.widget_id)}),this.setting.bind(function(){e.setting.previewer.send("highlight-widget",e.params.widget_id)})},_setupUpdateUI:function(){var t,i,n=this,s=this.container.find(".widget:first"),e=s.find(".widget-content:first"),d=this.container.find(".widget-control-save");d.val(f.saveBtnLabel),d.attr("title",f.saveBtnTooltip),d.removeClass("button-primary"),d.on("click",function(e){e.preventDefault(),n.updateWidget({disable_form:!0})}),t=_.debounce(function(){n.updateWidget()},250),e.on("keydown","input",function(e){13===e.which&&(e.preventDefault(),n.updateWidget({ignoreActiveElement:!0}))}),e.on("change input propertychange",":input",function(e){n.liveUpdateMode&&("change"===e.type||this.checkValidity&&this.checkValidity())&&t()}),this.setting.previewer.channel.bind("synced",function(){n.container.removeClass("previewer-loading")}),p.previewer.bind("widget-updated",function(e){e===n.params.widget_id&&n.container.removeClass("previewer-loading")}),(i=p.Widgets.formSyncHandlers[this.params.widget_id_base])&&h(document).on("widget-synced",function(e,t){s.is(t)&&i.apply(document,arguments)})},onChangeActive:function(e,t){this.container.toggleClass("widget-rendered",e),t.completeCallback&&t.completeCallback()},_setupRemoveUI:function(){var e,s=this,t=this.container.find(".widget-control-remove");t.on("click",function(){var n=s.container.next().is(".customize-control-widget_form")?s.container.next().find(".widget-action:first"):s.container.prev().is(".customize-control-widget_form")?s.container.prev().find(".widget-action:first"):s.container.next(".customize-control-sidebar_widgets").find(".add-new-widget:first");s.container.slideUp(function(){var e,t,i=p.Widgets.getSidebarWidgetControlContainingWidget(s.params.widget_id);i&&(e=i.setting().slice(),-1!==(t=_.indexOf(e,s.params.widget_id))&&(e.splice(t,1),i.setting(e),n.focus()))})}),e=function(){t.text(f.removeBtnLabel),t.attr("title",f.removeBtnTooltip)},this.params.is_new?p.bind("saved",e):e()},_getInputs:function(e){return h(e).find(":input[name]")},_getInputsSignature:function(e){return _(e).map(function(e){e=h(e),e=e.is(":checkbox, :radio")?[e.attr("id"),e.attr("name"),e.prop("value")]:[e.attr("id"),e.attr("name")];return e.join(",")}).join(";")},_getInputState:function(e){return(e=h(e)).is(":radio, :checkbox")?e.prop("checked"):e.is("select[multiple]")?e.find("option:selected").map(function(){return h(this).val()}).get():e.val()},_setInputState:function(e,t){(e=h(e)).is(":radio, :checkbox")?e.prop("checked",t):e.is("select[multiple]")?(t=Array.isArray(t)?_.map(t,function(e){return String(e)}):[],e.find("option").each(function(){h(this).prop("selected",-1!==_.indexOf(t,String(this.value)))})):e.val(t)},getSidebarWidgetsControl:function(){var e="sidebars_widgets["+this.params.sidebar_id+"]",e=p.control(e);if(e)return e},updateWidget:function(s){var e,d,a,o,r,l,t,i,c,g=this;g.embedWidgetContent(),e=(s=h.extend({instance:null,complete:null,ignoreActiveElement:!1},s)).instance,d=s.complete,this._updateCount+=1,r=this._updateCount,a=this.container.find(".widget:first"),(o=a.find(".widget-content:first")).find(".widget-error").remove(),this.container.addClass("widget-form-loading"),this.container.addClass("previewer-loading"),(t=p.state("processing"))(t()+1),this.liveUpdateMode||this.container.addClass("widget-form-disabled"),(i={action:"update-widget",wp_customize:"on"}).nonce=p.settings.nonce["update-widget"],i.customize_theme=p.settings.theme.stylesheet,i.customized=u.customize.previewer.query().customized,i=h.param(i),(l=this._getInputs(o)).each(function(){h(this).data("state"+r,g._getInputState(this))}),i+=e?"&"+h.param({sanitized_widget_setting:JSON.stringify(e)}):"&"+l.serialize(),i+="&"+o.find("~ :input").serialize(),this._previousUpdateRequest&&this._previousUpdateRequest.abort(),i=h.post(u.ajax.settings.url,i),(this._previousUpdateRequest=i).done(function(e){var n,t,i=!1;if("0"===e)return p.previewer.preview.iframe.hide(),void p.previewer.login().done(function(){g.updateWidget(s),p.previewer.preview.iframe.show()});"-1"!==e?e.success?(t=h("<div>"+e.data.form+"</div>"),n=g._getInputs(t),(t=g._getInputsSignature(l)===g._getInputsSignature(n))&&!g.liveUpdateMode&&(g.liveUpdateMode=!0,g.container.removeClass("widget-form-disabled"),g.container.find('input[name="savewidget"]').hide()),t&&g.liveUpdateMode?(l.each(function(e){var t=h(this),i=h(n[e]),e=t.data("state"+r),i=g._getInputState(i);t.data("sanitized",i),_.isEqual(e,i)||!s.ignoreActiveElement&&t.is(document.activeElement)||g._setInputState(t,i)}),h(document).trigger("widget-synced",[a,e.data.form])):g.liveUpdateMode?(g.liveUpdateMode=!1,g.container.find('input[name="savewidget"]').show(),i=!0):(o.html(e.data.form),g.container.removeClass("widget-form-disabled"),h(document).trigger("widget-updated",[a])),(c=!i&&!_(g.setting()).isEqual(e.data.instance))?(g.isWidgetUpdating=!0,g.setting(e.data.instance),g.isWidgetUpdating=!1):g.container.removeClass("previewer-loading"),d&&d.call(g,null,{noChange:!c,ajaxFinished:!0})):(i=f.error,e.data&&e.data.message&&(i=e.data.message),d?d.call(g,i):o.prepend('<p class="widget-error"><strong>'+i+"</strong></p>")):p.previewer.cheatin()}),i.fail(function(e,t){d&&d.call(g,t)}),i.always(function(){g.container.removeClass("widget-form-loading"),l.each(function(){h(this).removeData("state"+r)}),t(t()-1)})},expandControlSection:function(){p.Control.prototype.expand.call(this)},_toggleExpanded:p.Section.prototype._toggleExpanded,expand:p.Section.prototype.expand,expandForm:function(){this.expand()},collapse:p.Section.prototype.collapse,collapseForm:function(){this.collapse()},toggleForm:function(e){void 0===e&&(e=!this.expanded()),this.expanded(e)},onChangeExpanded:function(e,t){var i,n,s,d,a,o,r=this;r.embedWidgetControl(),e&&r.embedWidgetContent(),t.unchanged?e&&p.Control.prototype.expand.call(r,{completeCallback:t.completeCallback}):(i=this.container.find("div.widget:first"),n=i.find(".widget-inside:first"),o=this.container.find(".widget-top button.widget-action"),a=function(){p.control.each(function(e){r.params.type===e.params.type&&r!==e&&e.collapse()}),s=function(){r.container.removeClass("expanding"),r.container.addClass("expanded"),i.addClass("open"),o.attr("aria-expanded","true"),r.container.trigger("expanded")},t.completeCallback&&(d=s,s=function(){d(),t.completeCallback()}),r.params.is_wide?n.fadeIn(t.duration,s):n.slideDown(t.duration,s),r.container.trigger("expand"),r.container.addClass("expanding")},e?p.section.has(r.section())?p.section(r.section()).expand({completeCallback:a}):a():(s=function(){r.container.removeClass("collapsing"),r.container.removeClass("expanded"),i.removeClass("open"),o.attr("aria-expanded","false"),r.container.trigger("collapsed")},t.completeCallback&&(d=s,s=function(){d(),t.completeCallback()}),r.container.trigger("collapse"),r.container.addClass("collapsing"),r.params.is_wide?n.fadeOut(t.duration,s):n.slideUp(t.duration,function(){i.css({width:"",margin:""}),s()})))},getWidgetSidebarPosition:function(){var e=this.getSidebarWidgetsControl().setting(),e=_.indexOf(e,this.params.widget_id);if(-1!==e)return e},moveUp:function(){this._moveWidgetByOne(-1)},moveDown:function(){this._moveWidgetByOne(1)},_moveWidgetByOne:function(e){var t=this.getWidgetSidebarPosition(),i=this.getSidebarWidgetsControl().setting,n=Array.prototype.slice.call(i()),s=n[t+e];n[t+e]=this.params.widget_id,n[t]=s,i(n)},toggleWidgetMoveArea:function(e){var t=this,i=this.container.find(".move-widget-area");(e=void 0===e?!i.hasClass("active"):e)&&(i.find(".selected").removeClass("selected"),i.find("li").filter(function(){return h(this).data("id")===t.params.sidebar_id}).addClass("selected"),this.container.find(".move-widget-btn").prop("disabled",!0)),i.toggleClass("active",e)},highlightSectionAndControl:function(){var e=this.container.is(":hidden")?this.container.closest(".control-section"):this.container;h(".highlighted").removeClass("highlighted"),e.addClass("highlighted"),setTimeout(function(){e.removeClass("highlighted")},500)}}),p.Widgets.WidgetsPanel=p.Panel.extend({ready:function(){var d=this;p.Panel.prototype.ready.call(d),d.deferred.embedded.done(function(){var t,i,n,e=d.container.find(".panel-meta"),s=h("<div></div>",{class:"no-widget-areas-rendered-notice"});e.append(s),i=function(){return _.filter(d.sections(),function(e){return"sidebar"===e.params.type&&e.active()}).length},n=function(){var e=i();return 0===e||e!==p.Widgets.data.registeredSidebars.length},(t=function(){var e,t=i();s.empty(),t!==(e=p.Widgets.data.registeredSidebars.length)&&((t=0!==t?f.someAreasShown[e-t]:f.noAreasShown)&&s.append(h("<p></p>",{text:t})),s.append(h("<p></p>",{text:f.navigatePreview})))})(),s.toggle(n()),p.previewer.deferred.active.done(function(){s.toggle(n())}),p.bind("pane-contents-reflowed",function(){var e="resolved"===p.previewer.deferred.active.state()?"fast":0;t(),n()?s.slideDown(e):s.slideUp(e)})})},isContextuallyActive:function(){return this.active()}}),p.Widgets.SidebarSection=p.Section.extend({ready:function(){var t;p.Section.prototype.ready.call(this),t=p.Widgets.registeredSidebars.get(this.params.sidebarId),this.active.bind(function(e){t.set("is_rendered",e)}),t.set("is_rendered",this.active())}}),p.Widgets.SidebarControl=p.Control.extend({ready:function(){this.$controlSection=this.container.closest(".control-section"),this.$sectionContent=this.container.closest(".accordion-section-content"),this._setupModel(),this._setupSortable(),this._setupAddition(),this._applyCardinalOrderClassNames()},_setupModel:function(){var d=this;this.setting.bind(function(i,e){var t,n=_(e).difference(i);i=_(i).filter(function(e){e=c(e);return!!p.Widgets.availableWidgets.findWhere({id_base:e.id_base})}),(e=_(i).map(function(e){return p.Widgets.getWidgetFormControlForWidget(e)||d.addWidget(e)})).sort(function(e,t){return _.indexOf(i,e.params.widget_id)-_.indexOf(i,t.params.widget_id)}),t=0,_(e).each(function(e){e.priority(t),e.section(d.section()),t+=1}),d.priority(t),d._applyCardinalOrderClassNames(),_(e).each(function(e){e.params.sidebar_id=d.params.sidebar_id}),_(n).each(function(s){setTimeout(function(){var e,t,i,n=!1;p.each(function(e){e.id!==d.setting.id&&0===e.id.indexOf("sidebars_widgets[")&&"sidebars_widgets[wp_inactive_widgets]"!==e.id&&(e=e(),-1!==_.indexOf(e,s)&&(n=!0))}),n||(t=(e=p.Widgets.getWidgetFormControlForWidget(s))&&h.contains(document,e.container[0])&&!h.contains(d.$sectionContent[0],e.container[0]),e&&!t&&(p.control.remove(e.id),e.container.remove()),p.Widgets.savedWidgetIds[s]&&((i=p.value("sidebars_widgets[wp_inactive_widgets]")().slice()).push(s),p.value("sidebars_widgets[wp_inactive_widgets]")(_(i).unique())),i=c(s).id_base,(i=p.Widgets.availableWidgets.findWhere({id_base:i}))&&!i.get("is_multi")&&i.set("is_disabled",!1))})})})},_setupSortable:function(){var t=this;this.isReordering=!1,this.$sectionContent.sortable({items:"> .customize-control-widget_form",handle:".widget-top",axis:"y",tolerance:"pointer",connectWith:".accordion-section-content:has(.customize-control-sidebar_widgets)",update:function(){var e=t.$sectionContent.sortable("toArray"),e=h.map(e,function(e){return h("#"+e).find(":input[name=widget-id]").val()});t.setting(e)}}),this.$controlSection.find(".accordion-section-title").droppable({accept:".customize-control-widget_form",over:function(){p.section(t.section.get()).expand({allowMultiple:!0,completeCallback:function(){p.section.each(function(e){e.container.find(".customize-control-sidebar_widgets").length&&e.container.find(".accordion-section-content:first").sortable("refreshPositions")})}})}}),this.container.find(".reorder-toggle").on("click",function(){t.toggleReordering(!t.isReordering)})},_setupAddition:function(){var t=this;this.container.find(".add-new-widget").on("click",function(){var e=h(this);t.$sectionContent.hasClass("reordering")||(h("body").hasClass("adding-widget")?(e.attr("aria-expanded","false"),p.Widgets.availableWidgetsPanel.close()):(e.attr("aria-expanded","true"),p.Widgets.availableWidgetsPanel.open(t)))})},_applyCardinalOrderClassNames:function(){var t=[];_.each(this.setting(),function(e){e=p.Widgets.getWidgetFormControlForWidget(e);e&&t.push(e)}),0===t.length||1===p.Widgets.registeredSidebars.length&&t.length<=1?this.container.find(".reorder-toggle").hide():(this.container.find(".reorder-toggle").show(),h(t).each(function(){h(this.container).removeClass("first-widget").removeClass("last-widget").find(".move-widget-down, .move-widget-up").prop("tabIndex",0)}),_.first(t).container.addClass("first-widget").find(".move-widget-up").prop("tabIndex",-1),_.last(t).container.addClass("last-widget").find(".move-widget-down").prop("tabIndex",-1))},toggleReordering:function(e){var t=this.$sectionContent.find(".add-new-widget"),i=this.container.find(".reorder-toggle"),n=this.$sectionContent.find(".widget-title");(e=Boolean(e))!==this.$sectionContent.hasClass("reordering")&&(this.isReordering=e,this.$sectionContent.toggleClass("reordering",e),e?(_(this.getWidgetFormControls()).each(function(e){e.collapse()}),t.attr({tabindex:"-1","aria-hidden":"true"}),i.attr("aria-label",f.reorderLabelOff),u.a11y.speak(f.reorderModeOn),n.attr("aria-hidden","true")):(t.removeAttr("tabindex aria-hidden"),i.attr("aria-label",f.reorderLabelOn),u.a11y.speak(f.reorderModeOff),n.attr("aria-hidden","false")))},getWidgetFormControls:function(){var t=[];return _(this.setting()).each(function(e){e=function(e){var t=c(e);e="widget_"+t.id_base,t.number&&(e+="["+t.number+"]");return e}(e),e=p.control(e);e&&t.push(e)}),t},addWidget:function(n){var e,t,i,s=this,d="widget_form",a=c(n),o=a.number,r=a.id_base,l=p.Widgets.availableWidgets.findWhere({id_base:r});return!!l&&(!(o&&!l.get("is_multi"))&&(l.get("is_multi")&&!o&&(l.set("multi_number",l.get("multi_number")+1),o=l.get("multi_number")),a=h("#widget-tpl-"+l.get("id")).html().trim(),l.get("is_multi")?a=a.replace(/<[^<>]+>/g,function(e){return e.replace(/__i__|%i%/g,o)}):l.set("is_disabled",!0),r=h(a),(a=h("<li/>").addClass("customize-control").addClass("customize-control-"+d).append(r)).find("> .widget-icon").remove(),l.get("is_multi")&&(a.find('input[name="widget_number"]').val(o),a.find('input[name="multi_number"]').val(o)),n=a.find('[name="widget-id"]').val(),a.hide(),r="widget_"+l.get("id_base"),l.get("is_multi")&&(r+="["+o+"]"),a.attr("id","customize-control-"+r.replace(/\]/g,"").replace(/\[/g,"-")),(e=p.has(r))||(i={transport:p.Widgets.data.selectiveRefreshableWidgets[l.get("id_base")]?"postMessage":"refresh",previewer:this.setting.previewer},p.create(r,r,"",i).set({})),i=p.controlConstructor[d],t=new i(r,{settings:{default:r},content:a,sidebar_id:s.params.sidebar_id,widget_id:n,widget_id_base:l.get("id_base"),type:d,is_new:!e,width:l.get("width"),height:l.get("height"),is_wide:l.get("is_wide")}),p.control.add(t),p.each(function(e){var t,i;e.id!==s.setting.id&&0===e.id.indexOf("sidebars_widgets[")&&(t=e().slice(),-1!==(i=_.indexOf(t,n))&&(t.splice(i),e(t)))}),l=this.setting().slice(),-1===_.indexOf(l,n)&&(l.push(n),this.setting(l)),a.slideDown(function(){e&&t.updateWidget({instance:t.setting()})}),t))}}),h.extend(p.panelConstructor,{widgets:p.Widgets.WidgetsPanel}),h.extend(p.sectionConstructor,{sidebar:p.Widgets.SidebarSection}),h.extend(p.controlConstructor,{widget_form:p.Widgets.WidgetControl,sidebar_widgets:p.Widgets.SidebarControl}),p.bind("ready",function(){p.Widgets.availableWidgetsPanel=new p.Widgets.AvailableWidgetsPanelView({collection:p.Widgets.availableWidgets}),p.previewer.bind("highlight-widget-control",p.Widgets.highlightWidgetFormControl),p.previewer.bind("focus-widget-control",p.Widgets.focusWidgetFormControl)}),p.Widgets.highlightWidgetFormControl=function(e){e=p.Widgets.getWidgetFormControlForWidget(e);e&&e.highlightSectionAndControl()},p.Widgets.focusWidgetFormControl=function(e){e=p.Widgets.getWidgetFormControlForWidget(e);e&&e.focus()},p.Widgets.getSidebarWidgetControlContainingWidget=function(t){var i=null;return p.control.each(function(e){"sidebar_widgets"===e.params.type&&-1!==_.indexOf(e.setting(),t)&&(i=e)}),i},p.Widgets.getWidgetFormControlForWidget=function(t){var i=null;return p.control.each(function(e){"widget_form"===e.params.type&&e.params.widget_id===t&&(i=e)}),i},h(document).on("widget-added",function(e,t){var s,d,i,n=c(t.find("> .widget-inside > .form > .widget-id").val());"nav_menu"===n.id_base&&(s=p.control("widget_nav_menu["+String(n.number)+"]"))&&(d=t.find('select[name*="nav_menu"]'),i=t.find(".edit-selected-nav-menu > button"),0!==d.length&&0!==i.length&&(d.on("change",function(){p.section.has("nav_menu["+d.val()+"]")?i.parent().show():i.parent().hide()}),i.on("click",function(){var i,n,e=p.section("nav_menu["+d.val()+"]");e&&(n=s,(i=e).focus(),i.expanded.bind(function e(t){t||(i.expanded.unbind(e),n.focus())}))})))}))}(window.wp,jQuery);