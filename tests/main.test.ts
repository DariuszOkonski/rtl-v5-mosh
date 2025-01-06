/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { faker } from '@faker-js/faker';
import { describe, it } from 'vitest';
import { db } from './mocks/db';

describe('group test', () => {
  it('should', () => {
    // const product = db.product.create({ name: 'Apple' });

    console.log(db.product.count());
  });
});
