function solve() {
    const shoppingCard = document.querySelector('div.shopping-cart');
    shoppingCard.addEventListener('click', collectInformation);
    const allProducts = {};
    const textAreaElement = document.querySelector('textarea');
    const checkout = document.querySelector('button.checkout');
    checkout.addEventListener('click', calculateProducts);


    function collectInformation(e) {
        if (e.target.tagName === 'button'.toUpperCase() && e.target.classList[0] === 'add-product') {
            const currentProduct = e.target.parentElement.parentElement;
            const productTitle = currentProduct.querySelector('div.product-title').textContent;
            const productPrice = currentProduct.querySelector('div.product-line-price').textContent;

            if (allProducts.hasOwnProperty(productTitle)) {
                allProducts[productTitle].times += 1;
            } else {
                allProducts[productTitle] = {price: productPrice, times: 1}
            }

            textAreaElement.value += `Added ${productTitle} for ${productPrice} to the cart.\n`
        }
    }

    function calculateProducts(e) {
        const allProductTitle = Object.keys(allProducts);
        let totalAmount = 0;
        for (const info of Object.values(allProducts)) {
            totalAmount += info.price * info.times;
        }

        textAreaElement.value += `You bought ${allProductTitle.join(', ')} for ${totalAmount.toFixed(2)}.`
        shoppingCard.removeEventListener('click', collectInformation);
        checkout.removeEventListener('click', calculateProducts);
    }

}