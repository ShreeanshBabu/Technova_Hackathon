import{r as c,u as i,p as l,j as e}from"./index-DSPq5ari.js";const d=[{name:"Technical societies",body:"Student chapters and clubs host workshops, contests, and peer learning sessions across domains like development, security, and AI."},{name:"Infrastructure",body:"Laboratories for programming, networks, databases, and specialised electives support hands-on learning and project work."}];function m(){const[a,n]=c.useState([]),o=i();return c.useEffect(()=>{let s=!0;return l.announcements().then(r=>{var t;s&&n(((t=r==null?void 0:r.data)==null?void 0:t.announcements)??[])}).catch(()=>{s&&n([])}),()=>{s=!1}},[]),e.jsxs("div",{className:"resources container",children:[e.jsxs("header",{children:[e.jsx("h1",{className:"section-title","data-reveal":!0,children:"Resources"}),e.jsx("p",{className:"section-lead","data-reveal":!0,"data-reveal-delay":"0.06",children:"Tech club context, lab infrastructure, and time-bound fest or event announcements managed through the CMS."})]}),e.jsxs("section",{className:"resources__block",children:[e.jsx("h2",{className:"resources__h2","data-reveal":!0,children:"Announcements & fests"}),a.length===0?e.jsx("p",{className:"glass-panel resources__empty","data-reveal":!0,children:"No active announcements. Admins can schedule items from the dashboard — they surface here automatically when within start and end dates."}):e.jsx("ul",{className:"resources__announcements",children:a.map(s=>e.jsxs("li",{className:"glass-panel resources__announcement","data-reveal":!0,children:[e.jsx("h3",{children:s.title}),e.jsx("p",{children:s.body})]},s._id))})]}),e.jsxs("section",{className:"resources__block",children:[e.jsx("h2",{className:"resources__h2","data-reveal":!0,children:"Clubs & labs"}),e.jsx("div",{ref:o,className:"grid-responsive",children:d.map(s=>e.jsxs("article",{className:"glass-panel resources-card card-interactive","data-stagger-child":!0,children:[e.jsx("h3",{className:"resources-card__title",children:s.name}),e.jsx("p",{className:"resources-card__body",children:s.body})]},s.name))})]}),e.jsx("style",{children:`
        .resources {
          padding-bottom: var(--space-section);
        }
        .resources__block {
          margin-top: 2.5rem;
        }
        .resources__h2 {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 400;
          margin: 0 0 1.25rem;
        }
        .resources__empty {
          padding: 1.25rem 1.5rem;
          color: var(--text-muted);
        }
        .resources__announcements {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .resources__announcement {
          padding: 1.25rem 1.5rem;
        }
        .resources__announcement h3 {
          margin: 0 0 0.5rem;
          font-size: 1.05rem;
        }
        .resources__announcement p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .resources-card {
          padding: 1.35rem 1.5rem;
        }
        .resources-card__title {
          margin: 0 0 0.5rem;
        }
        .resources-card__body {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.92rem;
        }
      `})]})}export{m as Resources};
