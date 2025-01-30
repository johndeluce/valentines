function hearts() {
    const container = document.querySelector('.container')
    const create = document.createElement('div');
    create.classList.add('hearts');
    create.innerHTML = '❤️';
    

    create.style.left = Math.random() * 100 + 'vw';
    create.style.animationDuration = Math.random() * 3 + 2 + 's';
    container.appendChild(create);
    setTimeout(() => {
        create.remove();
    }, 2000);
}

setInterval(hearts, 100);