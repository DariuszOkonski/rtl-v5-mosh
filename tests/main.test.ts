/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { describe, it } from 'vitest';

describe('group', () => {
  it('should', async () => {
    const response = await fetch('/categories');
    const data = await response.json();
    console.log(data);
    expect(data).toHaveLength(3);
  });
});
