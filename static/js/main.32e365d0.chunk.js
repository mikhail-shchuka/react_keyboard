(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),r=n(4),c=n(5),o=n(7),i=n(6),d=n(1),p=n.n(d),u=n(0),l=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={pressedKey:""},e.handlerEvent=function(t){e.setState({pressedKey:t.key})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handlerEvent)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handlerEvent)}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("p",{className:"App__message",children:this.state.pressedKey?"The last pressed key is ".concat(this.state.pressedKey):"Nothing was pressed yet"})})}}]),n}(p.a.Component);n(13);a.a.render(Object(u.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.32e365d0.chunk.js.map