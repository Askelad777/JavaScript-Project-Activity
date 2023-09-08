// CLASSES 


// A Class that create a new item inside the productlIst via instantiation 
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


// Class that render the product to the web  and has a function of add to card feature.
class ProductItem{ 
  constructor(product){
    this.product = product; 
  }
addToCart(){
  app.addProductToCart(this.product); 
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


// Class that append the product into the list.
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


class Components{
  constructor(renderHookId){
    this.hookId = renderHookId;
  }
  createRootElement(tag,cssClasses,attribute){
    const rootElement = document.createElement(tag);
    if(cssClasses){
      rootElement.className = cssClasses;
    }
    if(attribute && attribute.length > 0){
      for(const attr of attribute){
        rootElement.setAttribute(attr.name, attr.value);
      } 
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}
// This class show the amount of the current product to purchase/buy!
class shoppingCart extends Components{
  items = [];

  set cartItems(value){
    this.items = value; 
    this.totalOutput.innerHTML = `<h2>Total:\$${this.totalAmount.toFixed(2)}</h2>`;
  }
  get totalAmount(){
    const sum = this.items.reduce((previousValue,currentItem)=>previousValue + currentItem.prodPrice,0)
    return sum;
  }

  constructor(renderHookId){
    super(renderHookId);
  }
  addingProduct(product){
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;    
  }

  render(){
    const cartEl = this.createRootElement('section', 'cart', );
    cartEl.innerHTML = `
    <h2>Total:\$${0}</h2>
    <button>Order Now!</button>
    `;
    this.totalOutput = cartEl.querySelector('h2');
  }
}


// handler to operate all the classes. Gathered in one.

class Shop {
  render(){
    const renderHook = document.getElementById('app');
    
    this.cart = new shoppingCart('app');
    this.cart.render(); 
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(prodListEl);
  }
}



class app{

  static cart;
  static init(){
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart (product){
    this.cart.addingProduct(product);
  }
}

class elementAttribute{
  constructor(attrName, attrValue){
    this.name = attrName;
    this.value = attrValue
  }
}

// --------------------------------------------

app.init();