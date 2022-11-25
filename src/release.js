import { ListaLivros } from "./lista_livros";

const listaLivros = new ListaLivros(window.localStorage);

let listaLivrosArr = [
    new Livro(dateMgr, {
        titulo: "XGH vs TDD: Qual escolher para um projeto escalável importante?",
        genero: "Científico/Técnico",
        autor: "Arthur",
        lido: false,
        dataFinalizacao: dateMgr.getTime(),
    }),
    new Livro(dateMgr, {
        titulo: "O viajante intergaláctico",
        autor: "Milena",
        genero: "Ficção Científica",
        lido: true,
        dataFinalizacao: dateMgr.getTime()}),
    new Livro(dateMgr, {
        titulo: "Ser ou não ser: Eis a questão",
        autor: "Pablo",
        genero: "Filosofia",
        lido: false,
        dataFinalizacao: null,
    }),
].sort();

listaLivrosArr.forEach(book => listaLivros.addBook(book));

listaLivros.finishBook();