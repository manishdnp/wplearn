/*! This file is auto-generated */
void 0===window.wp&&(window.wp={}),void 0===window.wp.codeEditor&&(window.wp.codeEditor={}),function(u,d){"use strict";function s(r,s){var a=[],d=[];function c(){s.onUpdateErrorNotice&&!_.isEqual(a,d)&&(s.onUpdateErrorNotice(a,r),d=a)}function i(){var i,t=r.getOption("lint");return!!t&&(!0===t?t={}:_.isObject(t)&&(t=u.extend({},t)),t.options||(t.options={}),"javascript"===s.codemirror.mode&&s.jshint&&u.extend(t.options,s.jshint),"css"===s.codemirror.mode&&s.csslint&&u.extend(t.options,s.csslint),"htmlmixed"===s.codemirror.mode&&s.htmlhint&&(t.options.rules=u.extend({},s.htmlhint),s.jshint&&(t.options.rules.jshint=s.jshint),s.csslint&&(t.options.rules.csslint=s.csslint)),t.onUpdateLinting=(i=t.onUpdateLinting,function(t,e,n){var o=_.filter(t,function(t){return"error"===t.severity});i&&i.apply(t,e,n),_.isEqual(o,a)||(a=o,s.onChangeLintingErrors&&s.onChangeLintingErrors(o,t,e,n),(!r.state.focused||0===a.length||0<d.length)&&c())}),t)}r.setOption("lint",i()),r.on("optionChange",function(t,e){var n,o="CodeMirror-lint-markers";"lint"===e&&(n=r.getOption("gutters")||[],!0===(e=r.getOption("lint"))?(_.contains(n,o)||r.setOption("gutters",[o].concat(n)),r.setOption("lint",i())):e||r.setOption("gutters",_.without(n,o)),r.getOption("lint")?r.performLint():(a=[],c()))}),r.on("blur",c),r.on("startCompletion",function(){r.off("blur",c)}),r.on("endCompletion",function(){r.on("blur",c),_.delay(function(){r.state.focused||c()},500)}),u(document.body).on("mousedown",function(t){!r.state.focused||u.contains(r.display.wrapper,t.target)||u(t.target).hasClass("CodeMirror-hint")||c()})}d.codeEditor.defaultSettings={codemirror:{},csslint:{},htmlhint:{},jshint:{},onTabNext:function(){},onTabPrevious:function(){},onChangeLintingErrors:function(){},onUpdateErrorNotice:function(){}},d.codeEditor.initialize=function(t,e){var a,n,o,i,r=u("string"==typeof t?"#"+t:t),t=u.extend({},d.codeEditor.defaultSettings,e);return t.codemirror=u.extend({},t.codemirror),s(a=d.CodeMirror.fromTextArea(r[0],t.codemirror),t),t={settings:t,codemirror:a},a.showHint&&a.on("keyup",function(t,e){var n,o,i,r,s=/^[a-zA-Z]$/.test(e.key);a.state.completionActive&&s||"string"!==(r=a.getTokenAt(a.getCursor())).type&&"comment"!==r.type&&(i=d.CodeMirror.innerMode(a.getMode(),r.state).mode.name,o=a.doc.getLine(a.doc.getCursor().line).substr(0,a.doc.getCursor().ch),"html"===i||"xml"===i?n="<"===e.key||"/"===e.key&&"tag"===r.type||s&&"tag"===r.type||s&&"attribute"===r.type||"="===r.string&&r.state.htmlState&&r.state.htmlState.tagName:"css"===i?n=s||":"===e.key||" "===e.key&&/:\s+$/.test(o):"javascript"===i?n=s||"."===e.key:"clike"===i&&"php"===a.options.mode&&(n="keyword"===r.type||"variable"===r.type),n&&a.showHint({completeSingle:!1}))}),o=e,i=u((n=a).getTextArea()),n.on("blur",function(){i.data("next-tab-blurs",!1)}),n.on("keydown",function(t,e){27!==e.keyCode?9===e.keyCode&&i.data("next-tab-blurs")&&(e.shiftKey?o.onTabPrevious(n,e):o.onTabNext(n,e),i.data("next-tab-blurs",!1),e.preventDefault()):i.data("next-tab-blurs",!0)}),t}}(window.jQuery,window.wp);