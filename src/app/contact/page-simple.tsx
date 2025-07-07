export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-16" style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <nav style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', color: '#6b7280' }}>
            <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>
              Home
            </a>
            <span style={{ margin: '0 0.5rem' }}>/</span>
            <span style={{ color: '#111827' }}>Contact</span>
          </div>
        </nav>

        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Get In Touch</h1>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '48rem' }}>
            I'm always interested in new opportunities and exciting projects. 
            Whether you want to discuss a potential collaboration or just say hello, 
            I'd love to hear from you.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Send a Message</h2>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '0.375rem',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '0.375rem',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '0.375rem',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project or just say hello..."
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '0.375rem',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <button
                type="submit"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.375rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Other Ways to Connect</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ 
                backgroundColor: 'white', 
                padding: '1.5rem', 
                borderRadius: '0.5rem', 
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' 
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Email</h3>
                <p style={{ color: '#6b7280' }}>hello@yourportfolio.com</p>
              </div>
              
              <div style={{ 
                backgroundColor: 'white', 
                padding: '1.5rem', 
                borderRadius: '0.5rem', 
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' 
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>LinkedIn</h3>
                <p style={{ color: '#6b7280' }}>linkedin.com/in/yourprofile</p>
              </div>
              
              <div style={{ 
                backgroundColor: 'white', 
                padding: '1.5rem', 
                borderRadius: '0.5rem', 
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' 
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>GitHub</h3>
                <p style={{ color: '#6b7280' }}>github.com/yourusername</p>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Frequently Asked Questions</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <h4 style={{ fontWeight: '500', marginBottom: '0.25rem' }}>What's your typical response time?</h4>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    I usually respond within 24-48 hours during business days.
                  </p>
                </div>
                
                <div>
                  <h4 style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Do you work on weekends?</h4>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    I keep weekends for rest, but urgent matters can be discussed.
                  </p>
                </div>
                
                <div>
                  <h4 style={{ fontWeight: '500', marginBottom: '0.25rem' }}>What type of projects do you take on?</h4>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    I focus on web applications, APIs, and full-stack development projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}