document.addEventListener("DOMContentLoaded", function() { 
    const titulo = document.getElementById("titulo")
    const listaNaoOrdenada = document.getElementById("lista-nao-ordenada")
    const link = document.getElementById("link")
    const listaOrdenada = document.getElementById("lista-ordenada")
 
    titulo.innerText = "Título Principal"
    link.innerText = "Visite o Proz Educação"
 
    listaNaoOrdenada.innerHTML = `
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    `
 
    listaOrdenada.innerHTML = `
        <li><a href="https://site1.com">Site 1</a></li>
        <li><a href="https://site2.com">Site 2</a></li>
        <li><a href="https://site3.com">Site 3</a></li>
    `
})