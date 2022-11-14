import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Navbar, Container } from "react-bootstrap";
function App() {
  return (
    <Navbar
      expand="lg"
      variant="light"
      bg="light"
      style={{
        height: "100px",
        background: "orange",
      }}
    >
      <Container>
        <Navbar.Brand href="#" style={{ background: "" }}>
          QB HACKS!!!!
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default App;
