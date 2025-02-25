function generateDonutChart(data, options) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let startAngle = 0;

  data.forEach((item) => {
    const sliceAngle = (item.value / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.arc(
      canvas.width / 2,
      canvas.height / 2,
      options.radius,
      startAngle,
      startAngle + sliceAngle,
    );
    ctx.closePath();
    ctx.fillStyle = item.color;
    ctx.fill();
    startAngle += sliceAngle;
  });

  if (options.innerRadius) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, options.innerRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  }

  return canvas;
}

// Example usage:
const data = [
  { value: 10, color: '#FF6384' },
  { value: 20, color: '#36A2EB' },
  { value: 30, color: '#FFCE56' },
];

const options = {
  radius: 100,
  innerRadius: 50,
};

document.body.appendChild(generateDonutChart(data, options));
