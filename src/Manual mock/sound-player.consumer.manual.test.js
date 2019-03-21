import SoundPlayer, { mockPlayerSoundFile } from './sound-player'; // eslint-disable-line
import SoundPlayerConsumer from './sound-player-consumer';

jest.mock('./sound-player');

beforeEach(() => {
  SoundPlayer.mockClear();
  mockPlayerSoundFile.mockClear();
});

test('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer(); // eslint-disable-line
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

test('We can check if the consumer called a method on the class instance', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlayerSoundFile).toHaveBeenCalledWith(coolSoundFileName);
});
