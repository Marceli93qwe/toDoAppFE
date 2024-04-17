import './App.css'
import {Header} from "./Header/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Main} from "./Main/Main.tsx";
import {ProtectedRoute} from "./common/ProtectedRoute.tsx";
import {LoginPage} from "./LoginPage/LoginPage.tsx";
import {Register} from "./LoginPage/Register.tsx";
import {UserMenuVariation} from "./UserMenuVariation/UserMenuVariation.tsx";
import {InterfaceContextProvider} from "./contextProviders/InterfaceContextProvider.tsx";

export function App() {

    //
    return (
        <InterfaceContextProvider>
            <Router>
                <UserMenuVariation/>
                <Header/>
                <Routes>
                    <Route
                        path={"/menu"}
                        element={
                            <ProtectedRoute shouldBeLoggedIn={true}>
                                <UserMenuVariation/>
                            </ProtectedRoute>
                        }
                    />
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
        </InterfaceContextProvider>
    )
}

