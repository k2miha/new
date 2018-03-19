 window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 150, 40);
  ctx.fillText('Список результатов:', 150, 80);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  ctx.fillText('Худшее время: ' + max.toFixed(0) + 'мс у игрока ' + names[maxIndex], 150, 60);

  var barWidth = 40;
  var indent = 50;
  var initialX = 150;
  var initialY = 80;
  var lineHeight = 15;

  for (var i = 0; i < times.length; i++) {
    if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.globalAlpha = 1;
      ctx.fillRect(initialX + indent * i, initialY + lineHeight * 12, barWidth, times[i] * -step);
    } else {
      ctx.fillStyle = 'blue';
      ctx.globalAlpha = Math.random();
      ctx.fillRect(initialX + indent * i, initialY + lineHeight * 12, barWidth, times[i] * -step);
    }
    ctx.fillStyle = '#000';
    ctx.globalAlpha = 1;
    ctx.fillText(names[i], initialX + indent * i, initialY + lineHeight);
  }
}
