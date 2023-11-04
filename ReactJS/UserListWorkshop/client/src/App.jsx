import {Header} from "./components/Header.jsx";
import './styles.css'
import {Footer} from "./components/Footer.jsx";
import {SearchForm} from "./components/SearchForm.jsx";
import {TableWithData} from "./components/TableWithData.jsx";
import {useEffect, useState} from "react";
import {filteredData} from "./services/sortData.js";
import {getAllUsers} from "./services/userService.js";

function App() {
    const [initialUsers, setInitialUsers] = useState([]);

    const clickSearchFormHandler = async (searchedValue, searchedCriteria) => {
        const response = await getAllUsers()
        const filteredUsers = filteredData(response, searchedValue, searchedCriteria);
        console.log(`filtered: ${filteredUsers}`)
        setInitialUsers(filteredUsers);
    }

    return (
        <>
            <Header/>
            <main className="main">
                <section className="card users-container">
                    <SearchForm clickSearchFormHandler={clickSearchFormHandler}/>
                    <div className="table-wrapper">
                        <TableWithData initialUsers={initialUsers}/>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default App
