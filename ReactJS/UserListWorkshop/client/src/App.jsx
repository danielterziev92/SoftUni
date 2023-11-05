import {Header} from "./components/Header.jsx";
import './styles.css'
import {Footer} from "./components/Footer.jsx";
import {SearchForm} from "./components/SearchForm.jsx";
import {TableWithData} from "./components/TableWithData.jsx";
import {useState} from "react";

function App() {
    const [searchValue, setSearchValue] = useState();
    const [searchCriteria, setSearchCriteria] = useState();

    const clickSearchFormHandler = (value, criteria) => {
        setSearchValue(value);
        setSearchCriteria(criteria)
    }

    return (
        <>
            <Header/>
            <main className="main">
                <section className="card users-container">
                    <SearchForm clickSearchFormHandler={clickSearchFormHandler}/>
                    <div className="table-wrapper">
                        <TableWithData searchValue={searchValue} searchCriteria={searchCriteria}/>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default App
