import "./style.css";

function ProductCard(props) {
  const handleAddToCart = () => {
    alert("Product added to cart!");
  };

  return (
    <div className="product-card">
      <div className="price-badge">{props.price}</div>

      <div className="product-image">
        <img src={props.imgUrl} alt="Smartwatch" />
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
      </div>

      <div className="product-info">
        <h2 className="product-name">{props.productName}</h2>

        <p className="product-description">
          <span className="feature">✓ {props.des1}</span>
          <span className="feature">✓ {props.des2}</span>
          <span className="feature">✓ {props.des3}</span>
        </p>

        <div className="product-footer">
          <div className="rating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="rating-text">{props.reviews} reviews</span>
          </div>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
