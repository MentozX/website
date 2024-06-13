document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('c');
    if (!canvas.getContext) {
        throw new Error('Brak funkcji "getContext"!');
    }
    const c = canvas.getContext('2d');

    // Prostokąty
    c.fillRect(50, 50, 100, 100); // Wypełniony prostokąt
    c.strokeRect(50, 250, 100, 100); // Obrys prostokąta
    c.clearRect(70, 70, 60, 60); // Wyczyść fragment prostokąta

    // Trójkąt
    c.beginPath();
    c.moveTo(250, 250);
    c.lineTo(300, 350);
    c.lineTo(250, 350);
    c.closePath();
    c.strokeStyle = '#f00';
    c.lineWidth = 1;
    c.stroke();
    c.fillStyle = '#00f';
    c.fill();

    // Drugi trójkąt
    c.beginPath();
    c.moveTo(100, 260);
    c.lineTo(140, 340);
    c.lineTo(60, 340);
    c.closePath();
    c.stroke();

    // Okręgi (z poprawionymi błędami)
    c.beginPath();
    c.moveTo(250, 100);
    c.arc(250, 100, 25, 0, Math.PI * 0.5);
    c.fill();
    c.moveTo(250, 100);
    c.arc(250, 100, 25, 0, Math.PI);
    c.fill();
    c.moveTo(250, 100);
    c.arc(250, 100, 25, 0, Math.PI * 1.5);
    c.fill();
    c.moveTo(250, 100);
    c.arc(250, 100, 25, 0, Math.PI * 2);
    c.fill();
    c.stroke();
    c.closePath();

    // Tekst
    c.font = "30px Arial"
    c.fillText('Fill Text', 400, 250);
    c.strokeText('Stroke Text', 300, 350);
});
