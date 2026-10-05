import { Badge, Col, Container, Row } from "react-bootstrap";

function Sobre() {
  return (
    <section id="sobre" className="sobre py-5">
      <Container className="py-4">
        <div className="text-center mb-5">
          <Badge pill bg="dark" className="px-4 py-2">
            📼 NOSSA HISTÓRIA
          </Badge>

          <h2 className="display-5 fw-bold mt-3">
            Uma pessoa. Uma loja. Mil histórias.
          </h2>

          <p className="text-muted sobre-intro">
            A Rebobina nasceu da vontade de levar a nostalgia dos jogos antigos
            para uma experiência digital.
          </p>
        </div>

        <div className="historia-box">
          <Row className="align-items-center g-5">
            <Col lg={5} className="text-center">
              <div className="historia-fita">
                <div className="fita-topo">
                  <span>VHS</span>
                  <span>REBOBINA</span>
                </div>

                <div className="fita-corpo">
                  <div className="fita-rolo"></div>
                  <div className="fita-rolo"></div>
                </div>

                <div className="fita-nome">PLAY • PAUSE • REWIND</div>
              </div>
            </Col>

            <Col lg={7}>
              <span className="capitulo">CAPÍTULO 01</span>

              <h3 className="fw-bold mt-2">Uma ideia que ganhou forma</h3>

              <p>
                Um integrante, apaixonado por jogos clássicos, teve a ideia de
                criar uma loja online com a cara das antigas locadoras.
              </p>

              <p>
                Assim surgiu a Rebobina, com um catálogo de jogos clássicos e
                uma identidade inspirada na nostalgia dos vintage.
              </p>

              <div className="palavra-rebobina">"DÊ O PLAY NA NOSTALGIA."</div>

           
            </Col>
          </Row>
        </div>

        <div className="integrante-box text-center mt-5">
          <Badge pill bg="dark" className="px-4 py-2">
            🕹️ RESPONSABILIDADE
          </Badge>

          <h3 className="fw-bold mt-3">Samuel</h3>

          <p className="mb-2">Responsável pelo universo dos jogos.</p>

          <strong>🕹️ Jogos</strong>
        </div>
      </Container>
    </section>
  );
}

export default Sobre;
