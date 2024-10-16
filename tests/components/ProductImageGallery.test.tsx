import { render, screen } from '@testing-library/react';
import ProductImageGallery from '../../src/components/ProductImageGallery';

describe('ProductImageGallery MyVersion', () => {
  it('should return null if empty array', () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container.firstChild).toBeNull();
  });
  it('should render list of image urls', () => {
    const imageUrls = ['url/home/0', 'url/home/1'];
    render(<ProductImageGallery imageUrls={imageUrls} />);

    screen.logTestingPlaygroundURL();

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
  });
});

describe('ProductImageGallery MoshVersion', () => {
  it('should render nothing if given an empty array', () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should render a list of images', () => {
    const imageUrls = ['url1', 'url2'];
    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    // expect(images[0]).toHaveAttribute('src', imageUrls[0]);
    // expect(images[1]).toHaveAttribute('src', imageUrls[1]);

    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute('src', url);
    });
  });
});
