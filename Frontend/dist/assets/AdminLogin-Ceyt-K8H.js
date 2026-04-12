import{a as x,b,r as i,j as e,N as v}from"./index-DSPq5ari.js";function j(){const{login:o,isAuthenticated:m,ready:c}=x(),u=b(),[n,g]=i.useState(""),[r,p]=i.useState(""),[s,t]=i.useState(""),[l,d]=i.useState(!1);if(c&&m)return e.jsx(v,{to:"/admin/dashboard",replace:!0});async function f(a){a.preventDefault(),t(""),d(!0);try{await o(n,r),u("/admin/dashboard",{replace:!0})}catch(h){t(h.message||"Login failed")}finally{d(!1)}}return e.jsxs("div",{className:"admin-login container",children:[e.jsxs("div",{className:"glass-panel admin-login__card","data-reveal":!0,children:[e.jsx("h1",{className:"admin-login__title",children:"Admin sign in"}),e.jsx("p",{className:"admin-login__lead",children:"Manage notices, announcements, and faculty. Changes sync to the public site via the API."}),e.jsxs("form",{className:"admin-login__form",onSubmit:f,children:[e.jsxs("label",{className:"admin-field",children:[e.jsx("span",{children:"Email"}),e.jsx("input",{type:"email",autoComplete:"username",value:n,onChange:a=>g(a.target.value),required:!0})]}),e.jsxs("label",{className:"admin-field",children:[e.jsx("span",{children:"Password"}),e.jsx("input",{type:"password",autoComplete:"current-password",value:r,onChange:a=>p(a.target.value),required:!0})]}),s&&e.jsx("p",{className:"admin-login__error",children:s}),e.jsx("button",{type:"submit",className:"btn btn--primary",disabled:l,children:l?"Signing in…":"Sign in"})]})]}),e.jsx("style",{children:`
        .admin-login {
          min-height: calc(100vh - var(--nav-h) - 4rem);
          display: grid;
          place-items: center;
          padding: 2rem 0;
        }
        .admin-login__card {
          width: min(420px, 100%);
          padding: 2rem;
        }
        .admin-login__title {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 400;
          margin: 0 0 0.5rem;
        }
        .admin-login__lead {
          margin: 0 0 1.5rem;
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .admin-login__form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .admin-field {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        .admin-field input {
          padding: 0.6rem 0.75rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-glass);
          background: var(--bg-base);
        }
        .admin-login__error {
          margin: 0;
          color: #f87171;
          font-size: 0.9rem;
        }
      `})]})}export{j as AdminLogin};
