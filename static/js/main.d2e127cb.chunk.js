(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(e,t,s){},26:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s(13),n=s.n(c),i=(s(23),s(6)),r=s(7),l=s(9),j=s(8),o=s(14),d=s(16),h=s.n(d),b=(s(26),s(17)),m=s(5),u=s.n(m),O=s(1),p=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.project,this.props.data.github;var e=this.props.data.name,t=this.props.data.description;return Object(O.jsxs)("header",{id:"home",children:[Object(O.jsx)(b.a,{type:"circle",bg:!0}),Object(O.jsxs)("nav",{id:"nav-wrap",children:[Object(O.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(O.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(O.jsxs)("ul",{id:"nav",className:"nav",children:[Object(O.jsx)("li",{className:"current",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(O.jsx)("div",{className:"row banner",children:Object(O.jsxs)("div",{className:"banner-text",children:[Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsx)("h1",{className:"responsive-headline",children:e})}),Object(O.jsx)(u.a,{bottom:!0,duration:1200,children:Object(O.jsxs)("h3",{children:[t,"."]})}),Object(O.jsx)("hr",{})]})}),Object(O.jsx)("p",{className:"scrolldown",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(O.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),x=p,v=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:e.url,target:"_blank",children:Object(O.jsx)("i",{className:e.className})})},e.name)}));return Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsx)("div",{className:"twelve columns",children:Object(O.jsx)("ul",{className:"social-links",children:e})})}),Object(O.jsx)("div",{id:"go-top",children:Object(O.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(O.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),f=v,g=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;console.log(this.props.data.image);var e=this.props.data.name,t=(this.props.data.image,this.props.data.bio),s=this.props.data.address.street,a=this.props.data.address.city,c=this.props.data.address.state,n=this.props.data.address.zip,i=this.props.data.phone,r=this.props.data.email,l=this.props.data.resumedownload;return Object(O.jsx)("section",{id:"about",children:Object(O.jsx)(u.a,{duration:1e3,children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"three columns",children:Object(O.jsx)("img",{style:{borderRadius:"10%",width:"60%"},src:"https://csc805-data-storage-bucket.s3.us-west-1.amazonaws.com/Final+final.jpeg",alt:"Nordic Giant Profile Pic"})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("h2",{children:"About Me"}),Object(O.jsx)("p",{children:t}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"columns contact-details",children:[Object(O.jsx)("h2",{children:"Contact Details"}),Object(O.jsxs)("p",{className:"address",children:[Object(O.jsx)("span",{children:e}),Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[s,Object(O.jsx)("br",{}),a," ",c,", ",n]}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:i}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:r})]})]}),Object(O.jsx)("div",{className:"columns download",children:Object(O.jsx)("p",{children:Object(O.jsx)("a",{href:l,target:"_blank",className:"button",children:"View Resume"})})})]})]})]})})})}}]),s}(a.Component),N=g,w=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;this.props.data.skillmessage;var t=this.props.data.education.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.school}),Object(O.jsxs)("p",{className:"info",children:[e.degree," ",Object(O.jsx)("span",{children:"\u2022"}),Object(O.jsx)("em",{className:"date",children:e.graduated})]})]},e.school)})),s=this.props.data.work.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.company}),Object(O.jsxs)("p",{className:"info",children:[e.title,Object(O.jsx)("span",{children:"\u2022"})," ",Object(O.jsx)("em",{className:"date",children:e.years})]}),Object(O.jsx)("p",{children:e.description1}),Object(O.jsx)("p",{children:e.description2}),Object(O.jsx)("p",{children:e.description3})]},e.company)})),a=this.props.data.ProgrammingSkills.map((function(t){e.getRandomColor(),t.name.toLowerCase(),t.level;return Object(O.jsx)("li",{children:Object(O.jsx)("em",{children:t.name})},t.name)})),c=this.props.data.tools.map((function(t){e.getRandomColor(),t.name.toLowerCase(),t.level;return Object(O.jsx)("li",{children:Object(O.jsx)("em",{children:t.name})},t.name)})),n=this.props.data.systems.map((function(t){e.getRandomColor(),t.name.toLowerCase(),t.level;return Object(O.jsx)("li",{children:Object(O.jsx)("em",{children:t.name})},t.name)}));return Object(O.jsxs)("section",{id:"resume",children:[Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row education",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Education"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:Object(O.jsx)("div",{className:"row item",children:Object(O.jsx)("div",{className:"twelve columns",children:t})})})]})}),Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row work",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Work"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:s})]})}),Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row skill",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Skills"})})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("h3",{children:"Programming Languages"}),Object(O.jsx)("ul",{className:"skills",children:a}),Object(O.jsx)("h3",{children:"Frameworks, Tools and Technologies"}),Object(O.jsx)("ul",{className:"skills",children:c}),Object(O.jsx)("h3",{children:"Operating Systems"}),Object(O.jsx)("ul",{className:"skills",children:n})]})]})})]})}}]),s}(a.Component),k=w,y=s(18),C=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).state={name:"",email:"",subject:"",message:""},e}return Object(r.a)(s,[{key:"render",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data.name,s=this.props.data.address.street,a=this.props.data.address.city,c=this.props.data.address.state,n=this.props.data.address.zip,i=this.props.data.phone,r=this.props.data.contactmessage;return Object(O.jsxs)("section",{id:"contact",children:[Object(O.jsx)(m.Fade,{bottom:!0,duration:1e3,children:Object(O.jsxs)("div",{className:"row section-head",children:[Object(O.jsx)("div",{className:"two columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Get In Touch."})})}),Object(O.jsx)("div",{className:"ten columns",children:Object(O.jsx)("p",{className:"lead",children:r})})]})}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(m.Slide,{left:!0,duration:1e3,children:Object(O.jsxs)("div",{className:"eight columns",children:[Object(O.jsxs)("fieldset",{children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",value:this.state.name,onChange:function(t){e.setState({name:t.target.value})}})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",value:this.state.email,onChange:function(t){e.setState({email:t.target.value})}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(O.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",value:this.state.subject,onChange:function(t){e.setState({subject:t.target.value})}})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage",value:this.state.message,onChange:function(t){e.setState({message:t.target.value})}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"submit",onClick:function(t){y.a.send("service_xrxfdko","template_siy0bnd",{subject:e.state.subject,message:e.state.message,name:e.state.name,email:e.state.email},"Tpa9ljF52pN03oNpg").then((function(t){alert("Email sent"),e.setState({subject:"",message:"",name:"",email:""})}),(function(e){console.log(e.text)}))},children:"Submit"}),Object(O.jsx)("span",{id:"image-loader",children:Object(O.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]}),Object(O.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(O.jsxs)("div",{id:"message-success",children:[Object(O.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(O.jsx)("br",{})]})]})}),Object(O.jsx)(m.Slide,{right:!0,duration:1e3,children:Object(O.jsx)("aside",{className:"four columns footer-widgets",children:Object(O.jsxs)("div",{className:"widget widget_contact",children:[Object(O.jsx)("h4",{children:"Address and Phone"}),Object(O.jsxs)("p",{className:"address",children:[t,Object(O.jsx)("br",{}),s," ",Object(O.jsx)("br",{}),a,", ",c," ",n,Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:i})]})]})})})]})]})}}]),s}(a.Component),S=(s(37),0),D=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="/images/portfolio/"+e.image;return Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsxs)("a",{className:"item-wrap",href:e.url,target:"_blank",children:[Object(O.jsx)("img",{alt:e.title,src:t}),Object(O.jsx)("div",{style:{textAlign:"center",color:"black"},children:e.title})]})},S++)}));return Object(O.jsx)("section",{id:"portfolio",children:Object(O.jsx)(u.a,{left:!0,duration:1e3,distance:"40px",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"twelve columns collapsed",children:[Object(O.jsx)("h1",{children:"Check Out Some of My Work."}),Object(O.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),s}(a.Component),F=D,E=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},o.a.initialize("UA-110570651-1"),o.a.pageview(window.location.pathname),a}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(x,{data:this.state.resumeData.main}),Object(O.jsx)(N,{data:this.state.resumeData.main}),Object(O.jsx)(k,{data:this.state.resumeData.resume}),Object(O.jsx)(F,{data:this.state.resumeData.portfolio}),Object(O.jsx)(C,{data:this.state.resumeData.main}),Object(O.jsx)(f,{data:this.state.resumeData.main})]})}}]),s}(a.Component),M=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,40)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};n.a.render(Object(O.jsx)(E,{}),document.getElementById("root")),M()}},[[39,1,2]]]);
//# sourceMappingURL=main.d2e127cb.chunk.js.map