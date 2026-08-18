export default function Home() {
  return (
    <main className="page">
      <nav className="nav">
        <div className="logo">NOVA</div>
        <div className="links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navButton" href="#contact">Get Started</a>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <span className="eyebrow">NEXT.JS • GITHUB ACTIONS</span>
          <h1>Build faster.<br /><span>Ship smarter.</span></h1>
          <p>
            A clean Next.js landing page made specifically to test your
            GitHub Actions build and artifact workflow.
          </p>
          <div className="actions">
            <a className="primary" href="#features">Explore Features →</a>
            <a className="secondary" href="#about">Learn More</a>
          </div>
        </div>

        <div className="visual" aria-label="Abstract product dashboard">
          <div className="glow" />
          <div className="card mainCard">
            <div className="cardTop"><span>PROJECT STATUS</span><b>● LIVE</b></div>
            <div className="metric">98.7%</div>
            <div className="muted">Deployment reliability</div>
            <div className="chart">
              <i /><i /><i /><i /><i /><i /><i /><i />
            </div>
          </div>
          <div className="card smallCard">
            <span>BUILD</span>
            <strong>Passed ✓</strong>
            <small>42 seconds ago</small>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div><strong>01</strong><h3>Fast builds</h3><p>Optimized Next.js production builds.</p></div>
        <div><strong>02</strong><h3>Automated CI</h3><p>Push code and let Actions do the work.</p></div>
        <div><strong>03</strong><h3>Artifacts</h3><p>Store your generated static output.</p></div>
      </section>

      <section id="about" className="about">
        <span className="eyebrow">READY TO TEST</span>
        <h2>Your workflow starts with a push.</h2>
        <p>Upload this project to GitHub, add your workflow, and watch the build run automatically.</p>
      </section>

      <footer id="contact">© 2026 NOVA · Next.js Workflow Test</footer>
    </main>
  );
}
