# Rebobina - Jogos Retrô

Projeto da atividade de Desenvolvimento Frontend II, adaptado para React + TypeScript e preparado para publicação no Netlify.

## Tecnologias

- React
- TypeScript
- Vite
- React-Bootstrap
- Bootstrap Icons
- CSS

## Estrutura principal

- `Hero`: apresentação da loja.
- `Jogos`: catálogo dos jogos.
- `Sobre`: história do projeto.
- `ChamadaFinal`: chamada final.
- `Navbar` e `Footer`: partes compartilhadas.

Os jogos ficam em um array tipado no `Jogos.tsx` e são exibidos com `map()`.

## Rodar no computador

```bash
npm install
npm run dev
```

Para conferir a versão de produção:

```bash
npm run build
npm run preview
```

## Netlify

O projeto já possui `netlify.toml` configurado com:

- comando de build: `npm run build`
- pasta publicada: `dist`

No Netlify, basta conectar o repositório público. O deploy executará o build do Vite e publicará a pasta `dist`.

## Imagens

As imagens e GIFs usados no catálogo ficam em:

```text
public/img/jogos/
```
