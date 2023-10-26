export const comprita = () => {
    const form = document.createElement('form'); 

    form.classList.add('comprita');

    const saveData = () => {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const mate = document.querySelector('#mate').value; 

        const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

        if (name && email && mate && selectedProduct && selectedProduct.id) { 
            const data = {
                name,
                email,
                mate, 
                mateDetails: selectedProduct 
            }
            localStorage.setItem('userComprita', JSON.stringify(data));
            console.log(data);
        }
    }

    form.innerHTML = `
        <div class="form-group">
            <label for="name">Nombre:</label>
            <input id="name" class="form-control" placeholder="Ingresa tu nombre por favor" type="text" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input id="email" class="form-control" placeholder="Ingrese su email" type="email" required>
        </div>
        <div class="form-group">
            <label for="mate">Selecciona un mate:</label>
            <select id="mate" class="form-control" required>
                <option value="mate">Mate</option>
                <option value="termo">Termo</option>
                <option value="bombilla">Bombilla</option>
                <option value="yerba">Yerba</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Comprar Mate</button>
    `;

    const selectMate = document.querySelector('#mate');
    selectMate.addEventListener('change', () => {
        const selectedProduct = selectMate.value;
        localStorage.setItem('selectedProduct', JSON.stringify({ id: selectedProduct }));
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        saveData();
    });

    return form;
}

