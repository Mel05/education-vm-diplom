import React, { useState } from "react"
import s from "./app.module.css"
import Users from "./components/users"

import api from "./API/index"

function App() {
    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }
    const handleToggleBookMark = (userId) => {
        setUsers(
            users.map((user) => {
                if (user._id === userId) {
                    user.checked = !user.checked
                }

                return user
            })
        )
    }

    return (
        <div className={s.wrapper}>
            <Users
                users={users}
                handleDelete={handleDelete}
                handleToggleBookMark={handleToggleBookMark}
            />
        </div>
    )
}

export default App
