export const CardMate = (props) => {
    let { mate } = props;  

    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let img = document.createElement('img');
    img.setAttribute('src', mate.image); 
    img.setAttribute('alt', mate.name); 

    let title = document.createElement('h2');
    title.textContent = mate.name; 

    card.appendChild(img);
    card.appendChild(title);

    return card;
}

