tinymce.PluginManager.add("wpeditimage",function(g){var r,u,n,c,a,e=tinymce.each,l=tinymce.trim,t=tinymce.Env.iOS;function i(e){return!(!g.dom.getAttrib(e,"data-mce-placeholder")&&!g.dom.getAttrib(e,"data-mce-object"))}function o(e){e=g.$(e).parents("[contenteditable]");return e&&"false"===e.attr("contenteditable")}function d(e){return e.replace(/(?:<p>)?\[(?:wp_)?caption([^\]]+)\]([\s\S]+?)\[\/(?:wp_)?caption\](?:<\/p>)?/g,function(e,t,n){var a,i,o,r,c,d=t.match(/id=['"]([^'"]*)['"] ?/);return(c=(t=(i=(t=(a=(t=d?t.replace(d[0],""):t).match(/align=['"]([^'"]*)['"] ?/))?t.replace(a[0],""):t).match(/class=['"]([^'"]*)['"] ?/))?t.replace(i[0],""):t).match(/width=['"]([0-9]*)['"] ?/))&&(t=t.replace(c[0],"")),r=(r=(n=l(n)).match(/((?:<a [^>]+>)?<img [^>]+>(?:<\/a>)?)([\s\S]*)/i))&&r[2]?(o=l(r[2]),l(r[1])):(o=l(t).replace(/caption=['"]/,"").replace(/['"]$/,""),n),d=d&&d[1]?d[1].replace(/[<>&]+/g,""):"",a=a&&a[1]?a[1]:"alignnone",i=i&&i[1]?" "+i[1].replace(/[<>&]+/g,""):"",(c=(c=!c&&r?r.match(/width=['"]([0-9]*)['"]/):c)&&c[1]?c[1]:c)&&o?(c=parseInt(c,10),g.getParam("wpeditimage_html5_captions")||(c+=10),'<div class="mceTemp"><dl id="'+d+'" class="wp-caption '+a+i+'" style="width: '+c+'px"><dt class="wp-caption-dt">'+r+'</dt><dd class="wp-caption-dd">'+o+"</dd></dl></div>"):n})}function s(e){return e.replace(/(?:<div [^>]+mceTemp[^>]+>)?\s*(<dl [^>]+wp-caption[^>]+>[\s\S]+?<\/dl>)\s*(?:<\/div>)?/g,function(e,t){var n="";return-1===t.indexOf("<img ")||-1!==t.indexOf("</p>")?t.replace(/<d[ldt]( [^>]+)?>/g,"").replace(/<\/d[ldt]>/g,""):-1===(n=t.replace(/\s*<dl ([^>]+)>\s*<dt [^>]+>([\s\S]+?)<\/dt>\s*<dd [^>]+>([\s\S]*?)<\/dd>\s*<\/dl>\s*/gi,function(e,t,n,a){var i,o,r=n.match(/width="([0-9]*)"/);return r=r&&r[1]?r[1]:"",o=(i=(i=t.match(/class="([^"]*)"/))&&i[1]?i[1]:"").match(/align[a-z]+/i)||"alignnone",r&&a?'[caption id="'+(t=(t=t.match(/id="([^"]*)"/))&&t[1]?t[1]:"")+'" align="'+o+'" width="'+r+'"'+(i=(i=i.replace(/wp-caption ?|align[a-z]+ ?/gi,""))&&' class="'+i+'"')+"]"+n+" "+(a=(a=a.replace(/\r\n|\r/g,"\n").replace(/<[a-zA-Z0-9]+( [^<>]+)?>/g,function(e){return e.replace(/[\r\n\t]+/," ")})).replace(/\s*\n\s*/g,"<br />"))+"[/caption]":"alignnone"!==o[0]?n.replace(/><img/,' class="'+o[0]+'"><img'):n})).indexOf("[caption")?t.replace(/[\s\S]*?((?:<a [^>]+>)?<img [^>]+>(?:<\/a>)?)(<p>[\s\S]*<\/p>)?[\s\S]*/gi,"<p>$1</p>$2"):n})}function h(e){return e&&(e.textContent||e.innerText).replace(/\ufeff/g,"")}function m(e){var t=g.dom.getParent(e,"div.mceTemp");(t=!t&&"IMG"===e.nodeName?g.dom.getParent(e,"a"):t)?(t.nextSibling?g.selection.select(t.nextSibling):t.previousSibling?g.selection.select(t.previousSibling):g.selection.select(t.parentNode),g.selection.collapse(!0),g.dom.remove(t)):g.dom.remove(e),g.nodeChanged(),g.undoManager.add()}return g.addButton("wp_img_remove",{tooltip:"Remove",icon:"dashicon dashicons-no",onclick:function(){m(g.selection.getNode())}}),g.addButton("wp_img_edit",{tooltip:"Edit|button",icon:"dashicon dashicons-edit",onclick:function(){var e,t,n,p;e=g.selection.getNode(),"undefined"!=typeof wp&&wp.media?(n=function(e){var t,n,a,i,o=[],r=g.dom,c=/^\d+$/;(n={attachment_id:!1,size:"custom",caption:"",align:"none",extraClasses:"",link:!1,linkUrl:"",linkClassName:"",linkTargetBlank:!1,linkRel:"",title:""}).url=r.getAttrib(e,"src"),n.alt=r.getAttrib(e,"alt"),n.title=r.getAttrib(e,"title"),a=r.getAttrib(e,"width"),i=r.getAttrib(e,"height"),(!c.test(a)||parseInt(a,10)<1)&&(a=e.naturalWidth||e.width);(!c.test(i)||parseInt(i,10)<1)&&(i=e.naturalHeight||e.height);n.customWidth=n.width=a,n.customHeight=n.height=i,a=tinymce.explode(e.className," "),t=[],tinymce.each(a,function(e){/^wp-image/.test(e)?n.attachment_id=parseInt(e.replace("wp-image-",""),10):/^align/.test(e)?n.align=e.replace("align",""):/^size/.test(e)?n.size=e.replace("size-",""):t.push(e)}),n.extraClasses=t.join(" "),(i=r.getParents(e,".wp-caption")).length&&(i=i[0],a=i.className.split(" "),tinymce.each(a,function(e){/^align/.test(e)?n.align=e.replace("align",""):e&&"wp-caption"!==e&&o.push(e)}),n.captionClassName=o.join(" "),(i=r.select("dd.wp-caption-dd",i)).length&&(i=i[0],n.caption=g.serializer.serialize(i).replace(/<br[^>]*>/g,"$&\n").replace(/^<p>/,"").replace(/<\/p>$/,"")));e.parentNode&&"A"===e.parentNode.nodeName&&(e=e.parentNode,n.linkUrl=r.getAttrib(e,"href"),n.linkTargetBlank="_blank"===r.getAttrib(e,"target"),n.linkRel=r.getAttrib(e,"rel"),n.linkClassName=e.className);return n}(e),g.$(e).attr("data-wp-editing",1),wp.media.events.trigger("editor:image-edit",{editor:g,metadata:n,image:e}),t=wp.media({frame:"image",state:"image-details",metadata:n}),wp.media.events.trigger("editor:frame-create",{frame:t}),n=function(m){g.undoManager.transact(function(){var e,t,n,a,i,o,r,c,d,l,s;e=p,t=m,s=g.dom,e&&e.length&&(o=e[0],n=(n=tinymce.explode(t.extraClasses," "))||[],t.caption||n.push("align"+t.align),t.attachment_id&&(n.push("wp-image-"+t.attachment_id),t.size&&"custom"!==t.size&&n.push("size-"+t.size)),c=t.width,l=t.height,"custom"===t.size&&(c=t.customWidth,l=t.customHeight),r={src:t.url,width:c||null,height:l||null,title:t.title||null,class:n.join(" ")||null},s.setAttribs(o,r),e.attr("alt",t.alt||""),d={href:t.linkUrl,rel:t.linkRel||null,target:t.linkTargetBlank?"_blank":null,class:t.linkClassName||null},o.parentNode&&"A"===o.parentNode.nodeName&&!h(o.parentNode)?t.linkUrl?s.setAttribs(o.parentNode,d):s.remove(o.parentNode,!0):t.linkUrl&&((i=s.getParent(o,"a"))&&s.insertAfter(o,i),i=s.create("a",d),o.parentNode.insertBefore(i,o),i.appendChild(o)),l=g.dom.getParent(o,".mceTemp"),n=o.parentNode&&"A"===o.parentNode.nodeName&&!h(o.parentNode)?o.parentNode:o,t.caption?(t.caption=function(e){if(!e||-1===e.indexOf("<")&&-1===e.indexOf(">"))return e;u=u||new tinymce.html.Serializer({},g.schema);return u.serialize(g.parser.parse(e,{forced_root_block:!1}))}(t.caption),r=t.attachment_id?"attachment_"+t.attachment_id:null,d="align"+(t.align||"none"),i="wp-caption "+d,t.captionClassName&&(i+=" "+t.captionClassName.replace(/[<>&]+/g,"")),g.getParam("wpeditimage_html5_captions")||(c=parseInt(c,10),c+=10),l?((d=s.select("dl.wp-caption",l)).length&&s.setAttribs(d,{id:r,class:i,style:"width: "+c+"px"}),(d=s.select(".wp-caption-dd",l)).length&&s.setHTML(d[0],t.caption)):(a="<dl "+(r=r?'id="'+r+'" ':"")+'class="'+i+'" style="width: '+c+'px"><dt class="wp-caption-dt"></dt><dd class="wp-caption-dd">'+t.caption+"</dd></dl>",c=s.create("div",{class:"mceTemp"},a),(a=s.getParent(n,"p"))?a.parentNode.insertBefore(c,a):n.parentNode.insertBefore(c,n),g.$(c).find("dt.wp-caption-dt").append(n),a&&s.isEmpty(a)&&s.remove(a))):l&&(a=s.create("p"),l.parentNode.insertBefore(a,l),a.appendChild(n),s.remove(l)),e=g.$(o),s=e.attr("srcset"),l=e.attr("src"),s&&l&&(l=l.replace(/[?#].*/,""),-1===s.indexOf(l)&&e.attr("srcset",null).attr("sizes",null)),wp.media.events&&wp.media.events.trigger("editor:image-update",{editor:g,metadata:t,image:o}),g.nodeChanged())}),t.detach()},t.state("image-details").on("update",n),t.state("replace-image").on("replace",n),t.on("close",function(){g.focus(),t.detach(),(p=g.$("img[data-wp-editing]")).removeAttr("data-wp-editing")}),t.open()):g.execCommand("mceImage")}}),e({alignleft:"Align left",aligncenter:"Align center",alignright:"Align right",alignnone:"No alignment"},function(e,n){var t=n.slice(5);g.addButton("wp_img_"+n,{tooltip:e,icon:"dashicon dashicons-align-"+t,cmd:"alignnone"===n?"wpAlignNone":"Justify"+t.slice(0,1).toUpperCase()+t.slice(1),onPostRender:function(){var t=this;g.on("NodeChange",function(e){"IMG"===e.element.nodeName&&(e=g.dom.getParent(e.element,".wp-caption")||e.element,"alignnone"===n?t.active(!/\balign(left|center|right)\b/.test(e.className)):t.active(g.dom.hasClass(e,n)))})}})}),g.once("preinit",function(){g.wp&&g.wp._createToolbar&&(r=g.wp._createToolbar(["wp_img_alignleft","wp_img_aligncenter","wp_img_alignright","wp_img_alignnone","wp_img_edit","wp_img_remove"]))}),g.on("wptoolbar",function(e){"IMG"!==e.element.nodeName||i(e.element)||(e.toolbar=r)}),t&&g.on("init",function(){g.on("touchstart",function(e){"IMG"!==e.target.nodeName||o(e.target)||(n=!0)}),g.dom.bind(g.getDoc(),"touchmove",function(){n=!1}),g.on("touchend",function(e){var t;n&&"IMG"===e.target.nodeName&&!o(e.target)?(t=e.target,n=!1,window.setTimeout(function(){g.selection.select(t),g.nodeChanged()},100)):r&&r.hide()})}),g.on("init",function(){var t=g.dom,e=g.getParam("wpeditimage_html5_captions")?"html5-captions":"html4-captions";t.addClass(g.getBody(),e),tinymce.Env.ie&&10<tinymce.Env.ie&&t.bind(g.getBody(),"mscontrolselect",function(e){"IMG"===e.target.nodeName&&t.getParent(e.target,".wp-caption")?g.getBody().focus():"DL"===e.target.nodeName&&t.hasClass(e.target,"wp-caption")&&e.target.focus()})}),g.on("ObjectResized",function(a){var i=a.target;"IMG"===i.nodeName&&g.undoManager.transact(function(){var e,t,n=g.dom;i.className=i.className.replace(/\bsize-[^ ]+/,""),(e=n.getParent(i,".wp-caption"))&&(t=a.width||n.getAttrib(i,"width"))&&(t=parseInt(t,10),g.getParam("wpeditimage_html5_captions")||(t+=10),n.setStyle(e,"width",t+"px"))})}),g.on("pastePostProcess",function(e){g.dom.getParent(g.selection.getNode(),"dd.wp-caption-dd")&&(g.$("img, audio, video, object, embed, iframe, script, style",e.node).remove(),g.$("*",e.node).each(function(e,t){g.dom.isBlock(t)&&(tinymce.trim(t.textContent||t.innerText)?(g.dom.insertAfter(g.dom.create("br"),t),g.dom.remove(t,!0)):g.dom.remove(t))}),g.$("br",e.node).each(function(e,t){t.nextSibling&&"BR"!==t.nextSibling.nodeName&&t.previousSibling&&"BR"!==t.previousSibling.nodeName||g.dom.remove(t)}),c=!0)}),g.on("BeforeExecCommand",function(e){var t,n,a,i=e.command,o=g.dom;if("mceInsertContent"===i||"Indent"===i||"Outdent"===i){if(t=g.selection.getNode(),a=o.getParent(t,"div.mceTemp")){if("mceInsertContent"!==i)return e.preventDefault(),e.stopImmediatePropagation(),!1;c?c=!1:(n=o.create("p"),o.insertAfter(n,a),g.selection.setCursorLocation(n,0),"IMG"===t.nodeName&&g.$(a).remove(),g.nodeChanged())}}else"JustifyLeft"!==i&&"JustifyRight"!==i&&"JustifyCenter"!==i&&"wpAlignNone"!==i||(t=g.selection.getNode(),n="align"+i.slice(7).toLowerCase(),a=g.dom.getParent(t,".wp-caption"),"IMG"!==t.nodeName&&!a||(n=g.dom.hasClass(t=a||t,n)?" alignnone":" "+n,t.className=l(t.className.replace(/ ?align(left|center|right|none)/g,"")+n),g.nodeChanged(),e.preventDefault(),r&&r.reposition(),g.fire("ExecCommand",{command:i,ui:e.ui,value:e.value})))}),g.on("keydown",function(e){var t,n,a,i=g.selection,o=e.keyCode,r=g.dom,c=tinymce.util.VK;if(o===c.ENTER)t=i.getNode(),(n=r.getParent(t,"div.mceTemp"))&&(r.events.cancel(e),tinymce.each(r.select("dt, dd",n),function(e){r.isEmpty(e)&&r.remove(e)}),a=tinymce.Env.ie&&tinymce.Env.ie<11?"":'<br data-mce-bogus="1" />',a=r.create("p",null,a),"DD"===t.nodeName?r.insertAfter(a,n):n.parentNode.insertBefore(a,n),g.nodeChanged(),i.setCursorLocation(a,0));else if((o===c.DELETE||o===c.BACKSPACE)&&("DIV"===(t=i.getNode()).nodeName&&r.hasClass(t,"mceTemp")?n=t:"IMG"!==t.nodeName&&"DT"!==t.nodeName&&"A"!==t.nodeName||(n=r.getParent(t,"div.mceTemp")),n))return r.events.cancel(e),m(t),!1}),tinymce.Env.gecko&&g.on("undo redo",function(){"IMG"===g.selection.getNode().nodeName&&g.selection.collapse()}),g.wpSetImgCaption=d,g.wpGetImgCaption=s,g.on("beforeGetContent",function(e){"raw"!==e.format&&g.$('img[id="__wp-temp-img-id"]').removeAttr("id")}),g.on("BeforeSetContent",function(e){"raw"!==e.format&&(e.content=g.wpSetImgCaption(e.content))}),g.on("PostProcess",function(e){e.get&&(e.content=g.wpGetImgCaption(e.content))}),g.on("dragstart",function(){var e=g.selection.getNode();"IMG"===e.nodeName&&((a=g.dom.getParent(e,".mceTemp"))||"A"!==e.parentNode.nodeName||h(e.parentNode)||(a=e.parentNode))}),g.on("drop",function(e){var t=g.dom,n=tinymce.dom.RangeUtils.getCaretRangeFromPoint(e.clientX,e.clientY,g.getDoc());n&&t.getParent(n.startContainer,".mceTemp")?e.preventDefault():a&&(e.preventDefault(),g.undoManager.transact(function(){n&&g.selection.setRng(n),g.selection.setNode(a),t.remove(a)})),a=null}),g.wp=g.wp||{},g.wp.isPlaceholder=i,{_do_shcode:d,_get_shcode:s}});