import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import AppContext from "./context/AppContext";
import ListProduct from "./pages/product/list";
import React from "react";
import Home from "./pages/home";
import {Link} from "react-router-dom";
import CreateProduct from "./pages/product/create";
import ProductPage from "./pages/product";
import StudentPage from "./pages/student";
import StudentList from "./pages/student/list";
import CreateStudent from "./pages/student/create";
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
                <Link to={'/'}>Home</Link>
            </div>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'products'} element={<ProductPage/>}>
                    <Route path={'create'} element={<CreateProduct/>}></Route>
                    <Route path={'list'} element={<ListProduct/>}></Route>
                </Route>
                <Route path={'students'} element={<StudentPage/>}>
                    <Route path={'list'} element={<StudentList/>}></Route>
                    <Route path={'create'} element={<CreateStudent/>}></Route>
                </Route>
            </Routes>
        </AppContext.Provider>
    );
}

export default App;
