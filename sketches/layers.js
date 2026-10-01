window.Layers = (() => {
  const rnd = (a, b) => a + Math.random() * (b - a);
  const LAYERS = [
    { key: 'asphalt', cm: 5, name: 'Верхний слой', spec: 'ЩМА-20, 5 см' },
    { key: 'binder', cm: 7, name: 'Нижний слой', spec: 'А22, 7 см' },
    { key: 'stone', cm: 25, name: 'Щебёночное основание', spec: 'фр. 20–40, 25 см' },
    { key: 'sand', cm: 15, name: 'Песчаная подушка', spec: '15 см' }
  ];
  function texture(key, W, H, scale = 1) {
    const c = document.createElement('canvas'), d = Math.min(2, devicePixelRatio || 1);
    c.width = W * d; c.height = H * d;
    const x = c.getContext('2d'); x.scale(d, d);
    x.fillStyle = { asphalt: '#1b1d20', binder: '#262729', stone: '#7d8084', sand: '#c3ae84' }[key];
    x.fillRect(0, 0, W, H);
    if (key === 'asphalt' || key === 'binder') {
      const n = W * H / (key === 'asphalt' ? 55 : 38);
      for (let i = 0; i < n; i++) {
        const g = rnd(55, 150) | 0;
        x.fillStyle = `rgba(${g},${g},${g + 4},${rnd(.25, .85)})`;
        const s = (key === 'asphalt' ? rnd(.5, 2.2) : rnd(.9, 4.2)) * scale;
        x.beginPath(); x.ellipse(rnd(0, W), rnd(0, H), s, s * rnd(.5, 1), rnd(0, 3), 0, 7); x.fill();
      }
    }
    if (key === 'stone') {
      for (let i = 0; i < W * H / (240 * scale * scale); i++) {
        const cx = rnd(-10, W + 10), cy = rnd(-10, H + 10), s = rnd(5, 14) * scale, k = 5 + (Math.random() * 3 | 0), g = rnd(90, 170) | 0;
        x.fillStyle = `rgb(${g},${g},${g + 3})`; x.strokeStyle = 'rgba(18,18,20,.55)'; x.lineWidth = 1;
        x.beginPath();
        for (let j = 0; j < k; j++) { const a = j / k * 6.283 + rnd(-.3, .3), r = s * rnd(.6, 1); x.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); }
        x.closePath(); x.fill(); x.stroke();
      }
    }
    if (key === 'sand') {
      for (let i = 0; i < W * H / 4; i++) {
        const v = rnd(-30, 30);
        x.fillStyle = `rgba(${186 + v},${164 + v},${118 + v},.7)`;
        x.fillRect(rnd(0, W), rnd(0, H), 1.1, 1.1);
      }
    }
    return c;
  }
  function fill(canvas, key, scale) {
    const W = canvas.offsetWidth, H = canvas.offsetHeight, t = texture(key, W, H, scale);
    canvas.width = t.width; canvas.height = t.height;
    canvas.getContext('2d').drawImage(t, 0, 0);
  }
  return { LAYERS, texture, fill };
})();
