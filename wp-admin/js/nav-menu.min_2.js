/*! This file is auto-generated */
!function(k){var I=window.wpNavMenu={options:{menuItemDepthPerLevel:30,globalMaxDepth:11,sortableItems:"> *",targetTolerance:0},menuList:void 0,targetList:void 0,menusChanged:!1,isRTL:!("undefined"==typeof isRtl||!isRtl),negateIfRTL:"undefined"!=typeof isRtl&&isRtl?-1:1,lastSearch:"",init:function(){I.menuList=k("#menu-to-edit"),I.targetList=I.menuList,this.jQueryExtensions(),this.attachMenuEditListeners(),this.attachBulkSelectButtonListeners(),this.attachMenuCheckBoxListeners(),this.attachMenuItemDeleteButton(),this.attachPendingMenuItemsListForDeletion(),this.attachQuickSearchListeners(),this.attachThemeLocationsListeners(),this.attachMenuSaveSubmitListeners(),this.attachTabsPanelListeners(),this.attachUnsavedChangesListener(),I.menuList.length&&this.initSortables(),menus.oneThemeLocationNoMenus&&k("#posttype-page").addSelectedToMenu(I.addMenuItemToBottom),this.initManageLocations(),this.initAccessibility(),this.initToggles(),this.initPreviewing()},jQueryExtensions:function(){k.fn.extend({menuItemDepth:function(){var e=I.isRTL?this.eq(0).css("margin-right"):this.eq(0).css("margin-left");return I.pxToDepth(e&&-1!=e.indexOf("px")?e.slice(0,-2):0)},updateDepthClass:function(t,n){return this.each(function(){var e=k(this);n=n||e.menuItemDepth(),k(this).removeClass("menu-item-depth-"+n).addClass("menu-item-depth-"+t)})},shiftDepthClass:function(i){return this.each(function(){var e=k(this),t=e.menuItemDepth(),n=t+i;e.removeClass("menu-item-depth-"+t).addClass("menu-item-depth-"+n),0===n&&e.find(".is-submenu").hide()})},childMenuItems:function(){var i=k();return this.each(function(){for(var e=k(this),t=e.menuItemDepth(),n=e.next(".menu-item");n.length&&n.menuItemDepth()>t;)i=i.add(n),n=n.next(".menu-item")}),i},shiftHorizontally:function(n){return this.each(function(){var e=k(this),t=e.menuItemDepth();e.moveHorizontally(t+n,t)})},moveHorizontally:function(a,s){return this.each(function(){var e=k(this),t=e.childMenuItems(),n=a-s,i=e.find(".is-submenu");e.updateDepthClass(a,s).updateParentMenuItemDBId(),t&&t.each(function(){var e=k(this),t=e.menuItemDepth();e.updateDepthClass(t+n,t).updateParentMenuItemDBId()}),0===a?i.hide():i.show()})},updateParentMenuItemDBId:function(){return this.each(function(){var e=k(this),t=e.find(".menu-item-data-parent-id"),n=parseInt(e.menuItemDepth(),10),e=e.prevAll(".menu-item-depth-"+(n-1)).first();0===n?t.val(0):t.val(e.find(".menu-item-data-db-id").val())})},hideAdvancedMenuItemFields:function(){return this.each(function(){var e=k(this);k(".hide-column-tog").not(":checked").each(function(){e.find(".field-"+k(this).val()).addClass("hidden-field")})})},addSelectedToMenu:function(a){return 0!==k("#menu-to-edit").length&&this.each(function(){var e=k(this),n={},t=menus.oneThemeLocationNoMenus&&0===e.find(".tabs-panel-active .categorychecklist li input:checked").length?e.find('#page-all li input[type="checkbox"]'):e.find(".tabs-panel-active .categorychecklist li input:checked"),i=/menu-item\[([^\]]*)/;if(a=a||I.addMenuItemToBottom,!t.length)return!1;e.find(".button-controls .spinner").addClass("is-active"),k(t).each(function(){var e=k(this),t=i.exec(e.attr("name")),t=void 0===t[1]?0:parseInt(t[1],10);this.className&&-1!=this.className.indexOf("add-to-top")&&(a=I.addMenuItemToTop),n[t]=e.closest("li").getItemData("add-menu-item",t)}),I.addItemToMenu(n,a,function(){t.prop("checked",!1),e.find(".button-controls .select-all").prop("checked",!1),e.find(".button-controls .spinner").removeClass("is-active")})})},getItemData:function(t,n){t=t||"menu-item";var i,a={},s=["menu-item-db-id","menu-item-object-id","menu-item-object","menu-item-parent-id","menu-item-position","menu-item-type","menu-item-title","menu-item-url","menu-item-description","menu-item-attr-title","menu-item-target","menu-item-classes","menu-item-xfn"];return(n=n||"menu-item"!=t?n:this.find(".menu-item-data-db-id").val())&&this.find("input").each(function(){var e;for(i=s.length;i--;)"menu-item"==t?e=s[i]+"["+n+"]":"add-menu-item"==t&&(e="menu-item["+n+"]["+s[i]+"]"),this.name&&e==this.name&&(a[s[i]]=this.value)}),a},setItemData:function(e,a,s){return a=a||"menu-item",(s=s||"menu-item"!=a?s:k(".menu-item-data-db-id",this).val())&&this.find("input").each(function(){var n,i=k(this);k.each(e,function(e,t){"menu-item"==a?n=e+"["+s+"]":"add-menu-item"==a&&(n="menu-item["+s+"]["+e+"]"),n==i.attr("name")&&i.val(t)})}),this}})},countMenuItems:function(e){return k(".menu-item-depth-"+e).length},moveMenuItem:function(e,t){var n,i,a=k("#menu-to-edit li"),s=a.length,m=e.parents("li.menu-item"),o=m.childMenuItems(),u=m.getItemData(),c=parseInt(m.menuItemDepth(),10),l=parseInt(m.index(),10),d=m.next(),r=d.childMenuItems(),h=parseInt(d.menuItemDepth(),10)+1,p=m.prev(),f=parseInt(p.menuItemDepth(),10),v=p.getItemData()["menu-item-db-id"];switch(t){case"up":if(i=l-1,0===l)break;0==i&&0!==c&&m.moveHorizontally(0,c),0!==f&&m.moveHorizontally(f,c),(o?n=m.add(o):m).detach().insertBefore(a.eq(i)).updateParentMenuItemDBId();break;case"down":if(o){if(n=m.add(o),(r=0!==(d=a.eq(n.length+l)).childMenuItems().length)&&(i=parseInt(d.menuItemDepth(),10)+1,m.moveHorizontally(i,c)),s===l+n.length)break;n.detach().insertAfter(a.eq(l+n.length)).updateParentMenuItemDBId()}else{if(0!==r.length&&m.moveHorizontally(h,c),s===l+1)break;m.detach().insertAfter(a.eq(l+1)).updateParentMenuItemDBId()}break;case"top":if(0===l)break;(o?n=m.add(o):m).detach().insertBefore(a.eq(0)).updateParentMenuItemDBId();break;case"left":if(0===c)break;m.shiftHorizontally(-1);break;case"right":if(0===l)break;if(u["menu-item-parent-id"]===v)break;m.shiftHorizontally(1)}e.trigger("focus"),I.registerChange(),I.refreshKeyboardAccessibility(),I.refreshAdvancedAccessibility()},initAccessibility:function(){var e=k("#menu-to-edit");I.refreshKeyboardAccessibility(),I.refreshAdvancedAccessibility(),e.on("mouseenter.refreshAccessibility focus.refreshAccessibility touchstart.refreshAccessibility",".menu-item",function(){I.refreshAdvancedAccessibilityOfItem(k(this).find("a.item-edit"))}),e.on("click","a.item-edit",function(){I.refreshAdvancedAccessibilityOfItem(k(this))}),e.on("click",".menus-move",function(){var e=k(this).data("dir");void 0!==e&&I.moveMenuItem(k(this).parents("li.menu-item").find("a.item-edit"),e)})},refreshAdvancedAccessibilityOfItem:function(e){var t,n,i,a,s,m,o,u,c,l,d,r,h;!0===k(e).data("needs_accessibility_refresh")&&(u=0===(o=(m=(s=k(e)).closest("li.menu-item").first()).menuItemDepth()),c=s.closest(".menu-item-handle").find(".menu-item-title").text(),l=parseInt(m.index(),10),h=u?o:parseInt(o-1,10),d=m.prevAll(".menu-item-depth-"+h).first().find(".menu-item-title").text(),r=m.prevAll(".menu-item-depth-"+o).first().find(".menu-item-title").text(),e=k("#menu-to-edit li").length,h=m.nextAll(".menu-item-depth-"+o).length,m.find(".field-move").toggle(1<e),0!==l&&(t=m.find(".menus-move-up")).attr("aria-label",menus.moveUp).css("display","inline"),0!==l&&u&&(t=m.find(".menus-move-top")).attr("aria-label",menus.moveToTop).css("display","inline"),l+1!==e&&0!==l&&(t=m.find(".menus-move-down")).attr("aria-label",menus.moveDown).css("display","inline"),0===l&&0!==h&&(t=m.find(".menus-move-down")).attr("aria-label",menus.moveDown).css("display","inline"),u||(t=m.find(".menus-move-left"),n=menus.outFrom.replace("%s",d),t.attr("aria-label",menus.moveOutFrom.replace("%s",d)).text(n).css("display","inline")),0!==l&&m.find(".menu-item-data-parent-id").val()!==m.prev().find(".menu-item-data-db-id").val()&&(t=m.find(".menus-move-right"),n=menus.under.replace("%s",r),t.attr("aria-label",menus.moveUnder.replace("%s",r)).text(n).css("display","inline")),a=u?(i=(u=k(".menu-item-depth-0")).index(m)+1,e=u.length,menus.menuFocus.replace("%1$s",c).replace("%2$d",i).replace("%3$d",e)):(o=(a=m.prevAll(".menu-item-depth-"+parseInt(o-1,10)).first()).find(".menu-item-data-db-id").val(),a=a.find(".menu-item-title").text(),o=k('.menu-item .menu-item-data-parent-id[value="'+o+'"]'),i=k(o.parents(".menu-item").get().reverse()).index(m)+1,menus.subMenuFocus.replace("%1$s",c).replace("%2$d",i).replace("%3$s",a)),s.attr("aria-label",a),s.data("needs_accessibility_refresh",!1))},refreshAdvancedAccessibility:function(){k(".menu-item-settings .field-move .menus-move").hide(),k("a.item-edit").data("needs_accessibility_refresh",!0),k(".menu-item-edit-active a.item-edit").each(function(){I.refreshAdvancedAccessibilityOfItem(this)})},refreshKeyboardAccessibility:function(){k("a.item-edit").off("focus").on("focus",function(){k(this).off("keydown").on("keydown",function(e){var t,n=k(this),i=n.parents("li.menu-item").getItemData();if((37==e.which||38==e.which||39==e.which||40==e.which)&&(n.off("keydown"),1!==k("#menu-to-edit li").length)){switch(t={38:"up",40:"down",37:"left",39:"right"},(t=k("body").hasClass("rtl")?{38:"up",40:"down",39:"left",37:"right"}:t)[e.which]){case"up":I.moveMenuItem(n,"up");break;case"down":I.moveMenuItem(n,"down");break;case"left":I.moveMenuItem(n,"left");break;case"right":I.moveMenuItem(n,"right")}return k("#edit-"+i["menu-item-db-id"]).trigger("focus"),!1}})})},initPreviewing:function(){k("#menu-to-edit").on("change input",".edit-menu-item-title",function(e){var t=k(e.currentTarget),e=t.val(),t=t.closest(".menu-item").find(".menu-item-title");e?t.text(e).removeClass("no-title"):t.text(wp.i18n._x("(no label)","missing menu item navigation label")).addClass("no-title")})},initToggles:function(){postboxes.add_postbox_toggles("nav-menus"),columns.useCheckboxesForHidden(),columns.checked=function(e){k(".field-"+e).removeClass("hidden-field")},columns.unchecked=function(e){k(".field-"+e).addClass("hidden-field")},I.menuList.hideAdvancedMenuItemFields(),k(".hide-postbox-tog").on("click",function(){var e=k(".accordion-container li.accordion-section").filter(":hidden").map(function(){return this.id}).get().join(",");k.post(ajaxurl,{action:"closed-postboxes",hidden:e,closedpostboxesnonce:jQuery("#closedpostboxesnonce").val(),page:"nav-menus"})})},initSortables:function(){var s,a,m,n,o,u,c,l,d,r,h=0,p=I.menuList.offset().left,f=k("body"),v=function(){if(!f[0].className)return 0;var e=f[0].className.match(/menu-max-depth-(\d+)/);return e&&e[1]?parseInt(e[1],10):0}();function g(e){n=e.placeholder.prev(".menu-item"),o=e.placeholder.next(".menu-item"),n[0]==e.item[0]&&(n=n.prev(".menu-item")),o[0]==e.item[0]&&(o=o.next(".menu-item")),u=n.length?n.offset().top+n.height():0,c=o.length?o.offset().top+o.height()/3:0,a=o.length?o.menuItemDepth():0,m=n.length?(e=n.menuItemDepth()+1)>I.options.globalMaxDepth?I.options.globalMaxDepth:e:0}function b(e,t){e.placeholder.updateDepthClass(t,h),h=t}0!==k("#menu-to-edit li").length&&k(".drag-instructions").show(),p+=I.isRTL?I.menuList.width():0,I.menuList.sortable({handle:".menu-item-handle",placeholder:"sortable-placeholder",items:I.options.sortableItems,start:function(e,t){var n,i;I.isRTL&&(t.item[0].style.right="auto"),d=t.item.children(".menu-item-transport"),s=t.item.menuItemDepth(),b(t,s),i=(t.item.next()[0]==t.placeholder[0]?t.item.next():t.item).childMenuItems(),d.append(i),n=d.outerHeight(),n+=0<n?+t.placeholder.css("margin-top").slice(0,-2):0,n+=t.helper.outerHeight(),l=n,t.placeholder.height(n-=2),r=s,i.each(function(){var e=k(this).menuItemDepth();r=r<e?e:r}),i=t.helper.find(".menu-item-handle").outerWidth(),i+=I.depthToPx(r-s),t.placeholder.width(i-=2),(i=t.placeholder.next(".menu-item")).css("margin-top",l+"px"),t.placeholder.detach(),k(this).sortable("refresh"),t.item.after(t.placeholder),i.css("margin-top",0),g(t)},stop:function(e,t){var n=h-s,i=d.children().insertAfter(t.item),a=t.item.find(".item-title .is-submenu");0<h?a.show():a.hide(),0!=n&&(t.item.updateDepthClass(h),i.shiftDepthClass(n),function(e){var t,n=v;if(0!==e){if(0<e)v<(t=r+e)&&(n=t);else if(e<0&&r==v)for(;!k(".menu-item-depth-"+n,I.menuList).length&&0<n;)n--;f.removeClass("menu-max-depth-"+v).addClass("menu-max-depth-"+n),v=n}}(n)),I.registerChange(),t.item.updateParentMenuItemDBId(),t.item[0].style.top=0,I.isRTL&&(t.item[0].style.left="auto",t.item[0].style.right=0),I.refreshKeyboardAccessibility(),I.refreshAdvancedAccessibility()},change:function(e,t){t.placeholder.parent().hasClass("menu")||(n.length?n.after(t.placeholder):I.menuList.prepend(t.placeholder)),g(t)},sort:function(e,t){var n=t.helper.offset(),i=I.isRTL?n.left+t.helper.width():n.left,i=I.negateIfRTL*I.pxToDepth(i-p);m<i||n.top<u-I.options.targetTolerance?i=m:i<a&&(i=a),i!=h&&b(t,i),c&&n.top+l>c&&(o.after(t.placeholder),g(t),k(this).sortable("refreshPositions"))}})},initManageLocations:function(){k("#menu-locations-wrap form").on("submit",function(){window.onbeforeunload=null}),k(".menu-location-menus select").on("change",function(){var e=k(this).closest("tr").find(".locations-edit-menu-link");k(this).find("option:selected").data("orig")?e.show():e.hide()})},attachMenuEditListeners:function(){var t=this;k("#update-nav-menu").on("click",function(e){if(e.target&&e.target.className)return-1!=e.target.className.indexOf("item-edit")?t.eventOnClickEditLink(e.target):-1!=e.target.className.indexOf("menu-save")?t.eventOnClickMenuSave(e.target):-1!=e.target.className.indexOf("menu-delete")?t.eventOnClickMenuDelete(e.target):-1!=e.target.className.indexOf("item-delete")?t.eventOnClickMenuItemDelete(e.target):-1!=e.target.className.indexOf("item-cancel")?t.eventOnClickCancelLink(e.target):void 0}),k("#menu-name").on("input",_.debounce(function(){var e=k(document.getElementById("menu-name")),t=e.val();t&&t.replace(/\s+/,"")?e.parent().removeClass("form-invalid"):e.parent().addClass("form-invalid")},500)),k('#add-custom-links input[type="text"]').on("keypress",function(e){k("#customlinkdiv").removeClass("form-invalid"),13===e.keyCode&&(e.preventDefault(),k("#submit-customlinkdiv").trigger("click"))})},attachBulkSelectButtonListeners:function(){var e=this;k(".bulk-select-switcher").on("change",function(){this.checked?(k(".bulk-select-switcher").prop("checked",!0),e.enableBulkSelection()):(k(".bulk-select-switcher").prop("checked",!1),e.disableBulkSelection())})},enableBulkSelection:function(){var e=k("#menu-to-edit .menu-item-checkbox");k("#menu-to-edit").addClass("bulk-selection"),k("#nav-menu-bulk-actions-top").addClass("bulk-selection"),k("#nav-menu-bulk-actions-bottom").addClass("bulk-selection"),k.each(e,function(){k(this).prop("disabled",!1)})},disableBulkSelection:function(){var e=k("#menu-to-edit .menu-item-checkbox");k("#menu-to-edit").removeClass("bulk-selection"),k("#nav-menu-bulk-actions-top").removeClass("bulk-selection"),k("#nav-menu-bulk-actions-bottom").removeClass("bulk-selection"),k(".menu-items-delete").is('[aria-describedby="pending-menu-items-to-delete"]')&&k(".menu-items-delete").removeAttr("aria-describedby"),k.each(e,function(){k(this).prop("disabled",!0).prop("checked",!1)}),k(".menu-items-delete").addClass("disabled"),k("#pending-menu-items-to-delete ul").empty()},attachMenuCheckBoxListeners:function(){var e=this;k("#menu-to-edit").on("change",".menu-item-checkbox",function(){e.setRemoveSelectedButtonStatus()})},attachMenuItemDeleteButton:function(){var t=this;k(document).on("click",".menu-items-delete",function(e){var n,i;e.preventDefault(),k(this).hasClass("disabled")||(k.each(k(".menu-item-checkbox:checked"),function(e,t){k(t).parents("li").find("a.item-delete").trigger("click")}),k(".menu-items-delete").addClass("disabled"),k(".bulk-select-switcher").prop("checked",!1),n="",i=k("#pending-menu-items-to-delete ul li"),k.each(i,function(e,t){t=k(t).find(".pending-menu-item-name").text(),t=menus.menuItemDeletion.replace("%s",t);n+=t,e+1<i.length&&(n+=", ")}),e=menus.itemsDeleted.replace("%s",n),wp.a11y.speak(e,"polite"),t.disableBulkSelection())})},attachPendingMenuItemsListForDeletion:function(){k("#post-body-content").on("change",".menu-item-checkbox",function(){var e,t,n,i;k(".menu-items-delete").is('[aria-describedby="pending-menu-items-to-delete"]')||k(".menu-items-delete").attr("aria-describedby","pending-menu-items-to-delete"),e=k(this).next().text(),t=k(this).parent().next(".item-controls").find(".item-type").text(),n=k(this).attr("data-menu-item-id"),0<(i=k("#pending-menu-items-to-delete ul").find("[data-menu-item-id="+n+"]")).length&&i.remove(),!0===this.checked&&k("#pending-menu-items-to-delete ul").append('<li data-menu-item-id="'+n+'"><span class="pending-menu-item-name">'+e+'</span> <span class="pending-menu-item-type">('+t+')</span><span class="separator"></span></li>'),k("#pending-menu-items-to-delete li .separator").html(", "),k("#pending-menu-items-to-delete li .separator").last().html(".")})},setBulkDeleteCheckboxStatus:function(){var e=k("#menu-to-edit .menu-item-checkbox");k.each(e,function(){k(this).prop("disabled")?k(this).prop("disabled",!1):k(this).prop("disabled",!0),k(this).is(":checked")&&k(this).prop("checked",!1)}),this.setRemoveSelectedButtonStatus()},setRemoveSelectedButtonStatus:function(){var e=k(".menu-items-delete");0<k(".menu-item-checkbox:checked").length?e.removeClass("disabled"):e.addClass("disabled")},attachMenuSaveSubmitListeners:function(){k("#update-nav-menu").on("submit",function(){var e=k("#update-nav-menu").serializeArray();k('[name="nav-menu-data"]').val(JSON.stringify(e))})},attachThemeLocationsListeners:function(){var e=k("#nav-menu-theme-locations"),t={action:"menu-locations-save"};t["menu-settings-column-nonce"]=k("#menu-settings-column-nonce").val(),e.find('input[type="submit"]').on("click",function(){return e.find("select").each(function(){t[this.name]=k(this).val()}),e.find(".spinner").addClass("is-active"),k.post(ajaxurl,t,function(){e.find(".spinner").removeClass("is-active")}),!1})},attachQuickSearchListeners:function(){var t;k("#nav-menu-meta").on("submit",function(e){e.preventDefault()}),k("#nav-menu-meta").on("input",".quick-search",function(){var e=k(this);e.attr("autocomplete","off"),t&&clearTimeout(t),t=setTimeout(function(){I.updateQuickSearchResults(e)},500)}).on("blur",".quick-search",function(){I.lastSearch=""})},updateQuickSearchResults:function(e){var t,n,i=e.val();i.length<2||I.lastSearch==i||(I.lastSearch=i,t=e.parents(".tabs-panel"),n={action:"menu-quick-search","response-format":"markup",menu:k("#menu").val(),"menu-settings-column-nonce":k("#menu-settings-column-nonce").val(),q:i,type:e.attr("name")},k(".spinner",t).addClass("is-active"),k.post(ajaxurl,n,function(e){I.processQuickSearchQueryResponse(e,n,t)}))},addCustomLink:function(e){var t=k("#custom-menu-item-url").val().toString(),n=k("#custom-menu-item-name").val();if(""!==t&&(t=t.trim()),e=e||I.addMenuItemToBottom,""===t||"https://"==t||"http://"==t)return k("#customlinkdiv").addClass("form-invalid"),!1;k(".customlinkdiv .spinner").addClass("is-active"),this.addLinkToMenu(t,n,e,function(){k(".customlinkdiv .spinner").removeClass("is-active"),k("#custom-menu-item-name").val("").trigger("blur"),k("#custom-menu-item-url").val("").attr("placeholder","https://")})},addLinkToMenu:function(e,t,n,i){n=n||I.addMenuItemToBottom,I.addItemToMenu({"-1":{"menu-item-type":"custom","menu-item-url":e,"menu-item-title":t}},n,i=i||function(){})},addItemToMenu:function(e,n,i){var a,t=k("#menu").val(),s=k("#menu-settings-column-nonce").val();n=n||function(){},i=i||function(){},a={action:"add-menu-item",menu:t,"menu-settings-column-nonce":s,"menu-item":e},k.post(ajaxurl,a,function(e){var t=k("#menu-instructions");e=(e=e||"").toString().trim(),n(e,a),k("li.pending").hide().fadeIn("slow"),k(".drag-instructions").show(),!t.hasClass("menu-instructions-inactive")&&t.siblings().length&&t.addClass("menu-instructions-inactive"),i()})},addMenuItemToBottom:function(e){e=k(e);e.hideAdvancedMenuItemFields().appendTo(I.targetList),I.refreshKeyboardAccessibility(),I.refreshAdvancedAccessibility(),k(document).trigger("menu-item-added",[e])},addMenuItemToTop:function(e){e=k(e);e.hideAdvancedMenuItemFields().prependTo(I.targetList),I.refreshKeyboardAccessibility(),I.refreshAdvancedAccessibility(),k(document).trigger("menu-item-added",[e])},attachUnsavedChangesListener:function(){k("#menu-management input, #menu-management select, #menu-management, #menu-management textarea, .menu-location-menus select").on("change",function(){I.registerChange()}),0!==k("#menu-to-edit").length||0!==k(".menu-location-menus select").length?window.onbeforeunload=function(){if(I.menusChanged)return wp.i18n.__("The changes you made will be lost if you navigate away from this page.")}:k("#menu-settings-column").find("input,select").end().find("a").attr("href","#").off("click")},registerChange:function(){I.menusChanged=!0},attachTabsPanelListeners:function(){k("#menu-settings-column").on("click",function(e){var t,n,i,a,s=k(e.target);if(s.hasClass("nav-tab-link"))n=s.data("type"),i=s.parents(".accordion-section-content").first(),k("input",i).prop("checked",!1),k(".tabs-panel-active",i).removeClass("tabs-panel-active").addClass("tabs-panel-inactive"),k("#"+n,i).removeClass("tabs-panel-inactive").addClass("tabs-panel-active"),k(".tabs",i).removeClass("tabs"),s.parent().addClass("tabs"),k(".quick-search",i).trigger("focus"),i.find(".tabs-panel-active .menu-item-title").length?i.removeClass("has-no-menu-item"):i.addClass("has-no-menu-item"),e.preventDefault();else if(s.hasClass("select-all"))(t=s.closest(".button-controls").data("items-type"))&&((a=k("#"+t+" .tabs-panel-active .menu-item-title input")).length!==a.filter(":checked").length||s.is(":checked")?s.is(":checked")&&a.prop("checked",!0):a.prop("checked",!1));else if(s.hasClass("menu-item-checkbox"))(t=s.closest(".tabs-panel-active").parent().attr("id"))&&(a=k("#"+t+" .tabs-panel-active .menu-item-title input"),t=k('.button-controls[data-items-type="'+t+'"] .select-all'),a.length!==a.filter(":checked").length||t.is(":checked")?t.is(":checked")&&t.prop("checked",!1):t.prop("checked",!0));else if(s.hasClass("submit-add-to-menu"))return I.registerChange(),e.target.id&&"submit-customlinkdiv"==e.target.id?I.addCustomLink(I.addMenuItemToBottom):e.target.id&&-1!=e.target.id.indexOf("submit-")&&k("#"+e.target.id.replace(/submit-/,"")).addSelectedToMenu(I.addMenuItemToBottom),!1}),k("#nav-menu-meta").on("click","a.page-numbers",function(){var n=k(this).closest(".inside");return k.post(ajaxurl,this.href.replace(/.*\?/,"").replace(/action=([^&]*)/,"")+"&action=menu-get-metabox",function(e){var t=JSON.parse(e);-1!==e.indexOf("replace-id")&&(e=document.getElementById(t["replace-id"]),t.markup&&e&&n.html(t.markup))}),!1})},eventOnClickEditLink:function(e){var t,n,e=/#(.*)$/.exec(e.href);if(e&&e[1]&&0!==(n=(t=k("#"+e[1])).parent()).length)return n.hasClass("menu-item-edit-inactive")?(t.data("menu-item-data")||t.data("menu-item-data",t.getItemData()),t.slideDown("fast"),n.removeClass("menu-item-edit-inactive").addClass("menu-item-edit-active")):(t.slideUp("fast"),n.removeClass("menu-item-edit-active").addClass("menu-item-edit-inactive")),!1},eventOnClickCancelLink:function(e){var t=k(e).closest(".menu-item-settings"),e=k(e).closest(".menu-item");return e.removeClass("menu-item-edit-active").addClass("menu-item-edit-inactive"),t.setItemData(t.data("menu-item-data")).hide(),e.find(".menu-item-title").text(t.data("menu-item-data")["menu-item-title"]),!1},eventOnClickMenuSave:function(){var e="",t=k("#menu-name"),n=t.val();return n&&n.replace(/\s+/,"")?(k("#nav-menu-theme-locations select").each(function(){e+='<input type="hidden" name="'+this.name+'" value="'+k(this).val()+'" />'}),k("#update-nav-menu").append(e),I.menuList.find(".menu-item-data-position").val(function(e){return e+1}),!(window.onbeforeunload=null)):(t.parent().addClass("form-invalid"),!1)},eventOnClickMenuDelete:function(){return!!window.confirm(wp.i18n.__("You are about to permanently delete this menu.\n'Cancel' to stop, 'OK' to delete."))&&!(window.onbeforeunload=null)},eventOnClickMenuItemDelete:function(e){e=parseInt(e.id.replace("delete-",""),10);return I.removeMenuItem(k("#menu-item-"+e)),I.registerChange(),!1},processQuickSearchQueryResponse:function(e,t,n){var i,a,s,m={},o=document.getElementById("nav-menu-meta"),u=/menu-item[(\[^]\]*/,c=k("<div>").html(e).find("li"),l=n.closest(".accordion-section-content"),e=l.find(".button-controls .select-all");if(!c.length)return k(".categorychecklist",n).html("<li><p>"+wp.i18n.__("No results found.")+"</p></li>"),k(".spinner",n).removeClass("is-active"),void l.addClass("has-no-menu-item");c.each(function(){if(s=k(this),(i=u.exec(s.html()))&&i[1]){for(a=i[1];o.elements["menu-item["+a+"][menu-item-type]"]||m[a];)a--;m[a]=!0,a!=i[1]&&s.html(s.html().replace(new RegExp("menu-item\\["+i[1]+"\\]","g"),"menu-item["+a+"]"))}}),k(".categorychecklist",n).html(c),k(".spinner",n).removeClass("is-active"),l.removeClass("has-no-menu-item"),e.is(":checked")&&e.prop("checked",!1)},removeMenuItem:function(t){var n=t.childMenuItems();k(document).trigger("menu-removing-item",[t]),t.addClass("deleting").animate({opacity:0,height:0},350,function(){var e=k("#menu-instructions");t.remove(),n.shiftDepthClass(-1).updateParentMenuItemDBId(),0===k("#menu-to-edit li").length&&(k(".drag-instructions").hide(),e.removeClass("menu-instructions-inactive")),I.refreshAdvancedAccessibility()})},depthToPx:function(e){return e*I.options.menuItemDepthPerLevel},pxToDepth:function(e){return Math.floor(e/I.options.menuItemDepthPerLevel)}};k(function(){wpNavMenu.init(),k(".menu-edit a, .menu-edit button, .menu-edit input, .menu-edit textarea, .menu-edit select").on("focus",function(){var e,t,n;783<=window.innerWidth&&(e=k("#nav-menu-footer").height()+20,0<(t=k(this).offset().top-(k(window).scrollTop()+k(window).height()-k(this).height()))&&(t=0),(t*=-1)<e&&(n=k(document).scrollTop(),k(document).scrollTop(n+(e-t))))})})}(jQuery);