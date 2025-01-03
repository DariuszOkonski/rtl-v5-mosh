/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { describe, it } from 'vitest';

describe('group test', () => {
  it('should', async () => {
    const response = await fetch('/categories');
    const data = await response.json();
    expect(data).toHaveLength(3);
  });
});
