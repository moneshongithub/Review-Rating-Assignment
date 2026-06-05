import "../styles/Navbar.css";

function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar">
      <div className="logo">
        Review<span>&Rate</span>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="auth-links">
        <span>SignUp</span>
        <span>Login</span>
      </div>
    </nav>
  );
}

export default Navbar;