<!doctype html>
<html lang="en">
  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Java - Fetch</title>
    <script src="actores.js"></script>
    <!-- diseño base del estilo del cuerpo y cabezal de la tabla -->
    <style>
      body{
        background-color: cornflowerblue;
      }
      table head{
        background: #302b63;
        color: white;
      }
    </style>
  </head>
  <body>
    <div  class="container-fluid">
        <br>
        <!<!-- elaboracion de un navbar para el inicio de paginación -->
        <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="">&laquo</a></li>
              <li class="page-item"><a class="page-link" href="index.html">1</a></li>
              <li class="page-item"><a class="page-link" href="actores.html">2</a></li>
              <li class="page-item"><a class="page-link" href="personajes.html">3</a></li>
              <li class="page-item"><a class="page-link" href="#">4</a></li>
              <li class="page-item"><a class="page-link" href="#">5</a></li>
              <li class="page-item"><a class="page-link" href="#">6</a></li>
              <li class="page-item"><a class="page-link" href="#">&raquo</a></li>
            </ul>
          </nav>
    </div>
      <!<!-- creacion de un nuevo div para la visualizacion de datos -->
    <div class="container mt-4 shadow-lg p-3 mb-5 bg-body reounded">
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <td>Primer actor </td>
            </tr>
          </thead>
          <tbody id="act1">
            
          </tbody>
        </table>
      </div>
 
</body>
</html>
