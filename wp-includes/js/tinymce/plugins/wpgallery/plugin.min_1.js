tinymce.PluginManager.add("wpgallery",function(d){function t(e){return e.replace(/\[gallery([^\]]*)\]/g,function(e){return t="wp-gallery",n=e,n=window.encodeURIComponent(e),'<img src="'+tinymce.Env.transparentSrc+'" class="wp-media mceItem '+t+'" data-wp-media="'+n+'" data-mce-resize="false" data-mce-placeholder="1" alt="" />';var t,n})}function n(e){return e.replace(/(?:<p(?: [^>]+)?>)*(<img [^>]+>)(?:<\/p>)*/g,function(e,t){var n,t=(n=t,t="data-wp-media",(t=new RegExp(t+'="([^"]+)"').exec(n))?window.decodeURIComponent(t[1]):"");return t?"<p>"+t+"</p>":e})}function o(t){var n,a,e;"IMG"===t.nodeName&&"undefined"!=typeof wp&&wp.media&&(e=window.decodeURIComponent(d.dom.getAttrib(t,"data-wp-media")),d.dom.hasClass(t,"wp-gallery")&&wp.media.gallery&&(n=wp.media.gallery,(a=n.edit(e)).state("gallery-edit").on("update",function(e){e=n.shortcode(e).string();d.dom.setAttrib(t,"data-wp-media",window.encodeURIComponent(e)),a.detach()})))}d.addCommand("WP_Gallery",function(){o(d.selection.getNode())}),d.on("mouseup",function(e){var t=d.dom,n=e.target;function a(){t.removeClass(t.select("img.wp-media-selected"),"wp-media-selected")}"IMG"===n.nodeName&&t.getAttrib(n,"data-wp-media")?2!==e.button&&(t.hasClass(n,"wp-media-selected")?o(n):(a(),t.addClass(n,"wp-media-selected"))):a()}),d.on("ResolveName",function(e){var t=d.dom,n=e.target;"IMG"===n.nodeName&&t.getAttrib(n,"data-wp-media")&&t.hasClass(n,"wp-gallery")&&(e.name="gallery")}),d.on("BeforeSetContent",function(e){d.plugins.wpview&&"undefined"!=typeof wp&&wp.mce||(e.content=t(e.content))}),d.on("PostProcess",function(e){e.get&&(e.content=n(e.content))})});