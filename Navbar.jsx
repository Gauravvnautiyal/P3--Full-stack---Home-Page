function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        DEV@Deakin
      </div>

      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Questions</a>
        <a href="#">Articles</a>
        <a href="#">Tutorials</a>
      </div>

      <div className="navbar-buttons">
        <button>Log in</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;