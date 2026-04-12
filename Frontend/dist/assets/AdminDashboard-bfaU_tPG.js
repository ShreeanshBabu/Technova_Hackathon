import{a as N,r,j as e,N as w,L as S,d as p}from"./index-DSPq5ari.js";const C=[{id:"notices",label:"Notices"},{id:"announcements",label:"Announcements"},{id:"faculty",label:"Faculty"}];function E(){const{isAuthenticated:y,ready:b,logout:v,user:g}=N(),[h,m]=r.useState("notices");return b&&!y?e.jsx(w,{to:"/admin",replace:!0}):b?e.jsxs("div",{className:"admin-dash container",children:[e.jsxs("header",{className:"admin-dash__header glass-panel",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"admin-dash__title",children:"CMS dashboard"}),e.jsx("p",{className:"admin-dash__sub",children:g!=null&&g.name?`Signed in as ${g.name}`:"Administrator"})]}),e.jsxs("div",{className:"admin-dash__actions",children:[e.jsx(S,{to:"/",className:"btn btn--ghost",children:"View site"}),e.jsx("button",{type:"button",className:"btn",onClick:()=>v(),children:"Log out"})]})]}),e.jsx("div",{className:"admin-tabs",role:"tablist","aria-label":"CMS sections",children:C.map(l=>e.jsx("button",{type:"button",role:"tab","aria-selected":h===l.id,className:`admin-tabs__btn ${h===l.id?"is-active":""}`,onClick:()=>m(l.id),children:l.label},l.id))}),h==="notices"&&e.jsx(D,{}),h==="announcements"&&e.jsx(A,{}),h==="faculty"&&e.jsx(_,{}),e.jsx("style",{children:`
        .admin-dash {
          padding: 1.5rem 0 3rem;
        }
        .admin-dash__header {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          margin-bottom: 1.25rem;
        }
        .admin-dash__title {
          margin: 0;
          font-size: 1.35rem;
        }
        .admin-dash__sub {
          margin: 0.25rem 0 0;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .admin-dash__actions {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .admin-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .admin-tabs__btn {
          border: 1px solid var(--border-glass);
          background: var(--bg-glass);
          backdrop-filter: blur(12px);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-pill);
          cursor: pointer;
          font-weight: 600;
          color: var(--text-muted);
        }
        .admin-tabs__btn.is-active {
          color: var(--text-primary);
          border-color: color-mix(in srgb, var(--accent-b) 40%, transparent);
          box-shadow: 0 0 20px var(--glow);
        }
        .admin-panel {
          display: grid;
          gap: 1.5rem;
        }
        @media (min-width: 960px) {
          .admin-panel {
            grid-template-columns: 1fr 1fr;
            align-items: start;
          }
        }
        .admin-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .admin-form label span {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: var(--text-muted);
        }
        .admin-form input,
        .admin-form textarea,
        .admin-form select {
          width: 100%;
          padding: 0.55rem 0.65rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-glass);
          background: var(--bg-base);
        }
        .admin-form textarea {
          min-height: 100px;
          resize: vertical;
        }
        .admin-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          max-height: 70vh;
          overflow: auto;
        }
        .admin-list li {
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          background: var(--bg-glass);
        }
        .admin-list h4 {
          margin: 0 0 0.35rem;
          font-size: 0.95rem;
        }
        .admin-list p {
          margin: 0;
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .admin-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.5rem;
        }
        .admin-msg {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0;
        }
        .admin-msg--err {
          color: #f87171;
        }
      `})]}):e.jsx("div",{className:"container",style:{padding:"3rem 0"},children:e.jsx("p",{children:"Loading session…"})})}function D(){const[y,b]=r.useState([]),[v,g]=r.useState(!0),[h,m]=r.useState(""),[l,x]=r.useState(null),[o,d]=r.useState({title:"",body:"",priority:"normal",status:"published"}),s=r.useCallback(()=>{g(!0),p.notices.list({limit:50,page:1}).then(n=>{var t;return b(((t=n==null?void 0:n.data)==null?void 0:t.notices)??[])}).catch(n=>m(n.message)).finally(()=>g(!1))},[]);r.useEffect(()=>{s()},[s]);function u(n){x(n),d({title:n.title,body:n.body,priority:n.priority,status:n.status})}async function j(n){n.preventDefault(),m("");try{l?await p.notices.update(l._id,o):await p.notices.create(o),x(null),d({title:"",body:"",priority:"normal",status:"published"}),s()}catch(t){m(t.message)}}async function f(n){if(window.confirm("Delete this notice?")){m("");try{await p.notices.remove(n),s()}catch(t){m(t.message)}}}return e.jsxs("div",{className:"admin-panel",children:[e.jsxs("form",{className:"glass-panel admin-form",onSubmit:j,style:{padding:"1.25rem"},children:[e.jsx("h2",{className:"section-title",style:{fontSize:"1.25rem",margin:0},children:l?"Edit notice":"New notice"}),h&&e.jsx("p",{className:"admin-msg admin-msg--err",children:h}),e.jsxs("label",{children:[e.jsx("span",{children:"Title"}),e.jsx("input",{value:o.title,onChange:n=>d(t=>({...t,title:n.target.value})),required:!0})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Body"}),e.jsx("textarea",{value:o.body,onChange:n=>d(t=>({...t,body:n.target.value})),required:!0})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Priority"}),e.jsxs("select",{value:o.priority,onChange:n=>d(t=>({...t,priority:n.target.value})),children:[e.jsx("option",{value:"low",children:"low"}),e.jsx("option",{value:"normal",children:"normal"}),e.jsx("option",{value:"urgent",children:"urgent"})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Status"}),e.jsxs("select",{value:o.status,onChange:n=>d(t=>({...t,status:n.target.value})),children:[e.jsx("option",{value:"published",children:"published"}),e.jsx("option",{value:"draft",children:"draft"})]})]}),e.jsxs("div",{className:"admin-row",children:[e.jsx("button",{type:"submit",className:"btn btn--primary",children:l?"Update":"Create"}),l&&e.jsx("button",{type:"button",className:"btn btn--ghost",onClick:()=>{x(null),d({title:"",body:"",priority:"normal",status:"published"})},children:"Cancel"})]})]}),e.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem"},children:[e.jsx("h2",{className:"section-title",style:{fontSize:"1.25rem",margin:"0 0 1rem"},children:"All notices"}),v&&e.jsx("p",{className:"admin-msg",children:"Loading…"}),e.jsx("ul",{className:"admin-list",children:y.map(n=>e.jsxs("li",{children:[e.jsx("h4",{children:n.title}),e.jsxs("p",{children:[n.status," · ",n.priority]}),e.jsxs("div",{className:"admin-row",children:[e.jsx("button",{type:"button",className:"btn btn--ghost",onClick:()=>u(n),children:"Edit"}),e.jsx("button",{type:"button",className:"btn btn--ghost",onClick:()=>f(n._id),children:"Delete"})]})]},n._id))})]})]})}function A(){const[y,b]=r.useState([]),[v,g]=r.useState(!0),[h,m]=r.useState(""),[l,x]=r.useState(null),[o,d]=r.useState({title:"",body:"",startDate:"",endDate:"",isActive:!0}),s=r.useCallback(()=>{g(!0),p.announcements.list().then(t=>{var a;return b(((a=t==null?void 0:t.data)==null?void 0:a.announcements)??[])}).catch(t=>m(t.message)).finally(()=>g(!1))},[]);r.useEffect(()=>{s()},[s]);function u(t){if(!t)return"";const a=new Date(t),i=c=>String(c).padStart(2,"0");return`${a.getFullYear()}-${i(a.getMonth()+1)}-${i(a.getDate())}T${i(a.getHours())}:${i(a.getMinutes())}`}function j(t){x(t),d({title:t.title,body:t.body,startDate:u(t.startDate),endDate:u(t.endDate),isActive:t.isActive})}async function f(t){t.preventDefault(),m("");try{const a={title:o.title,body:o.body,startDate:new Date(o.startDate).toISOString(),endDate:new Date(o.endDate).toISOString(),isActive:!!o.isActive};l?await p.announcements.update(l._id,a):await p.announcements.create(a),x(null),d({title:"",body:"",startDate:"",endDate:"",isActive:!0}),s()}catch(a){m(a.message)}}async function n(t){if(window.confirm("Delete this announcement?")){m("");try{await p.announcements.remove(t),s()}catch(a){m(a.message)}}}return e.jsxs("div",{className:"admin-panel",children:[e.jsxs("form",{className:"glass-panel admin-form",onSubmit:f,style:{padding:"1.25rem"},children:[e.jsx("h2",{className:"section-title",style:{fontSize:"1.25rem",margin:0},children:l?"Edit announcement":"New announcement"}),h&&e.jsx("p",{className:"admin-msg admin-msg--err",children:h}),e.jsxs("label",{children:[e.jsx("span",{children:"Title"}),e.jsx("input",{value:o.title,onChange:t=>d(a=>({...a,title:t.target.value})),required:!0})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Body"}),e.jsx("textarea",{value:o.body,onChange:t=>d(a=>({...a,body:t.target.value})),required:!0})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Start (local)"}),e.jsx("input",{type:"datetime-local",value:o.startDate,onChange:t=>d(a=>({...a,startDate:t.target.value})),required:!0})]}),e.jsxs("label",{children:[e.jsx("span",{children:"End (local)"}),e.jsx("input",{type:"datetime-local",value:o.endDate,onChange:t=>d(a=>({...a,endDate:t.target.value})),required:!0})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("input",{type:"checkbox",checked:o.isActive,onChange:t=>d(a=>({...a,isActive:t.target.checked}))}),e.jsx("span",{children:"Active"})]}),e.jsxs("div",{className:"admin-row",children:[e.jsx("button",{type:"submit",className:"btn btn--primary",children:l?"Update":"Create"}),l&&e.jsx("button",{type:"button",className:"btn btn--ghost",onClick:()=>{x(null),d({title:"",body:"",startDate:"",endDate:"",isActive:!0})},children:"Cancel"})]})]}),e.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem"},children:[e.jsx("h2",{className:"section-title",style:{fontSize:"1.25rem",margin:"0 0 1rem"},children:"All announcements"}),v&&e.jsx("p",{className:"admin-msg",children:"Loading…"}),e.jsx("ul",{className:"admin-list",children:y.map(t=>e.jsxs("li",{children:[e.jsx("h4",{children:t.title}),e.jsxs("p",{children:[t.isActive?"active":"inactive"," · ",new Date(t.startDate).toLocaleString()," –"," ",new Date(t.endDate).toLocaleString()]}),e.jsxs("div",{className:"admin-row",children:[e.jsx("button",{type:"button",className:"btn btn--ghost",onClick:()=>j(t),children:"Edit"}),e.jsx("button",{type:"button",className:"btn btn--ghost",onClick:()=>n(t._id),children:"Delete"})]})]},t._id))})]})]})}function _(){const[y,b]=r.useState([]),[v,g]=r.useState(!0),[h,m]=r.useState(""),[l,x]=r.useState(null),[o,d]=r.useState(null),[s,u]=r.useState({name:"",designation:"",email:"",phone:"",bio:"",googleScholarUrl:"",displayOrder:0,researchAreasText:""}),j=r.useCallback(()=>{g(!0),p.faculty.list().then(a=>{var i;return b(((i=a==null?void 0:a.data)==null?void 0:i.faculty)??[])}).catch(a=>m(a.message)).finally(()=>g(!1))},[]);r.useEffect(()=>{j()},[j]);function f(a){x(a),d(null),u({name:a.name,designation:a.designation,email:a.email,phone:a.phone||"",bio:a.bio||"",googleScholarUrl:a.googleScholarUrl||"",displayOrder:a.displayOrder??0,researchAreasText:(a.researchAreas||[]).join(", ")})}async function n(a){a.preventDefault(),m("");const i=s.researchAreasText.split(",").map(c=>c.trim()).filter(Boolean);try{if(o){const c=new FormData;c.append("name",s.name),c.append("designation",s.designation),c.append("email",s.email),c.append("phone",s.phone),c.append("bio",s.bio),c.append("googleScholarUrl",s.googleScholarUrl),c.append("displayOrder",String(s.displayOrder)),c.append("researchAreas",JSON.stringify(i)),c.append("image",o),l?await p.faculty.update(l._id,c):await p.faculty.create(c)}else{const c={name:s.name,designation:s.designation,email:s.email,phone:s.phone,bio:s.bio,googleScholarUrl:s.googleScholarUrl,displayOrder:Number(s.displayOrder)||0,researchAreas:i};l?await p.faculty.update(l._id,c):await p.faculty.create(c)}x(null),d(null),u({name:"",designation:"",email:"",phone:"",bio:"",googleScholarUrl:"",displayOrder:0,researchAreasText:""}),j()}catch(c){m(c.message)}}async function t(a){if(window.confirm("Delete this faculty member?")){m("");try{await p.faculty.remove(a),j()}catch(i){m(i.message)}}}return e.jsxs("div",{className:"admin-panel",children:[e.jsxs("form",{className:"glass-panel admin-form",onSubmit:n,style:{padding:"1.25rem"},children:[e.jsx("h2",{className:"section-title",style:{fontSize:"1.25rem",margin:0},children:l?"Edit faculty":"New faculty"}),h&&e.jsx("p",{className:"admin-msg admin-msg--err",children:h}),e.jsxs("label",{children:[e.jsx("span",{children:"Name"}),e.jsx("input",{value:s.name,onChange:a=>u(i=>({...i,name:a.target.value})),required:!0})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Designation"}),e.jsx("input",{value:s.designation,onChange:a=>u(i=>({...i,designation:a.target.value})),required:!0})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Email"}),e.jsx("input",{type:"email",value:s.email,onChange:a=>u(i=>({...i,email:a.target.value})),required:!0})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Phone"}),e.jsx("input",{value:s.phone,onChange:a=>u(i=>({...i,phone:a.target.value}))})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Research areas (comma-separated)"}),e.jsx("input",{value:s.researchAreasText,onChange:a=>u(i=>({...i,researchAreasText:a.target.value}))})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Bio"}),e.jsx("textarea",{value:s.bio,onChange:a=>u(i=>({...i,bio:a.target.value}))})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Google Scholar URL"}),e.jsx("input",{value:s.googleScholarUrl,onChange:a=>u(i=>({...i,googleScholarUrl:a.target.value}))})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Display order"}),e.jsx("input",{type:"number",value:s.displayOrder,onChange:a=>u(i=>({...i,displayOrder:a.target.value}))})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Photo (optional)"}),e.jsx("input",{type:"file",accept:"image/jpeg,image/png,image/webp",onChange:a=>{var i;return d(((i=a.target.files)==null?void 0:i[0])||null)}})]}),e.jsxs("div",{className:"admin-row",children:[e.jsx("button",{type:"submit",className:"btn btn--primary",children:l?"Update":"Create"}),l&&e.jsx("button",{type:"button",className:"btn btn--ghost",onClick:()=>{x(null),d(null),u({name:"",designation:"",email:"",phone:"",bio:"",googleScholarUrl:"",displayOrder:0,researchAreasText:""})},children:"Cancel"})]})]}),e.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem"},children:[e.jsx("h2",{className:"section-title",style:{fontSize:"1.25rem",margin:"0 0 1rem"},children:"Faculty records"}),v&&e.jsx("p",{className:"admin-msg",children:"Loading…"}),e.jsx("ul",{className:"admin-list",children:y.map(a=>e.jsxs("li",{children:[e.jsx("h4",{children:a.name}),e.jsx("p",{children:a.designation}),e.jsxs("div",{className:"admin-row",children:[e.jsx("button",{type:"button",className:"btn btn--ghost",onClick:()=>f(a),children:"Edit"}),e.jsx("button",{type:"button",className:"btn btn--ghost",onClick:()=>t(a._id),children:"Delete"})]})]},a._id))})]})]})}export{E as AdminDashboard};
