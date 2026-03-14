import  { useContext } from "react";
import "./NavBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { authContext } from "../../context/auth";

function NavBar() {
  const wishlistCount = useSelector((state) => state.wishlist.items.length);
  const {  setisAuth } = useContext(authContext);

  return (
    <Navbar expand="lg" className="shadow-sm py-2 bg-white">
      <Container>
        <Navbar.Brand as={Link} to="/home" className="brand-name">
          FilmY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/products" className="nav-link">
              Movies
            </Link>

            {localStorage.getItem("token") ? (
              <Link
                to="/"
                className="nav-link"
                onClick={() => {
                  localStorage.removeItem("token");
                  setisAuth(false);
                }}
              >
                Logout
              </Link>
            ) : (
              <>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </>
            )}

            <Link to="/wishlist" className="nav-link position-relative wishlist-link">
              <FaHeart className="iconNavfav" />
              <span className="wishlist-count badge bg-danger position-absolute top-0 start-100 translate-middle">
                {wishlistCount}
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
