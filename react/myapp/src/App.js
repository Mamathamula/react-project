import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Courses from "./Courses";
import "./style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid Lk-back">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  {/* Use Link instead of a */}
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                  <Link className="nav-link" to="/courses">
                    Courses
                  </Link>
                  <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                    Disabled
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-4">left</div>
            <div className="col-md-8">
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
              </Routes>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="bg-light text-center text-lg-start mt-5">
          <div className="text-center p-3" style={{ backgroundColor: "#f1f1f1" }}>
            © 2024 Copyright: 
            <a className="text-dark" href="mailto:copyright@gmail.com">
              copyright@gmail.com
            </a>
          </div>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
