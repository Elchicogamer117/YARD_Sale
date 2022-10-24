//*  Selectores 
const menuEmail = document.querySelector(".navbarEmail");
const desktopMenu = document.querySelector(".desktopMenu");

const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobileMenu");

const shoppingCardIcon = document.querySelector(".navbarShoppingCard");
const shoppingCardArrow = document.querySelector(".arrow");
const shoppingCardMenu = document.querySelector(".productDetailCards");

const productDetail = document.querySelector(".productDetail");
const productDetailClose = document.querySelector(".productDetailClose");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
shoppingCardIcon.addEventListener("click", toggleCartMenu);
shoppingCardArrow.addEventListener("click", toggleCartMenu);
productDetailClose.addEventListener("click", closeProductDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  shoppingCardMenu.classList.add("inactive");
  productDetail.classList.add("inactive")
}

function toggleCartMenu() {
  shoppingCardMenu.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  productDetail.classList.add("inactive")
}

function openProductDetail() {
  productDetail.classList.remove("inactive");
  mobileMenu.classList.add("inactive");
  shoppingCardMenu.classList.add("inactive");
}
function closeProductDetail() {
  productDetail.classList.add("inactive");
}

const productList = [];
productList.push({
  name: 'Nintendo control',
  price: 120,
  image: 'https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
});
productList.push({
  name: 'Pencils',
  price: 40,
  image: 'https://images.pexels.com/photos/2836955/pexels-photo-2836955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
});
productList.push({
  name: 'Camera',
  price: 240,
  image: 'https://images.pexels.com/photos/8369215/pexels-photo-8369215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
});
productList.push({
  name: 'Bagpack',
  price: 80,
  image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
});
productList.push({
  name: 'Bike',
  price: 180,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Earrings',
  price: 210,
  image: 'https://images.pexels.com/photos/11203752/pexels-photo-11203752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
});
productList.push({
  name: 'Clothes',
  price: 75,
  image: 'https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
});
productList.push({
  name: 'Toys',
  price: 100,
  image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
});
productList.push({
  name: 'Toy car',
  price: 90,
  image: 'https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
});
productList.push({
  name: 'Gears',
  price: 40,
  image: 'https://images.pexels.com/photos/414579/pexels-photo-414579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
});
productList.push({
  name: 'Utils',
  price: 60,
  image: 'https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
});
productList.push({
  name: 'Paint rollers',
  price: 78,
  image: 'https://images.pexels.com/photos/5583115/pexels-photo-5583115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
});

const cardConteiner = document.querySelector('.cardsContainer');
// const productImgen = document.querySelector(".imgCards");
// productImgen.addEventListener("click", openProductDetail);

function renderProduct(arrayProducts) {
  for (product of arrayProducts) {
    const productCard = document.createElement('div');
    productCard.classList.add('productCard');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener("click", openProductDetail);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('productInfoCards');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    const productInfoFigure =  document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './assets/icons/btAddToCart.svg');
  
    productInfoDiv.append(productPrice, productName);
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImg, productInfo);
  
    cardConteiner.appendChild(productCard);
  }
}

function renderProductInner(arrayProducts) {
  for (product of arrayProducts) {

    const cardsHTML = 
        `<div class="productCard">
          <img src= ${product.image} 
              alt="${product.name}">
          <div class="productInfoCards">
            <div>
              <p> $${product.price} </p>
              <p> ${product.name} </p>
            </div>
            <figure>
              <img src="./assets/icons/btAddToCart.svg" alt="addToCart">
            </figure>
          </div>
        </div>`;
    cardConteiner.innerHTML += cardsHTML;
  }
}

renderProduct(productList);
// renderProductInner(productList);

