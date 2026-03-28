# 🛍️ Viani - Ecommerce de Roupas

## 📌 Visão Geral
O **Viani** é um projeto de e-commerce voltado para a venda de roupas, desenvolvido com:
- **Backend:** Java + Spring Boot
- **Frontend:** React
- **Banco de Dados:** MySQL/PostgreSQL
- **Autenticação:** JWT (JSON Web Token)
- **Deploy:** Docker

---

## 🎯 Objetivos
- Criar uma plataforma moderna e responsiva para venda de roupas.
- Implementar carrinho de compras, sistema de pagamento e gerenciamento de pedidos.
- Garantir segurança e escalabilidade.

---

## 🏗️ Arquitetura
Frontend (React) ---> Backend (Spring Boot REST API) ---> Database (MySQL/PostgreSQL)

Código

- **Frontend (React):**
  - Interface responsiva
  - Catálogo de produtos
  - Carrinho de compras
  - Checkout e integração com pagamentos

- **Backend (Spring Boot):**
  - API RESTful
  - Autenticação e autorização com JWT
  - CRUD de produtos, usuários e pedidos
  - Integração com gateway de pagamento

- **Banco de Dados:**
  - Tabelas: Usuários, Produtos, Pedidos, Carrinho
  - Relacionamentos normalizados

---

## 📂 Estrutura de Pastas

### Backend (Spring Boot)

viani-backend/

├── src/main/java/com/viani

│    ├── controller

│    ├── service

│    ├── repository

│    ├── model

│    └── config

├── src/main/resources

│    └── application.properties

└── pom.xml

Código

### Frontend (React)

viani-frontend/

├── src/

│    ├── components

│    ├── pages

│    ├── services

│    ├── hooks

│    └── App.js

├── public/

└── package.json

Código

---

## 🚀 Funcionalidades Principais
- Cadastro e login de usuários
- Listagem de produtos
- Filtro por categoria, preço e tamanho
- Carrinho de compras
- Checkout com integração de pagamento
- Painel administrativo para gerenciar produtos e pedidos

---

## 🔧 Tecnologias Utilizadas
- **Backend:** Java 17, Spring Boot, Spring Security, JPA/Hibernate
- **Frontend:** React, Axios, Redux/Context API
- **Banco de Dados:** MySQL/PostgreSQL
- **Infra:** Docker, CI/CD com GitHub Actions

---


## 🚀 Como Rodar o Projeto (atual)
### Backend
1. Clone o repositório  
2. Entre na pasta `viani-backend`  
3. Rode `mvn spring-boot:run`  

### Frontend
1. Entre na pasta `viani-frontend`  
2. Instale dependências: `npm install`  
3. Rode `npm start`  

*(Obs: ainda não há integração entre backend e frontend)*

---

## 📊 Roadmap Inicial
- [ ] Configurar autenticação JWT  
- [ ] Criar CRUD de produtos  
- [ ] Implementar carrinho de compras  
- [ ] Integrar gateway de pagamento  
- [ ] Criar painel administrativo  

---

## 🤝 Contribuição
Este projeto está em fase inicial.  
Sugestões e contribuições são bem-vindas via **issues** e **pull requests**.

---

## 📄 Licença
Licença MIT — uso livre para estudo e desenvolvimento.

## 👨‍💻 Autor
Projeto desenvolvido por **Davi** como iniciativa de aprendizado e prática em **Java, Spring Boot e React**.
