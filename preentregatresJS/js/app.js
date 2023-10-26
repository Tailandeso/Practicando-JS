import { CardMate } from "./components/card.js"; 
import { MateContainer } from "./components/cardContainer.js"; 
import { selectedProduct } from "./components/selectedProduct.js"; 
import { Matecitos } from "./helpers/data.js";

export const App = () => {
    let appRoot = document.querySelector('#root');
    const userData = JSON.parse(localStorage.getItem('userComprita')); 

    if (userData) {
        appRoot.append(selectedProduct()); 
    } else {
        appRoot.append(MateContainer({ mates: Matecitos })); 
        appRoot.append(CardMate({ mates: Matecitos })); 
    }
}
