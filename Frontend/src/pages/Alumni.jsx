import { useEffect } from 'react';
import { Users } from 'lucide-react';

const mockAlumni = [
  {
    id: 1,
    name: 'Debabrata Das',
    batch: '1992',
    role: 'Director',
    company: 'IIIT Bangalore',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    description: 'Eminent researcher and academician in the field of Computer Science.'
  },
  {
    id: 2,
    name: 'Anjali Sharma',
    batch: '2015',
    role: 'Senior Staff Engineer',
    company: 'Google',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    description: 'Core contributor to Google Search infrastructure and distributed systems.'
  },
  {
    id: 3,
    name: 'Rajiv Mohapatra',
    batch: '2005',
    role: 'VP of Engineering',
    company: 'Amazon Web Services',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    description: 'Scaling highly available microservices for millions of concurrent users.'
  },
  {
    id: 4,
    name: 'Priya Patel',
    batch: '2018',
    role: 'AI Research Scientist',
    company: 'OpenAI',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    description: 'Pioneering work in large language models and reinforcement learning.'
  },
  {
    id: 5,
    name: 'Arun Kumar Biswal',
    batch: '2010',
    role: 'Founder & CEO',
    company: 'TechFlow (YC W16)',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    description: 'Founded a B2B SaaS platform now valued at over $500M.'
  },
  {
    id: 6,
    name: 'Sneha Gupta',
    batch: '2020',
    role: 'Cybersecurity Analyst',
    company: 'Palo Alto Networks',
    imageUrl: 'https://images.unsplash.com/photo-1598550874175-4d0ef43ee90d?w=400&q=80',
    description: 'Specializing in advanced threat detection and zero-trust architectures.'
  }
];

export function Alumni() {
  useEffect(() => {
    document.title = 'Alumni Gallery | VSSUT CSE';
  }, []);

  return (
    <div style={{ padding: 'var(--space-section) 0', width: '100%', minHeight: '80vh' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-glass)',
            borderRadius: 'var(--radius-pill)',
            marginBottom: '1.5rem',
            color: 'var(--accent-b)',
            fontWeight: 600
          }}>
            <Users size={18} /> Our Pride
          </div>
          <h1 className="section-title gradient-text">Distinguished Alumni Gallery</h1>
          <p className="section-lead" style={{ margin: 'auto' }}>
            Meet the exceptional individuals from the Department of Computer Science and Engineering, VSSUT Burla, who are making a global impact across leading technology organizations.
          </p>
        </div>

        {/* Grid Section */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem',
            paddingTop: '2rem'
          }}
        >
          {mockAlumni.map((alumnus) => (
            <div 
              key={alumnus.id}
              className="glass-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-float)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                <img 
                  src={alumnus.imageUrl} 
                  alt={alumnus.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  padding: '1.5rem 1.5rem 0.5rem',
                  color: '#fff'
                }}>
                  <span style={{ 
                    fontWeight: 700, 
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    background: 'var(--accent-a)',
                    color: '#000',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.75rem',
                    marginBottom: '0.5rem'
                  }}>
                    Class of {alumnus.batch}
                  </span>
                </div>
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontFamily: 'var(--font-display)' }}>
                  {alumnus.name}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span style={{ fontWeight: 600, color: 'var(--accent-b)' }}>{alumnus.role}</span>
                  <span style={{ color: 'var(--text-faint)', fontSize: '0.9rem' }}>@ {alumnus.company}</span>
                </div>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5', marginTop: 'auto' }}>
                  {alumnus.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
