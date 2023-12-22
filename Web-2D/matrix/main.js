
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gradient = ctx.createLinearGradient(0, canvas.width, canvas.width, canvas.height);
gradient.addColorStop(0, 'rgb(253, 253, 253)');
gradient.addColorStop(0.2, 'rgb(232, 26, 26)');
gradient.addColorStop(0.4, 'blue');
gradient.addColorStop(0.6, 'green');
gradient.addColorStop(0.8, 'yellow');
gradient.addColorStop(1, 'white');


class Symbol {
  constructor(x,y,fontSize, canvasHeight) {
    this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789あaいiうuえeおoかkaきkiくkuけkeこkoがgaぎgiぐguげgeごgoさsaしshiすsuせseそsoざzaじjiずzuぜzeぞzoたtaちchiつtsuてteとtoだdaぢjiづzuでdeどdoなnaにniぬnuねneのnoはhaひhiふfuへheほhoばbaびbiぶbuべbeぼboぱpaぴpiぷpuぺpeぽpoまmaみmiむmuめmeもmoやyaゆyuよyoらraりriるruれreろroわwaをwoんnm';
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = '';
    this.canvasHeight = canvasHeight;
  }
  draw(context) {
    this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.99) {
      this.y = 0;
    } else {
      this.y++;
    }
  }
}

class Effect {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 25;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#intialize();
    console.log(this.symbols);
  }
  #intialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }
  resize() {
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#intialize();
  }
}

const effect = new Effect(canvas.width, canvas.height);
let lastTime = 0;
const fps = 30;
const nextFrame = 1000 / fps;
let timer = 0;


function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  if (timer > nextFrame) {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.textAlign = 'center';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = gradient
    ctx.font = effect.fontSize + 'px monospace';
    effect.symbols.forEach(symbol => {
      symbol.draw(ctx);
    });
    timer = 0;
  } else {
    timer += deltaTime;
  }
  requestAnimationFrame(animate);
}

animate(0);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  effect.resize(canvas.width, canvas.height);
});