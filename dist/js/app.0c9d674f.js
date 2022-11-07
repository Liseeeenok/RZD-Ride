(function(){"use strict";var t={2944:function(t,a,i){var s=i(9242),n=i(3396);function e(t,a,i,s,e,r){const o=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(o)}var r={},o=i(89);const l=(0,o.Z)(r,[["render",e]]);var h=l,d=i(2483),c=i(7139);const S=t=>((0,n.dD)("data-v-6f056ad6"),t=t(),(0,n.Cn)(),t),u={class:"status window"},p={class:"lower-part"},v={class:"time-table window"},m={key:0},f=S((()=>(0,n._)("div",{class:"map window"},null,-1))),w=S((()=>(0,n._)("div",{class:"interesting window"},null,-1)));function g(t,a,i,s,e,r){const o=(0,n.up)("Stations"),l=(0,n.up)("Weather");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",u,[(0,n.Wm)(o,{status:this.status},null,8,["status"]),(0,n.Wm)(l,{time:this.time},null,8,["time"])]),(0,n._)("div",p,[(0,n._)("div",v,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.arrStop,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.duration},[(0,n.Uk)((0,c.zw)(t.arrivalShow)+" ",1),t.arrivalShow&&t.departureShow?((0,n.wg)(),(0,n.iD)("span",m,"-")):(0,n.kq)("",!0),(0,n.Uk)(" "+(0,c.zw)(t.departureShow)+" "+(0,c.zw)(t.title),1)])))),128))]),f,w])],64)}var _=i(70),y=i.p+"img/sun-icon.46b9915d.svg";const E=t=>((0,n.dD)("data-v-b1287658"),t=t(),(0,n.Cn)(),t),b={class:"time-and-weather"},D={class:"time"},k=E((()=>(0,n._)("div",{class:"weather"},[(0,n._)("img",{src:y,alt:"",class:"weather-icon"}),(0,n._)("span",{class:"weather-text"},"Ясно, 15°С")],-1)));function H(t,a,i,s,e,r){return(0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("h1",D,(0,c.zw)(i.time),1),k])}var C={name:"Weather",props:{time:{type:String}},data(){return{}}};const U=(0,o.Z)(C,[["render",H],["__scopeId","data-v-b1287658"]]);var T=U;const A={class:"station-info"},R={class:"status-title"},z={class:"status-info"};function j(t,a,i,s,e,r){return(0,n.wg)(),(0,n.iD)("div",A,[(0,n._)("h1",R,(0,c.zw)(i.status[0]),1),(0,n._)("span",z,(0,c.zw)(i.status[1]),1)])}var L={name:"Status",props:{status:{type:Array}}};const O=(0,o.Z)(L,[["render",j],["__scopeId","data-v-fc0f2636"]]);var Z=O,x={components:{Stations:Z,Weather:T},props:{uid:{type:String},date:{type:String}},data(){return{baseURL:"https://mypew.ru:3001/stops",arrStop:[],interval:null,count:0,time:"",status:["",""]}},methods:{async loadTrip(){try{let t=new Date,a=new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours()+parseInt(this.date[21]),t.getUTCMinutes(),t.getUTCSeconds()).toLocaleString();console.log(a);let i=a.slice(6,10)+"-"+a.slice(3,5)+"-"+a.slice(0,2)+" "+a.slice(12,20);this.time=a.slice(12,20);const s=await _.ZP.get(this.baseURL+"?uid="+this.uid+"&date="+this.date.slice(0,10));this.arrStop=s.data.stops,this.arrStop[0].departure>i&&(this.status[0]="Поезд ещё не выехал"),this.arrStop[this.arrStop.length-1].arrival<i&&(this.status[0]="Поезд уже закончил свой маршрут"),console.log(this.arrStop),this.arrStop.forEach(((t,a)=>{t.arrival&&(t.arrivalShow=t.arrival.slice(11,16)),t.departure&&(t.departureShow=t.departure.slice(11,16)),t.departure>i&&t.arrival<i?(this.status[0]="Стоянка на станции "+t.title,a<this.arrStop.length-1&&(this.status[1]="Следующая остановка – "+this.arrStop[a+1].title)):a<this.arrStop.length-1&&t.departure<i&&this.arrStop[this.arrStop.length-1].arrival>i&&(this.status[0]=t.title+" - "+this.arrStop[a+1].title,a<this.arrStop.length-1&&(this.status[1]="Следующая остановка – "+this.arrStop[a+1].title))})),this.interval=setInterval((()=>{let t=new Date,a=new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours()+parseInt(this.date[21]),t.getUTCMinutes(),t.getUTCSeconds()).toLocaleString(),i=a.slice(6,10)+"-"+a.slice(3,5)+"-"+a.slice(0,2)+" "+a.slice(12,20);this.time=a.slice(12,20),this.arrStop.forEach(((t,a)=>{t.departure>i&&t.arrival<=i?(this.status[0]="Стоянка на станции "+t.title,a<this.arrStop.length-1&&(this.status[1]="Следующая остановка – "+this.arrStop[a+1].title)):a<this.arrStop.length-1&&t.departure<=i&&this.arrStop[this.arrStop.length-1].arrival>i&&(this.status[0]=t.title+" - "+this.arrStop[a+1].title,a<this.arrStop.length-1&&(this.status[1]="Следующая остановка – "+this.arrStop[a+1].title))}))}),1e3)}catch(t){alert("Error: "+t)}}},created(){this.loadTrip()}};const P=(0,o.Z)(x,[["render",g],["__scopeId","data-v-6f056ad6"]]);var I=P,Y=(i(7658),i.p+"img/arrows.985ee4d1.svg");const M=t=>((0,n.dD)("data-v-75712972"),t=t(),(0,n.Cn)(),t),F={class:"window search"},W=M((()=>(0,n._)("h1",{class:"header"},"Расписание электричек",-1))),K={class:"form"},V={class:"from"},q=M((()=>(0,n._)("label",{for:"from",class:"from__label"},"Откуда",-1))),$={class:"from__hint"},B=["onClick"],G={class:"to"},J=M((()=>(0,n._)("label",{for:"to",class:"to__label"},"Куда",-1))),N={class:"to__hint"},Q=["onClick"],X=M((()=>(0,n._)("div",{class:"headings"},[(0,n._)("p",null,"Отпр."),(0,n._)("p",null,"Приб."),(0,n._)("p",null,"В пути"),(0,n._)("p",null,"Маршрут")],-1))),tt=M((()=>(0,n._)("hr",null,null,-1))),at={class:"wrapper"},it=["value","onClick"],st={class:"parameters"},nt={class:"parameter"},et={class:"parameter"},rt={class:"parameter"},ot={class:"parameter"},lt=M((()=>(0,n._)("hr",null,null,-1)));function ht(t,a,i,e,r,o){return(0,n.wg)(),(0,n.iD)("main",{style:(0,c.j5)(r.isResultHidden?"justify-content: center":"")},[(0,n._)("div",F,[W,(0,n._)("div",K,[(0,n._)("div",V,[(0,n.wy)((0,n._)("input",{type:"text",id:"from",class:"from__input",placeholder:" ",autocomplete:"off",onClick:a[0]||(a[0]=t=>o.clickStartStation()),"onUpdate:modelValue":a[1]||(a[1]=t=>r.startStation=t)},null,512),[[s.nr,r.startStation]]),q,(0,n._)("div",$,(0,c.zw)(r.fromHint),1),(0,n._)("div",{class:"search-results",style:(0,c.j5)(r.isAvailStart?"display: block":"display: none")},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.arrStartStation,(t=>((0,n.wg)(),(0,n.iD)("button",{onClick:a=>o.addStartStation(t.station_name),class:"element-button",key:t.station_yandex_code},(0,c.zw)(t.station_name),9,B)))),128))],4)]),(0,n._)("img",{src:Y,alt:"",draggable:"false",onClick:a[2]||(a[2]=t=>o.changeStation())}),(0,n._)("div",G,[(0,n.wy)((0,n._)("input",{type:"text",id:"to",class:"to__input",placeholder:" ",autocomplete:"off",onClick:a[3]||(a[3]=t=>o.clickEndStation()),"onUpdate:modelValue":a[4]||(a[4]=t=>r.endStation=t)},null,512),[[s.nr,r.endStation]]),J,(0,n._)("div",N,(0,c.zw)(r.toHint),1),(0,n._)("div",{class:"search-results",style:(0,c.j5)(r.isAvailEnd?"display: block":"display: none")},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.arrEndStation,(t=>((0,n.wg)(),(0,n.iD)("button",{onClick:a=>o.addEndStation(t.station_name),class:"element-button",key:t.station_yandex_code},(0,c.zw)(t.station_name),9,Q)))),128))],4)]),(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":a[5]||(a[5]=t=>r.selectDate=t),type:"date",id:"date",class:"date"},null,512),[[s.nr,r.selectDate]]),(0,n._)("button",{class:"search-button",onClick:a[6]||(a[6]=t=>o.getStation())},"Найти маршруты")])]),(0,n._)("div",{class:"window results",style:(0,c.j5)(r.isResultHidden?"display: none":"")},[X,tt,(0,n._)("div",at,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.arrRoute,(a=>((0,n.wg)(),(0,n.iD)("div",{class:"results-list",key:a.uid,value:a.uid,onClick:i=>{t.$router.push({name:"TripPage",params:{uid:a.uid,date:a.dep}})}},[(0,n._)("div",st,[(0,n._)("span",nt,(0,c.zw)(a.depShow),1),(0,n._)("span",et,(0,c.zw)(a.arrShow),1),(0,n._)("span",rt,(0,c.zw)(a.travelTimeShow),1),(0,n._)("span",ot,(0,c.zw)(a.title),1)]),lt],8,it)))),128))])],4)],4)}var dt={data(){return{startStation:"",endStation:"",baseURL:"https://mypew.ru:3001/routes",findURL:"https://mypew.ru:3001/possible",arrRoute:[],arrStartStation:[],isAvailStart:!1,arrEndStation:[],isAvailEnd:!1,isResultHidden:!0,selectStartStation:!1,selectEndStation:!1,selectDate:"",fromHint:"",toHint:""}},methods:{async changeStartStation(){this.startStation=this.startStation.trimStart();let t=this.startStation;if(""==this.startStation||this.selectStartStation)this.fromHint="",this.selectStartStation=!1,this.isAvailStart=!1,this.arrStartStation=[];else try{0!==this.arrStartStation.length?this.fromHint=this.startStation.trim()+this.arrStartStation[0].station_name.slice(this.startStation.trim().length):this.fromHint="";const a=await _.ZP.get(this.findURL+"?station_name="+this.startStation.trim());t===this.startStation&&(this.arrStartStation=a.data,0!==this.arrStartStation.length?(this.isAvailStart=!0,this.fromHint=this.startStation.trim()+this.arrStartStation[0].station_name.slice(this.startStation.trim().length)):(this.fromHint="",this.arrStartStation=[],this.isAvailStart=!1))}catch(a){alert("Error: "+a)}},async changeEndStation(){this.endStation=this.endStation.trimStart();let t=this.endStation;if(""==this.endStation||this.selectEndStation)this.toHint="",this.selectEndStation=!1,this.isAvailEnd=!1,this.arrEndStation=[];else try{0!==this.arrEndStation.length?this.toHint=this.endStation.trim()+this.arrEndStation[0].station_name.slice(this.endStation.trim().length):this.toHint="";const a=await _.ZP.get(this.findURL+"?station_name="+this.endStation);t===this.endStation&&(this.arrEndStation=a.data,0!==this.arrEndStation.length?(this.isAvailEnd=!0,this.toHint=this.endStation.trim()+this.arrEndStation[0].station_name.slice(this.endStation.trim().length)):(this.toHint="",this.arrEndStation=[],this.isAvailEnd=!1))}catch(a){alert("Error: "+a)}},clickStartStation(){this.selectStartStation=!1,this.arrEndStation=[],this.isAvailEnd=!1,this.changeStartStation()},clickEndStation(){this.selectEndStation=!1,this.arrStartStation=[],this.isAvailStart=!1,this.changeEndStation()},addStartStation(t){this.selectStartStation=!0,this.startStation=t,this.arrStartStation=[],this.isAvailStart=!1,this.fromHint=""},addEndStation(t){this.selectEndStation=!0,this.endStation=t,this.arrEndStation=[],this.isAvailEnd=!1,this.toHint=""},async getStation(){if(this.arrStartStation=[],this.isAvailEnd=!1,this.arrEndStation=[],this.isAvailStart=!1,this.isResultHidden=!1,""!=this.startStation&&""!=this.endStation&&""!=this.selectDate)try{const t=await _.ZP.get(this.baseURL+"?from="+this.startStation+"&to="+this.endStation+"&transport_types=suburban&date="+this.selectDate);this.arrRoute=t.data,console.log(this.arrRoute),this.arrRoute.map((t=>{t.hour=t.dep[21],t.depShow=t.dep.slice(11,16),t.arrShow=t.arr.slice(11,16);let a=(new Date(t.arr)-new Date(t.dep))/6e4,i=0;a>=60?(i=Math.trunc(a/60),t.travelTimeShow=i+" ч "):t.travelTimeShow="",t.travelTimeShow+=a-60*i+" м"}))}catch(t){alert("Error: "+t)}},changeStation(){this.selectStartStation=!0,this.arrEndStation=[],this.isAvailEnd=!1,this.selectEndStation=!0,this.arrStartStation=[],this.isAvailStart=!1;let t=this.startStation;this.startStation=this.endStation,this.endStation=t}},watch:{startStation:function(){this.changeStartStation()},endStation:function(){this.changeEndStation()}},created(){let t=(new Date).toLocaleDateString();this.selectDate=t.slice(6,10)+"-"+t.slice(3,5)+"-"+t.slice(0,2),document.addEventListener("click",(()=>{this.selectStartStation=!1,this.arrEndStation=[],this.isAvailEnd=!1,this.selectEndStation=!1,this.arrStartStation=[],this.isAvailStart=!1,this.fromHint="",this.toHint=""}))}};const ct=(0,o.Z)(dt,[["render",ht],["__scopeId","data-v-75712972"]]);var St=ct;const ut=[{path:"/trip/:uid/:date",name:"TripPage",component:I,props:!0},{path:"/",component:St}],pt=(0,d.p7)({routes:ut,history:(0,d.r5)("/RZD-Ride-Frontend/")});var vt=pt;(0,s.ri)(h).use(vt).mount("#app")}},a={};function i(s){var n=a[s];if(void 0!==n)return n.exports;var e=a[s]={exports:{}};return t[s](e,e.exports,i),e.exports}i.m=t,function(){var t=[];i.O=function(a,s,n,e){if(!s){var r=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],e=t[d][2];for(var o=!0,l=0;l<s.length;l++)(!1&e||r>=e)&&Object.keys(i.O).every((function(t){return i.O[t](s[l])}))?s.splice(l--,1):(o=!1,e<r&&(r=e));if(o){t.splice(d--,1);var h=n();void 0!==h&&(a=h)}}return a}e=e||0;for(var d=t.length;d>0&&t[d-1][2]>e;d--)t[d]=t[d-1];t[d]=[s,n,e]}}(),function(){i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,{a:a}),a}}(),function(){i.d=function(t,a){for(var s in a)i.o(a,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:a[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){i.p="/RZD-Ride-Frontend/"}(),function(){var t={143:0};i.O.j=function(a){return 0===t[a]};var a=function(a,s){var n,e,r=s[0],o=s[1],l=s[2],h=0;if(r.some((function(a){return 0!==t[a]}))){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(l)var d=l(i)}for(a&&a(s);h<r.length;h++)e=r[h],i.o(t,e)&&t[e]&&t[e][0](),t[e]=0;return i.O(d)},s=self["webpackChunkrzd_ride_frontend"]=self["webpackChunkrzd_ride_frontend"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(2944)}));s=i.O(s)})();
//# sourceMappingURL=app.0c9d674f.js.map