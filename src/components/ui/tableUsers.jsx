import React from "react"
import PropTypes from "prop-types"
import { paginate } from "../../utils/paginate"
import _ from "lodash"
import { Link } from "react-router-dom"
import BookMark from "../common/bookMark"
import QualityUsers from "./qualityUsers"
import { useState } from "react/cjs/react.development"
import Table from "../common/table/"
import Profession from "./profession"

const TableUsers = ({
    filteredUsers,
    handleDelete,
    handleToggleBookMark,
    currentPage,
    pageSize
}) => {
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" })

    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])
    const pageTableUsers = paginate(sortedUsers, currentPage, pageSize)

    const columns = {
        name: {
            component: (user) => (
                <Link to={`/users/${user._id}`}>{user.name}</Link>
            ),
            path: "name",
            name: "Имя"
        },
        qualities: {
            name: "Качества",
            component: (user) => <QualityUsers user={user} />
        },
        professions: {
            name: "Профессия",
            component: (user) => <Profession id={user.profession} />
        },
        completedMeetings: { path: "completedMeetings", name: "Встреч" },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <BookMark
                    user={user}
                    handleToggleBookMark={handleToggleBookMark}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-secondary btn-danger"
                >
                    delete
                </button>
            )
        }
    }

    const onSort = (item) => {
        setSortBy(item)
    }

    return (
        <>
            <Table
                onSort={onSort}
                selectedSort={sortBy}
                columns={columns}
                data={pageTableUsers}
            />
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
