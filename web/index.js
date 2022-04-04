//Creación de una constante que realizará peticiones a la url

const url = "https://swapi.dev/api"

//Uso de fetch mediante promesas para hacer peticiones al servidor
fetch(`${url}/films`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('peli1')
    //Asignamos los datos que se mostraran en pantalla
    element.innerHTML = `
    <p>${data.results[0].title}</p>
    <p>${data.results[0].episode_id}</p>
    <p>${data.results[0].opening_crawl}</p>
    <p>${data.results[0].director}</p>
    <p>${data.results[0].producer}</p>
    <p>${data.results[0].release_date}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))



fetch(`${url}/films`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('peli2')
    element.innerHTML = `
    <p>${data.results[1].title}</p>
    <p>${data.results[1].episode_id}</p>
    <p>${data.results[1].opening_crawl}</p>
    <p>${data.results[1].director}</p>
    <p>${data.results[1].producer}</p>
    <p>${data.results[1].release_date}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))


fetch(`${url}/films`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('peli3')
    element.innerHTML = `
    <p>${data.results[2].title}</p>
    <p>${data.results[2].episode_id}</p>
    <p>${data.results[2].opening_crawl}</p>
    <p>${data.results[2].director}</p>
    <p>${data.results[2].producer}</p>
    <p>${data.results[2].release_date}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))



fetch(`${url}/films`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('peli4')
    element.innerHTML = `
    <p>${data.results[3].title}</p>
    <p>${data.results[3].episode_id}</p>
    <p>${data.results[3].opening_crawl}</p>
    <p>${data.results[3].director}</p>
    <p>${data.results[3].producer}</p>
    <p>${data.results[3].release_date}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))



fetch(`${url}/films`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('peli5')
    element.innerHTML = `
    <p>${data.results[4].title}</p>
    <p>${data.results[4].episode_id}</p>
    <p>${data.results[4].opening_crawl}</p>
    <p>${data.results[4].director}</p>
    <p>${data.results[4].producer}</p>
    <p>${data.results[4].release_date}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))


fetch(`${url}/films`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('peli6')
    element.innerHTML = `
    <p>${data.results[5].title}</p>
    <p>${data.results[5].episode_id}</p>
    <p>${data.results[5].opening_crawl}</p>
    <p>${data.results[5].director}</p>
    <p>${data.results[5].producer}</p>
    <p>${data.results[5].release_date}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

function Actores(){
    location.href = "Actores/actores.jsp";
}

function Planetas(){
    location.href = "Personajes/planetas.jsp";
}
function Especies(){
    location.href = "Especies/especies.jsp";
}