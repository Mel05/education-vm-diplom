import React from "react"
import PropTypes from "prop-types"

const TableTitle = ({ count }) => {
    const renderPhrase = () => {
        const numberUsers = count
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
        if (!count) {
            title = titleZero
        } else if (count === 1) {
            title = titleMany
        } else if (count < 5 && count > 1) {
            title = titleShort
        } else if (count >= 5) {
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
    count: PropTypes.number.isRequired
}

export default TableTitle
