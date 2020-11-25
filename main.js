(()=>{"use strict";var t={53:(t,e,o)=>{o.d(e,{K:()=>l});const n=(()=>{let t={default:[],work:[]};return console.log(t),{addSection:e=>{t.hasOwnProperty(e)?alert("section already exists"):t[e]=[],l.setSection(t)},deleteSection:e=>{t.hasOwnProperty(e)?delete t[e]:alert("section does not exist"),l.setSection(t)},getSection:e=>{if(console.log(e),t.hasOwnProperty(e))return t[e];alert("no section")},getSections:()=>t,getToDo:(e,o)=>t[e][o],editSectionName:(e,o)=>{e!==o&&(Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(t,e)),delete t[e]),l.setSection(t)},addToDo:(e,o)=>{t.hasOwnProperty(e)&&(t[e].push(o),l.setSection(t))},toggleToDoStatus:(e,o)=>{console.log(o),"false"==t[e][o].completion?t[e][o].completion="true":t[e][o].completion="false"},deleteToDo:(e,o)=>{t[e].splice(o,1),l.setSection(t)},setSection:e=>{t=e}}})(),d=(t,e)=>{let o=document.createElement(t);return o.classList.add(e),o},i=(t,e)=>{let o=document.createElement(t);return o.setAttribute("id",e),o},l={setSection:t=>{localStorage.setItem("section",JSON.stringify(t))},getSection:()=>JSON.parse(localStorage.getItem("section"))};n.setSection(l.getSection());const c=document.getElementById("navbar-body"),a=document.getElementById("form-container-sections"),s=document.getElementById("form-container"),r=document.getElementById("todo-container");let p="default";function u(t){m(r),t.forEach(((t,e)=>{let o=e,n=((t,e,o,n,l,c)=>{let a=d("li","todo-item");1==c&&a.classList.add("completed");const s=d("div","to-do-left"),r=d("div","to-do-right"),p=i("div","todo-title-discription"),u=i("div","todo-content"),m=i("div","todo-btns");let g=document.createElement("i");1==c?(g.classList.add("fas"),g.classList.add("fa-check-circle")):(g.classList.add("far"),g.classList.add("fa-check-circle")),g.id="todo-status",g.dataset.index=l,g.classList.add("todo-status");let y=i("p","todo-title");y.textContent=t;let f=i("p","todo-discription");f.textContent=e;let v=i("p","todo-date");v.textContent=o;let E=i("p","todo-priority");E.textContent=n;let h=i("button","todo-edit");h.textContent="Edit",h.dataset.index=l;let C=i("button","todo-delete");return C.textContent="Delete",C.dataset.index=l,p.appendChild(y),p.appendChild(f),s.appendChild(g),s.appendChild(p),u.appendChild(v),u.appendChild(E),m.appendChild(h),m.appendChild(C),r.appendChild(u),r.appendChild(m),a.appendChild(s),a.appendChild(r),a})(t.title,t.discription,t.duedate,t.priority,o,t.completion);r.appendChild(n)}))}const m=t=>{for(;t.firstChild;)t.removeChild(t.lastChild)};function g(){let t=function(t){const e=Object.keys(t);let o=d("ul","nav-sections");return e.forEach((t=>{let e=d("li","nav-item"),n=d("a","nav-link");n.textContent=t,n.setAttribute("id",t),e.setAttribute("id",t),e.appendChild(n),o.appendChild(e)})),o}(n.getSections());m(c),c.appendChild(t)}document.getElementById("btn-section").addEventListener("click",(function(t){a.style.display="flex"})),document.getElementById("btn-submit-section").addEventListener("click",(function(t){a.style.display="none";let e=document.getElementById("section-name").value;n.addSection(e),g()})),document.getElementById("btn-todo").addEventListener("click",(function(t){s.style.display="none";let e=document.getElementById("todoT").value,o=document.getElementById("date").value,d=document.getElementById("priority").value;const i=((t,e,o,n)=>{let d=!1;return{title:t,discription:e,duedate:o,priority:n,completion:d,setCompletion:()=>{d=0==d}}})(e,document.getElementById("discription").value,o,d);n.addToDo(p,i),u(n.getSection(p))})),document.getElementById("todo-container").addEventListener("click",(t=>{let e=t.target.dataset.index,o=n.getSection(p);if(t.target.classList.contains("todo-status"))n.toggleToDoStatus(p,e),"False"==o.completion&&(o.completion=!1),console.log(o),o[e].setCompletion();else if("todo-delete"==t.target.id)n.deleteToDo(p,e);else if("todo-edit"==t.target.id){let t=n.getToDo(p,e);document.getElementById("todoT").value=t.title,document.getElementById("date").value=t.date,document.getElementById("priority").value=t.priority,document.getElementById("discription").value=t.discription,n.deleteToDo(p,e),s.style.display="flex"}u(n.getSection(p))})),document.getElementById("navbar-body").addEventListener("click",(t=>{(t.target.classList.contains("nav-item")||t.target.classList.contains("nav-link"))&&(p=t.target.id,u(n.getSection(t.target.id)))})),document.getElementById("add-todo-btn").addEventListener("click",(function(t){s.style.display="flex"})),g(),u(n.getSection("default"))}},e={};function o(n){if(e[n])return e[n].exports;var d=e[n]={exports:{}};return t[n](d,d.exports,o),d.exports}o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o(53)})();