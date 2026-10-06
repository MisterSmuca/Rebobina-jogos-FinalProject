import { useEffect, useState } from "react";
import { Button, Form, Modal, ProgressBar } from "react-bootstrap";

export interface JogoCompra {
  id: string;
  nome: string;
  preco: string;
}

interface CompraModalProps {
  jogo: JogoCompra | null;
  onClose: () => void;
}

type Etapa = "cadastro" | "midia" | "concluida";

const midias = [
  { id: "cartucho", icone: "🎮", nome: "Cartucho original", info: "Entrega física em até 7 dias" },
  { id: "cd", icone: "💿", nome: "CD / DVD", info: "Entrega física em até 5 dias" },
  { id: "digital", icone: "💾", nome: "Download digital", info: "Liberado na hora, por e-mail" },
];

const progresso: Record<Etapa, number> = { cadastro: 33, midia: 66, concluida: 100 };
const emailValido = (v: string) => /^\S+@\S+\.\S+$/.test(v);

const CHAVE_CADASTRO = "rebobina:cadastro";

interface Cadastro {
  nome: string;
  email: string;
  telefone: string;
}

function lerCadastro(): Cadastro {
  try {
    const salvo = localStorage.getItem(CHAVE_CADASTRO);
    if (salvo) {
      const dados = JSON.parse(salvo);
      return {
        nome: dados.nome ?? "",
        email: dados.email ?? "",
        telefone: dados.telefone ?? "",
      };
    }
  } catch {
    // se o navegador bloquear o storage, segue sem dados salvos
  }
  return { nome: "", email: "", telefone: "" };
}

function salvarCadastro(cadastro: Cadastro) {
  try {
    localStorage.setItem(CHAVE_CADASTRO, JSON.stringify(cadastro));
  } catch {
    // ignora erro de storage
  }
}

function apagarCadastro() {
  try {
    localStorage.removeItem(CHAVE_CADASTRO);
  } catch {
    // ignora erro de storage
  }
}

function CompraModal({ jogo, onClose }: CompraModalProps) {
  const [etapa, setEtapa] = useState<Etapa>("cadastro");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [midia, setMidia] = useState("");
  const [tentou, setTentou] = useState(false);

  // Zera tudo sempre que um novo jogo é escolhido
 useEffect(() => {
  if (jogo) {
    const cadastro = lerCadastro();
    setEtapa("cadastro");
    setNome(cadastro.nome);
    setEmail(cadastro.email);
    setTelefone(cadastro.telefone);
    setMidia("");
    setTentou(false);
  }
}, [jogo]);

  const cadastroOk =
    nome.trim().length >= 3 &&
    emailValido(email) &&
    telefone.replace(/\D/g, "").length >= 10;

  const enviarCadastro = (e: React.FormEvent) => {
  e.preventDefault();
  setTentou(true);
  if (cadastroOk) {
    salvarCadastro({ nome, email, telefone });
    setEtapa("midia");
  }
};

const limparDados = () => {
  apagarCadastro();
  setNome("");
  setEmail("");
  setTelefone("");
  setTentou(false);
};

  const midiaEscolhida = midias.find((m) => m.id === midia);

  return (
    <Modal show={jogo !== null} onHide={onClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title as="h5">📼 {jogo?.nome}</Modal.Title>
      </Modal.Header>

      <ProgressBar
        now={progresso[etapa]}
        variant="danger"
        style={{ height: 6, borderRadius: 0 }}
      />

      {etapa === "cadastro" && (
        <Form onSubmit={enviarCadastro} noValidate>
          <Modal.Body>
            <h6 className="mb-3">1. Seus dados</h6>

            <Form.Group className="mb-3" controlId="compra-nome">
              <Form.Label>Nome completo</Form.Label>
              <Form.Control
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                isInvalid={tentou && nome.trim().length < 3}
                placeholder="Seu nome"
              />
              <Form.Control.Feedback type="invalid">
                Informe seu nome.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="compra-email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={tentou && !emailValido(email)}
                placeholder="voce@email.com"
              />
              <Form.Control.Feedback type="invalid">
                Informe um e-mail válido.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="compra-telefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                isInvalid={tentou && telefone.replace(/\D/g, "").length < 10}
                placeholder="(21) 99999-9999"
             
             />
<Button
  type="button"
  variant="link"
  size="sm"
  className="p-0 mt-3 text-muted"
  onClick={limparDados}
>
  Limpar meus dados salvos
</Button>
              <Form.Control.Feedback type="invalid">
                Informe DDD + número.
              </Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" className="game-modal-btn">
              Cadastrar e continuar
            </Button>
          </Modal.Footer>
        </Form>
      )}

      {etapa === "midia" && (
        <>
          <Modal.Body>
            <h6 className="mb-3">2. Escolha a mídia</h6>
            <div className="d-grid gap-2">
              {midias.map((m) => (
                <Form.Check
                  key={m.id}
                  type="radio"
                  id={`midia-${m.id}`}
                  name="midia"
                  className={`midia-opcao ${midia === m.id ? "ativa" : ""}`}
                  checked={midia === m.id}
                  onChange={() => setMidia(m.id)}
                  label={
                    <span>
                      {m.icone} <strong>{m.nome}</strong>
                      <br />
                      <small className="text-muted">{m.info}</small>
                    </span>
                  }
                />
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={() => setEtapa("cadastro")}>
              Voltar
            </Button>
            <Button
              className="game-modal-btn"
              disabled={!midia}
              onClick={() => setEtapa("concluida")}
            >
              Finalizar compra • {jogo?.preco}
            </Button>
          </Modal.Footer>
        </>
      )}

      {etapa === "concluida" && (
        <>
          <Modal.Body className="text-center py-4">
            <div style={{ fontSize: "3.5rem" }}>✅</div>
            <h4 className="fw-bold mt-2">Compra concluída!</h4>
            <p className="mb-1">
              <strong>{jogo?.nome}</strong> em {midiaEscolhida?.nome.toLowerCase()} — {jogo?.preco}
            </p>
            <p className="text-muted small mb-0">
              Enviamos a confirmação para <strong>{email}</strong>,{" "}
              {nome.split(" ")[0]}. Bom jogo! 🕹️
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button className="game-modal-btn" onClick={onClose}>
              Voltar aos jogos
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}

export default CompraModal;