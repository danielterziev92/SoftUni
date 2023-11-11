import listStyle from './ProductList.module.css';

const tableKeys = {
    id: '№',
    code: 'Код',
    name: 'Име',
    price: 'Цена',
    is_active: 'Активен',
    group: 'Група',
}

export default function ProductList(products) {
    console.log(products.products)

    return (
        <>
            <table className={listStyle.ProductList}>
                <thead>
                {Object.keys(tableKeys).map(key => (
                    <tr key={key}>
                        <th>{tableKeys[key]}</th>
                    </tr>
                ))}
                </thead>
            </table>
        </>
    );
}