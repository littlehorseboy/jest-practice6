import SoundPlayer from './sound-player';
import SoundPlayerConsumer from './sound-player-consumer';

const mockPlaySoundFile = jest.fn();
jest.mock('./sound-player', () => (jest.fn().mockImplementation(() => ({ playSoundFile: mockPlaySoundFile }))));

beforeEach(() => {
  SoundPlayer.mockClear();
  mockPlaySoundFile.mockClear();
});

test('The consumer should be able to call new() on SoundPlayer', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(soundPlayerConsumer).toBeTruthy();
});

test('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer(); // eslint-disable-line
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

test('Web can check if the consumer called a method on the class instance', () => {
  expect(SoundPlayer).not.toHaveBeenCalled();

  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);

  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();

  // const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];
  // const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
  expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});
