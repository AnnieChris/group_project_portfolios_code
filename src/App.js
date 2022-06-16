// Bootstrap
import {
  Card,
  Carousel,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { HashRouter as Router, Link, Routes, Route } from "react-router-dom";

// Personal Style
import "./App.css";
import Home from "./components/Home";

// Returner Components
import Colton from "./components/Colton/Colton";
import AboutLynn from "./components/Lynn/AboutLynn";
import AboutRichard from "./components/Richard/AboutRichard";
import AboutHeidi from "./components/Heidi/AboutHeidi";
import AboutAnnie from "./components/Annie/AboutAnnie";
import AboutNaga from "./components/NagaPriya/AboutNaga";
import AboutSelvapriya from "./components/Selvapriya/AboutSelvapriya";
import AboutGreeshma from "./components/Greeshma/AboutGreeshma";

// temporary background photos
import mountains1 from "./images/mountains1.jpg";
import mountains2 from "./images/mountains2.jpg";
import mountains3 from "./images/mountains3.jpg";

function App() {

  return (
    <div className="App">
      <h1>group_project_portfolios_code</h1>
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/group_project_portfolios_code">
              MARS - Feb. 2022 Cohort Group Portfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/group_project_portfolios_code">
                    Home
                  </Nav.Link>
                  <NavDropdown
                    title="February 2022 Returners"
                    id="basic-nav-dropdown">
                    <NavDropdown.Item href="/group_project_portfolios_code/Colton">
                      Colton W
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/group_project_portfolios_code/Lynn">
                      Lynn R
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/group_project_portfolios_code/Richard">
                      Richard
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/group_project_portfolios_code/Heidi">
                      Heidi W
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/group_project_portfolios_code/Annie">
                      Annie W
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/group_project_portfolios_code/NagaPriya">
                      Naga Priya
                      </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/group_project_portfolios_code/Selvapriya">
                      Selvapriya A 
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/group_project_portfolios_code/Greeshma">
                      Greeshma 
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="">Another Returner</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="">Another Returner</NavDropdown.Item> */}
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          {/* To implement YOUR component, copy what I did here for the names of your own component */}
          {/* I named my component 'Colton', but feel free name it whatever you like! */}
          {/* DONT FORGET TO EDIT THE LINK ELEMENT NEAR YOUR CARD AS WELL */}
          <Route path="*" element={<Home />} />
          <Route
            path="/group_project_portfolios_code/home"
            element={<Home />}
          />
          <Route
            path="/group_project_portfolios_code/Colton"
            element={<Colton />}
          />
          <Route
            path="/group_project_portfolios_code/Lynn"
            element={<AboutLynn />}
          />
          <Route
            path="/group_project_portfolios_code/Richard"
            element={<AboutRichard />}
          />
          {/* <Route path='/ReturnerName' element={<ReturnerComponent />} /> */}
          <Route
            path="/group_project_portfolios_code/Heidi"
            element={<AboutHeidi />}
          />
          {/* <Route path='/ReturnerName' element={<ReturnerComponent />} /> */}

          <Route 
            path='/group_project_portfolios_code/Annie' 
            element={<AboutAnnie />} 
          /> 
          <Route 
            path='/group_project_portfolios_code/Selvapriya' 
            element={<AboutSelvapriya />} 
          /> 
          <Route
            path="/group_project_portfolios_code/NagaPriya"
            element={<AboutNaga/>}
            />
            <Route
            path="/group_project_portfolios_code/Greeshma"
            element={<AboutGreeshma/>}
            />


          {/* <Route path='/ReturnerName' element={<ReturnerComponent />} /> */}
          {/* <Route path='/ReturnerName' element={<ReturnerComponent />} /> */}
          {/* <Route path='/ReturnerName' element={<ReturnerComponent />} /> */}
        </Routes>
        {/* Maybe Add later */}
        {/* <Redirect /> */}
      </Router>
    </div>
  );
}

export default App;
