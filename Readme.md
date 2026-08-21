# ⚡ TechStore

Aplicação de e-commerce front-end desenvolvida em **React**, simulando uma loja de eletrônicos completa: catálogo de produtos, busca, filtro por categoria, carrinho de compras com controle de quantidade, barra de progresso de frete grátis e seleção de forma de pagamento com botão de finalizar compra.

Projeto desenvolvido como exercício prático de React, componentização e versionamento com Git.

---

## 🖼️ Visão geral

A TechStore permite ao usuário navegar por um catálogo de produtos eletrônicos, buscar por nome, filtrar por categoria, adicionar itens ao carrinho, ajustar quantidades e simular a finalização da compra escolhendo entre Cartão de Crédito, Pix ou Boleto.

---

## ✨ Funcionalidades

- 🔍 **Busca de produtos** por nome em tempo real
- 🏷️ **Filtro por categoria** (Áudio, Wearables, Periféricos, Energia)
- 🛒 **Carrinho de compras** com:
  - Adição de itens sem duplicar produto (soma quantidade)
  - Botões de incremento/decremento de quantidade
  - Remoção individual de itens
  - Cálculo automático do total
- 🚚 **Barra de frete grátis** — mostra quanto falta para o cliente atingir o valor mínimo (R$ 300) e libera frete grátis automaticamente
- 💳 **Formas de pagamento** — seleção entre Cartão de Crédito, Pix e Boleto
- ✅ **Botão de finalizar compra** com confirmação visual do pedido

---

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/) (Create React App)
- JavaScript (ES6+)
- CSS puro (sem frameworks)

---

## 📁 Estrutura do projeto

```
projeto-react/
├── src/
│   ├── Header.js       # Cabeçalho da loja
│   ├── ProductList.js  # Catálogo de produtos, busca e filtro
│   ├── Cart.js         # Carrinho de compras e resumo do pedido
│   ├── Payment.js      # Seleção de forma de pagamento e checkout
│   ├── Footer.js       # Rodapé
│   ├── App.js          # Componente raiz, gerencia o estado do carrinho
│   ├── App.css         # Estilização geral da aplicação
│   └── index.js        # Ponto de entrada da aplicação
└── README.md
```

---

## ▶️ Como rodar o projeto

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd projeto-react
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

A aplicação abrirá automaticamente em [http://localhost:3000](http://localhost:3000).

---

## 🧩 Como funciona

1. O usuário navega pelo catálogo, podendo buscar por nome ou filtrar por categoria.
2. Ao clicar em **"Adicionar ao carrinho"**, o produto é incluído no carrinho (ou tem sua quantidade aumentada, caso já esteja lá).
3. No carrinho, é possível ajustar a quantidade de cada item ou removê-lo.
4. Uma barra de progresso indica quanto falta para o cliente atingir o frete grátis.
5. O usuário escolhe a forma de pagamento (Cartão, Pix ou Boleto) e clica em **"Finalizar Compra"**, recebendo uma confirmação do pedido.

---

## 🗂️ Histórico de versões (tags)

| Tag | Descrição |
|---|---|
| `v0.1` | Estrutura inicial do projeto |
| `v0.2` | Catálogo de produtos criado |
| `v0.3` | Carrinho de compras funcionando |
| `v0.4` | Layout estilizado (versão inicial) |
| `v1.0` | Primeira versão final |
| `v1.1` | Busca e filtro por categoria |
| `v1.2` | Controle de quantidade no carrinho |
| `v1.3` | Redesign visual moderno |
| `v1.4` | Resumo do pedido com frete grátis |
| `v2.0` | Segunda versão final (melhorada) |
| `v2.1` | Formas de pagamento e botão de checkout |
| `v2.2` | Estilização das formas de pagamento |

---

## 👤 Autor

Desenvolvido por **Vinícius** — estudante de Redes de Computadores, Desenvolvimento Web Front-end e Computação em Nuvem no SENAI.

---

## 📄 Licença

Projeto de estudo, sem fins comerciais.
