(this["webpackJsonpreact-test-atm"]=this["webpackJsonpreact-test-atm"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(8),i=n.n(a),l=(n(14),n(6)),u=n(5),r=n(9),b=n(2),o=(n(15),n(0));var j=function(e){var t=e.banknote,n=e.banknoteKey;return Object(o.jsxs)("li",{className:"banknotes__item",children:[Object(o.jsxs)("h2",{className:"banknotes__title",children:["\u041a\u0443\u043f\u044e\u0440 \u043d\u043e\u043c\u0438\u043d\u0430\u043b\u043e\u043c ",n,":"]}),Object(o.jsxs)("p",{className:"banknotes__value",children:[t," \u0448\u0442."]})]})};n(17);var m=function(e){var t=e.state,n=e.limits;return Object(o.jsx)("ul",{className:"banknotes ".concat(t?"banknotes_active":""),children:function(e){var t=[];for(var n in e){var c=parseInt(n);t.push(Object(o.jsx)(j,{banknoteKey:c,banknote:e[c]},n))}return t}(n)})};n(18);var p=function(e){var t=e.inputValue,n=e.setInputValue,s=Object(c.useState)([]),a=Object(b.a)(s,2),i=a[0],u=a[1];function r(e){u(t.split("")),u((function(t){return[].concat(Object(l.a)(t),[e])}))}return Object(c.useEffect)((function(){n(i.join(""))}),[i,n]),Object(o.jsxs)("ul",{className:"numpad",children:[Object(o.jsx)("li",{className:"numpad__item",children:Object(o.jsx)("button",{type:"button",onClick:function(){r("1")},className:"numpad__btn",children:"1"})}),Object(o.jsx)("li",{className:"numpad__item",children:Object(o.jsx)("button",{type:"button",onClick:function(){r("2")},className:"numpad__btn",children:"2"})}),Object(o.jsx)("li",{className:"numpad__item",children:Object(o.jsx)("button",{type:"button",onClick:function(){r("3")},className:"numpad__btn",children:"3"})}),Object(o.jsx)("li",{className:"numpad__item",children:Object(o.jsx)("button",{type:"button",onClick:function(){r("4")},className:"numpad__btn",children:"4"})}),Object(o.jsx)("li",{className:"numpad__item",children:Object(o.jsx)("button",{type:"button",onClick:function(){r("5")},className:"numpad__btn",children:"5"})}),Object(o.jsx)("li",{className:"numpad__item",children:Object(o.jsx)("button",{type:"button",onClick:function(){r("6")},className:"numpad__btn",children:"6"})}),Object(o.jsx)("li",{className:"numpad__item",children:Object(o.jsx)("button",{type:"button",onClick:function(){r("7")},className:"numpad__btn",children:"7"})}),Object(o.jsx)("li",{className:"numpad__item",children:Object(o.jsx)("button",{type:"button",onClick:function(){r("8")},className:"numpad__btn",children:"8"})}),Object(o.jsx)("li",{className:"numpad__item",children:Object(o.jsx)("button",{type:"button",onClick:function(){r("9")},className:"numpad__btn",children:"9"})}),Object(o.jsx)("li",{className:"numpad__item",children:Object(o.jsx)("button",{type:"button",className:"numpad__btn",disabled:!0})}),Object(o.jsx)("li",{className:"numpad__item",children:Object(o.jsx)("button",{type:"button",onClick:function(){r("0")},className:"numpad__btn",children:"0"})}),Object(o.jsx)("li",{className:"numpad__item",children:Object(o.jsx)("button",{type:"button",onClick:function(){u(t.split("")),u((function(e){return e.slice(0,-1)}))},className:"numpad__btn",children:"\u21a9"})})]})};n(19);var _=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),i=Object(b.a)(a,2),j=i[0],_=i[1],d=Object(c.useState)({5e3:"100",2e3:"400",1e3:"1000",500:"3000",200:"5000",100:"8000",50:"10000"}),O=Object(b.a)(d,2),f=O[0],h=O[1],x=Object(c.useState)(0),N=Object(b.a)(x,2),v=N[0],k=N[1],y=Object(c.useState)(!1),C=Object(b.a)(y,2),I=C[0],S=C[1];function g(e,t){return function e(n,c){if(0===n)return{};if(c.length)for(var s=c[0],a=parseInt(t[s]),i=Math.floor(n/s),l=Math.min(a,i);l>=0;l--){var b=e(n-l*s,c.slice(1));if(b)return l?Object(r.a)(Object(u.a)({},s,l),b):b}}(e,Object.keys(t).map(Number).sort((function(e,t){return t-e})))}function J(e){e.preventDefault(),v<parseInt(n)?alert("\u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432"):parseInt(n)%50!==0?alert("\u0441\u0443\u043c\u043c\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043a\u0440\u0430\u0442\u043d\u0430 50"):parseInt(n)?(!function(e){_([]);var t=function(t){_((function(n){return[].concat(Object(l.a)(n),[{nominal:t,banknotes:e[t]}])}))};for(var n in e)t(n)}(g(parseInt(n),f)),function(e){var t=JSON.parse(JSON.stringify(f));if(void 0!==e)for(var n in t){var c=parseInt(n);e[c]&&(t[c]=t[c]-parseInt(e[c]))}h(t)}(g(parseInt(n),f)),s("")):alert("\u0432\u0432\u0435\u0441\u0442\u0438 \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0438\u0441\u043b\u0430")}function V(e){switch(e){case"1":h({5e3:"100",2e3:"400",1e3:"1000",500:"3000",200:"5000",100:"8000",50:"10000"});break;case"2":h({5e3:"476",2e3:"345",1e3:"6741",500:"4362",200:"234",100:"1643",50:"3450"});break;case"3":h({5e3:"234",2e3:"678",1e3:"845",500:"2451",200:"9654",100:"2345",50:"234"});break;case"4":h({5e3:"546",2e3:"562",1e3:"2543",500:"4365",200:"2154",100:"124",50:"342"});break;case"5":h({5e3:"2732",2e3:"347",1e3:"479",500:"7556",200:"3296",100:"1257",50:"3854"});break;case"6":h({5e3:"73",2e3:"147",1e3:"279",500:"356",200:"696",100:"857",50:"854"})}}return Object(c.useEffect)((function(){var e=0;for(var t in f){var n=parseInt(t);f&&(e+=n*parseInt(f[n]))}k(e)}),[f]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("ul",{className:"presets",children:[Object(o.jsx)("li",{className:"presets__item",children:Object(o.jsx)("button",{type:"button",onClick:function(){V("1")},className:"presets__btn",value:"1",children:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 1"})}),Object(o.jsx)("li",{className:"presets__item",children:Object(o.jsx)("button",{type:"button",onClick:function(){V("2")},className:"presets__btn",value:"2",children:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 2"})}),Object(o.jsx)("li",{className:"presets__item",children:Object(o.jsx)("button",{type:"button",onClick:function(){V("3")},className:"presets__btn",value:"3",children:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 3"})}),Object(o.jsx)("li",{className:"presets__item",children:Object(o.jsx)("button",{type:"button",onClick:function(){V("4")},className:"presets__btn",value:"4",children:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 4"})}),Object(o.jsx)("li",{className:"presets__item",children:Object(o.jsx)("button",{type:"button",onClick:function(){V("5")},className:"presets__btn",value:"5",children:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 5"})}),Object(o.jsx)("li",{className:"presets__item",children:Object(o.jsx)("button",{type:"button",onClick:function(){V("6")},className:"presets__btn",value:"6",children:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 6"})})]}),Object(o.jsxs)("form",{className:"form",action:"./",onSubmit:function(e){J(e)},children:[Object(o.jsx)("input",{type:"number",className:"form__input",value:n||"",onChange:function(e){s(e.target.value)}}),Object(o.jsx)("button",{className:"form__btn",type:"submit",children:"\u0432\u044b\u0434\u0430\u0442\u044c"})]}),Object(o.jsxs)("div",{className:"result",children:[Object(o.jsxs)("div",{className:"result__values",children:[j.map((function(e,t){return Object(o.jsx)("p",{className:"result__value",children:"\u041a\u0443\u043f\u044e\u0440\u044b \u043d\u043e\u043c\u0438\u043d\u0430\u043b\u043e\u043c "+e.nominal+": "+e.banknotes+"\u0448\u0442, "},t)})),Object(o.jsxs)("p",{className:"result__value",children:["\u041e\u0441\u0442\u0430\u0442\u043e\u043a: ",v]})]}),Object(o.jsx)("div",{className:"result__banknotes",children:Object(o.jsx)("button",{type:"button",onClick:function(){S((function(e){return!e}))},"aria-label":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043e\u0441\u0442\u0430\u0442\u043e\u043a \u0431\u0430\u043d\u043a\u043d\u043e\u0442",className:"result__banknotes-btn"})}),Object(o.jsx)(m,{state:I,limits:f})]}),Object(o.jsx)(p,{inputValue:n,setInputValue:s})]})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.8ca0ab1f.chunk.js.map