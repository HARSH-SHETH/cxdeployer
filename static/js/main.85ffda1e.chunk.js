(this.webpackJsonpcxdeployer=this.webpackJsonpcxdeployer||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),s=n(4),r=n.n(s),o=n(2),l=n(0);function u(t){var e=Object(i.useState)(""),n=Object(o.a)(e,2),c=n[0],s=n[1];return Object(l.jsxs)("form",{onSubmit:function(t){console.log(t.target),t.preventDefault()},children:[Object(l.jsx)("input",{type:"text",autoFocus:!0,onChange:function(t){s(t.target.value)},placeholder:"Enter list title"}),Object(l.jsx)("button",{onClick:function(e){if(""===c)alert("Please enter list title");else{var n=!1;if(t.lists.forEach((function(t){if(t.title===c)return alert("A todo list with name "+c+" already exists"),void(n=!0)})),!n){var i=t.lists.slice(),s={title:c,rgba:"".concat(a())};i.unshift(s),t.setTodoLists(i)}t.display(!1)}},children:"Add"})]})}function a(){for(var t="rgba(",e=0;e<3;e++)t+=Math.floor(255*Math.random()).toString()+", ";return t+="0.3)",console.log(t),t}function j(t){var e=Object(i.useState)([]),n=Object(o.a)(e,2),c=n[0],s=n[1],r=Object(i.useState)(""),u=Object(o.a)(r,2),a=u[0],j=u[1],d={background:t.list.rgba};return Object(l.jsxs)("div",{style:d,children:[Object(l.jsx)("p",{children:t.list.title}),Object(l.jsx)("button",{onClick:function(e){return t.deleteList(e,t.index)},children:"delete list"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={task:a},n=c.slice();n.push(e),s(n),j("")},children:[Object(l.jsx)("input",{type:"text",value:a,autoFocus:!0,onChange:function(t){return j(t.target.value)},required:!0,placeholder:"Todo:"}),Object(l.jsx)("button",{type:"submit",children:"add"})]}),Object(l.jsx)("ul",{children:c.map((function(t,e){return Object(l.jsxs)("li",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"checkbox"}),Object(l.jsx)("p",{style:{display:"inline"},children:t.task})]}),Object(l.jsx)("button",{onClick:function(t){return function(t,e){var n=c.filter((function(t,n){return e!==n}));s(n)}(0,e)},children:"delete"})]},e)}))})]})}function d(t){var e=t.todolists.map((function(e,n){return Object(l.jsx)(j,{deleteList:t.deleteList,index:n,list:e},n)}));return Object(l.jsx)("div",{className:"lists",children:e})}n(10);var b=function(){var t=Object(i.useState)([]),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(i.useState)(!1),r=Object(o.a)(s,2),a=r[0],j=r[1];return Object(i.useEffect)((function(){console.log(n)}),[n]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("button",{onClick:function(t){j(!0)},children:"Create New Todo List"}),a&&Object(l.jsx)(u,{display:j,lists:n,setTodoLists:c}),Object(l.jsx)(d,{deleteList:function(t,e){var i=n.filter((function(t,n){return n!==e}));c(i)},todolists:n})]})};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.85ffda1e.chunk.js.map