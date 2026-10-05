import { Badge, Button, Col, Container, Row } from "react-bootstrap";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col lg={7} className="text-center text-lg-start">
            <Badge pill bg="light" text="dark" className="px-4 py-2 mb-3">
              📼 LOJA DE JOGOS RETRÔ
            </Badge>

            <h1 className="display-1 fw-bold">REBOBINA</h1>

            <h2 className="display-6 fw-semibold">
              A nostalgia nunca sai de moda.
            </h2>

            <p className="lead mt-4">jogos para você voltar no tempo sem sair do sofá.</p>

            <div className="mt-4 d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
              <Button
                as="a"
                href="#jogos"
                variant="dark"
                size="lg"
                className="rounded-pill px-5"
              >
                🕹️ Explorar jogos
              </Button>

              <Button
                as="a"
                href="#sobre"
                variant="outline-dark"
                size="lg"
                className="rounded-pill px-5"
              >
                📼 Nossa história
              </Button>
            </div>
          </Col>

          <Col lg={5} className="text-center mt-5 mt-lg-0">
            <div className="vhs-card">
              <div className="vhs-label">
                <span>REBOBINA</span>
                <small>LOCADORA • 1990</small>
              </div>

              <div className="vhs-reels">
                <div className="reel"></div>
                <div className="reel"></div>
              </div>

              <div className="vhs-line"></div>

              <div className="vhs-bottom">
                <span>PLAY</span>
                <span>▶</span>
                <span>REW</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
