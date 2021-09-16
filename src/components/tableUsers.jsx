import React from "react"
import PropTypes from "prop-types"
import { paginate } from "../utils/paginate"
import BookMark from "./bookMark"
import QualityUsers from "./qualityUsers"

const TableUsers = ({
    filteredUsers,
    handleDelete,
    handleToggleBookMark,
    currentPage,
    pageSize
}) => {
    const pageTableUsers = paginate(filteredUsers, currentPage, pageSize)
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встреч</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                    </tr>
                </thead>
                <tbody>
                    {pageTableUsers.map((user) => (
                        <tr key={user._id}>
                            <td> {user.name} </td>
                            <td>
                                <QualityUsers user={user} />
                            </td>
                            <td> {user.profession.name} </td>
                            <td> {user.completedMeetings} </td>
                            <td> {user.rate} </td>
                            <td>
                                <BookMark
                                    user={user}
                                    handleToggleBookMark={handleToggleBookMark}
                                />
                            </td>
                            <td>
                                <button
                                    onClick={() => handleDelete(user._id)}
                                    className="btn btn-secondary btn-danger"
                                >
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
TableUsers.propTypes = {
    filteredUsers: PropTypes.array,
    handleDelete: PropTypes.func.isRequired,
    handleToggleBookMark: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired
}

export default TableUsers
