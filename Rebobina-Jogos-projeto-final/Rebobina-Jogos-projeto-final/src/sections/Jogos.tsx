import { useState } from "react";
import { Badge, Button, Card, Container } from "react-bootstrap";
import CompraModal from "../components/CompraModal";

interface Jogo {
  id: string;
  nome: string;
  imagem: string;
  alt: string;
  descricao: string;
  preco: string;
}

const jogos: Jogo[] = [
  {
    id: "mario",
    nome: "Super Mario Bros.",
    imagem: "/img/jogos/Mario_Series_Logo.svg.webp",
    alt: "Logo do Super Mario",
    descricao:
      "Plataforma clássico com desafios, inimigos e fases para chegar ao fim do jogo.",
    preco: "R$ 15,99",
  },
  {
    id: "pac-man",
    nome: "Pac-Man",
    imagem: "/img/jogos/Pac-Man.png",
    alt: "Logo do Pac-Man",
    descricao:
      "Passe pelo labirinto, pegue os pontos e tente escapar dos fantasmas.",
    preco: "R$ 9,99",
  },
  {
    id: "sonic",
    nome: "Sonic",
    imagem: "/img/jogos/SonicLOgo.png",
    alt: "Logo do Sonic",
    descricao:
      "Corra pelas fases, pegue anéis e enfrente os inimigos em alta velocidade.",
    preco: "R$ 3,99",
  },
  {
    id: "mario-kart",
    nome: "Mario Kart",
    imagem: "/img/jogos/Mario_kart_first_logo.png",
    alt: "Logo do Mario Kart",
    descricao:
      "Dispute corridas e use itens para ganhar vantagem sobre os adversários.",
    preco: "R$ 5,99",
  },
  {
    id: "donkey-kong",
    nome: "Donkey Kong",
    imagem: "/img/jogos/Donkey-Kong-Logo-4.png",
    alt: "Logo do Donkey Kong",
    descricao:
      "Supere obstáculos e inimigos em fases de plataforma cheias de desafios.",
    preco: "R$ 4,99",
  },
  {
    id: "mortal-kombat",
    nome: "Mortal Kombat",
    imagem: "/img/jogos/mortalk.jpg",
    alt: "Imagem do Mortal Kombat",
    descricao:
      "Escolha seu lutador e enfrente os adversários usando golpes e especiais.",
    preco: "R$ 6,99",
  },
  {
    id: "street-fighter",
    nome: "Street Fighter",
    imagem: "/img/jogos/Street-Fighter-Logo.png",
    alt: "Logo do Street Fighter",
    descricao:
      "Entre nas lutas e use golpes e técnicas especiais para vencer cada combate.",
    preco: "R$ 4,99",
  },
  {
    id: "tetris",
    nome: "Tetris",
    imagem: "/img/jogos/Tetris.png",
    alt: "Logo do Tetris",
    descricao:
      "Encaixe as peças, complete linhas e tente manter o tabuleiro organizado.",
    preco: "R$ 3,99",
  },
  {
    id: "the-king-of-fighters-97",
    nome: "The King of Fighters '97",
    imagem: "/img/jogos/figthers.jpg",
    alt: "Imagem de The King of Fighters 97",
    descricao:
      "Monte sua equipe de lutadores e enfrente outros times em combates intensos.",
    preco: "R$ 4,99",
  },
];

function Jogos() {
  const [jogoSelecionado, setJogoSelecionado] = useState<Jogo | null>(null);

  return (
    <section id="jogos" className="jogos-section">
      <Container className="py-5">
        <div className="text-center mb-5">
          <Badge pill bg="dark" className="px-4 py-2">
            🕹️ CATÁLOGO RETRÔ
          </Badge>

          <h2 className="display-4 fw-bold mt-3 text-white">Jogos que marcaram gerações</h2>
<br></br>
          <p className="lead text-white mx-auto jogos-intro ">
            Reviva alguns dos maiores clássicos dos videogames e escolha seu
            próximo jogo para dar o play na nostalgia.
          </p>
        </div>

        <div className="catalogo">
          {jogos.map((jogo) => (
            <Card className={`game-card ${jogo.id}`} key={jogo.id}>
              <Card.Body className="game-card-body">
                <Card.Img
                  src={jogo.imagem}
                  alt={jogo.alt}
                  className="game-image"
                />

                <Card.Title as="h3">{jogo.nome}</Card.Title>

                <Card.Text className="descricao">{jogo.descricao}</Card.Text>

                <p className="preco">{jogo.preco}</p>

                <Button
   type="button"
  className="game-buy-button"
  onClick={() => setJogoSelecionado(jogo)}
>
  Comprar
</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
           </Container>

      <CompraModal
        jogo={jogoSelecionado}
        onClose={() => setJogoSelecionado(null)}
      />
    </section>
  );
}

export default Jogos;
