import { useLayoutEffect, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NoticeTicker } from '../components/NoticeTicker.jsx';
import { FloatingAesthetics } from '../components/FloatingAesthetics.jsx';

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounters() {
  const counterRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.counter-num');
      elements.forEach(el => {
        gsap.fromTo(el, 
          { innerText: 0 }, 
          {
            innerText: el.dataset.target,
            duration: 2.5,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: counterRef.current,
              start: "top 80%",
            }
          }
        );
      });
    }, counterRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={counterRef} className="container home-section" style={{ marginTop: '4rem' }}>
      <div className="grid-responsive" style={{ textAlign: 'center' }}>
        <div className="glass-panel" style={{ padding: '2rem', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
          <div className="counter-num gradient-text" data-target="1500" style={{ fontSize: '3.5rem', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>0</div>
          <div style={{ color: 'var(--accent-b)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Students Enrolled</div>
        </div>
        <div className="glass-panel" style={{ padding: '2rem', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
          <div className="counter-num gradient-text" data-target="45" style={{ fontSize: '3.5rem', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>0</div>
          <div style={{ color: 'var(--accent-b)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Expert Faculty</div>
        </div>
        <div className="glass-panel" style={{ padding: '2rem', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
          <div className="counter-num gradient-text" data-target="30" style={{ fontSize: '3.5rem', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>0</div>
          <div style={{ color: 'var(--accent-b)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Years of Excellence</div>
        </div>
      </div>
    </section>
  );
}

function ImageScroller() {
  const images = [
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
    "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80"
  ];
  return (
    <section className="home-section" style={{ overflow: 'hidden', padding: '3rem 0', background: 'var(--bg-glass)', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, var(--bg-base), transparent)', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, var(--bg-base), transparent)', zIndex: 1 }} />
      <div style={{ display: 'flex', width: 'max-content', animation: 'scroll-left 25s linear infinite' }}>
        {[...images, ...images].map((src, i) => (
          <img key={i} src={src} alt="Campus Life" style={{ height: '280px', width: '400px', objectFit: 'cover', margin: '0 1.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-float)' }} />
        ))}
      </div>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export function Home() {
  const heroRef = useRef(null);
  const orbRef = useRef(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !heroRef.current || !orbRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.to(orbRef.current, {
        y: 120,
        rotate: 15,
        scale: 1.1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
      // Add parallax to main copy
      gsap.to('.home-hero__copy', {
        y: 40,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <FloatingAesthetics />
      <div className="home" style={{ position: 'relative', zIndex: 1 }}>
        <section ref={heroRef} className="home-hero container">
          <div className="home-hero__grid">
            <div className="home-hero__copy">
              <p className="home-eyebrow" data-reveal>
                Department of Computer Science & Engineering
              </p>
              <h1 className="home-title" data-reveal data-reveal-delay="0.06">
                A modern digital front for <span className="gradient-text">CSE, VSSUT</span>
              </h1>
              <p className="home-lead" data-reveal data-reveal-delay="0.12">
                Inspired by leading institutions — clean information architecture, accessible
                storytelling, and live content from our CMS so students and visitors always see
                what matters.
              </p>
              <div className="home-cta" data-reveal data-reveal-delay="0.18">
                <a className="btn btn--primary" href="#hod-message">
                  HOD&apos;s message
                </a>
                <Link className="btn btn--ghost" to="/people">
                  Meet the faculty
                </Link>
              </div>
            </div>
            <div ref={orbRef} className="home-hero__visual glass-panel card-interactive" data-reveal>
              <div className="home-orb" aria-hidden="true" />
              <p className="home-visual-caption">Glass layers · Depth · Motion</p>
              <p className="home-visual-text">
                Undergraduate rigour, research-led teaching, and vibrant student technical life —
                all in one place.
              </p>
            </div>
          </div>
        </section>

        <section className="container" style={{ marginTop: '2rem' }}>
          <NoticeTicker />
        </section>

        <section id="hod-message" className="container home-section">
          <h2 className="section-title" data-reveal>
            Message from the Head of Department
          </h2>
          <p className="section-lead" data-reveal data-reveal-delay="0.05">
            A warm welcome to students, parents, alumni, and partners engaging with our department
            online.
          </p>
          <article className="glass-panel home-hod" data-reveal data-reveal-delay="0.1">
            <p>
              The Department of Computer Science & Engineering at VSSUT, Burla continues to invest
              in strong foundations, ethical practice, and industry-relevant skills. Our programmes
              emphasise problem-solving, systems thinking, and collaborative learning — preparing
              graduates to contribute responsibly to technology and society.
            </p>
            <p>
              This website is designed to be your first port of call for notices, people,
              academics, and resources. We hope it reflects the clarity and professionalism you
              expect from a leading academic department.
            </p>
            <footer className="home-hod__sign">
              <span className="home-hod__name">Professor (HOD), CSE</span>
              <span className="home-hod__role">VSSUT, Burla</span>
            </footer>
          </article>
        </section>

        <ImageScroller />
        <AnimatedCounters />

        <section className="container home-section home-highlights">
          <h2 className="section-title" data-reveal>
            At a glance
          </h2>
          <div className="grid-responsive">
            {[
              {
                t: 'Academics',
                d: 'Accredited programmes, structured curriculum, and syllabus resources in one hub.',
              },
              {
                t: 'Research',
                d: 'Faculty-led areas spanning core CS, intelligent systems, and applied computing.',
              },
              {
                t: 'Student life',
                d: 'Technical clubs, fests, and labs that complement classroom learning.',
              },
            ].map((x, i) => (
              <div
                key={x.t}
                className="glass-panel home-card card-interactive"
                data-reveal
                data-reveal-delay={String(0.06 * (i + 1))}
              >
                <h3 className="home-card__title">{x.t}</h3>
                <p className="home-card__body">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <style>{`
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
        `}</style>
      </div>
    </>
  );
}
