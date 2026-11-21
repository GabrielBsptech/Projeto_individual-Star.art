# Star.Art

> Entenda o Universo, um passo de cada vez.

O **Star.Art** é uma plataforma web de aprendizado sobre astronomia que mistura conteúdo, desafios e visualização de progresso. A ideia nasceu de uma vontade simples: **entreter enquanto ensina** — e, principalmente, mostrar que **o conhecimento abre o mundo** (e o Universo) para quem se permite explorar.

Mais do que um site para decorar planetas, o projeto propõe uma experiência leve e curiosa: você lê, testa o que aprendeu e acompanha a sua evolução como quem observa uma galáxia se formando.

---

## Por que este projeto existe

Aprender costuma ser tratado como obrigação. O Star.Art tenta inverter isso: transforma o estudo da astronomia em uma jornada visual, com quizzes, feedback imediato e uma dashboard que mostra o quanto você já avançou.

A mensagem por trás do projeto é direta:

> Conhecimento não é só conteúdo para prova. É o que expande a forma como você enxerga o mundo — e o que te dá coragem para ir além dele.

Cada quiz respondido é uma pequena prova disso: quanto mais você sabe, mais longe consegue enxergar.

---

## O que você encontra no site

- **Landing page institucional** com identidade visual espacial, animações de rolagem e apresentação da proposta.
- **Cadastro e login** de usuários, com senhas protegidas por hash.
- **Homepage do aluno**, com saudação personalizada e navegação para o quiz e a dashboard.
- **Quiz de astronomia** com quatro temas:
  - Sistema Solar
  - Exoplanetas
  - Buracos Negros
  - Galáxias
- **Feedback educativo** a cada pergunta, explicando o porquê da resposta.
- **Dashboard de progresso** com:
  - Assuntos respondidos
  - Avaliações realizadas
  - Média de acertos
  - Gráfico de aproveitamento por tema
- **Visual holográfico e planetas animados**, reforçando a atmosfera de descoberta.

---

## Como a experiência funciona

1. A pessoa se cadastra e faz login.
2. Na homepage, escolhe fazer um quiz.
3. Responde às perguntas e recebe feedback imediato com explicações.
4. Ao final, a tentativa é salva no banco de dados.
5. A dashboard transforma essas tentativas em estatísticas e gráficos, mostrando a evolução ao longo do tempo.

É um ciclo simples — **aprender, testar, visualizar** — pensado para manter a curiosidade viva.

---

## Tecnologias

**Front-end**
- HTML5, CSS3 e JavaScript
- Chart.js para o gráfico da dashboard
- Animações com CSS e JavaScript

**Back-end**
- Node.js com Express
- API REST em camadas (`routes` → `controllers` → `models`)
- MySQL para persistência dos dados
- `dotenv` para configuração de ambiente

---

## Estrutura do projeto

```
app.js                  Inicialização do servidor Express
public/                 Front-end (HTML, CSS, JS e imagens)
src/
  routes/               Endpoints da API
  controllers/          Validação e respostas HTTP
  models/               Consultas SQL
  database/             Conexão MySQL e script do banco
```

---

## Como rodar localmente

1. Clone o repositório e instale as dependências:
   ```bash
   npm install
   ```

2. Crie o banco de dados executando o script:
   ```
   src/database/script-star-art.sql
   ```

3. Configure as credenciais no arquivo `.env.dev`:
   ```
   DB_HOST=localhost
   DB_DATABASE=star_art
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_PORT=3306
   APP_PORT=3333
   APP_HOST=localhost
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

5. Acesse no navegador:
   ```
   http://localhost:3333
   ```

Para acessar de outro dispositivo na mesma rede, use o IP da máquina que está rodando o servidor:
```
http://SEU_IP:3333
```

---

## O que vem depois

O Star.Art é um projeto em evolução. Algumas ideias para o futuro:

- Novos módulos e níveis de dificuldade
- Conteúdos teóricos antes dos quizzes
- Ranking entre usuários
- Mais animações e efeitos visuais
- Versão mobile ainda mais fluida

---

## Uma última palavra

O Star.Art não quer só ensinar astronomia. Quer lembrar que aprender é uma forma de entretenimento — e que cada coisa nova que você entende abre uma porta para um mundo que antes parecia distante.

**O Universo é grande. O conhecimento é o que nos permite chegar mais longe.**
