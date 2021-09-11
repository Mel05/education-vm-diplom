import React, { useState, useEffect } from "react"
import api from "./API"
import s from "./app.module.css"
import Users from "./components/users"

function App() {
    // const [users, setUsers] = useState(api.users.fetchAll())

    const [users, setUsers] = useState()

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data))
    }, [])

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
            {users && (
                <Users
                    users={users}
                    handleDelete={handleDelete}
                    handleToggleBookMark={handleToggleBookMark}
                />
            )}
        </div>
    )
}

export default App
