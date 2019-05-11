const movies = document.querySelector(".movies")
const pesquisa = document.getElementById("movie")
const botao = document.querySelector(".btn-search-movie")

botao.addEventListener("click", (buscar) => {
    //console.log("oi")
    buscar.preventDefault()
    stickers.innerHTML = " "

    fetch(`http://www.omdbapi.com/?s=${pesquisa.value}&apikey=e4d93896`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            data.Search.forEach((catalogoFilmes) => {
                const divPesquisa = document.createElement("div")
                divPesquisa.setAttribute("class", "box")
                divPesquisa.setAttribute("data-id", catalogoFilmes.imdbID);
                movies.appendChild(divPesquisa);

                const divPost = document.createElement("img")
                divPost.setAttribute("src", catalogoFilmes.Poster)
                divPesquisa.appendChild(divPost);

                const divTitulo = document.createElement("div")
                divTitulo.setAttribute("class", "box-divider")
                divPesquisa.appendChild(divTitulo);

                const parag = document.createElement("p")
                divTitulo.appendChild(parag)

                const span1 = document.createElement("span")
                span1.textContent = catalogoFilmes.Title
                parag.appendChild(span1)

                const span2 = document.createElement("span")
                span2.textContent = `(${catalogoFilmes.Year})` //"(" + catalogoFilmes.Year + ")"
                parag.appendChild(span2)

                const parag2 = document.createElement("p")
                parag2.textContent = catalogoFilmes.Type
                divTitulo.appendChild(parag2)
                console.log(parag2)


            })
        })
        .catch((erro) => {
            console.log(erro);
        })


})



