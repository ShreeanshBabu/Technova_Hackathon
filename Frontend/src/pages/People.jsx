import { useEffect, useMemo, useState } from 'react';
import { publicApi } from '../api/client';
import { studentDirectory } from '../data/students';
import { useStaggerSectionReveal } from '../hooks/useScrollReveal.js';

export function People() {
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const staggerRef = useStaggerSectionReveal([faculty.length, loading]);

  useEffect(() => {
    let alive = true;
    publicApi
      .faculty()
      .then((res) => {
        if (!alive) return;
        setFaculty(res?.data?.faculty ?? []);
      })
      .catch(() => {
        if (!alive) return;
        setFaculty([]);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, []);

  const filteredStudents = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return studentDirectory;
    return studentDirectory.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.roll.toLowerCase().includes(q) ||
        s.batch.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="people container">
      <header className="people__header">
        <h1 className="section-title" data-reveal>
          People
        </h1>
        <p className="section-lead" data-reveal data-reveal-delay="0.06">
          Faculty profiles with research areas (from the CMS) and a searchable student directory
          representative list for the hackathon demo.
        </p>
      </header>

      <section className="people__block">
        <h2 className="people__h2" data-reveal>
          Faculty
        </h2>
        {loading && <p data-reveal>Loading faculty…</p>}
        {!loading && faculty.length === 0 && (
          <p className="people__empty glass-panel" data-reveal>
            No faculty records yet. Add members from the Admin dashboard to populate this grid —
            updates appear here immediately.
          </p>
        )}
        <div ref={staggerRef} className="grid-responsive">
          {faculty.map((f) => (
            <article key={f._id} className="glass-panel people-card card-interactive" data-stagger-child>
              <div className="people-card__top">
                {f.imageUrl ? (
                  <img src={f.imageUrl} alt="" className="people-card__img" loading="lazy" />
                ) : (
                  <div className="people-card__placeholder" aria-hidden="true">
                    {f.name?.charAt(0) ?? '?'}
                  </div>
                )}
                <div>
                  <h3 className="people-card__name">{f.name}</h3>
                  <p className="people-card__designation">{f.designation}</p>
                </div>
              </div>
              {f.researchAreas?.length > 0 && (
                <ul className="people-card__tags">
                  {f.researchAreas.slice(0, 5).map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              )}
              <p className="people-card__contact">
                <a href={`mailto:${f.email}`}>{f.email}</a>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="people__block">
        <h2 className="people__h2" data-reveal>
          Student directory
        </h2>
        <p className="section-lead" data-reveal data-reveal-delay="0.05">
          Demo dataset — wire to your registry API when available. Search by name, roll, or batch.
        </p>
        <div className="glass-panel people-search" data-reveal>
          <label htmlFor="student-q" className="sr-only">
            Search students
          </label>
          <input
            id="student-q"
            className="people-search__input"
            placeholder="Search name, roll number, or batch…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="people-table-wrap glass-panel" data-reveal data-reveal-delay="0.08">
          <table className="people-table">
            <caption className="sr-only">Student directory</caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Roll</th>
                <th scope="col">Batch</th>
                <th scope="col">Programme</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((s) => (
                <tr key={s.roll}>
                  <td>{s.name}</td>
                  <td>{s.roll}</td>
                  <td>{s.batch}</td>
                  <td>{s.programme}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <style>{`
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
      `}</style>
    </div>
  );
}
