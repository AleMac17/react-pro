import { ProductCard, ProductImage, ProductTitle } from '../components';
import { ProductButtons } from '../components/ProductButtons';
import '../styles/custom-styles.css';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        initialValues={{ count: 4, maxCount: 10 }}
        className='bg-dark text-white'
      >
        {({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
          <>
            <ProductImage
              className='custom-image'
              style={{ boxShadow: '10px 10px 10px rgb(0,0,0,0.2)' }}
            />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>}

            <span>
              {count} - {maxCount}
            </span>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
