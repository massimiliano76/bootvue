(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e1d4169"],{"11e7":function(r,o,e){"use strict";e.r(o);var t=function(){var r=this,o=r.$createElement,e=r._self._c||o;return e("div",[e("CCard",[e("CCardHeader",[e("CIcon",{attrs:{name:"cil-drop"}}),r._v(" Theme colors ")],1),e("CCardBody",[e("CRow",[e("ColorTheme",{attrs:{color:"bg-primary"}},[e("h6",[r._v("Brand Primary Color")])]),e("ColorTheme",{attrs:{color:"bg-secondary"}},[e("h6",[r._v("Brand Secondary Color")])]),e("ColorTheme",{attrs:{color:"bg-success"}},[e("h6",[r._v("Brand Success Color")])]),e("ColorTheme",{attrs:{color:"bg-danger"}},[e("h6",[r._v("Brand Danger Color")])]),e("ColorTheme",{attrs:{color:"bg-warning"}},[e("h6",[r._v("Brand Warning Color")])]),e("ColorTheme",{attrs:{color:"bg-info"}},[e("h6",[r._v("Brand Info Color")])]),e("ColorTheme",{attrs:{color:"bg-light"}},[e("h6",[r._v("Brand Light Color")])]),e("ColorTheme",{attrs:{color:"bg-dark"}},[e("h6",[r._v("Brand Dark Color")])])],1)],1)],1),e("CCard",[e("CCardHeader",[e("CIcon",{attrs:{name:"cil-drop"}}),r._v(" Grays ")],1),e("CCardBody",[e("CRow",[e("ColorTheme",{attrs:{color:"bg-gray-100"}},[e("h6",[r._v("Brand 100 Color")])]),e("ColorTheme",{attrs:{color:"bg-gray-200"}},[e("h6",[r._v("Brand 200 Color")])]),e("ColorTheme",{attrs:{color:"bg-gray-300"}},[e("h6",[r._v("Brand 300 Color")])]),e("ColorTheme",{attrs:{color:"bg-gray-400"}},[e("h6",[r._v("Brand 400 Color")])]),e("ColorTheme",{attrs:{color:"bg-gray-500"}},[e("h6",[r._v("Brand 500 Color")])]),e("ColorTheme",{attrs:{color:"bg-gray-600"}},[e("h6",[r._v("Brand 600 Color")])]),e("ColorTheme",{attrs:{color:"bg-gray-700"}},[e("h6",[r._v("Brand 700 Color")])]),e("ColorTheme",{attrs:{color:"bg-gray-800"}},[e("h6",[r._v("Brand 800 Color")])]),e("ColorTheme",{attrs:{color:"bg-gray-900"}},[e("h6",[r._v("Brand 900 Color")])])],1)],1)],1)],1)},n=[],s=function(){var r=this,o=r.$createElement,e=r._self._c||o;return e("CCol",{staticClass:"mb-4",attrs:{xl:"2",md:"4",sm:"6",xs:"12"}},[e("div",{class:["theme-color w-75 rounded mb-3",r.color],style:{paddingTop:"75%"}}),r._t("default"),e("ColorView")],2)},a=[],l=function(){var r=this,o=r.$createElement,e=r._self._c||o;return e("table",{staticClass:"w-100"},[e("tbody",[e("tr",[e("td",{staticClass:"text-muted"},[r._v("HEX:")]),e("td",{staticClass:"font-weight-bold"},[r._v(r._s(this.hexColor))])]),e("tr",[e("td",{staticClass:"text-muted"},[r._v("RGB:")]),e("td",{staticClass:"font-weight-bold"},[r._v(r._s(this.bgColor))])])])])},i=[],c=e("36e4"),d={name:"ColorView",data:function(){return{bgColor:"rgb(255, 255, 255)"}},computed:{hexColor:function(){return Object(c["rgbToHex"])(this.bgColor)}},methods:{setColor:function(){var r=this.$parent.$el.children[0],o=window.getComputedStyle(r).getPropertyValue("background-color");this.bgColor=o||this.bgColor}},mounted:function(){this.setColor()}},h=d,u=e("2877"),C=Object(u["a"])(h,l,i,!1,null,null,null),g=C.exports,m={name:"ColorTheme",components:{ColorView:g},props:{color:String}},f=m,b=Object(u["a"])(f,s,a,!1,null,null,null),p=b.exports,v={name:"Colors",components:{ColorTheme:p}},w=v,y=Object(u["a"])(w,t,n,!1,null,null,null);o["default"]=y.exports},"36e4":function(r,o,e){
/*!
  * CoreUI v3.0.0-beta.4 (https://coreui.io)
  * Copyright 2020 Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */
(function(r,e){e(o)})(0,(function(r){"use strict";var o=["sidebar-show","sidebar-sm-show","sidebar-md-show","sidebar-lg-show","sidebar-xl-show"],e=["aside-menu-show","aside-menu-sm-show","aside-menu-md-show","aside-menu-lg-show","aside-menu-xl-show"],t=["sm","md","lg","xl"];function n(r,o){return o.indexOf(r)>-1}var s=function r(o,e){for(var t=0,n=Object.keys(e);t<n.length;t++){var s=n[t];e[s]instanceof Object&&Object.assign(e[s],r(o[s],e[s]))}return Object.assign(o||{},e),o},a=function(){for(var r={},o=document.styleSheets,e="",t=o.length-1;t>-1;t--){for(var n=o[t].cssRules,s=n.length-1;s>-1;s--)if(".ie-custom-properties"===n[s].selectorText){e=n[s].cssText;break}if(e)break}return e=e.substring(e.lastIndexOf("{")+1,e.lastIndexOf("}")),e.split(";").forEach((function(o){if(o){var e=o.split(": ")[0],t=o.split(": ")[1];e&&t&&(r["--"+e.trim()]=t.trim())}})),r},l=10,i=function(){return Boolean(document.documentMode)&&document.documentMode>=l},c=function(r){return r.match(/^--.*/i)},d=function(r,o){var e;if(void 0===o&&(o=document.body),c(r)&&i()){var t=a();e=t[r]}else e=window.getComputedStyle(o,null).getPropertyValue(r).replace(/^\s/,"");return e},h=function(r,o){void 0===o&&(o=document.body);var e="--"+r,t=d(e,o);return t||r},u=function(r){if("undefined"===typeof r)throw new TypeError("Hex color is not defined");var o,e,t,n=r.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!n)throw new Error(r+" is not a valid hex color");return 7===r.length?(o=parseInt(r.slice(1,3),16),e=parseInt(r.slice(3,5),16),t=parseInt(r.slice(5,7),16)):(o=parseInt(r.slice(1,2),16),e=parseInt(r.slice(2,3),16),t=parseInt(r.slice(3,5),16)),"rgba("+o+", "+e+", "+t+")"},C=function(r,o){if(void 0===o&&(o=100),"undefined"===typeof r)throw new TypeError("Hex color is not defined");var e,t,n,s=r.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!s)throw new Error(r+" is not a valid hex color");return 7===r.length?(e=parseInt(r.slice(1,3),16),t=parseInt(r.slice(3,5),16),n=parseInt(r.slice(5,7),16)):(e=parseInt(r.slice(1,2),16),t=parseInt(r.slice(2,3),16),n=parseInt(r.slice(3,5),16)),"rgba("+e+", "+t+", "+n+", "+o/100+")"},g=function(r){if("undefined"===typeof r)throw new TypeError("Hex color is not defined");if("transparent"===r)return"#00000000";var o=r.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!o)throw new Error(r+" is not a valid rgb color");var e="0"+parseInt(o[1],10).toString(16),t="0"+parseInt(o[2],10).toString(16),n="0"+parseInt(o[3],10).toString(16);return"#"+e.slice(-2)+t.slice(-2)+n.slice(-2)};r.asideMenuCssClasses=e,r.checkBreakpoint=n,r.deepObjectsMerge=s,r.getColor=h,r.getStyle=d,r.hexToRgb=u,r.hexToRgba=C,r.rgbToHex=g,r.sidebarCssClasses=o,r.validBreakpoints=t,Object.defineProperty(r,"__esModule",{value:!0})}))}}]);
//# sourceMappingURL=chunk-4e1d4169.00e3fe22.js.map