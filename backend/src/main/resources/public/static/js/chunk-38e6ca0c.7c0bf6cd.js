(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38e6ca0c"],{bd76:function(e,r,t){"use strict";var s=[{username:"Samppa Nori",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Estavan Lykos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Chetan Mohamed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Derick Maximinus",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Friderik Dávid",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Yiorgos Avraamu",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Avram Tarasios",registered:"2012/02/01",role:"Staff",status:"Banned",_classes:"table-success"},{username:"Quintin Ed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Enéas Kwadwo",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Agapetus Tadeáš",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Carwyn Fachtna",registered:"2012/01/01",role:"Member",status:"Active",_classes:"table-success"},{username:"Nehemiah Tatius",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Ebbe Gemariah",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Eustorgios Amulius",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Leopold Gáspár",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Pompeius René",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Paĉjo Jadon",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Micheal Mercurius",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Ganesha Dubhghall",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Hiroto Šimun",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Vishnu Serghei",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Zbyněk Phoibos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Einar Randall",registered:"2012/02/01",role:"Admin",status:"Inactive",_classes:"table-danger"},{username:"Félix Troels",registered:"2012/03/21",role:"Staff",status:"Active"},{username:"Aulus Agmundr",registered:"2012/01/01",role:"Member",status:"Pending"}];r["a"]=s},eeca:function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("CRow",[t("CCol",{attrs:{col:"12",lg:"6"}},[t("CCard",[t("CCardHeader",[e._v(" User id: "+e._s(e.$route.params.id)+" ")]),t("CCardBody",[t("CDataTable",{attrs:{striped:"",small:"",fixed:"",items:e.visibleData,fields:e.fields}})],1),t("CCardFooter",[t("CButton",{attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],1)],1)],1)],1)},a=[],n=(t("4de4"),t("7db0"),t("d81d"),t("4fad"),t("3835")),i=t("bd76"),u={name:"User",computed:{fields:function(){return[{key:"key",label:this.username,_style:"width:150px"},{key:"value",label:"",_style:"width:150px;"}]},userData:function(){var e=this.$route.params.id,r=i["a"].find((function(r,t){return t+1==e})),t=r?Object.entries(r):[["id","Not found"]];return t.map((function(e){var r=Object(n["a"])(e,2),t=r[0],s=r[1];return{key:t,value:s}}))},visibleData:function(){return this.userData.filter((function(e){return"username"!==e.key}))},username:function(){return this.userData.filter((function(e){return"username"===e.key}))[0].value}},methods:{goBack:function(){this.$router.go(-1)}}},d=u,o=t("2877"),l=Object(o["a"])(d,s,a,!1,null,null,null);r["default"]=l.exports}}]);
//# sourceMappingURL=chunk-38e6ca0c.7c0bf6cd.js.map