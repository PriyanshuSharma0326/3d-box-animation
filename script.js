const boxesContainer = document.getElementById('boxes');

const dogifyButton = document.getElementById('dogify');

const IntegrateBoxes = () => {
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            const boxElement = document.createElement('div');
            boxElement.classList.add('box');
            boxElement.style.backgroundPosition = `${-j*125}px ${-i*125}px`;
            boxesContainer.appendChild(boxElement);
        }
    }
}

IntegrateBoxes();

dogifyButton.addEventListener('click', () => {
    boxesContainer.classList.toggle('disintegrated');
});
