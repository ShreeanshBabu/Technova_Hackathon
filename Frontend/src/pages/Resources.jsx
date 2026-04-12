import { useEffect, useState } from 'react';
import { publicApi } from '../api/client';
import { useStaggerSectionReveal } from '../hooks/useScrollReveal.js';

const clubs = [
  {
    name: 'Technical societies',
    body: 'Student chapters and clubs host workshops, contests, and peer learning sessions across domains like development, security, and AI.',
  },
  {
    name: 'Infrastructure',
    body: 'Laboratories for programming, networks, databases, and specialised electives support hands-on learning and project work.',
  },
];

export function Resources() {
  const [announcements, setAnnouncements] = useState([]);
  const cardsRef = useStaggerSectionReveal();

  useEffect(() => {
    let alive = true;
    publicApi
      .announcements()
      .then((res) => {
        if (!alive) return;
        setAnnouncements(res?.data?.announcements ?? []);
      })
      .catch(() => {
        if (!alive) return;
        setAnnouncements([]);
      });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className="resources container">
      <header>
        <h1 className="section-title" data-reveal>
          Resources
        </h1>
        <p className="section-lead" data-reveal data-reveal-delay="0.06">
          Tech club context, lab infrastructure, and time-bound fest or event announcements
          managed through the CMS.
        </p>
      </header>

      <section className="resources__block">
        <h2 className="resources__h2" data-reveal>
          Announcements & fests
        </h2>
        {announcements.length === 0 ? (
          <p className="glass-panel resources__empty" data-reveal>
            No active announcements. Admins can schedule items from the dashboard — they surface
            here automatically when within start and end dates.
          </p>
        ) : (
          <ul className="resources__announcements">
            {announcements.map((a) => (
              <li key={a._id} className="glass-panel resources__announcement" data-reveal>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="resources__block">
        <h2 className="resources__h2" data-reveal>
          Clubs & labs
        </h2>
        <div ref={cardsRef} className="grid-responsive">
          {clubs.map((c) => (
            <article key={c.name} className="glass-panel resources-card card-interactive" data-stagger-child>
              <h3 className="resources-card__title">{c.name}</h3>
              <p className="resources-card__body">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <style>{`
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
      `}</style>
    </div>
  );
}
