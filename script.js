function enableSquare() {
  const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let x = canvas.width / 2;
        let y = canvas.height / 2;
        let size = 100;
        let dx = 2;
        let dy = 2;
        let hue = 0;

        function drawSquare() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.rect(x - size / 2, y - size / 2, size, size);
            ctx.stroke();
        }

        function update() {
            if (x + size / 2 > canvas.width || x - size / 2 < 0) {
                dx = -dx;
            }
            if (y + size / 2 > canvas.height || y - size / 2 < 0) {
                dy = -dy;
            }

            x += dx;
            y += dy;
            
            hue = (hue + 1) % 360;

            drawSquare();
            requestAnimationFrame(update);
        }

        update();
}
