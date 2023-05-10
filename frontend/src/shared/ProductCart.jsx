import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductCart(props) {
  const { product, handleRemoveFromCart } = props;
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
      <h5>
        ${product.price} <span>/kg</span>
      </h5>
      <div>
        <div>
          <h1>{product.title}</h1>
          <p>{product.desc}</p>
          <button onClick={handleAddToCart}>
            {cartCount > 0 ? 'Thêm vào giỏ hàng' : 'Đã thêm vào giỏ hàng'}
          </button>
          {cartCount > 0 && (
            <div className="cart__quantity">
              <button onClick={() => setCartCount(cartCount - 1)}>-</button>
              <p>{cartCount}</p>
              <button onClick={() => setCartCount(cartCount + 1)}>+</button>
            </div>
          )}
        </div>
        {cartCount > 0 && (
          <span
            className="cart__icon cart__icon--remove"
            onClick={handleRemoveFromCart}
          ></span>
        )}
      </div>
      {cartCount > 0 && (
        <Link to="/cart" className="cart__link">
          Giỏ hàng ({cartCount})
        </Link>
      )}
    </div>
  );
}
export default ProductCart;
