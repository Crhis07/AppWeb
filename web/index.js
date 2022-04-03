/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

const url = "https://swapi.dev/api/films/1/"

fetch(url)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('peli1')
    element.innerHTML = `
    <p>${data.title}</p>
    <p>${data.episode_id}</p>
    <p>${data.opening_crawl}</p>
    <p>${data.director}</p>
    <p>${data.producer}</p>
    <p>${data.release_date}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

const url2 = "https://swapi.dev/api/films/2/"

fetch(url2)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('peli2')
    element.innerHTML = `
    <p>${data.title}</p>
    <p>${data.episode_id}</p>
    <p>${data.opening_crawl}</p>
    <p>${data.director}</p>
    <p>${data.producer}</p>
    <p>${data.release_date}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

const url3 = "https://swapi.dev/api/films/3/"

fetch(url3)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('peli3')
    element.innerHTML = `
    <p>${data.title}</p>
    <p>${data.episode_id}</p>
    <p>${data.opening_crawl}</p>
    <p>${data.director}</p>
    <p>${data.producer}</p>
    <p>${data.release_date}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

const url4 = "https://swapi.dev/api/films/4/"

fetch(url4)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('peli4')
    element.innerHTML = `
    <p>${data.title}</p>
    <p>${data.episode_id}</p>
    <p>${data.opening_crawl}</p>
    <p>${data.director}</p>
    <p>${data.producer}</p>
    <p>${data.release_date}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

const url5 = "https://swapi.dev/api/films/5/"

fetch(url5)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('peli5')
    element.innerHTML = `
    <p>${data.title}</p>
    <p>${data.episode_id}</p>
    <p>${data.opening_crawl}</p>
    <p>${data.director}</p>
    <p>${data.producer}</p>
    <p>${data.release_date}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

const url6 = "https://swapi.dev/api/films/6/"

fetch(url6)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('peli6')
    element.innerHTML = `
    <p>${data.title}</p>
    <p>${data.episode_id}</p>
    <p>${data.opening_crawl}</p>
    <p>${data.director}</p>
    <p>${data.producer}</p>
    <p>${data.release_date}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))
