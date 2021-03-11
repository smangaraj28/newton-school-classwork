import Bio from './Modules/Bio.js';
import Gallery from './Modules/Gallery.js';
import Nav from './Modules/Nav.js';

// const App = () => {
//     return `
//     ${Nav()}
//     <div class="container">
//         ${Bio()}
//         ${Gallery()}
//     </div>
//     `
// }
const a = 12;
const App = () => {
    return `
    a
    
    ${a}
    ${Nav()}
    <div class="container">
    ${Bio()}
    ${Gallery()}
    </div>
    `
}

document.getElementById('root').innerHTML = App();
