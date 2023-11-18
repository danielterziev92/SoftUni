import style from "./ProductListNavigationTabs.module.css";

export default function ProductListNavigationTabs({
                                                      closeShowDetailClickHandler,
                                                      setActiveTab,
                                                      activeTab,
                                                  }) {
    const changeActiveTabHandler = (e) => {
        setActiveTab(e.target.id);
    }

    const navigationTabs = [
        {
            liName: 'base-info',
            onClickHandler: changeActiveTabHandler,
            textContent: 'Основни данни',
        },
        {
            liName: 'addit-info',
            onClickHandler: changeActiveTabHandler,
            textContent: 'Допълнителни данни',
        },
        {
            liName: 'barcodes',
            onClickHandler: changeActiveTabHandler,
            textContent: 'Баркодове',
        },
    ]

    return (
        <div className={style.navigationTabs}>
            <ul>
                {navigationTabs.map((tab, index) => (
                    <li key={index} id={tab.liName} onClick={tab.onClickHandler}
                        className={activeTab === tab.liName ? style.active : ''}>
                        {tab.textContent}
                    </li>
                ))}
            </ul>
            <div className={style.closeButton} onClick={closeShowDetailClickHandler}>
                <i className="fa-regular fa-circle-xmark"></i>
            </div>
        </div>
    );
}