import { render, screen } from '@testing-library/react';
import ProductDetail from '../../src/components/ProductDetail';
import { products } from '../mocks/data';
import { server } from '../mocks/server';
import { http, HttpResponse } from 'msw';

//  NEXT 6-MOCKING DATA

describe('ProductDetail v1', () => {
  it('should render the list of products', async () => {
    render(<ProductDetail productId={1} />);

    expect(
      await screen.findByText(new RegExp(products[0].name))
    ).toBeInTheDocument();
    expect(
      await screen.findByText(new RegExp(products[0].price.toString()))
    ).toBeInTheDocument();
  });

  it('should render message if product not found', async () => {
    server.use(http.get('/products/1', () => HttpResponse.json(null)));
    render(<ProductDetail productId={1} />);

    const message = await screen.findByText(/not found/i);
    expect(message).toBeInTheDocument();
  });

  it('should render an error for invalid productId', async () => {
    render(<ProductDetail productId={0} />);

    const message = await screen.findByText(/invalid/i);
    expect(message).toBeInTheDocument();
  });
});

// describe('ProductDetail', () => {
//   let productId: number;
//   beforeAll(() => {
//     const product = db.product.create();
//     productId = product.id;
//   });

//   afterAll(() => {
//     db.product.delete({ where: { id: { equals: productId } } });
//   });

//   it.skip('should render product details', async () => {
//     const product = db.product.findFirst({
//       where: { id: { equals: productId } },
//     });

//     render(<ProductDetail productId={productId} />);

//     expect(
//       await screen.findByText(new RegExp(product!.name))
//     ).toBeInTheDocument();
//     expect(
//       await screen.findByText(new RegExp(product!.price.toString()))
//     ).toBeInTheDocument();
//   });

//   it('should render message if product not found', async () => {
//     server.use(http.get('/products/1', () => HttpResponse.json(null)));
//     render(<ProductDetail productId={1} />);

//     const message = await screen.findByText(/not found/i);
//     expect(message).toBeInTheDocument();
//   });

//   it('should render an error for invalid productID', async () => {
//     render(<ProductDetail productId={0} />);

//     const message = await screen.findByText(/invalid/i);
//     expect(message).toBeInTheDocument();
//   });

//   it('should render an error if data fetching fails', async () => {
//     server.use(http.get('/products/1', () => HttpResponse.error()));
//     render(<ProductDetail productId={1} />);

//     expect(await screen.findByText(/error/i)).toBeInTheDocument();
//   });
// });
