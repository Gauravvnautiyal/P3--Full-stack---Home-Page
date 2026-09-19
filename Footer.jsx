function Footer() {
  return (
    <footer className="footer">

      {/* Newsletter */}
      <div className="newsletter">

        <div className="newsletter-title">
          SIGN UP FOR OUR DAILY INSIDER
        </div>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>
          Subscribe
        </button>

      </div>


      {/* Footer content */}
      <div className="footer-content">

        {/* Explore */}
        <div className="footer-column">

          <h3>Explore</h3>

          <a href="#">Home</a>
          <a href="#">Questions</a>
          <a href="#">Articles</a>
          <a href="#">Tutorials</a>

        </div>


        {/* Support */}
        <div className="footer-column">

          <h3>Support</h3>

          <a href="#">FAQs</a>
          <a href="#">Help</a>
          <a href="#">Contact Us</a>

        </div>


        {/* Social */}
        <div className="footer-column">

          <h3>Stay connected</h3>

          <div className="social-icons">

            <div className="social-icon">
              f
            </div>

            <div className="social-icon">
              ♥
            </div>

            <div className="social-icon">
              ◎
            </div>

          </div>

        </div>

      </div>


      {/* Copyright */}
      <div className="footer-bottom">

        <h3>DEV@Deakin 2022</h3>

        <div className="footer-links">

          <a href="#">Privacy Policy</a>

          <a href="#">Terms</a>

          <a href="#">Code of Conduct</a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;