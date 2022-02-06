import React from "react"
import PropTypes from "prop-types"

const QualityUsers = ({ user }) => {
    return (
        <>
            piu piu piu
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
    user: PropTypes.object
}

export default QualityUsers
