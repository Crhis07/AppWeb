const url = "https://swapi.dev/api"

fetch(`${url}/species`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('e1')
    element.innerHTML = `
    <p>${data.results[0].name}</p>
    <p>${data.results[0].classification}</p>
    <p>${data.results[0].designation}</p>
    <p>${data.results[0].average_height}</p>
    <p>${data.results[0].skin_colors}</p>
    <p>${data.results[0].hair_colors}</p>
    <p>${data.results[0].eye_colors}</p>
    <p>${data.results[0].average_lifespan}</p>
    <p>${data.results[0].language}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

fetch(`${url}/species`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('e2')
    element.innerHTML = `
    <p>${data.results[1].name}</p>
    <p>${data.results[1].classification}</p>
    <p>${data.results[1].designation}</p>
    <p>${data.results[1].average_height}</p>
    <p>${data.results[1].skin_colors}</p>
    <p>${data.results[1].hair_colors}</p>
    <p>${data.results[1].eye_colors}</p>
    <p>${data.results[1].average_lifespan}</p>
    <p>${data.results[0].language}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

fetch(`${url}/species`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('e3')
    element.innerHTML = `
    <p>${data.results[2].name}</p>
    <p>${data.results[2].classification}</p>
    <p>${data.results[2].designation}</p>
    <p>${data.results[2].average_height}</p>
    <p>${data.results[2].skin_colors}</p>
    <p>${data.results[2].hair_colors}</p>
    <p>${data.results[2].eye_colors}</p>
    <p>${data.results[2].average_lifespan}</p>
    <p>${data.results[0].language}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

fetch(`${url}/species`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('e4')
    element.innerHTML = `
    <p>${data.results[3].name}</p>
    <p>${data.results[3].classification}</p>
    <p>${data.results[3].designation}</p>
    <p>${data.results[3].average_height}</p>
    <p>${data.results[3].skin_colors}</p>
    <p>${data.results[3].hair_colors}</p>
    <p>${data.results[3].eye_colors}</p>
    <p>${data.results[3].average_lifespan}</p>
    <p>${data.results[0].language}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

fetch(`${url}/species`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('e5')
    element.innerHTML = `
    <p>${data.results[4].name}</p>
    <p>${data.results[4].classification}</p>
    <p>${data.results[4].designation}</p>
    <p>${data.results[4].average_height}</p>
    <p>${data.results[4].skin_colors}</p>
    <p>${data.results[4].hair_colors}</p>
    <p>${data.results[4].eye_colors}</p>
    <p>${data.results[4].average_lifespan}</p>
    <p>${data.results[0].language}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

fetch(`${url}/species`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('e6')
    element.innerHTML = `
    <p>${data.results[5].name}</p>
    <p>${data.results[5].classification}</p>
    <p>${data.results[5].designation}</p>
    <p>${data.results[5].average_height}</p>
    <p>${data.results[5].skin_colors}</p>
    <p>${data.results[5].hair_colors}</p>
    <p>${data.results[5].eye_colors}</p>
    <p>${data.results[5].average_lifespan}</p>
    <p>${data.results[0].language}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

