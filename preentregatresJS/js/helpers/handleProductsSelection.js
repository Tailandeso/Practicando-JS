export const handleMateSelection = (mate) => {
    try {
        if (!mate || !mate.name) {
            throw new Error('El objeto Mate no es válido o no tiene una propiedad "name".');
        }
        localStorage.setItem('selectedProduct', JSON.stringify(mate));

        const selectedMateDisplay = document.querySelector('#selected-mate');

        if (selectedMateDisplay) {
            selectedMateDisplay.textContent = `Has seleccionado el mate: ${mate.name}`;
        } else {
            throw new Error('El elemento con ID "selected-mate" no se encontró en el DOM.');
        }
    } catch (error) {
        console.error(error.message);
    }
}

