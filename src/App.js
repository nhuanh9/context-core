import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import AppContext from "./context/AppContext";
import ListProduct from "./pages/product/list";
const globalState = [
    {
        name: 'IP12',
        price: 100
    },
    {
        name: 'IP13',
        price: 100
    }
]

function App() {
    return (
        <AppContext.Provider value={globalState}>
            <div>
                <Routes>
                    <Route path={'/products'} element={<ListProduct></ListProduct>}></Route>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
