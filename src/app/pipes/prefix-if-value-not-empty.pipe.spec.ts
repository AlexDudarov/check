import { PrefixIfValueNotEmptyPipe } from './prefix-if-value-not-empty.pipe';

describe('PrefixIfValueNotEmptyPipe', () => {
  it('create an instance', () => {
    const pipe = new PrefixIfValueNotEmptyPipe();
    expect(pipe).toBeTruthy();
  });
});
