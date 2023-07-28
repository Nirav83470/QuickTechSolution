import { Button, Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import quicklogoes from "./img/logoquick.png"
import "./Menu.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <div>
        <div className="">
          <div className="container navbar_main">
            <Navbar expand="lg">
              <Container fluid>
                <Navbar.Brand href="#" >
                            QuickTech Solution
                  </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <Nav.Link >
                      <Link to="/Home" className=" active">
                        Home
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/About">About Us</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/Services">Services</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/Contact">Contact</Link>
                    </Nav.Link>

                    <NavDropdown title="More">
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <div >
                     <Button >Get Start</Button>
                  </div>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
