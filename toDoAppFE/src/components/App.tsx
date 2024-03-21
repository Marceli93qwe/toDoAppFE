import './App.css'
import {Header} from "./Header/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Main} from "./Main/Main.tsx";
import {ProtectedRoute} from "./common/ProtectedRoute.tsx";
import {LoginPage} from "./LoginPage/LoginPage.tsx";
import {Register} from "./LoginPage/Register.tsx";

export function App() {

    //
    return (
        <Router>
            <Header/>
            <Routes>
                <Route
                    path={"/"}
                    element={
                        <ProtectedRoute shouldBeLoggedIn={true}>
                            <Main/>
                        </ProtectedRoute>
                    }
                />
                <Route path={"/login"}
                       element={
                           <ProtectedRoute shouldBeLoggedIn={false}>
                               <LoginPage/>
                           </ProtectedRoute>}
                />
                <Route path={"/register"}
                       element={
                           <ProtectedRoute shouldBeLoggedIn={false}>
                               <Register/>
                           </ProtectedRoute>}
                />
            </Routes>
        </Router>
    )
}

