


document.addEventListener('mousemove', (e) => {
    const dot = document.createElement('div');
    dot.className = 'color-dot';
    dot.style.left = `${e.pageX}px`;
    dot.style.top = `${e.pageY}px`;
    dot.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 20%)`;
    document.body.appendChild(dot);
    setTimeout(() => {
        dot.remove();
    }, 1000);
});


