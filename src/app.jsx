import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import NavBar from "./components/ui/navBar"
import Main from "./layouts/main"
import Login from "./layouts/login"
import Users from "./layouts/users"
import { ProfessionProvider } from "./hooks/useProfession"
import { QualitiesProvider } from "./hooks/useQualities"

function App() {
    return (
        <div className="m-1">
            <NavBar />
            <QualitiesProvider>
                <ProfessionProvider>
                    <Switch>
                        <Route path="/users/:userId?" component={Users} />

                        <Route path="/login/:type?" component={Login} />
                        <Route path="/users" component={Users} />
                        <Route path="/" exact component={Main} />
                        <Redirect to="/" />
                    </Switch>
                </ProfessionProvider>
            </QualitiesProvider>

            <ToastContainer />
        </div>
    )
}

export default App
