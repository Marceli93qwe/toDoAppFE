import './App.css'
import {Header} from "./Header/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "../utils/ProtectedRoute.tsx";
import {Main} from "./Main/Main.tsx";

export function App() {

    //
    return (
        <Router>
            <Header/>
            <Routes>
                <Route
                    path={"/"}
                    element={
                        <ProtectedRoute>
                            <Main/>
                        </ProtectedRoute>
                    }
                />
                <Route path={"/login"} element={<h2>login</h2>}/>

            </Routes>
        </Router>
    )
}

