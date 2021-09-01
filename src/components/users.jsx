import React, { useState } from "react"
import PropTypes from "prop-types"
import Pagination from "./pagination"
import TableUsers from "./tableUsers"

const Users = ({ users, handleDelete, handleToggleBookMark }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const usersLength = users.length
    const pageSize = 4
    const pageCount = Math.ceil(usersLength / pageSize)
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    return (
        <>
            {!!usersLength && (
                <TableUsers
                    users={users}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    handleDelete={handleDelete}
                    handleToggleBookMark={handleToggleBookMark}
                />
            )}
            {pageCount > 1 && (
                <Pagination
                    pageCount={pageCount}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            )}
        </>
    )
}
Users.propTypes = {
    users: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggleBookMark: PropTypes.func.isRequired
}

export default Users
