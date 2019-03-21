export const mockPlayerSoundFile = jest.fn();

const mock = jest.fn().mockImplementation(() => ({ playSoundFile: mockPlayerSoundFile }));

export default mock;
