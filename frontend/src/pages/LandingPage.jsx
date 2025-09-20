import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Shield, Zap, Code, Star, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Users size={32} />,
      title: "User Management",
      description: "Comprehensive user dashboard with real-time data fetching and management capabilities."
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Authentication",
      description: "Robust login and registration system with proper error handling and validation."
    },
    {
      icon: <Zap size={32} />,
      title: "Modern React",
      description: "Built with functional components, hooks, and clean MVVM architecture patterns."
    }
  ];

  const stats = [
    { number: "100%", label: "React Hooks" },
    { number: "Clean", label: "Architecture" },
    { number: "Modern", label: "UI/UX" },
    { number: "Fast", label: "Performance" }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
      color: 'white',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    backgroundAnimations: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      zIndex: 0
    },
    bgElement1: {
      position: 'absolute',
      top: '-160px',
      right: '-160px',
      width: '320px',
      height: '320px',
      background: 'rgba(139, 92, 246, 0.2)',
      borderRadius: '50%',
      filter: 'blur(60px)',
      animation: 'pulse 4s ease-in-out infinite'
    },
    bgElement2: {
      position: 'absolute',
      bottom: '-160px',
      left: '-160px',
      width: '320px',
      height: '320px',
      background: 'rgba(59, 130, 246, 0.2)',
      borderRadius: '50%',
      filter: 'blur(60px)',
      animation: 'pulse 4s ease-in-out infinite 1s'
    },
    bgElement3: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '320px',
      height: '320px',
      background: 'rgba(236, 72, 153, 0.1)',
      borderRadius: '50%',
      filter: 'blur(60px)',
      animation: 'pulse 4s ease-in-out infinite 2s'
    },
    header: {
      position: 'relative',
      zIndex: 10,
      padding: '24px'
    },
    nav: {
      maxWidth: '1280px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    logoText: {
      fontSize: '24px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    socialLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px'
    },
    socialIcon: {
      color: '#9ca3af',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    },
    heroSection: {
      position: 'relative',
      zIndex: 10,
      padding: '80px 24px',
      textAlign: 'center'
    },
    heroContainer: {
      maxWidth: '1280px',
      margin: '0 auto'
    },
    heroContent: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: 'all 1s ease-out'
    },
    heroTitle: {
      fontSize: 'clamp(3rem, 8vw, 7rem)',
      fontWeight: 'bold',
      marginBottom: '24px',
      lineHeight: 1.1
    },
    gradientText: {
      background: 'linear-gradient(135deg, #60a5fa, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroSubtitle: {
      fontSize: 'clamp(1.25rem, 3vw, 2rem)',
      color: '#d1d5db',
      marginBottom: '32px',
      maxWidth: '768px',
      margin: '0 auto 32px auto',
      lineHeight: 1.6
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '64px'
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #9333ea, #db2777)',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '50px',
      fontWeight: '600',
      fontSize: '18px',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      transform: 'scale(1)',
      boxShadow: '0 4px 15px rgba(147, 51, 234, 0.4)'
    },
    secondaryButton: {
      border: '2px solid #a855f7',
      background: 'transparent',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '50px',
      fontWeight: '600',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      transform: 'scale(1)'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '32px',
      marginBottom: '80px'
    },
    statCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    statNumber: {
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#a855f7',
      marginBottom: '8px'
    },
    statLabel: {
      color: '#d1d5db',
      fontWeight: '500'
    },
    featuresSection: {
      position: 'relative',
      zIndex: 10,
      padding: '80px 24px'
    },
    featuresContainer: {
      maxWidth: '1280px',
      margin: '0 auto'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '64px'
    },
    sectionTitle: {
      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
      fontWeight: 'bold',
      marginBottom: '24px',
      background: 'linear-gradient(135deg, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    sectionSubtitle: {
      fontSize: '20px',
      color: '#d1d5db',
      maxWidth: '512px',
      margin: '0 auto'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px'
    },
    featureCard: (index) => ({
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '32px',
      border: currentFeature === index ? '2px solid rgba(168, 85, 247, 0.5)' : '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.5s ease',
      cursor: 'pointer',
      transform: 'scale(1)',
      boxShadow: currentFeature === index ? '0 8px 32px rgba(168, 85, 247, 0.3)' : '0 4px 16px rgba(0, 0, 0, 0.1)'
    }),
    featureIcon: {
      color: '#a855f7',
      marginBottom: '24px',
      transition: 'transform 0.3s ease'
    },
    featureTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: 'white',
      transition: 'color 0.3s ease'
    },
    featureDescription: {
      color: '#d1d5db',
      lineHeight: 1.6
    },
    ctaSection: {
      position: 'relative',
      zIndex: 10,
      padding: '80px 24px'
    },
    ctaContainer: {
      maxWidth: '1024px',
      margin: '0 auto',
      textAlign: 'center'
    },
    ctaCard: {
      background: 'linear-gradient(135deg, #9333ea, #db2777)',
      borderRadius: '24px',
      padding: '48px',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    },
    ctaIcon: {
      color: '#fbbf24',
      margin: '0 auto 24px auto',
      animation: 'pulse 2s ease-in-out infinite'
    },
    ctaTitle: {
      fontSize: 'clamp(2rem, 5vw, 4rem)',
      fontWeight: 'bold',
      marginBottom: '24px',
      color: 'white'
    },
    ctaSubtitle: {
      fontSize: '20px',
      color: 'rgba(168, 85, 247, 0.2)',
      marginBottom: '32px'
    },
    ctaButton: {
      background: 'white',
      color: '#9333ea',
      padding: '16px 40px',
      borderRadius: '50px',
      fontWeight: 'bold',
      fontSize: '18px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      transform: 'scale(1)',
      boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)'
    },
    footer: {
      position: 'relative',
      zIndex: 10,
      padding: '48px 24px',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)'
    },
    footerContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      textAlign: 'center'
    },
    footerLogo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginBottom: '16px'
    },
    footerText: {
      color: '#9ca3af',
      marginBottom: '16px'
    },
    footerCredit: {
      fontSize: '14px',
      color: '#6b7280'
    }
  };

  // Add CSS animations
  const cssAnimations = `
    @keyframes pulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.8; }
    }
    
    @media (min-width: 640px) {
      .button-group {
        flex-direction: row !important;
      }
    }
    
    .primary-button:hover {
      transform: scale(1.05) !important;
      box-shadow: 0 8px 25px rgba(147, 51, 234, 0.6) !important;
    }
    
    .secondary-button:hover {
      background: rgba(168, 85, 247, 0.2) !important;
      transform: scale(1.05) !important;
    }
    
    .stat-card:hover {
      background: rgba(255, 255, 255, 0.2) !important;
      transform: translateY(-4px) !important;
    }
    
    .feature-card:hover {
      transform: scale(1.05) !important;
      border-color: rgba(168, 85, 247, 0.5) !important;
    }
    
    .feature-card:hover .feature-icon {
      transform: scale(1.1) !important;
    }
    
    .feature-card:hover .feature-title {
      color: #d8b4fe !important;
    }
    
    .cta-card:hover {
      transform: scale(1.02) !important;
    }
    
    .cta-button:hover {
      background: #f3f4f6 !important;
      transform: scale(1.05) !important;
      box-shadow: 0 8px 25px rgba(255, 255, 255, 0.5) !important;
    }
    
    .social-icon:hover {
      color: white !important;
    }
  `;

  return (
    <>
      <style>{cssAnimations}</style>
      <div style={styles.container}>
        {/* Animated background elements */}
        <div style={styles.backgroundAnimations}>
          <div style={styles.bgElement1}></div>
          <div style={styles.bgElement2}></div>
          <div style={styles.bgElement3}></div>
        </div>

        {/* Header */}
        <header style={styles.header}>
          <nav style={styles.nav}>
            <div style={styles.logo}>
              <Code size={32} color="#a855f7" />
              <span style={styles.logoText}>ReactDash</span>
            </div>
            <div style={styles.socialLinks}>
              <a href="" target="_blank" rel="noopener noreferrer"><Github size={24} style={styles.socialIcon} className="social-icon" /></a>
              <a href="https://www.linkedin.com/in/rupam-modak-a87066251/" target='_blank'><Linkedin size={24} style={styles.socialIcon} className="social-icon" /></a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div style={styles.heroContainer}>
            <div style={styles.heroContent}>
              <h1 style={styles.heroTitle}>
                <span style={styles.gradientText}>Modern React</span>
                <br />
                <span>Dashboard</span>
              </h1>

              <p style={styles.heroSubtitle}>
                A beautifully crafted user management dashboard built with React hooks,
                clean architecture, and modern design principles.
              </p>

              <div style={styles.buttonGroup} className="button-group">
                <Link to="/login">
                  <button style={styles.primaryButton} className="primary-button">
                    <span>Login</span>
                    <ArrowRight size={20} />
                  </button>
                </Link>

                <Link to="/register"><button style={styles.secondaryButton} className="secondary-button">
                  Register
                </button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div style={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.statCard,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                    transitionDelay: `${index * 200}ms`
                  }}
                  className="stat-card"
                >
                  <div style={styles.statNumber}>{stat.number}</div>
                  <div style={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section style={styles.featuresSection}>
          <div style={styles.featuresContainer}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Powerful Features</h2>
              <p style={styles.sectionSubtitle}>
                Built with modern React patterns and best practices for optimal performance and maintainability.
              </p>
            </div>

            <div style={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={styles.featureCard(index)}
                  className="feature-card"
                >
                  <div style={styles.featureIcon} className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3 style={styles.featureTitle} className="feature-title">
                    {feature.title}
                  </h3>
                  <p style={styles.featureDescription}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <div style={styles.ctaContainer}>
            <div style={styles.ctaCard} className="cta-card">
              <div style={styles.ctaIcon}>
                <Star size={64} />
              </div>
              <h3 style={styles.ctaTitle}>
                Ready to Experience the Future?
              </h3>
              <p style={styles.ctaSubtitle}>
                Join the modern React development experience with our dashboard application.
              </p>
              <button style={styles.ctaButton} className="cta-button">
                Launch Dashboard
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.footerContainer}>
            <div style={styles.footerLogo}>
              <Code size={24} color="#a855f7" />
              <span style={styles.logoText}>ReactDash</span>
            </div>
            <p style={styles.footerText}>
              Internship Task by <span style={{ color: '#a855f7', fontWeight: '600' }}>Rupam Modak</span>
            </p>
            <p style={styles.footerCredit}>
              Built with React.js, Modern CSS, and lots of ❤️
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;