import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";

function Navbar() {
  return (
    <header className="navbar-area">
      <BootstrapNavbar expand="lg" className="p-0">
        <Nav
          variant="pills"
          fill
          className="nav-pills-custom gap-2 p-1 small bg-white rounded-5 shadow-sm mx-3 mx-md-5"
          aria-label="Navegação principal"
        >
          <Nav.Link href="#inicio" className="rounded-5">
            Início
          </Nav.Link>
          <Nav.Link href="#jogos" className="rounded-5">
            Jogos
          </Nav.Link>
          <Nav.Link href="#sobre" className="rounded-5">
            Nossa história
          </Nav.Link>
          <Nav.Link href="#contato" className="rounded-5">
            Contato
          </Nav.Link>
        </Nav>
      </BootstrapNavbar>
    </header>
  );
}

export default Navbar;
