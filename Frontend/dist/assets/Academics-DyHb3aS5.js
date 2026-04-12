import{u as i,j as e}from"./index-DSPq5ari.js";const r=[{name:"B.Tech — Computer Science & Engineering",summary:"Four-year undergraduate programme covering algorithms, systems, software engineering, and electives aligned with industry and research trends.",syllabusLabel:"Syllabus & schemes (VSSUT)",syllabusHref:"https://www.vssut.ac.in/"},{name:"M.Tech — Computer Science & Engineering",summary:"Postgraduate depth in advanced topics with project work; ideal for careers in R&D, product engineering, and higher studies.",syllabusLabel:"PG regulations & syllabus",syllabusHref:"https://www.vssut.ac.in/"},{name:"Ph.D. — Computer Science & Engineering",summary:"Research training with faculty guidance across core and interdisciplinary areas. Prospective scholars should follow university admission notices.",syllabusLabel:"Research & admissions",syllabusHref:"https://www.vssut.ac.in/"}];function c(){const s=i();return e.jsxs("div",{className:"academics container",children:[e.jsxs("header",{children:[e.jsx("h1",{className:"section-title","data-reveal":!0,children:"Academics"}),e.jsx("p",{className:"section-lead","data-reveal":!0,"data-reveal-delay":"0.06",children:"Programme outlines and pointers to official syllabus resources. Replace outbound links with your department PDFs or LMS when ready."})]}),e.jsx("div",{ref:s,className:"academics__grid grid-responsive",children:r.map(a=>e.jsxs("article",{className:"glass-panel academics-card card-interactive","data-stagger-child":!0,children:[e.jsx("h2",{className:"academics-card__title",children:a.name}),e.jsx("p",{className:"academics-card__body",children:a.summary}),e.jsx("a",{className:"btn btn--primary academics-card__link",href:a.syllabusHref,target:"_blank",rel:"noreferrer",children:a.syllabusLabel})]},a.name))}),e.jsxs("section",{className:"academics__meta glass-panel","data-reveal":!0,children:[e.jsx("h2",{className:"academics__meta-title",children:"Curriculum philosophy"}),e.jsx("p",{children:"Courses balance theoretical foundations with laboratories and projects. Outcomes are mapped to graduate attributes emphasising ethics, communication, and lifelong learning — consistent with NBA guidelines and institutional vision."})]}),e.jsx("style",{children:`
        .academics {
          padding-bottom: var(--space-section);
        }
        .academics__grid {
          margin-top: 2rem;
        }
        .academics-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 100%;
        }
        .academics-card__title {
          margin: 0;
          font-size: 1.15rem;
          line-height: 1.35;
        }
        .academics-card__body {
          margin: 0;
          flex: 1;
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .academics-card__link {
          align-self: flex-start;
        }
        .academics__meta {
          margin-top: 2.5rem;
          padding: 1.75rem 2rem;
          max-width: 48rem;
        }
        .academics__meta-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
          margin: 0 0 0.75rem;
        }
        .academics__meta p {
          margin: 0;
          color: var(--text-muted);
        }
      `})]})}export{c as Academics};
