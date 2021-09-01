import React from "react"
import PropTypes from "prop-types"

const TableTitle = ({ users }) => {
    const renderPhrase = () => {
        const numberUsers = users.length
        return numberUsers
    }

    const getBadgeClasses = () => {
        let classes = "badge bg-"
        classes += renderPhrase() === 0 ? "danger" : "primary"
        return classes
    }

    const titleZero = "Никто не тусанет с тобой сегодня"
    const titleMany = `${renderPhrase()} человек тусанет с тобой сегодня`
    const titleShort = `${renderPhrase()} человека тусанут с тобой сегодня`

    const titleSpan = () => {
        let title = ""
        if (!users.length) {
            title = titleZero
        } else if (users.length === 1) {
            title = titleMany
        } else if (users.length < 5 && users.length > 1) {
            title = titleShort
        } else if (users.length >= 5) {
            title = titleMany
        }

        return title
    }

    return (
        <>
            <h2>
                <span className={getBadgeClasses()}>{titleSpan()}</span>
            </h2>
        </>
    )
}
TableTitle.propTypes = {
    users: PropTypes.string.isRequired
}

export default TableTitle
