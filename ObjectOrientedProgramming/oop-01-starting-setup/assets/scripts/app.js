// CLASSES 

class Product{
  title = 'DEFAULT';
  prodImage;
  prodPrice;
  prodDescription;
  
  constructor(title,prodImage,prodPrice,prodDescription){
    this.title = title;
    this.prodImage = prodImage;
    this.prodPrice = prodPrice;
    this.prodDescription = prodDescription;
    
  }
}

class ProductItem{ 
  constructor(product){
    this.product = product; 
  }
addToCart(){
  console.log('Adding product to cart...');
  console.log(this.product);
}
render()
  {
    const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div>
        <img src="${this.product.prodImage}" alt="${this.product.prodName}">
        <div class ="product-item__content">  
          <h2>${this.product.prodName}</h2>
          <h3>\$${this.product.prodPrice}</h3>
          <p>${this.product.prodDescription}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;
      const addCartButton = prodEl.querySelector('button');
      addCartButton.addEventListener('click', this.addToCart.bind(this)) 
      return prodEl;
  }
}



class ProductList{
  Products = [
    new Product('Samsung','https://th.bing.com/th/id/OIP.98lp1OWUH9TMkW78x4XUcAHaE8?pid=ImgDet&rs=1',59999,'Android Phone'),
    
    new Product('Iphone','https://m.xcite.com/media/catalog/product//i/p/iphone_14_pro_-_silver_1_1_1.jpg',69999,'IOS Phone')
  ];

  constructor(){}
  render(){
    const prodList = document.createElement('ul');
    prodList.classList = 'product-list';
    
    // Looping Methods
    for (const prod of this.Products){
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}


class shoppingCart {
  items = [];
  render(){
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
    <h2>Total:\$${0}</h2>
    <button>Order Now!</button>
    `;
    cartEl.className = 'cart';
    return cartEl;
  }
}

class Shop {
  render(){
    const renderHook = document.getElementById('app');
    
    const cart = new shoppingCart();
    const cartEl = cart.render();


    
    const productList = new ProductList();
    const prodListEl = productList.render();
    
    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}


// --------------------------------------------

const shop = new shop();
shop.render();
