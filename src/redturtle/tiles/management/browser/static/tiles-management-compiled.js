"use strict";define("tiles-management-pattern",["jquery","pat-base","pat-registry","mockup-patterns-modal","mockup-patterns-sortable"],function(e,t,n,i,a){return t.extend({name:"tiles-management",trigger:".pat-tiles-management",parser:"mockup",defaults:{},init:function(){var t=this,r=this.options.managerId,s=function(t,n){var a=e(t),s=a.next(".available-tiles");0===s.length?(a.parent().append('<div class="available-tiles"></div>'),(s=a.next(".available-tiles")).hide(),s.load(n+" #content .list-group",function(){s.find("a.list-group-item").each(function(){new i(e(this),{actionOptions:{redirectOnResponse:!0}}).on("after-render",function(){e("form#add_tile").append('<input type="hidden" name="managerId" value="'+r+'" />')})}),e(this).slideDown()})):s.slideToggle()},o=function t(n){var a=e(n);a.find("div.tileEditButtons a.tileDeleteLink").each(function(){new i(e(this),{templateOptions:{classModal:"plone-modal-content delete-tile-modal"},actionOptions:{redirectOnResponse:!1,onSuccess:function(e,t,n,i,a){"success"===n&&(e.hide(),e.reloadWindow())}}}).on("after-render",function(){e("form#delete_tile").append('<input type="hidden" name="managerId" value="'+r+'" />')})}),a.find("div.tileEditButtons a.tileEditLink").each(function(){new i(e(this),{templateOptions:{classModal:"plone-modal-content edit-tile-modal"},actionOptions:{redirectOnResponse:!0}})}),a.find("div.tileEditButtons a.tileVisibilityLink").each(function(){e(this).click(function(n){n.preventDefault(),e.get(n.currentTarget.href+"&managerId="+r).done(function(n){if(void 0===n){var i=e("body").data("baseUrl")+"/tiles_management";e.get(i,{managerId:r,ajax_load:!0}).done(function(n){var i=a.data("tileid"),r=e("<div></div>").html(n).find('.tilesList .tileWrapper[data-tileid="'+i+'"]');a.replaceWith(r),t(r);var s=r.parents(".tilesWrapper");1===s.length&&l(e(s[0]))})}else{var s=JSON.parse(n);console.error(s.error)}}).fail(function(e){console.error(e)})})}),a.mouseenter(function(){e(this).addClass("editableTile"),e(this).find(".tileEditButtons").show()}).mouseleave(function(){e(this).removeClass("editableTile"),e(this).find(".tileEditButtons").hide()})},l=function(t){var n=e("body").data().baseUrl||e("base").attr("href");new a(t.find(".tilesList"),{selector:"div.tileWrapper",drop:function(t,i){if(0!==i){var a=e(".tileWrapper").map(function(t,n){return e(n).data().tileid});void 0!==n&&e.get(n+"/reorder_tiles",{tileIds:JSON.stringify(a.get()),managerId:r}).done(function(e){if(e&&""!==e){var t=JSON.parse(e);console.error(t.message)}}).fail(function(e){console.error(e)})}}})},d=function(e){var t=e.find('[class*="pat-"]');0!==t.length&&t.each(function(){var e=this;this.className.split(" ").map(function(t){if(-1!==t.indexOf("pat-")){var i=t.substring(4);try{n.initPattern(i,e,t)}catch(e){if(e instanceof TypeError)return}}})})};r?function(t){var n=e("body").data("baseUrl")+"/tiles_management";e.get(n,{managerId:r,ajax_load:!0}).done(function(n){t.html(e(n).find(".tilesWrapper"));var i=new Event("rtTilesLoaded");t[0].dispatchEvent(i),d(t);var a=t.find(".add-tile-btn");a.length>0&&(t.find(".tilesList .tileWrapper").each(function(){t.find(".tileEditButtons").hide(),o(this)}),l(t),a.each(function(){e(this).click(function(t){t.preventDefault(),s(e(this),t.target.href)})}))})}(t.$el):t.$el.append("<span>to use tiles manager, you need to provide a managerId attribute</span>")}})}),require(["tiles-management-pattern"],function(){}),define("src/redturtle/tiles/management/browser/static/bundle.js",function(){});
//# sourceMappingURL=redturtle-tiles-management-compiled.js.map