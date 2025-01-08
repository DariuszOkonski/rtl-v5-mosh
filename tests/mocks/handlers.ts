import { db } from './db';

export const handlers = [
  ...db.product.toHandlers('rest'),
  ...db.category.toHandlers('rest'),
  // http.get('/products', () => {
  //   return HttpResponse.json(products);
  // }),

  // http.get('/products/:id', ({ params }) => {
  //   const id = parseInt(params.id as string);

  //   const product = products.find((p) => p.id === id);

  //   if (!product) {
  //     return HttpResponse.json(null, { status: 404 });
  //   }

  //   return HttpResponse.json(product);
  // }),
];
