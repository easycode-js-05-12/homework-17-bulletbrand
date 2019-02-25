import { LoginComponent } from './components/login.component';
import { HomeComponent } from './components/home.component';
import { NotFoundComponent } from './components/notfound.component';
import { SignUpComponent } from './components/signup.component';


const routes = {  
    '/': new HomeComponent(),    
    '/login': new LoginComponent(),
    '/signup': new SignUpComponent(),
    '**': new NotFoundComponent() 
};

const router = () => { 
    const container = document.querySelector('app-container'); 
    const url = location.hash.slice(1).toLowerCase() || '/'; 
    console.log(container) 
    console.log(location.hash)
    const component = routes[url] || routes['**'];  
    container.innerHTML = component.render();
    component.afterRender();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);





