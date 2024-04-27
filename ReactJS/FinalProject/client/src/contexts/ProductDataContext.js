import {createContext} from "react";

const ProductDataContext = createContext();
ProductDataContext.displayName = 'ProductDataContext';
export default ProductDataContext;


//
// const productDataReducer = (state, action) => {
//     switch (action.type) {
//         case 'updateState':
//             return {...state, ...action.payload};
//         case 'updateByKey':
//             return {...state, [action.key]: action.value};
//         default:
//             return state;
//     }
// }
//
// export default function ProductDataProvider({children}) {
//     const [productData, dispatch] = useReducer(productDataReducer, initialProductData);
//     const {product} = useContext(SingleProductContext);
//     const {productChanged, updateProductChanged,} = useContext(ProductFormContext);
//     const isFirstRender = useRef(true);
//
//     const groups = useLoadAllGroups();
//
//     useEffect(() => {
//         if (product.id === undefined) {
//             return;
//         }
//
//         getProductById(product.id)
//             .then(data => {
//                 dispatch({type: 'updateState', payload: data});
//             })
//             .catch(e => console.log(e));
//     }, []);
//
//     useEffect(() => {
//         if (isFirstRender.current) {
//             isFirstRender.current = false;
//             return;
//         }
//
//         updateProductData(product);
//         updateProductChanged(false);
//     }, [productChanged]);
//
//     useEffect(() => {
//         dispatch({type: 'updateByKey', key: 'selectedGroup', value: productData.group});
//     }, [productData.group]);
//
//     useEffect(() => {
//         dispatch({type: 'updateByKey', key: 'groups', value: groups});
//     }, [groups]);
//
//
//     const updateProductData = (newState) => {
//         dispatch({type: 'updateState', payload: newState})
//     };
//
//     const updateProductDataByKey = (key, newValue) => {
//         dispatch({type: 'updateByKey', key: key, value: newValue});
//     }
//
//     const contextValues = {
//         productData,
//         updateProductData,
//         updateProductDataByKey,
//     }
//
//     return (
//         <ProductDataContext.Provider value={{...contextValues}}>
//             {children}
//         </ProductDataContext.Provider>
//     );
// }