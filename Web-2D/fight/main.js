const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const gravity = 0.7

let lastKey

canvas.width = 1024
canvas.height = 576

ctx.fillRect(0, 0, canvas.width, canvas.height)

const background = new Sprite({
  position: { x: 0, y: 0 },
  imageSrc: './assets/background.png'
})

const shop = new Sprite({
  position: { x: 600, y: 128 },
  imageSrc: './assets/shop.png',
  scale: 2.75,
  framesMax: 6
})

const player = new Fighter({
  position: { x: 0, y: 0 },
  velocity: { x: 0, y: 0 },
  color: 'red',
  offset: { x: 215, y: 157 },
  imageSrc: './assets/samuraiMack/Idle.png',
  framesMax: 8,
  scale: 2.5,
  sprites: {
    idle: {
      imageSrc: './assets/samuraiMack/Idle.png',
      framesMax: 8
    },
    run: {
      imageSrc: './assets/samuraiMack/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './assets/samuraiMack/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './assets/samuraiMack/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './assets/samuraiMack/Attack1.png',
      framesMax: 6
    },
    takeHit: {
      imageSrc: './assets/samuraiMack/Take Hit - white silhouette.png',
      framesMax: 4
    },
    death: {
      imageSrc: './assets/samuraiMack/Death.png',
      framesMax: 6
    }
  },
  attackBox: {
    offset: { x: 120, y: 50 },
    width: 140,
    height: 50
  }
})

const enemy = new Fighter({
  position: { x: 400, y: 100 },
  velocity: { x: 0, y: 0 },
  color: 'blue',
  offset: { x: 215, y: 165 },
  imageSrc: './assets/kenji/Idle.png',
  framesMax: 4,
  scale: 2.5,
  sprites: {
    idle: {
      imageSrc: './assets/kenji/Idle.png',
      framesMax: 4
    },
    run: {
      imageSrc: './assets/kenji/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './assets/kenji/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './assets/kenji/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './assets/kenji/Attack1.png',
      framesMax: 4
    },
    takeHit: {
      imageSrc: './assets/kenji/Take hit.png',
      framesMax: 3
    },
    death: {
      imageSrc: './assets/kenji/Death.png',
      framesMax: 7
    }
  },
  attackBox: {
    offset: { x: -170, y: 50 },
    width: 175,
    height: 50
  }
})

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  w: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowUp: {
    pressed: false
  },
  ArrowDown: {
    pressed: false
  }
}

function animate () {
  window.requestAnimationFrame(animate)
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  background.update()
  shop.update()
  ctx.fillStyle = 'rgba(255,255,255, 0.15)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()

  player.velocity.x = 0

  player.switchSprites('idle')

  if (keys.a.pressed && player.lastKey === 'a') {
    player.velocity.x = -5
    player.switchSprites('run')
  } else if (keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5
    player.switchSprites('run')
  } else {
    player.switchSprites('idle')
  }

  if (player.velocity.y < 0) {
    player.switchSprites('jump')
  } else if (player.velocity.y > 0) {
    player.switchSprites('fall')
  }

  enemy.velocity.x = 0

  enemy.switchSprites('idle')

  if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5
    enemy.switchSprites('run')
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 5
    enemy.switchSprites('run')
  } else {
    enemy.switchSprites('idle')
  }

  if (enemy.velocity.y < 0) {
    enemy.switchSprites('jump')
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprites('fall')
  }

  if (
    rectangelCollision({ player, enemy }) &&
    player.isAttacking &&
    player.framesCurrent === 4
  ) {
    enemy.takeHit()
    player.isAttacking = false

    gsap.to('#enemyHealth', {
      width: enemy.health + '%'
    })
  }

  if (player.isAttacking && player.framesCurrent === 4) {
    player.isAttacking = false
  }

  if (
    rectangelCollision({ enemy, player }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 2
  ) {
    player.takeHit()
    enemy.isAttacking = false
    gsap.to('#playerHealth', {
      width: player.health + '%'
    })
  }

  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false
  }

  if (player.health <= 0 || enemy.health <= 0) {
    determineWinner({ player, enemy })
  }
}

player.draw()
enemy.draw()

animate()
decreaseTimer()

window.addEventListener('keydown', event => {
  if (!player.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true
        player.lastKey = 'd'
        break
      case 'a':
        keys.a.pressed = true
        player.lastKey = 'a'
        break
      case 'w':
        player.velocity.y = -20
        keys.w.pressed = true
        break
      case ' ':
        player.attack()
        break
    }
  }
  if (!enemy.dead) {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true
        enemy.lastKey = 'ArrowRight'
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'
        break
      case 'ArrowUp':
        enemy.velocity.y = -20
        keys.ArrowUp.pressed = true
        break
      case 'ArrowDown':
        enemy.attack()
        break
    }
  }
})

window.addEventListener('keyup', event => {
  if (!player.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = false
        break
      case 'a':
        keys.a.pressed = false
        break
      case 'w':
        keys.w.pressed = false
        break
    }
  }

  if (!enemy.dead) {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = false
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = false
        break
      case 'ArrowUp':
        keys.ArrowUp.pressed = false
        break
      case 'ArrowDown':
        keys.ArrowDown.pressed = false
        break
    }
  }
})
