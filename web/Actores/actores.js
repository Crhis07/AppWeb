const url = "https://swapi.dev/api"

fetch(`${url}/people`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('act1')
    element.innerHTML = `
    <p>${data.results[0].name}</p>
    <p>${data.results[0].height}</p>
    <p>${data.results[0].mass}</p>
    <p>${data.results[0].hair_color}</p>
    <p>${data.results[0].skin_color}</p>
    <p>${data.results[0].eye_color}</p>
    <p>${data.results[0].birth_year}</p>
    <p>${data.results[0].gender}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

fetch(`${url}/people`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('act2')
    element.innerHTML = `
    <p>${data.results[1].name}</p>
    <p>${data.results[1].height}</p>
    <p>${data.results[1].mass}</p>
    <p>${data.results[1].hair_color}</p>
    <p>${data.results[1].skin_color}</p>
    <p>${data.results[1].eye_color}</p>
    <p>${data.results[1].birth_year}</p>
    <p>${data.results[1].gender}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

fetch(`${url}/people`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('act3')
    element.innerHTML = `
    <p>${data.results[2].name}</p>
    <p>${data.results[2].height}</p>
    <p>${data.results[2].mass}</p>
    <p>${data.results[2].hair_color}</p>
    <p>${data.results[2].skin_color}</p>
    <p>${data.results[2].eye_color}</p>
    <p>${data.results[2].birth_year}</p>
    <p>${data.results[2].gender}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

fetch(`${url}/people`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('act4')
    element.innerHTML = `
    <p>${data.results[3].name}</p>
    <p>${data.results[3].height}</p>
    <p>${data.results[3].mass}</p>
    <p>${data.results[3].hair_color}</p>
    <p>${data.results[3].skin_color}</p>
    <p>${data.results[3].eye_color}</p>
    <p>${data.results[3].birth_year}</p>
    <p>${data.results[3].gender}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

fetch(`${url}/people`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('act5')
    element.innerHTML = `
    <p>${data.results[4].name}</p>
    <p>${data.results[4].height}</p>
    <p>${data.results[4].mass}</p>
    <p>${data.results[4].hair_color}</p>
    <p>${data.results[4].skin_color}</p>
    <p>${data.results[4].eye_color}</p>
    <p>${data.results[4].birth_year}</p>
    <p>${data.results[4].gender}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

fetch(`${url}/people`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('act6')
    element.innerHTML = `
    <p>${data.results[5].name}</p>
    <p>${data.results[5].height}</p>
    <p>${data.results[5].mass}</p>
    <p>${data.results[5].hair_color}</p>
    <p>${data.results[5].skin_color}</p>
    <p>${data.results[5].eye_color}</p>
    <p>${data.results[5].birth_year}</p>
    <p>${data.results[5].gender}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))