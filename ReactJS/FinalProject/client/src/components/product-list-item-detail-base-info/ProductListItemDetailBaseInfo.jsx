export default function ProductListItemDetailBaseInfo({
                                                          id,
                                                          productData,
                                                          setProductData,
                                                          closeShowDetailClickHandler,
                                                          setIsSpinnerShow
                                                      }) {

    const changeHandler = (e) => {
        let {name, value} = e.target;

        if (name === 'price' || name === 'quantity' || name === 'group') {
            value = Number(value);
        }

        setProductData(state => ({
            ...state,
            [name]: value,
        }));
    };

    const updateProductDataClickHandler = () => {

    }


    const changeProductDataSubmitHandler = (e) => {
        e.preventDefault();
        console.log('form was submitted');
    }

    return (
        <form onSubmit={changeProductDataSubmitHandler}>
            <label htmlFor="name">
                Име:
                <input type="text" name="name" value={productData.name} onChange={changeHandler}/>
            </label>
            <label htmlFor="code">
                Код:
                <input type="text" name="code" value={productData.code} onChange={changeHandler}/>
            </label>
            <label htmlFor="barcode">
                Баркод:
                <input type="text" name="name" value={productData.barcode} onChange={changeHandler}/>
            </label>
            <label htmlFor="price">
                Цена:
                <input type="number" name="price" value={productData.price} onChange={changeHandler}/>
            </label>
            <label htmlFor="quantity">
                Количество:
                <input type="number" name="quantity" value={productData.quantity} onChange={changeHandler}/>
            </label>
            <label htmlFor="is_active">
                Активен:
                <input type="checkbox" name="is_active" checked={productData.is_active}
                       onChange={changeHandler}/>
            </label>

            <button onClick={updateProductDataClickHandler}>Промени</button>
            <button type="button" onClick={closeShowDetailClickHandler}>Отказ</button>
        </form>
    );
}