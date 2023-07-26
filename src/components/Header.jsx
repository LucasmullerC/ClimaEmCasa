import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/logo.png';
import github from "../img/github.png"
import linkedin from "../img/linkedin.png"
import "../css/Header.css";

  const Header = ({ onToggleSideBar , headerClass }) => {

    return(    
        <Navbar expand="lg" className={`bg-body-tertiary ${headerClass}`} id="NavbarHeader">
        <Container id="containerHeader">
        <Navbar.Brand href="#home">
            <img
              src={logo}
              className="navbar navbar-expand-lg py-lg-0 fixed-top"
              alt="ClimaEmCasa logo"
              id="imgHeader"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
          <div className="d-flex flex-grow-1 justify-content-center">
          <form class="form">
              <button>
                  <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                      <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
              </button>
              <input class="input" placeholder="Pesquisar" required="" type="text"></input>
              <button class="reset" type="reset">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
              </button>
          </form>
          </div>
          <Nav>
            <Container id="ContHeaderol">
            <ol id="olHeader">
            <li><b>Sobre</b></li>
                <li> 
                <a href="https://github.com/LucasmullerC"><img src={github} id="socialHeader" alt="Github Logo"/></a>
                </li>
                <a href="https://www.linkedin.com/in/lucas-m%C3%BCller-corr%C3%AAa-66721b213/"><img src={linkedin} id="socialHeader" alt="Linkedin Logo"/></a>
              </ol>
            </Container>
          </Nav>
          </Navbar.Collapse>
        </Container>
        <Nav id="navEndHeader">
              <NavDropdown align="end" title={
                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> </g></svg>
              }id="btnHeader">
         
              <NavDropdown.Item ><b>Sobre</b></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/LucasmullerC">
              <img src={github} id="socialHeader" alt="Github Logo"/> Github
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/lucas-m%C3%BCller-corr%C3%AAa-66721b213/"><img src={linkedin} id="socialHeader" alt="Linkedin Logo"/> Linkedin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Navbar>  
      );
  };
  
  export default Header;