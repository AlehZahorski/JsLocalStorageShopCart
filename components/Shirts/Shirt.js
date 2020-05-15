class Shirts {
    constructor(){
        this.classNameActive = ' products-element__btn_active';
        this.labelAdd = "🛒Add to cart";
        this.labelRemove = 'Remove from cart';
    }

    addProcutsToCart(){
        console.log('Dziala no kurwa w koncu')
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        Catalog.forEach(({id, name, price, img}) => {
            let activeClass = '';
            let activeText = '';

            if(productsStore.indexOf(id) === -1){
                activeText = this.labelAdd;
            }else{
                activeClass = ' ' + this.classNameActive;
                activeText =  this.labelRemove;
            }

            htmlCatalog += `
            <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${img}">
                <span class="products-element__price">💳${price}</span>
                <button class="products-element__btn ${activeClass}" onclick="shirtsShow.addProcutsToCart()">🛒Add to cart</button>
            </li>
            `;
        })
        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;
        
        rootShirt.innerHTML = html;
    }
}

const shirtsShow = new Shirts();
shirtsShow.render();