import React from "react"
import PropTypes from "prop-types"

const SearchUsers = ({ users }) => {
    if (users) {
        return (
            <div>
                <input type="text" />
                <button className="btn btn-outline-secondary" type="button">
                    fiend
                </button>
            </div>
        )
    } else {
        return <h1> Loading ... </h1>
    }
}

SearchUsers.propTypes = {
    users: PropTypes.array.isRequired
}

export default SearchUsers
