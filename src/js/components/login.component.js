import { AuthService } from './../services/auth.service';

export class LoginComponent {
    constructor() {
        this._authService = new AuthService();
    }
    render() { //возвращаем разметку
        return `
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
        <!-- Brand/logo -->
         
        <a class="navbar-brand" href="#">
          <i class="fa fa-cog fa-spin" style="font-size:24px"></i>
        </a>
      
        
        <!-- Links -->
        <ul class="navbar-nav">
          <li class="nav-item mr-30">
            <a class="nav-link" href="http://localhost:9000/">Home</a>
          </li>
          <li class="nav-item active">
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

        <div class="d-flex justify-content-center w-100% mt-5">
        <div class="auth-wrap    ">
            <div class="auth-form col col-6 mx-auto my-auto ">
                <h3>Login to Social.</h3>
                <p class="text-secondary">Enter your e-mail address & password to login to your Social account.</p>
                <form name="loginForm" novalidate>
                    <div class="form-group ">
                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="\S+">
                        <div class="d-flex mt-5">
                            <button type="submit" class="btn btn-primary btn-sm">Login</button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- /.auth-form -->
            <div class="auth-bg col col-6">

            </div>
            <!-- /.auth-bg -->
        </div>
        <!-- /.auth-wrap -->
        </div>
        `;
    }

    afterRender() {
        document.forms['loginForm'].addEventListener('submit', (e) => {
            e.preventDefault();

            const email = e.target.elements['email'].value;
            const password = e.target.elements['password'].value;

            if (!email || !password) return;

            this._authService.login(email, password)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }
}
