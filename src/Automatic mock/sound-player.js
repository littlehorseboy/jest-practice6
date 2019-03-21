/* eslint class-methods-use-this: ["error", { "exceptMethods": ["playSoundFile"] }] */

class SoundPlayer {
  constructor() {
    this.foo = 'bar';
  }

  playSoundFile(fileName) {
    console.log(`Playing sound file ${fileName}`);
  }
}

export default SoundPlayer;
