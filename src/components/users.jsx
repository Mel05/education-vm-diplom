import React, { useState } from "react"
import s from "./users.module.css"
import api from "../API/index"
import UsersTable from "./usersTable"
import TableTitle from "./tableTitle"

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  return (
    <div className={s.wrapper}>
      <TableTitle users={users} />

      {!!users.length && (
        <UsersTable users={users} handleDelete={handleDelete} />
      )}
    </div>
  )
}

export default Users
