import {useEffect, useState} from "react";
import listItemStyle from './ProductList.module.css';

export default function ProductListItem({
                                            index,
                                            id,
                                            code,
                                            name,
                                            price,
                                            is_active,
                                            group,
                                            groups,
                                            detailModuleShowed,
                                        }) {
    const [showDetail, setShowDetail] = useState(false);

    useEffect(() => {
        if (showDetail) {
            // eslint-disable-next-line react/prop-types
            detailModuleShowed.current = !detailModuleShowed.current;
        }
    }, [showDetail, detailModuleShowed]);

    return (
        <>
            <th>{index}</th>
            <th>{code}</th>
            <th>{name}</th>
            <th>{price} лв.</th>
            <th>
                {is_active
                    ? <i className={`fa-solid fa-circle-check ${listItemStyle.inStock}`}></i>
                    : <i className={`fa-solid fa-circle-xmark ${listItemStyle.outStock}`}></i>
                }
            </th>
            <th><span>{group}</span></th>
            <th>
                {showDetail
                    ? <i className={`fa-solid fa-angle-up ${listItemStyle.detail}`}
                         onClick={() => setShowDetail(false)}></i>
                    : <i className={`fa-solid fa-angle-down ${listItemStyle.detail}`}
                         onClick={() => setShowDetail(true)}></i>
                }
            </th>
        </>
    );

}