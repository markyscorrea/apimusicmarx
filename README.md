# Api Music MarX

Essa é uma **API Rest** que permite cadastro de nome/link das músicas do artista para consumo posterior em aplicação.

## 💻Teconologias Utilizadas
- MongoDB
- NodeJS
   - Express
   - Mongoose

---

##  📃Conceitos

- Criação de um CRUD em Node.js;
- A separação de responsabilidades através de arquivos e funções de acordo com os padrões utilizados pela comunidade;
- Roteamento com o Express;
- Utilizar Insomnia para desenvolver o backend sem um frontend estruturado;
- Métodos HTTP
- Liberação de uso do backend para o CORS.

---

## 🔁Rotas


| Métodos  | Endereço  | Retorno |
| ------------ |---------------|-----|
| `GET`      | /        | List Musics  |
| `GET`      | /music/id | List Music  |
| `POST`     | /music/save | Save Music  |
| `PUT`      | /music/id  | Update Music |
| `DELETE`      | /music/id  | Delete Music |

---

## 💾Instalação

**Instalar dependencias:**

```shell
$ npm install
```

Listen in: 

```
http://localhost:8080/
```
**Conexão com Banco de Dados:**
- Criar arquivo **.env** com variável de ambiente **DATABASE_URL** indicando caminho para o DB.

---

Desenvolvido por Márkys Corrêa.