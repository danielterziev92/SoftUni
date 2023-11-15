import {useEffect, useState} from "react";

export default function ProductDetailBaseInfoGroups({
                                                        items,
                                                        changeHandler,
                                                        selectedId,
                                                    }) {
    const [localSelectedId, setLocalSelectedId] = useState(selectedId);

    console.log(selectedId)


    useEffect(() => {
        setLocalSelectedId(selectedId)
    }, []);

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <input
                        id={item.id}
                        type="radio"
                        name="groupSelection"
                        checked={localSelectedId === item.id}
                        onChange={changeHandler}
                    />
                    <label htmlFor={item.id}>{item.name}</label>
                    {item.children.length > 0 && (
                        <ProductDetailBaseInfoGroups
                            items={item.children}
                            changeHandler={changeHandler}
                            selectedId={localSelectedId}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
}