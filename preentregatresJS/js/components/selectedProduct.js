export const selectedProduct = () => {
    const userData = JSON.parse(localStorage.getItem('comprita')); 

    const form = document.querySelector('.form-container');
    form.remove();
    
    const div = document.createElement('div');
    div.setAttribute('class', 'reserva-container');

    div.innerHTML = `
    <div class="mate-content">
        <div class="mate-content-left">
            <h2>Detalles de la compra</h2>
            <h3>A nombre de: ${userData.name}</h3>
            <p>Contacto: ${userData.email}</p>
            <p>Mate seleccionado: ${userData.mate.name}</p> 
        </div>
        <div class="mate-content-right">
            <h2>Resumen de su producto de Mate Online</h2>
            <img src=${userData.mate.thumbnail} alt="imagen del mate ${userData.mate.name}"> 
            <h3>${userData.mate.name}</h3> 
            <p>Tipo: ${userData.mate.type}</p> 
            <p>Precio: $${userData.mate.price}</p> 
            <button class="delete-button">Eliminar Compra</button> 
        </div>
    </div>
    `;

    const deleteButton = div.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        localStorage.clear();
        window.location.reload();
    });

    return div;
}
