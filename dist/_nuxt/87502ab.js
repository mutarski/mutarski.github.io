(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{284:function(e,t,n){var content=n(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(110).default)("5c170589",content,!0,{sourceMap:!1})},285:function(e,t,n){"use strict";n(284)},286:function(e,t,n){var r=n(109)(!1);r.push([e.i,"\n.prompt-box[data-v-2d941338] {\n    position: relative;\n    overflow: hidden;\n    padding: 1em;\n    margin-bottom: 24px;\n    transform: scaleY(1);\n}\n.location[data-v-2d941338] {\n    margin-bottom: 0;\n}\n.location > .icon[data-v-2d941338] {\n    margin-left: 10px;\n}\n.list-group[data-v-2d941338] {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n",""]),e.exports=r},288:function(e,t,n){"use strict";n.r(t);var r=n(12),o=(n(64),n(78)),v={fetch:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,r=e.error,o=e.params,t.prev=1,t.next=4,n.dispatch("events/fetchEvent",o.id);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),r({statusCode:503,message:"Unable to fetch event #"+o.id});case 9:case"end":return t.stop()}}),t,null,[[1,6]])})))()},head:function(){return{title:this.event.title,meta:[{hid:"description",name:"description",content:"What you need to know about "+this.event.title}]}},computed:Object(o.b)({event:function(e){return e.events.event}})},c=(n(285),n(33)),component=Object(c.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"event-header"},[n("span",{staticClass:"eyebrow"},[e._v("\n      @"+e._s(e.event.time)+" on "+e._s(e.event.date)+"\n    ")]),e._v(" "),n("h1",{staticClass:"title"},[e._v("\n      "+e._s(e.event.title)+"\n    ")]),e._v(" "),n("h5",[e._v("Organized by "+e._s(e.event.organizer?e.event.organizer.name:""))]),e._v(" "),n("h5",[e._v("Category: "+e._s(e.event.category))])]),e._v(" "),e._m(0),e._v(" "),n("address",[e._v(e._s(e.event.location))]),e._v(" "),n("h2",[e._v("Event details")]),e._v(" "),n("p",[e._v(e._s(e.event.description))]),e._v(" "),n("h2",[e._v("\n    Attendees\n    "),n("span",{staticClass:"badge -fill-gradient"},[e._v("\n      "+e._s(e.event.attendees?e.event.attendees.length:0)+"\n    ")])]),e._v(" "),n("ul",{staticClass:"list-group"},e._l(e.event.attendees,(function(t,r){return n("li",{key:r,staticClass:"list-item"},[n("b",[e._v(e._s(t.name))])])})),0)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{attrs:{name:"map"}},[n("h2",[e._v("Location")])])}],!1,null,"2d941338",null);t.default=component.exports}}]);