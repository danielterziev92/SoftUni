import {createContext, useState} from "react";

const ProductNavigationTabsContext = createContext();
ProductNavigationTabsContext.displayName = 'ProductNavigationTabsContext';

export default function ProductNavigationTabsProvider({children}) {
    const [activeTab, setActiveTab] = useState('base-info');
    const updateActiveTab = (newValue) => setActiveTab(newValue);


    const contextValues = {
        activeTab,
        updateActiveTab,
    }

    return (
        <ProductNavigationTabsProvider value={{...contextValues}}>
            {children}
        </ProductNavigationTabsProvider>
    );
}