(this["webpackJsonpcsc-site"]=this["webpackJsonpcsc-site"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),r=n(8),a=n.n(r),s=(n(13),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),r(t),a(t)}))}),o=n(2),d=n(3),l=n(5),u=n(4),h=(n(14),n.p+"static/media/header-background.ee974860.svg"),b=n(0),j=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{id:"header",children:[Object(b.jsx)("img",{src:h,id:"background-svg"}),Object(b.jsx)("div",{id:"shs-pill",class:"header-pill",children:Object(b.jsx)("h1",{id:"shs-pill-text",children:"SHS"})}),Object(b.jsx)("div",{id:"csc-pill-container",children:Object(b.jsx)("div",{id:"csc-pill",class:"header-pill",children:Object(b.jsx)("h1",{id:"csc-pill-text",children:"Computer Science Club"})})})]})}}]),n}(c.a.Component),O=(n(16),n.p+"static/media/remind-logo.c70acf9b.svg"),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"joinRemind",value:function(){window.open("https://www.remind.com/join/shscsc","_blank")}},{key:"render",value:function(){return Object(b.jsxs)("div",{id:"remind-section",children:[Object(b.jsx)("div",{id:"remind-circle",onClick:this.joinRemind,children:Object(b.jsx)("img",{src:O})}),Object(b.jsx)("div",{id:"remind-text-container",children:Object(b.jsx)("p",{id:"remind-text",children:"Click to Join Our Remind"})})]})}}]),n}(c.a.Component),v=n.p+"static/media/arrow.af44352b.svg",f=(n(17),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{id:"wwd-container",children:[Object(b.jsx)("div",{id:"wwd-button",children:Object(b.jsx)("p",{id:"wwd-text",children:"What We Do"})}),Object(b.jsx)("div",{id:"wwd-line"})]})}}]),n}(c.a.Component)),x=n(6),m=(n(18),n(19),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={title:t.title,body:t.body,color:t.color?t.color:"navy",c:i.props.c},i}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{class:"card "+this.props.c,style:{backgroundColor:this.state.color},children:[Object(b.jsx)("h1",{class:"card-header",children:this.state.title},this.state.title),Object(b.jsx)("p",{class:"card-desc",children:this.state.body},this.state.body)]},this.state.color)}}]),n}(c.a.Component)),y=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).cardsData=[{title:"Compete",body:"The computer science club participates in many coding contests throughout the year, and we host our own Hackathon at Stratford. Prepare with the club, find teammates at the club, and win with the club.",color:"#23049D",class_:"card-1"},{title:"Volunteer",body:"The computer science club gives members access to many volunteering opportunities. Participate in LetsCode, an entirely student ran coding camp, or join us in teaching at FamilyPoint, or get involved in the CS community by helping the club host our annual Hackathon!",color:"#5e177a",class_:"card-2"},{title:"Tutor",body:"Need to improve in your CS classes? Get tutoring from students in the club! Want to give back? Come tutor for the club! The CS club is dedicated to being a space where everyone can get better at coding.",color:"#3F0071",class_:"card-3"},{title:"Collaborate",body:"Coding is better together. Find friends to work on projects together or experts in CS fields you want to learn at the CS club. The coding club helps set up teams for personal projects, coding contests, and even larger club-wide programs.",color:"#4b049d",class_:"card-4"}],i.state={current_index:0,data:i.cardsData},i.inc=i.inc.bind(Object(x.a)(i)),i.dec=i.dec.bind(Object(x.a)(i)),i}return Object(d.a)(n,[{key:"inc",value:function(){this.setState({current_index:(this.state.current_index+1)%this.state.data.length})}},{key:"dec",value:function(){this.setState({current_index:(this.state.current_index-1)%this.state.data.length})}},{key:"render",value:function(){var t=this.state.data[Math.abs(this.state.current_index)].title,e=this.state.data[Math.abs(this.state.current_index)].body,n=this.state.data[Math.abs(this.state.current_index)].color,i=this.state.data[Math.abs(this.state.current_index)].class_;return Object(b.jsxs)("div",{id:"carousel-container",children:[Object(b.jsx)("div",{id:"cards-container",children:Object(b.jsx)(m,{title:t,body:e,color:n,c:i},t)}),Object(b.jsxs)("div",{id:"controller-row",children:[Object(b.jsx)("div",{id:"controller1",class:"controller",onClick:this.dec,children:Object(b.jsx)("img",{src:v})}),Object(b.jsx)("div",{id:"controller2",class:"controller",onClick:this.inc,children:Object(b.jsx)("img",{src:v})})]})]})}}]),n}(c.a.Component),g=(n(20),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{id:"footer"})}}]),n}(c.a.Component)),w=(n(21),n(22),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{id:"goMobileContainer",children:Object(b.jsx)("h1",{id:"goMobileText",children:"Currently, this site is mobile only."})})}}]),n}(c.a.Component)),C=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).updateDimensions=function(){i.setState({width:window.innerWidth,height:window.innerHeight})},i.state={width:window.screen.width},i}return Object(d.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var t=this.state.width<1280,e=Object(b.jsx)("div",{});if(t){if(t)e=Object(b.jsxs)("div",{id:"home-container",children:[Object(b.jsx)(j,{}),Object(b.jsx)(f,{}),Object(b.jsx)(y,{}),Object(b.jsx)(p,{}),Object(b.jsx)(g,{})]})}else var e=Object(b.jsx)(w,{});return Object(b.jsx)("div",{children:e})}}]),n}(c.a.Component),k=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)(C,{})}}]),n}(c.a.Component);a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),s()}],[[23,1,2]]]);
//# sourceMappingURL=main.03f9c069.chunk.js.map