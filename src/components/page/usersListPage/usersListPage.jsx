import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import GroupList from "../../common/groupList"
// import SearchUsers from "./searchUsers"
import TableTitle from "../../ui/tableTitle"
import TableUsers from "../../ui/tableUsers"
import Pagination from "../../common/pagination"
import { useUser } from "../../../hooks/useUsers"
import { useProfessions } from "../../../hooks/useProfession"
import { useAuth } from "../../../hooks/useAuth"

const UsersListPage = () => {
    const { users } = useUser()
    const { currentUser } = useAuth()
    const { isLoading: professionsLoading, professions } = useProfessions()
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedProf, setSelectedProf] = useState()
    const pageSize = 8

    const [serchValue, setSerchValue] = useState("")

    const handleDelete = (userId) => {
        // setUsers(users.filter((user) => user._id !== userId))
        console.log(userId)
    }

    const handleToggleBookMark = (userId) => {
        // setUsers(
        users.map((user) => {
            if (user._id === userId) {
                user.bookmark = !user.bookmark
            }

            return user
        })
        // )
    }

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf, serchValue])

    const handleProfessionSelect = (item) => {
        if (serchValue !== "") setSerchValue("")
        setSelectedProf(item)
    }

    const handleSerchValue = (event) => {
        setSelectedProf(undefined)
        setSerchValue(event.target.value)
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    /* const filteredUsers = selectedProf
            ? users.filter((user) => user.profession._id === selectedProf._id)
            : users
    */

    if (users) {
        function filterUsers(data) {
            const filteredUsers = serchValue
                ? data.filter(
                      (user) =>
                          user.name
                              .toLowerCase()
                              .indexOf(serchValue.toLowerCase()) !== -1
                  )
                : selectedProf
                ? data.filter(
                      (user) =>
                          JSON.stringify(user.profession) ===
                          JSON.stringify(selectedProf)
                  )
                : data
            return filteredUsers.filter((u) => u._id !== currentUser._id)
        }
        const filteredUsers = filterUsers(users)

        const count = filteredUsers.length
        const pageCount = Math.ceil(count / pageSize)

        const clearFilter = () => {
            setSelectedProf()
        }

        return (
            <div className="d-flex">
                {professions && !professionsLoading && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Отчистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <TableTitle count={count} />

                    <div>
                        <input
                            className="w-100 mx-auto"
                            type="text"
                            name="serchValue"
                            placeholder="Search..."
                            onChange={handleSerchValue}
                            value={serchValue}
                        />
                    </div>

                    {!!count && (
                        <TableUsers
                            filteredUsers={filteredUsers}
                            currentPage={pageCount === 1 ? 1 : currentPage}
                            pageSize={pageSize}
                            handleDelete={handleDelete}
                            handleToggleBookMark={handleToggleBookMark}
                        />
                    )}

                    {pageCount > 1 && (
                        <div className="d-flex justify-content-center">
                            <Pagination
                                pageCount={pageCount}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    )}
                </div>
            </div>
        )
    }
    return "loading..."
}
UsersListPage.propTypes = {
    users: PropTypes.array,
    handleDelete: PropTypes.func,
    handleToggleBookMark: PropTypes.func
}

export default UsersListPage
