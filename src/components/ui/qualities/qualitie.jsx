import React from "react"
import PropTypes from "prop-types"
import { useQualities } from "../../../hooks/useQualities"

const Qualitie = ({ id }) => {
    const { getQualities } = useQualities()
    const { _id, name, color } = getQualities(id)

    return (
        <>
            <span className={"badge m-1 bg-" + color} key={_id}>
                {name}
            </span>
        </>
    )
}

Qualitie.propTypes = {
    id: PropTypes.string.isRequired
}

export default Qualitie
