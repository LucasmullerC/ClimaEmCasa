import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.png';
import "../css/Header.css";

class Header extends React.Component {
    render() {
      return <HeaderComp />;
    }
  }

  const HeaderComp = () => {
    return(    
        <Navbar expand="lg" className="bg-body-tertiary" id="NavbarHeader">
        <Container id="containerHeader">
        <Navbar.Brand href="#home">
            <img
              src={logo}
              className="navbar navbar-expand-lg py-lg-0 fixed-top"
              alt="ClimaEmCasa logo"
              id="imgHeader"
            />
          </Navbar.Brand>
          <div className="d-flex flex-grow-1 justify-content-center">
          <form class="d-flex" action="javascript:getData()">
            <input id="pesqtxt" class="form-control me-2" placeholder="Buscar Cidade"></input>
            <button id="pesqbtn" class="btn btn-outline-success" type='button'>Pesquisar</button>
          </form>
          </div>
        </Container>
      </Navbar>
      );
  }
  export default () => (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );