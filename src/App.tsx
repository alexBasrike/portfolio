import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header ClassName={"site-header"}/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;