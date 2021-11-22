import React, { useQualities } from "../../hooks/useQualities"
import PropTypes from "prop-types"

const Quality = ({ id }) => {
    const { isLoading, getQualities } = useQualities()
    const quality = getQualities(id)

    if (!isLoading) {
        console.log("quality", quality)
        return <p> {quality} </p>
    } else return "Loading ..."
}

Quality.propTypes = {
    id: PropTypes.string
}

export default Quality
