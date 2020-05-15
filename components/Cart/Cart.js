class Shopping {

    clearSum(){
        rootCart.innerHTML = '';
    }

    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        Catalog.forEach(({id, name, price, img}) => {
            if(productsStore.indexOf(id) !== -1){
                htmlCatalog += `
                    <tr> 
                        <td>
                            ${name}
                        </td>
                        <td >
                            <img src="${img}" class="cart-element__img">
                        </td>
                        <td class="cart-element__price">
                            ${price.toLocaleString()} $
                        </td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="cart-container">
                <div class="cart__close" onclick="shoppingShow.clearSum()">.</div>
                <table class="cart-element">
                    ${htmlCatalog}
                       <tr> 
                           <td>
                                For all:
                           </td> 
                           <td>
                                ${sumCatalog.toLocaleString()} $
                           </td>
                       </tr>
                </table>
            </div>
        `;
        rootCart.innerHTML = html;
    }
}

const shoppingShow = new Shopping();