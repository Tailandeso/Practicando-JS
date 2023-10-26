import { comprita } from './comprita'; 
export const CardMate = (props) => {
    let { name, type, price, id } = props;
    let div = document.createElement('div');
    div.setAttribute('class', 'card-content');
    div.innerHTML = `
        <img src=${thumbnail} alt="imagen del mate ${name}">
        <div class="card-body">
            <h2>${name}</h2>
            <p>Tipo: ${type}</p>
            <p>Precio: $${price}</p>
            <a data-id=${id} class="card-link">Agregar al Carrito</a>
        </div>
    `;

    const addToCartLink = div.querySelector('.card-link');
    addToCartLink.addEventListener('click', () => {

        const selectedProduct = { id, name, type, price };
        localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
        const compritaForm = comprita(); 
        document.body.appendChild(compritaForm);
    });

    return div;
}
