import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div data-reveal>
          <p className="site-footer__title">Department of Computer Science & Engineering</p>
          <p className="site-footer__meta">
            Veer Surendra Sai University of Technology, Burla · Odisha
          </p>
        </div>
        <div data-reveal data-reveal-delay="0.08">
          <p className="site-footer__heading">Quick links</p>
          <ul className="site-footer__list">
            <li>
              <a href="https://www.vssut.ac.in/" target="_blank" rel="noreferrer">
                VSSUT main site
              </a>
            </li>
            <li>
              <Link to="/academics">Programmes & syllabus</Link>
            </li>
            <li>
              <Link to="/resources">Labs & student life</Link>
            </li>
          </ul>
        </div>
        <div data-reveal data-reveal-delay="0.12">
          <p className="site-footer__heading">Contact</p>
          <p className="site-footer__meta">
            Academic queries: visit the department office during working hours.
          </p>
        </div>
      </div>
      <p className="site-footer__copy container">
        © {new Date().getFullYear()} CSE, VSSUT Burla. Built for the Digital Department Challenge.
      </p>
      <style>{`
        .site-footer {
          margin-top: var(--space-section);
          padding: 3rem 0 2rem;
          border-top: 1px solid var(--border-glass);
        }
        .site-footer__grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }
        .site-footer__title {
          font-family: var(--font-display);
          font-size: 1.35rem;
          margin: 0 0 0.5rem;
        }
        .site-footer__meta {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .site-footer__heading {
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin: 0 0 0.75rem;
          color: var(--text-muted);
        }
        .site-footer__list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .site-footer__copy {
          margin-top: 2.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-glass);
          font-size: 0.8rem;
          color: var(--text-faint);
        }
      `}</style>
    </footer>
  );
}
