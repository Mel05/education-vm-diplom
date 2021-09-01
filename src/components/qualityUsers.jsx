import React from "react"
import PropTypes from "prop-types"

const QualityUsers = ({ user }) => {
    return (
        <>
            {user.qualities.map((qualitie) => (
                <span
                    key={qualitie._id}
                    className={`badge m-1 bg-${qualitie.color}`}
                >
                    {qualitie.name}
                </span>
            ))}
        </>
    )
}
QualityUsers.propTypes = {
    user: PropTypes.string.isRequired
}

export default QualityUsers
