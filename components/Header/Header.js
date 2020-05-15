class Header {

    openShoppingShow(){
        shoppingShow.render();
        console.log('asdasd')
    }

    render(count){
        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerShow.openShoppingShow()">
                🛒${count}
                </div>
            </div>
        `;

        rootHeader.innerHTML = html;
    }

}

const headerShow = new Header(); 
const productsStore = localStorageUtil.getProducts();
headerShow.render(productsStore.length);
