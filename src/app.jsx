import React, { useState } from "react"
import s from "./app.module.css"
import Users from "./components/users"
import TableTitle from "./components/tableTitle"
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
                    if (user.checked === false) {
                        user.checked = true
                    } else if (user.checked === true) {
                        user.checked = false
                    }
                }

                return user
            })
        )
    }

    return (
        <div className={s.wrapper}>
            <TableTitle users={users} />
            <Users
                users={users}
                handleDelete={handleDelete}
                handleToggleBookMark={handleToggleBookMark}
            />
        </div>
    )
}

export default App
