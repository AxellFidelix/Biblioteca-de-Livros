
const livros =[
    {   
        Titulo: 'Entendendo algoritimos',
        Autor: 'Aditya Y. Bhargava',
        Publicação: '20 de abril de 2017',
        Img: 'https://books.google.com.br/books/publisher/content?id=HWewDgAAQBAJ&hl=pt-BR&pg=PA4&img=1&zoom=3&bul=1&sig=ACfU3U2GsF3RfSav8pFSCLcT9HKa7Lbknw&w=1280',
    },
    {
        Titulo: 'Pense em Python',
        Autor: 'Allen B. Downey',
        Publicação: '14 de outubro de 2024',
        Img: 'https://books.google.com.br/books/publisher/content?id=6RknEQAAQBAJ&hl=pt-BR&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U1AN58It18M0rFJ-n0PRQLP4_DJdg&w=1280',
    },
    {
        Titulo: 'JavaScript',
        Autor: 'Luciana Nedel',
        Publicação: '2012',
        Img: 'https://books.google.com.br/books/publisher/content?id=zWNyDgAAQBAJ&hl=pt-BR&pg=PR1&img=1&zoom=3&bul=1&sig=ACfU3U2L00wgxtUC94Vgk_gQr8NtOQVsWQ&w=1280',
    }
]

function carregarLivros(){
    const divBliblioteca = document.querySelector("#biblioteca")
    divBliblioteca.innerHTML = ''

    livros.forEach( livro =>{
        const estruturaHtmlLivro =`
        <h2>${livro.Titulo}</h2>
    <ul>
        <li>Autor: ${livro.Autor}</li>
        <li>Publicação:${livro.Publicação}</li>
        <li>
            <img src="${livro.Img}" alt="">
        </li>
    </ul>
    <hr>`
    divBliblioteca.innerHTML += estruturaHtmlLivro
    })
}
carregarLivros(livros)