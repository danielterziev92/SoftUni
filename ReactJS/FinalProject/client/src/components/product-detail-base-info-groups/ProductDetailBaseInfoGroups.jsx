import {useEffect, useState} from "react";

export default function ProductDetailBaseInfoGroups({
                                                        items,
                                                        changeHandler,
                                                        selectedId,
                                                    }) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <div>
                        <input id={item.id} type="radio" name="group"
                               checked={selectedId === item.id} onChange={changeHandler}/>
                        <label htmlFor={item.id}>{item.name}</label>
                    </div>
                    {item.children.length > 0 && (
                        <ProductDetailBaseInfoGroups
                            items={item.children}
                            changeHandler={changeHandler}
                            selectedId={selectedId}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
}