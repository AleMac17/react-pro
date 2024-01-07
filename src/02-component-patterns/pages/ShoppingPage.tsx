import { ProductCard, ProductImage, ProductTitle } from '../components';
import { ProductButtons } from '../components/ProductButtons';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png',
};
export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
      >
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={'Cafe'} />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
