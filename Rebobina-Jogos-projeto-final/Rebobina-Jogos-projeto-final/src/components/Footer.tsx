import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer id="contato" className="bg-dark py-4">
      <Container>
        <p className="text-white text-center mb-3">© 2026 Rebobina</p>

        <div className="d-flex justify-content-center gap-3 fs-4">
          <a
            href="https://www.instagram.com/rebobina_locadora_retro/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="Instagram da Rebobina"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a href="#contato" className="text-white" aria-label="Contato">
            <i className="bi bi-file-earmark-text"></i>
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
