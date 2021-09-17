import React from "react"
import PropTypes from "prop-types"

const BookMark = ({ user, handleToggleBookMark }) => {
    return (
        <>
            <label>
                <button
                    className={
                        user.bookmark === false
                            ? "bi bi-bookmark"
                            : "bi bi-bookmark-heart-fill"
                    }
                    checked={user.bookmark}
                    onClick={() => handleToggleBookMark(user._id)}
                ></button>
            </label>
        </>
    )
}
BookMark.propTypes = {
    user: PropTypes.object.isRequired,
    handleToggleBookMark: PropTypes.func.isRequired
}

export default BookMark
