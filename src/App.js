import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ToastContainer } from 'react-toastify';
import AdminMenus from "./pages/AdminMenus";
import Register from "./pages/Register";
import EnterNumber from "./pages/EnterNumber";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/enter" exact component={EnterNumber} />

                    <Route path="/admin/menus" exact component={AdminMenus} />
                </Switch>

                <ToastContainer/>

            </BrowserRouter>


        </div>
    );
};

export default App;



