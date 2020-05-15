class Header {
    render(count){
        const html = `
            <div class="header-container">
                <div class="header-counter">
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
