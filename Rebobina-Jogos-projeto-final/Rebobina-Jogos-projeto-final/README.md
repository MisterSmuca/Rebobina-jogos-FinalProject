# Rebobina - Jogos Retrô

Projeto desenvolvido para a atividade de Desenvolvimento Frontend II.

O **Final Project** é uma derivação da versão original do projeto Rebobina, adaptada de acordo com as orientações da atividade, com foco em uma **página única**, navegação funcional pelo menu e interação com o catálogo de jogos.

## Sobre o projeto

A Rebobina é uma loja virtual inspirada nas antigas locadoras e na nostalgia dos videogames clássicos.

Nesta versão final, o projeto foi reorganizado para funcionar como uma única página, reunindo as principais informações da aplicação em diferentes seções e permitindo a navegação através do menu.

Além da apresentação dos jogos, foi adicionada uma simulação de compra com cadastro do usuário, escolha da mídia e confirmação da operação.

## Tecnologias utilizadas

* React
* TypeScript
* Vite
* React-Bootstrap
* Bootstrap
* Bootstrap Icons
* CSS

## Estrutura do projeto

A aplicação principal está organizada da seguinte forma:

* `Hero`: apresentação da Rebobina e chamada para o catálogo.
* `Jogos`: catálogo de jogos retrô e interação com o botão de compra.
* `Sobre`: apresentação da história e proposta da Rebobina.
* `ChamadaFinal`: chamada final para retornar ao catálogo.
* `Navbar`: menu de navegação da página.
* `Footer`: rodapé e informações de contato.
* `CompraModal`: fluxo de compra dos jogos.

## Navegação em página única

Uma das principais alterações realizadas no Final Project foi a organização da aplicação em uma única página.

O componente `LandingPage.tsx` reúne todas as seções da aplicação:

* Início
* Jogos
* Nossa história
* Contato

O menu utiliza links para os respectivos IDs das seções, permitindo que o usuário navegue pela página sem precisar acessar diferentes páginas ou arquivos HTML.

## Funcionalidades

### Catálogo de jogos

Os jogos são armazenados em um array tipado no arquivo `Jogos.tsx` e renderizados utilizando `map()`.

Cada jogo possui:

* Nome
* Imagem
* Descrição
* Preço
* Botão de compra

### Simulação de compra

O botão **Comprar** abre um modal desenvolvido no componente `CompraModal.tsx`.

O processo é dividido em três etapas:

1. Cadastro do usuário
2. Escolha da mídia
3. Confirmação da compra

O cadastro possui validação de nome, e-mail e telefone.

Os dados cadastrados podem ser armazenados no `localStorage` para facilitar compras futuras no mesmo navegador.

As opções de mídia disponíveis são:

* Cartucho original
* CD / DVD
* Download digital

Ao finalizar, o sistema apresenta uma confirmação com o jogo selecionado, a mídia escolhida, o preço e o e-mail cadastrado.

> A etapa de compra é uma simulação para fins acadêmicos. O projeto não possui processamento real de pagamento, banco de dados ou sistema de pedidos.

## Alterações em relação à versão original

O Final Project foi desenvolvido a partir da versão original do projeto Rebobina, realizando as seguintes alterações principais:

### 1. Conversão para TypeScript

Os arquivos da aplicação foram convertidos de `.jsx` para `.tsx`, permitindo a utilização de tipagem no projeto.

### 2. Utilização do React-Bootstrap

Foram adicionados componentes do React-Bootstrap para elementos como:

* Navbar
* Button
* Card
* Badge
* Container
* Row
* Col
* Form
* Modal
* ProgressBar

### 3. Página única

O projeto foi adaptado para concentrar o conteúdo em uma única página, utilizando o componente `LandingPage.tsx`.

As diferentes partes da aplicação passaram a funcionar como seções da mesma página.

### 4. Menu funcional

O menu passou a utilizar componentes de navegação e links para os IDs das seções:

* `#inicio`
* `#jogos`
* `#sobre`
* `#contato`

Dessa forma, o usuário consegue navegar pelas áreas da página através do menu.

### 5. Nova funcionalidade de compra

Na versão original, o botão **Comprar** não possuía uma ação associada.

Na versão final, o botão abre um modal e inicia o processo de compra.

### 6. Validação e armazenamento de cadastro

Foi adicionada validação dos dados informados pelo usuário e armazenamento do cadastro utilizando `localStorage`.

### 7. Escolha da mídia

Foi adicionada a possibilidade de selecionar como o jogo seria disponibilizado:

* Cartucho original
* CD / DVD
* Download digital

### 8. Confirmação da compra

Após o preenchimento dos dados e escolha da mídia, o sistema apresenta uma tela de confirmação da compra.

### 9. Adaptação do conteúdo

O conteúdo da seção "Sobre" foi adaptado para o formato do projeto final, com foco no universo dos jogos retrô.

### 10. Adaptação visual

O CSS foi ajustado para trabalhar com os novos componentes do React-Bootstrap e para incluir os estilos necessários ao modal de compra, mantendo a identidade visual retrô da Rebobina.

## Como executar o projeto

### Instalar as dependências

```bash
npm install
```

### Executar em ambiente de desenvolvimento

```bash
npm run dev
```

### Gerar a versão de produção

```bash
npm run build
```

### Visualizar a versão de produção

```bash
npm run preview
```

## Imagens

As imagens e GIFs utilizados no catálogo estão localizados em:

```text
public/img/jogos/
```

## Deploy

O projeto possui configuração para publicação no Netlify através do arquivo:

```text
netlify.toml
```

A configuração utiliza:

```text
Build command: npm run build
Publish directory: dist
```

## Links

**Repositório no GitHub:**

https://github.com/MisterSmuca/Rebobina-jogos-FinalProject.git

**Projeto publicado no Netlify:**

https://rebobina-jogos.netlify.app

## Responsabilidade

**Samuel**

Responsável pelo desenvolvimento e adaptação do universo de jogos da Rebobina no Final Project.
