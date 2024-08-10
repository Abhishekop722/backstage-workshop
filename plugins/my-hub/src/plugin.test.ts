import { myHubPlugin } from './plugin';

describe('my-hub', () => {
  it('should export plugin', () => {
    expect(myHubPlugin).toBeDefined();
  });
});
