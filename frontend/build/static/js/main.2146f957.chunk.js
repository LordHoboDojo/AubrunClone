(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(t,e,a){},67:function(t,e,a){},68:function(t,e,a){},69:function(t,e,a){},70:function(t,e,a){"use strict";a.r(e);var r=a(30),n=a.n(r),c=a(16),s=a(33),i=a(7),o=a(8),l=a(10),d=a(9),h=a(1),j=a(2),u=a(12),f=a.n(u),b=a(15),p=(a(39),a(31)),g=a.n(p),O="99.125.121.169",v="3100";function m(t){return x.apply(this,arguments)}function x(){return(x=Object(b.a)(f.a.mark((function t(e){var a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={},r={},t.next=4,navigator.geolocation.getCurrentPosition(function(){var t=Object(b.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.lat=e.coords.latitude,r.lng=e.coords.longitude;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:return t.next=6,g.a.post("http://".concat(O,":").concat(v,"/api/info"),{place:e,coords:r}).then((function(t){a.code=t.data.code,a.coords=t.data.coords,a.hotels=t.data.hotels,a.restaurants=t.data.restaurants,a.flights=t.data.flights}));case 6:return t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var y=a(0),N=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.setState({loaded:!1,loadProgress:0,loadID:setInterval((function(){if(t.state.loadProgress>=100)clearInterval(t.state.loadID),setTimeout((function(){document.getElementById("load-shell").classList.add("hide","load-fade"),document.getElementById("load-bar").classList.add("hide","load-fade"),document.getElementById("load-loading").classList.add("hide","load-fade"),document.getElementById("load-container").classList.add("hide","load-fade"),setTimeout((function(){return t.setState({loaded:!0})}),750)}),500);else{t.setState({loaded:t.state.loaded,loadProgress:t.state.loadProgress+1,loadID:t.state.loadID});var e=document.getElementById("load-bar");e&&e.style.setProperty("--percent",parseInt(getComputedStyle(e).getPropertyValue("--percent"))+1)}}),25)})}},{key:"render",value:function(){return Object(y.jsx)("div",{id:"load",children:Object(y.jsxs)("svg",{id:"load-container",width:"100%",height:"100%",children:[Object(y.jsx)("circle",{id:"load-shell",className:"load-circle",cx:"50%",cy:"50%",r:"20%"}),Object(y.jsx)("circle",{id:"load-bar",className:"load-circle",cx:"50%",cy:"50%",r:"20%"}),Object(y.jsx)("text",{id:"load-loading",x:"50%",y:"50%",alignmentBaseline:"central",children:"LOADING"})]})})}}]),a}(h.Component),w=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).state={loading:!1},t}return Object(o.a)(a,[{key:"getData",value:function(){var t=Object(b.a)(f.a.mark((function t(e){var a=this;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({loading:!0}),m(e).then((function(t){-1===t.code?a.setState({loading:!1,redirect:"/error"}):a.setState({loading:!1,redirect:"/information",data:{location:e.toUpperCase(),coords:t.coords,flights:t.flights,hotels:t.hotels,food:t.restaurants}})}));case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return this.state.redirect?Object(y.jsx)(j.a,{to:{pathname:this.state.redirect,state:this.state.data}}):this.state.loading?Object(y.jsx)(N,{}):Object(y.jsx)("div",{id:"search-bar",children:Object(y.jsx)("input",{id:"search-input",type:"text",placeholder:"Search Destination...",onKeyUp:function(e){var a=document.getElementById("search-input").value;"Enter"===e.key&&a&&t.getData(a)}})})}}]),a}(h.Component),k=a(17);a(67);function I(t){if(!t)return"N/A";var e=t.split("T"),a=e[0],r=e[1],n=a.split("-"),c=r.split(":"),s="".concat([12,1,2,3,4,5,6,7,8,9,10,11][parseInt(c[0])%12],":").concat(c[1]).concat(parseInt(c[0])>=12?"PM":"AM");return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(n[1])-1]," ").concat(parseInt(n[2])," ").concat(s)}var A=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).state={},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props;return Object(y.jsxs)("div",{className:"info-container-item flight",children:[Object(y.jsxs)("div",{className:"flight-carrier",children:[Object(y.jsx)("b",{style:{color:"var(--gray1)"},children:"Carrier"}),Object(y.jsx)("span",{style:{float:"right"},children:t.carrier})]}),Object(y.jsxs)("div",{className:"flight-from",children:[Object(y.jsx)("b",{style:{color:"var(--gray1)"},children:"From"}),Object(y.jsx)("span",{style:{float:"right"},children:t.from})]}),Object(y.jsxs)("div",{className:"flight-to",children:[Object(y.jsx)("b",{style:{color:"var(--gray1)"},children:"To"}),Object(y.jsx)("span",{style:{float:"right"},children:t.to})]}),Object(y.jsxs)("div",{className:"flight-dtime",children:[Object(y.jsx)("b",{style:{color:"var(--gray1)"},children:"Departure"}),Object(y.jsx)("span",{style:{float:"right"},children:I(t.dtime)})]}),Object(y.jsxs)("div",{className:"flight-price",children:[Object(y.jsx)("b",{style:{color:"var(--gray1)"},children:"Price"}),Object(y.jsx)("span",{style:{float:"right"},children:t.price})]}),Object(y.jsxs)("div",{className:"flight-price",children:[Object(y.jsx)("b",{style:{color:"var(--gray1)"},children:"ID"}),Object(y.jsx)("span",{style:{float:"right"},children:t.number})]})]})}}]),a}(h.Component),M=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).state={},t}return Object(o.a)(a,[{key:"render",value:function(){for(var t=this.props,e="",a=0;a<t.pricing;a+=1)e+="$";return""===e&&(e="N/A"),Object(y.jsxs)("div",{className:"info-container-item hotel",children:[Object(y.jsxs)("div",{className:"hotel-company",children:[Object(y.jsx)("b",{style:{color:"var(--gray1)"},children:"Name"}),Object(y.jsx)("span",{style:{float:"right"},children:t.name})]}),Object(y.jsxs)("div",{className:"hotel-address",children:[Object(y.jsx)("b",{style:{color:"var(--gray1)"},children:"Address"}),Object(y.jsx)("span",{style:{float:"right",fontSize:"1vw"},children:t.address})]}),Object(y.jsxs)("div",{className:"food-rating",children:[Object(y.jsx)("b",{style:{color:"var(--gray1)"},children:"Rating"}),"   ",Object(y.jsx)("span",{style:{float:"right"},children:t.rating})]}),Object(y.jsxs)("div",{className:"hotel-price",children:[Object(y.jsx)("b",{style:{color:"var(--gray1)"},children:"Pricing"}),Object(y.jsx)("span",{style:{float:"right"},children:e})]}),Object(y.jsx)("div",{className:"hotel-img",style:{justifyContent:"center",margin:0},children:Object(y.jsx)("img",{style:{display:"block",justifyContent:"center",margin:"auto",padding:"15px 0px 5px",width:"90%",height:"40%"},src:"https://maps.googleapis.com/maps/api/place/photo?photoreference=".concat(t.icon,"&sensor=false&maxheight=250&maxwidth=300&key=","AIzaSyBV8lnOmU9codUueVoNsS-zAWflAuUAFaE"),alt:"img"})})]})}}]),a}(h.Component),C=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).state={},t}return Object(o.a)(a,[{key:"render",value:function(){for(var t=this.props,e="",a=0;a<t.pricing;a+=1)e+="$";return""===e&&(e="N/A"),Object(y.jsxs)("div",{className:"info-container-item food",children:[Object(y.jsxs)("div",{className:"food-name",children:[Object(y.jsx)("b",{style:{color:"var(--gray1)"},children:"Name"}),"   ",Object(y.jsx)("span",{style:{float:"right"},children:t.name})]}),Object(y.jsxs)("div",{className:"food-distance",children:[Object(y.jsx)("b",{style:{color:"var(--gray1)"},children:"Distance"}),"   ",Object(y.jsx)("span",{style:{float:"right"},children:t.distance})]}),Object(y.jsxs)("div",{className:"food-rating",children:[Object(y.jsx)("b",{style:{color:"var(--gray1)"},children:"Rating"}),"   ",Object(y.jsx)("span",{style:{float:"right"},children:t.rating})]}),Object(y.jsxs)("div",{className:"food-price",children:[Object(y.jsx)("b",{style:{color:"var(--gray1)"},children:"Pricing"}),"   ",Object(y.jsx)("span",{style:{float:"right"},children:e})]}),Object(y.jsx)("div",{className:"food-img",style:{justifyContent:"center",margin:0},children:Object(y.jsx)("img",{style:{display:"block",justifyContent:"center",margin:"auto",padding:"15px 0px 5px",width:"90%",height:"40%"},src:"https://maps.googleapis.com/maps/api/place/photo?photoreference=".concat(t.icon,"&sensor=false&maxheight=250&maxwidth=300&key=","AIzaSyBV8lnOmU9codUueVoNsS-zAWflAuUAFaE"),alt:"img"})})]})}}]),a}(h.Component),S=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).state={},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props.location.state;t.hotels.sort((function(e,a){if(e.name.length>=27)return 1;if(a.name.length>=27)return-1;if(e.rating!==a.rating)return e.rating<a.rating?1:-1;var r=69.172;return Math.sqrt(Math.pow(r*(t.coords.lat-e.coords.lat),2)+Math.pow(r*(t.coords.lng-e.coords.lng),2))<Math.sqrt(Math.pow(r*(t.coords.lat-a.coords.lat),2)+Math.pow(r*(t.coords.lng-a.coords.lng),2))?-1:1})),t.food.sort((function(e,a){if(e.name.length>=27)return 1;if(a.name.length>=27)return-1;if(e.rating!==a.rating)return e.rating<a.rating?1:-1;var r=69.172;return Math.sqrt(Math.pow(r*(t.coords.lat-e.coords.lat),2)+Math.pow(r*(t.coords.lng-e.coords.lng),2))<Math.sqrt(Math.pow(r*(t.coords.lat-a.coords.lat),2)+Math.pow(r*(t.coords.lng-a.coords.lng),2))?-1:1}));var e,a=[],r=[],n=[],c=0,s=Object(k.a)(t.flights);try{for(s.s();!(e=s.n()).done;){var i=e.value;if(c>=7)break;a.push(Object(y.jsx)(A,{carrier:i.airline,from:i.departureAirport,to:i.destinationAirport,dtime:i.departureTime,price:i.price,number:i.flightNumber},"flight_".concat(c))),c+=1}}catch(p){s.e(p)}finally{s.f()}c=0;var o,l=Object(k.a)(t.hotels);try{for(l.s();!(o=l.n()).done;){var d=o.value;if(c>=6)break;console.log(d.price_level),console.log(void 0===d.price_level),r.push(Object(y.jsx)(M,{name:d.name,address:d.address,rating:d.rating,pricing:d.price_level,icon:d.icon},"hotel_".concat(c))),c+=1}}catch(p){l.e(p)}finally{l.f()}c=0;var h,j=Object(k.a)(t.food);try{for(j.s();!(h=j.n()).done;){var u=h.value;if(c>=6)break;var f=69.172,b=Math.sqrt(Math.pow(f*(t.coords.lat-u.coords.lat),2)+Math.pow(f*(t.coords.lng-u.coords.lng),2));b="".concat(b.toFixed(2)," mi"),n.push(Object(y.jsx)(C,{name:u.name,distance:b,rating:u.rating,pricing:u.price_level,icon:u.icon},"food_".concat(c))),c+=1}}catch(p){j.e(p)}finally{j.f()}return Object(y.jsxs)("div",{id:"information",children:[Object(y.jsx)("div",{id:"info-loc",children:"Travel Information"}),Object(y.jsxs)("div",{id:"info-coords",onClick:function(){window.open("https://www.google.com/search?q=".concat("".concat(t.coords.lat,"\xb0, ").concat(t.coords.lng,"\xb0")),"_blank")},children:[t.coords.lat,"\xb0, ",t.coords.lng,"\xb0"]}),Object(y.jsx)("div",{id:"info-covid",children:"266940+ Active Covid Cases, 101032 per million"}),Object(y.jsx)("div",{className:"info-title",children:"Available Flights"}),Object(y.jsx)("div",{id:"info-flights",className:"info-container",children:a}),Object(y.jsx)("div",{className:"info-title",children:"Available Hotels"}),Object(y.jsx)("div",{id:"info-hotels",className:"info-container",children:r}),Object(y.jsx)("div",{className:"info-title",children:"Recommended Restaurants"}),Object(y.jsx)("div",{id:"info-food",className:"info-container",children:n})]})}}]),a}(h.Component),D=(a(68),function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).state={},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(y.jsx)("div",{id:"error",children:Object(y.jsx)("div",{id:"error-text",children:"Oh no! It seems the location you chose doesn't exist. If you feel this is an error, please contact our site administrators."})})}}]),a}(h.Component)),P=(a(69),function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).state={},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(y.jsx)("div",{id:"website",children:Object(y.jsxs)(j.d,{children:[Object(y.jsx)(j.b,{path:"/error",children:Object(y.jsx)(D,{})}),Object(y.jsx)(j.b,{path:"/information",render:function(t){return Object(y.jsx)(S,Object(s.a)({},t))}}),Object(y.jsx)(j.b,{path:"/*",children:Object(y.jsx)(w,{})})]})})}}]),a}(h.Component));n.a.render(Object(y.jsx)(c.a,{children:Object(y.jsx)(P,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.2146f957.chunk.js.map