# 📄 Projeto: Página Pessoal (Bootstrap + Tailwind)

## 📌 Descrição

Este projeto consiste no desenvolvimento de uma **página pessoal/portfólio**, com o objetivo de apresentar informações acadêmicas, habilidades, projetos e formas de contato.

Foram desenvolvidas **duas versões da mesma aplicação**:

* ✅ Versão utilizando **Bootstrap**
* ✅ Versão utilizando **Tailwind CSS**

O objetivo é comparar abordagens diferentes de estilização e organização de layout.

---

## 🗂️ Estrutura do Projeto

```
/projeto
│
├── index-bootstrap.html        # Versão utilizando Bootstrap
├── index-tailwind.html         # Versão utilizando Tailwind
│
├── /assets
│   ├── /css
│   │   └── styles.css          # Estilos personalizados (Bootstrap)
│   │
│   ├── /js
│   │   └── script.js           # Funcionalidades (ex: tema claro/escuro)
│   │
│   └── /img
│       └── foto.jpg            # Foto de perfil
│
└── README.md                   # Documentação do projeto
```

---

## 🧱 Tecnologias Utilizadas

### 🔹 Versão Bootstrap

* HTML5
* Bootstrap 5.3
* CSS personalizado
* JavaScript (tema claro/escuro)
* Font Awesome (ícones)

### 🔹 Versão Tailwind

* HTML5
* Tailwind CSS (via CDN)

---

## 📱 Funcionalidades

* Layout responsivo (mobile, tablet e desktop)
* Navbar com navegação entre seções
* Seções organizadas:

  * Sobre
  * Habilidades
  * Projetos
  * Interesses
  * Contato
* Cards para organização de conteúdo
* Barras de progresso para habilidades
* Botões estilizados
* Tema claro/escuro (Bootstrap)
* Foto de perfil estilizada

---

## 🎨 Customizações

### Bootstrap

* Alteração de cores via `styles.css`
* Personalização de:

  * Botões (`.btn-primary`)
  * Barras de progresso (`.progress-bar`)
* Implementação de tema escuro com `data-bs-theme`

### Tailwind

* Estilização direta via classes utilitárias
* Layout simplificado com:

  * `flex`
  * `grid`
  * `gap`
  * `rounded`
  * `shadow`

---

## 🌙 Tema Claro/Escuro

Na versão Bootstrap, o tema é controlado via JavaScript:

* Alterna entre:

  * `data-bs-theme="light"`
  * `data-bs-theme="dark"`

---

## 🚀 Como executar o projeto

1. Baixe ou clone o repositório
2. Abra qualquer um dos arquivos no navegador:

```
index-bootstrap.html
```

ou

```
index-tailwind.html
```

---

## 📌 Observações

* As duas versões possuem **a mesma estrutura de conteúdo**, variando apenas a forma de estilização.
* O projeto foi desenvolvido com foco em aprendizado de frameworks CSS.
* Não há necessidade de servidor — roda diretamente no navegador.

---

## 👤 Autor

**Anderson Fernandes Barbosa**
Estudante de Sistemas de Informação
Universidade Federal de Lavras (UFLA)

---

## 📎 Licença

Projeto desenvolvido para fins acadêmicos.
