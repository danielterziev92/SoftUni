export default function ProductDetailBaseInfoGroups({
                                                        items,
                                                        onRadioChange,
                                                        selectedId,
                                                    }) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <input
                        id={item.id}
                        type="radio"
                        name="groupSelection"
                        checked={selectedId === item.id}
                        onChange={onRadioChange}
                    />
                    {item.name}
                    {item.children.length > 0 && (
                        <ProductDetailBaseInfoGroups
                            items={item.children}
                            onRadioChange={onRadioChange}
                            selectedId={selectedId}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
}