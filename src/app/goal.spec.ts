import { Goal } from './goal';

describe('Goal', () => {
  it('should create an instance', () => {
    expect(new Goal(0,"","", new Date())).toBeTruthy();
  });
});
