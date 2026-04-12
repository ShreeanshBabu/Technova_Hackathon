import{c as d,r as n,p as g,j as e,g as t,L as f,S as x}from"./index-DSPq5ari.js";/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],y=d("code-xml",v);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],_=d("cpu",k);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],p=d("network",b);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]],u=d("square-terminal",j);function w(){const[r,i]=n.useState([]),[a,s]=n.useState(null);n.useEffect(()=>{let o=!0;return g.notices({limit:15,page:1}).then(c=>{var l;o&&i(((l=c==null?void 0:c.data)==null?void 0:l.notices)??[])}).catch(()=>{o&&s("Notices unavailable")}),()=>{o=!1}},[]);const m=r.length>0?r.map(o=>`${o.title}`).join("  ·  "):a||"No notices published yet.";return e.jsxs("div",{className:"notice-ticker glass-panel","data-reveal":!0,children:[e.jsx("span",{className:"notice-ticker__label",children:"Latest notices"}),e.jsx("div",{className:"notice-ticker__viewport",role:"marquee","aria-live":"polite",children:e.jsx("div",{className:"notice-ticker__track",children:m})}),e.jsx("style",{children:`
        .notice-ticker {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.65rem 1rem;
          overflow: hidden;
        }
        .notice-ticker__label {
          flex-shrink: 0;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: linear-gradient(120deg, var(--accent-a), var(--accent-b));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .notice-ticker__viewport {
          flex: 1;
          min-width: 0;
          mask-image: linear-gradient(90deg, transparent, black 4%, black 96%, transparent);
        }
        .notice-ticker__track {
          display: inline-block;
          white-space: nowrap;
          padding-left: 100%;
          animation: ticker-scroll 28s linear infinite;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .notice-ticker__track {
            animation: none;
            padding-left: 0;
            white-space: normal;
          }
        }
      `})]})}const N=[{id:1,Icon:p,size:48},{id:2,Icon:u,size:64},{id:3,Icon:_,size:56},{id:4,Icon:y,size:40},{id:5,Icon:p,size:32},{id:6,Icon:u,size:48}];function z(){const r=n.useRef(null);return n.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const a=r.current;if(!a)return;const s=t.context(()=>{const m=t.utils.toArray(".floating-item"),o=a.clientWidth||800,c=a.clientHeight||600;m.forEach(l=>{t.set(l,{x:t.utils.random(0,o),y:t.utils.random(0,c),scale:t.utils.random(.5,1.2),opacity:t.utils.random(.08,.25)});const h=()=>{t.to(l,{x:`+=${t.utils.random(-120,120)}`,y:`+=${t.utils.random(-120,120)}`,rotation:`+=${t.utils.random(-30,30)}`,duration:t.utils.random(10,18),ease:"sine.inOut",onComplete:h})};h()})},a);return()=>s.revert()},[]),e.jsx("div",{ref:r,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:-1,overflow:"hidden"},"aria-hidden":"true",children:N.map(i=>e.jsx("div",{className:"floating-item",style:{position:"absolute"},children:e.jsx(i.Icon,{size:i.size,color:"var(--accent-b)",opacity:.15})},i.id))})}t.registerPlugin(x);function S(){const r=n.useRef(null),i=n.useRef(null);return n.useLayoutEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!r.current||!i.current)return;const s=t.context(()=>{t.to(i.current,{y:80,rotate:8,scrollTrigger:{trigger:r.current,start:"top top",end:"bottom top",scrub:1.2}})},r);return()=>s.revert()},[]),e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsxs("div",{className:"home",style:{position:"relative",zIndex:1},children:[e.jsx("section",{ref:r,className:"home-hero container",children:e.jsxs("div",{className:"home-hero__grid",children:[e.jsxs("div",{className:"home-hero__copy",children:[e.jsx("p",{className:"home-eyebrow","data-reveal":!0,children:"Department of Computer Science & Engineering"}),e.jsxs("h1",{className:"home-title","data-reveal":!0,"data-reveal-delay":"0.06",children:["A modern digital front for ",e.jsx("span",{className:"gradient-text",children:"CSE, VSSUT"})]}),e.jsx("p",{className:"home-lead","data-reveal":!0,"data-reveal-delay":"0.12",children:"Inspired by leading institutions — clean information architecture, accessible storytelling, and live content from our CMS so students and visitors always see what matters."}),e.jsxs("div",{className:"home-cta","data-reveal":!0,"data-reveal-delay":"0.18",children:[e.jsx("a",{className:"btn btn--primary",href:"#hod-message",children:"HOD's message"}),e.jsx(f,{className:"btn btn--ghost",to:"/people",children:"Meet the faculty"})]})]}),e.jsxs("div",{ref:i,className:"home-hero__visual glass-panel card-interactive","data-reveal":!0,children:[e.jsx("div",{className:"home-orb","aria-hidden":"true"}),e.jsx("p",{className:"home-visual-caption",children:"Glass layers · Depth · Motion"}),e.jsx("p",{className:"home-visual-text",children:"Undergraduate rigour, research-led teaching, and vibrant student technical life — all in one place."})]})]})}),e.jsx("section",{className:"container",style:{marginTop:"2rem"},children:e.jsx(w,{})}),e.jsxs("section",{id:"hod-message",className:"container home-section",children:[e.jsx("h2",{className:"section-title","data-reveal":!0,children:"Message from the Head of Department"}),e.jsx("p",{className:"section-lead","data-reveal":!0,"data-reveal-delay":"0.05",children:"A warm welcome to students, parents, alumni, and partners engaging with our department online."}),e.jsxs("article",{className:"glass-panel home-hod","data-reveal":!0,"data-reveal-delay":"0.1",children:[e.jsx("p",{children:"The Department of Computer Science & Engineering at VSSUT, Burla continues to invest in strong foundations, ethical practice, and industry-relevant skills. Our programmes emphasise problem-solving, systems thinking, and collaborative learning — preparing graduates to contribute responsibly to technology and society."}),e.jsx("p",{children:"This website is designed to be your first port of call for notices, people, academics, and resources. We hope it reflects the clarity and professionalism you expect from a leading academic department."}),e.jsxs("footer",{className:"home-hod__sign",children:[e.jsx("span",{className:"home-hod__name",children:"Professor (HOD), CSE"}),e.jsx("span",{className:"home-hod__role",children:"VSSUT, Burla"})]})]})]}),e.jsxs("section",{className:"container home-section home-highlights",children:[e.jsx("h2",{className:"section-title","data-reveal":!0,children:"At a glance"}),e.jsx("div",{className:"grid-responsive",children:[{t:"Academics",d:"Accredited programmes, structured curriculum, and syllabus resources in one hub."},{t:"Research",d:"Faculty-led areas spanning core CS, intelligent systems, and applied computing."},{t:"Student life",d:"Technical clubs, fests, and labs that complement classroom learning."}].map((a,s)=>e.jsxs("div",{className:"glass-panel home-card card-interactive","data-reveal":!0,"data-reveal-delay":String(.06*(s+1)),children:[e.jsx("h3",{className:"home-card__title",children:a.t}),e.jsx("p",{className:"home-card__body",children:a.d})]},a.t))})]}),e.jsx("style",{children:`
          .home-hero {
            padding-top: clamp(1.5rem, 4vw, 3rem);
            padding-bottom: 1rem;
          }
          .home-hero__grid {
            display: grid;
            gap: 2rem;
            align-items: center;
            grid-template-columns: 1fr;
          }
          @media (min-width: 900px) {
            .home-hero__grid {
              grid-template-columns: 1.1fr 0.9fr;
            }
          }
          .home-eyebrow {
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--text-muted);
            margin: 0 0 1rem;
          }
          .home-title {
            font-family: var(--font-display);
            font-size: clamp(2.35rem, 5vw, 3.4rem);
            font-weight: 400;
            line-height: 1.1;
            margin: 0 0 1rem;
            letter-spacing: -0.02em;
          }
          .home-lead {
            margin: 0 0 1.5rem;
            max-width: 36rem;
            color: var(--text-muted);
            font-size: 1.05rem;
          }
          .home-cta {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
          }
          .home-hero__visual {
            padding: 1.75rem;
            min-height: 260px;
            position: relative;
            overflow: hidden;
          }
          .home-orb {
            position: absolute;
            right: -20%;
            top: -30%;
            width: 70%;
            height: 90%;
            border-radius: 40% 60% 55% 45%;
            background: linear-gradient(135deg, var(--accent-a), var(--accent-b));
            opacity: 0.35;
            filter: blur(2px);
          }
          .home-visual-caption {
            position: relative;
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--text-muted);
            margin: 0 0 0.75rem;
          }
          .home-visual-text {
            position: relative;
            margin: 0;
            max-width: 22rem;
            color: var(--text-muted);
          }
          .home-section {
            margin-top: var(--space-section);
          }
          .home-hod {
            padding: 1.75rem 2rem;
            max-width: 52rem;
          }
          .home-hod p {
            margin: 0 0 1rem;
            color: var(--text-muted);
          }
          .home-hod__sign {
            margin-top: 1.5rem;
            padding-top: 1.25rem;
            border-top: 1px solid var(--border-glass);
            display: flex;
            flex-direction: column;
            gap: 0.15rem;
            font-size: 0.9rem;
          }
          .home-hod__name {
            font-weight: 600;
            color: var(--text-primary);
          }
          .home-hod__role {
            color: var(--text-faint);
            font-size: 0.85rem;
          }
          .home-card {
            padding: 1.35rem 1.5rem;
          }
          .home-card__title {
            margin: 0 0 0.5rem;
            font-size: 1.05rem;
          }
          .home-card__body {
            margin: 0;
            font-size: 0.92rem;
            color: var(--text-muted);
          }
        `})]})]})}export{S as Home};
