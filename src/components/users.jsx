import React from "react"
import UsersTable from "./tableUsers"

const Users = ({ users, handleDelete, handleToggleBookMark }) => {
  return (
    <>
      {!!users.length && (
        <UsersTable
          users={users}
          handleDelete={handleDelete}
          handleToggleBookMark={handleToggleBookMark}
        />
      )}
    </>
  )
}

export default Users
