const url = "https://swapi.dev/api"

fetch(`${url}/planets`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('p1')
    element.innerHTML = `
    <p>${data.results[0].name}</p>
    <p>${data.results[0].rotation_period}</p>
    <p>${data.results[0].orbital_period}</p>
    <p>${data.results[0].diameter}</p>
    <p>${data.results[0].climate}</p>
    <p>${data.results[0].gravity}</p>
    <p>${data.results[0].terrain}</p>
    <p>${data.results[0].surface_water}</p>
    <p>${data.results[0].population}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

fetch(`${url}/planets`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('p2')
    element.innerHTML = `
    <p>${data.results[1].name}</p>
    <p>${data.results[1].rotation_period}</p>
    <p>${data.results[1].orbital_period}</p>
    <p>${data.results[1].diameter}</p>
    <p>${data.results[1].climate}</p>
    <p>${data.results[1].gravity}</p>
    <p>${data.results[1].terrain}</p>
    <p>${data.results[1].surface_water}</p>
    <p>${data.results[0].population}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

fetch(`${url}/planets`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('p3')
    element.innerHTML = `
    <p>${data.results[2].name}</p>
    <p>${data.results[2].rotation_period}</p>
    <p>${data.results[2].orbital_period}</p>
    <p>${data.results[2].diameter}</p>
    <p>${data.results[2].climate}</p>
    <p>${data.results[2].gravity}</p>
    <p>${data.results[2].terrain}</p>
    <p>${data.results[2].surface_water}</p>
    <p>${data.results[0].population}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

fetch(`${url}/planets`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('p4')
    element.innerHTML = `
    <p>${data.results[3].name}</p>
    <p>${data.results[3].rotation_period}</p>
    <p>${data.results[3].orbital_period}</p>
    <p>${data.results[3].diameter}</p>
    <p>${data.results[3].climate}</p>
    <p>${data.results[3].gravity}</p>
    <p>${data.results[3].terrain}</p>
    <p>${data.results[3].surface_water}</p>
    <p>${data.results[0].population}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

fetch(`${url}/planets`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('p5')
    element.innerHTML = `
    <p>${data.results[4].name}</p>
    <p>${data.results[4].rotation_period}</p>
    <p>${data.results[4].orbital_period}</p>
    <p>${data.results[4].diameter}</p>
    <p>${data.results[4].climate}</p>
    <p>${data.results[4].gravity}</p>
    <p>${data.results[4].terrain}</p>
    <p>${data.results[4].surface_water}</p>
    <p>${data.results[0].population}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

fetch(`${url}/planets`)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('p6')
    element.innerHTML = `
    <p>${data.results[5].name}</p>
    <p>${data.results[5].rotation_period}</p>
    <p>${data.results[5].orbital_period}</p>
    <p>${data.results[5].diameter}</p>
    <p>${data.results[5].climate}</p>
    <p>${data.results[5].gravity}</p>
    <p>${data.results[5].terrain}</p>
    <p>${data.results[5].surface_water}</p>
    <p>${data.results[0].population}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))