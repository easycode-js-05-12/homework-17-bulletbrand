export class HomeComponent {
    constructor() {}

    render() {
        return `
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
        <!-- Brand/logo -->
         
        <a class="navbar-brand" href="#">
          <i class="fa fa-cog fa-spin" style="font-size:24px"></i>
        </a>
      
        
        <!-- Links -->
        <ul class="navbar-nav ">
          <li class="nav-item mr-30">
            <a class="nav-link active" href="http://localhost:9000/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://localhost:9000/#/login">Sign in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://localhost:9000/#/signup">Check in</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="http://localhost:9000/#/s">Show error(test)</a>
        </li>
        </ul>
      </nav>
      
      <div class="container ">
      <h2>Home page</h2>
      <p>Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige ændringer. Sætningen blev gjordt kendt i 1960'erne med lanceringen af Letraset-ark, som indeholdt afsnit med Lorem Ipsum, og senere med layoutprogrammer som Aldus PageMaker, som også indeholdt en udgave af Lorem Ipsum
      </p>
      <div class="card-group">
        <div class="card bg-primary">
          <div class="card-body text-center">
            <p class="card-text">Some text inside the first card</p>
            <p class="card-text">Some more text to increase the height</p>
            <p class="card-text">Some more text to increase the height</p>
            <p class="card-text">Some more text to increase the height</p>
          </div>
        </div>
        <div class="card bg-warning">
          <div class="card-body text-center">
            <p class="card-text">Some text inside the second card</p>
          </div>
        </div>
        <div class="card bg-success">
          <div class="card-body text-center">
            <p class="card-text">Some text inside the third card</p>
          </div>
        </div>
        <div class="card bg-danger">
          <div class="card-body text-center">
            <p class="card-text">Some text inside the fourth card</p>
          </div>
        </div>  
      </div>
    </div>
        `;
    }
}
