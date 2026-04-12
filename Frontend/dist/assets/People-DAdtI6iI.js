import{r as t,u,p as x,j as e}from"./index-DSPq5ari.js";const n=[{name:"Aarav Mishra",roll:"21CS1001",batch:"2021–25",programme:"B.Tech CSE"},{name:"Ishita Patnaik",roll:"21CS1042",batch:"2021–25",programme:"B.Tech CSE"},{name:"Rohan Das",roll:"22CS1088",batch:"2022–26",programme:"B.Tech CSE"},{name:"Sneha Panda",roll:"20CS056",batch:"2020–24",programme:"B.Tech CSE"},{name:"Karan Sahoo",roll:"23CS0201",batch:"2023–27",programme:"B.Tech CSE"},{name:"Priya Rout",roll:"21CS077",batch:"2021–25",programme:"B.Tech CSE"},{name:"Dev Nayak",roll:"22CS033",batch:"2022–26",programme:"B.Tech CSE"},{name:"Ananya Behera",roll:"20CS112",batch:"2020–24",programme:"B.Tech CSE"}];function b(){const[s,d]=t.useState([]),[o,p]=t.useState(!0),[c,m]=t.useState(""),h=u([s.length,o]);t.useEffect(()=>{let a=!0;return x.faculty().then(r=>{var l;a&&d(((l=r==null?void 0:r.data)==null?void 0:l.faculty)??[])}).catch(()=>{a&&d([])}).finally(()=>{a&&p(!1)}),()=>{a=!1}},[]);const g=t.useMemo(()=>{const a=c.trim().toLowerCase();return a?n.filter(r=>r.name.toLowerCase().includes(a)||r.roll.toLowerCase().includes(a)||r.batch.toLowerCase().includes(a)):n},[c]);return e.jsxs("div",{className:"people container",children:[e.jsxs("header",{className:"people__header",children:[e.jsx("h1",{className:"section-title","data-reveal":!0,children:"People"}),e.jsx("p",{className:"section-lead","data-reveal":!0,"data-reveal-delay":"0.06",children:"Faculty profiles with research areas (from the CMS) and a searchable student directory representative list for the hackathon demo."})]}),e.jsxs("section",{className:"people__block",children:[e.jsx("h2",{className:"people__h2","data-reveal":!0,children:"Faculty"}),o&&e.jsx("p",{"data-reveal":!0,children:"Loading faculty…"}),!o&&s.length===0&&e.jsx("p",{className:"people__empty glass-panel","data-reveal":!0,children:"No faculty records yet. Add members from the Admin dashboard to populate this grid — updates appear here immediately."}),e.jsx("div",{ref:h,className:"grid-responsive",children:s.map(a=>{var r,l;return e.jsxs("article",{className:"glass-panel people-card card-interactive","data-stagger-child":!0,children:[e.jsxs("div",{className:"people-card__top",children:[a.imageUrl?e.jsx("img",{src:a.imageUrl,alt:"",className:"people-card__img",loading:"lazy"}):e.jsx("div",{className:"people-card__placeholder","aria-hidden":"true",children:((r=a.name)==null?void 0:r.charAt(0))??"?"}),e.jsxs("div",{children:[e.jsx("h3",{className:"people-card__name",children:a.name}),e.jsx("p",{className:"people-card__designation",children:a.designation})]})]}),((l=a.researchAreas)==null?void 0:l.length)>0&&e.jsx("ul",{className:"people-card__tags",children:a.researchAreas.slice(0,5).map(i=>e.jsx("li",{children:i},i))}),e.jsx("p",{className:"people-card__contact",children:e.jsx("a",{href:`mailto:${a.email}`,children:a.email})})]},a._id)})})]}),e.jsxs("section",{className:"people__block",children:[e.jsx("h2",{className:"people__h2","data-reveal":!0,children:"Student directory"}),e.jsx("p",{className:"section-lead","data-reveal":!0,"data-reveal-delay":"0.05",children:"Demo dataset — wire to your registry API when available. Search by name, roll, or batch."}),e.jsxs("div",{className:"glass-panel people-search","data-reveal":!0,children:[e.jsx("label",{htmlFor:"student-q",className:"sr-only",children:"Search students"}),e.jsx("input",{id:"student-q",className:"people-search__input",placeholder:"Search name, roll number, or batch…",value:c,onChange:a=>m(a.target.value),autoComplete:"off"})]}),e.jsx("div",{className:"people-table-wrap glass-panel","data-reveal":!0,"data-reveal-delay":"0.08",children:e.jsxs("table",{className:"people-table",children:[e.jsx("caption",{className:"sr-only",children:"Student directory"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Name"}),e.jsx("th",{scope:"col",children:"Roll"}),e.jsx("th",{scope:"col",children:"Batch"}),e.jsx("th",{scope:"col",children:"Programme"})]})}),e.jsx("tbody",{children:g.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.name}),e.jsx("td",{children:a.roll}),e.jsx("td",{children:a.batch}),e.jsx("td",{children:a.programme})]},a.roll))})]})})]}),e.jsx("style",{children:`
        .people {
          padding-bottom: var(--space-section);
        }
        .people__header {
          padding-top: 0.5rem;
        }
        .people__block {
          margin-top: 2.75rem;
        }
        .people__h2 {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 400;
          margin: 0 0 1.25rem;
        }
        .people__empty {
          padding: 1.25rem 1.5rem;
          color: var(--text-muted);
        }
        .people-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .people-card__top {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .people-card__img {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid var(--border-glass);
        }
        .people-card__placeholder {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-weight: 700;
          background: linear-gradient(135deg, var(--accent-a), var(--accent-b));
          color: #0a0c10;
        }
        [data-theme='light'] .people-card__placeholder {
          color: #fff;
        }
        .people-card__name {
          margin: 0;
          font-size: 1.05rem;
        }
        .people-card__designation {
          margin: 0.15rem 0 0;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .people-card__tags {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .people-card__tags li {
          font-size: 0.72rem;
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-pill);
          border: 1px solid var(--border-glass);
          color: var(--text-muted);
        }
        .people-card__contact {
          margin: 0;
          font-size: 0.85rem;
        }
        .people-search {
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
        }
        .people-search__input {
          width: 100%;
          border: none;
          background: transparent;
          padding: 0.35rem 0;
        }
        .people-search__input::placeholder {
          color: var(--text-faint);
        }
        .people-table-wrap {
          overflow: auto;
          padding: 0;
        }
        .people-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
        }
        .people-table th,
        .people-table td {
          padding: 0.75rem 1rem;
          text-align: left;
          border-bottom: 1px solid var(--border-glass);
        }
        .people-table th {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
      `})]})}export{b as People};
