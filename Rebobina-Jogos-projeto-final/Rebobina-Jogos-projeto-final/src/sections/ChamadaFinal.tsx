import { Badge, Button, Container } from "react-bootstrap";

function ChamadaFinal() {
  return (
    <section className="cta-section py-5">
      <Container className="py-5 text-center">
        <Badge pill bg="light" text="dark" className="px-4 py-2">
          ⭐ DESTAQUE DA SEMANA
        </Badge>

        <h2 className="display-5 fw-bold mt-3">
          Uma viagem no tempo começa aqui.
        </h2>

        <p className="lead mt-3">
          Escolha seu próximo clássico e volte a jogar aqueles títulos que
          fizeram história.
        </p>

        <Button
          as="a"
          href="#jogos"
          variant="light"
          size="lg"
          className="rounded-pill px-5 mt-3"
        >
          🕹️ Voltar aos jogos
        </Button>
      </Container>
    </section>
  );
}

export default ChamadaFinal;
