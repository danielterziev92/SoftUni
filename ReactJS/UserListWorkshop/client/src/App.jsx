import {Header} from "./components/Header.jsx";
import './styles.css'
import {Footer} from "./components/Footer.jsx";
import {SearchForm} from "./components/SearchForm.jsx";

function App() {

    return (
        <div>
            <Header/>
            <main className="main">
                <section className="card users-container">
                    <SearchForm/>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default App
