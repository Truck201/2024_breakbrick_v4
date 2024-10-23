// Configuración del juego
const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  parent: "game-container",
  backgroundColor: "#028af8",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [Boot, Preloader, ChooseLanguage, MainMenu, Game, GameOver, Hud],
};

// Inicializa el juego
const game = new Phaser.Game(config);
