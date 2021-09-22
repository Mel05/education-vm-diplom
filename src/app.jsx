import React from "react"
import { Route, Switch /* Redirect */ } from "react-router-dom"
import NavBar from "./components/navBar"
import Main from "./components/layouts/main"
import Login from "./components/layouts/login"
import User from "./components/user"
import Users from "./components/users"
// import NotFound from "./components/not-found"

function App() {
    return (
        <div className="m-1">
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users" component={Users} />
                <Route
                    path="/user/:userId?"
                    render={(props) => <User {...props} />}
                />
                {/* <Route path="/404" component={NotFound} /> */}
                {/* <Redirect to="/404" /> */}
            </Switch>
        </div>
    )
}

export default App
