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
};

class ProductList{
  Products = [
    new Product('Samsung','https://th.bing.com/th/id/OIP.98lp1OWUH9TMkW78x4XUcAHaE8?pid=ImgDet&rs=1',59999,'Android Phone'),
    
    new Product('Iphone','https://m.xcite.com/media/catalog/product//i/p/iphone_14_pro_-_silver_1_1_1.jpg',69999,'IOS Phone')
  ];

  constructor(){}
  render(){
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.classList = 'product-list';
    for (const prod of this.Products){
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList); // Append some content
  }
};

class ProductItem{ 
  constructor(product){
    this.product = product; 
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
      return prodEl;
  }
};

console.log(new Product());

// --------------------------------------------

const productList = new ProductList();
productList.render();