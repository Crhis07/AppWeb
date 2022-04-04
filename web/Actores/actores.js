const url = "https://swapi.dev/api/people/1/"

fetch(url)
.then(response => response.json())
.then(data =>{

    let element = document.getElementById('act1')
    element.innerHTML = `
    <p>${data.name}</p>
    <p>${data.height}</p>
    <p>${data.mass}</p>
    <p>${data.hair_color}</p>
    <p>${data.skin_color}</p>
    <p>${data.eye_color}</p>
    <p>${data.birth_year}</p>
    <p>${data.gender}</p>
    `
    console.log(data)
})
.catch(err => console.log(err))

/*const url = "https://swapi.dev/api/people"

fetch(url)
.then(response => response.json())
.then(dato => mostrarData(dato))
.catch(error => console.log(error))

        const mostrarData = (dato) => {
          console.log(dato)
          let body = ''
          for (let i=0; i<dato.length; i++){
            body += `
            <tr><td>${dato[i].name}</td>
            <td>${dato[i].height}</td>
            <td>${dato[i].mass}</td>
            <td>${dato[i].director}</td>
            <td>${dato[i].producer}</td>
            <td>${dato[i].release_date}</td></tr>`
          }
          document.getElementById('dato').innerHTML = body
        }*/