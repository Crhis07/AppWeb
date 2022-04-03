<!doctype html>
<html lang="en">
  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Java - Fetch</title>
    <style>
      body{
        background-color: cornflowerblue;
        color: white;
      }
      table head{
        background: red;
        color: green;
        
      }
    </style>
  </head>
  <body>
      <div  class="container-fluid">
          <br>
          <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="disabled"><a class="page-link" href="#">&laquo</a></li>
                <li class="active"><a class="page-link" href="index.jsp">1</a></li>
                <li class="page-item"><a class="page-link" href="actores.jsp">2</a></li>
                <li class="page-item"><a class="page-link" href="personajes.jsp">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
                <li class="page-item"><a class="page-link" href="#">6</a></li>
                <li class="page-item"><a class="page-link" href="#">&raquo</a></li>
              </ul>
            </nav>
      </div>
        <div class="container mt-4 shadow-lg p-3 mb-5 bg-body rounded">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th colspan="2"><center>Primera Pelicula</center></th>
              </tr>
            </thead>
            <tbody id="peli1">
              
            </tbody>
            <br>
            </table>
            <div>
              <table>
                <tr>
                    <td><button type="button" class="btn btn-info" onclick="Pasar();" >Actores</button></td>
                  <td><button type="button" class="btn btn-info">Personajes</button></td>
                </tr>
              </table>
            </div>
        </div>

    <div class="container mt-4 shadow-lg p-3 mb-5 bg-body reounded">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            Segunda Película
          </tr>
        </thead>
        <tbody id="peli2">
          
        </tbody>
      </table>
    </div>

    <div class="container mt-4 shadow-lg p-3 mb-5 bg-body reounded">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            Tercera Película
          </tr>
        </thead>
        <tbody id="peli3">
          
        </tbody>
      </table>
    </div>

    <div class="container mt-4 shadow-lg p-3 mb-5 bg-body reounded">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            Cuarta Película
          </tr>
        </thead>
        <tbody id="peli4">
          
        </tbody>
      </table>
    </div>

    <div class="container mt-4 shadow-lg p-3 mb-5 bg-body reounded">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            Quinta Película
          </tr>
        </thead>
        <tbody id="peli5">
          
        </tbody>
      </table>
    </div>

    <div class="container mt-4 shadow-lg p-3 mb-5 bg-body reounded">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            Sexta Película
          </tr>
        </thead>
        <tbody id="peli6">
          
        </tbody>
      </table>
    </div>
    
    <script src="index.js"></script>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <!--<script>
        const url = "https://swapi.dev/api/films"

fetch(url)
.then(response => response.json())
.then(data => mostrarData(data))
.catch(error => console.log(error))

        const mostrarData = (data) => {
          console.log(data)
          let body = ''
          for (let i=0; i<data.length; i++){
            body += `
            <tr><td>${data[i].title}</td>
            <td>${data[i].episode_id}</td>
            <td>${data[i].opening_crawl}</td>
            <td>${data[i].director}</td>
            <td>${data[i].producer}</td>
            <td>${data[i].release_date}</td></tr>`
          }
          document.getElementById('data').innerHTML = body
        }
      </script>-->

  </body>
</html>
