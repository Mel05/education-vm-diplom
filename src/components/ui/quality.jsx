import React, { useQualities } from "../../hooks/useQualities"
import PropTypes from "prop-types"

const Quality = ({ id }) => {
    const { isLoading, getQualities } = useQualities()

    if (!isLoading) {
        return (
            <>
                {id.map((q) => {
                    const { _id, name, color } = getQualities(q)

                    return (
                        <span key={_id} className={`badge m-1 bg-${color}`}>
                            {name}
                        </span>
                    )
                })}
            </>
        )
    } else return "Loading ..."
}

Quality.propTypes = {
    id: PropTypes.string
}

export default Quality
