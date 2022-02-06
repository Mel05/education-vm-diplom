import React from "react"
import Qualitie from "./qualitie"
import { useQualities } from "../../../hooks/useQualities"
import PropTypes from "prop-types"

const QualitiesList = ({ qualities }) => {
    const { isLoading } = useQualities()
    if (!isLoading) {
        return (
            <>
                {qualities.map((q) => (
                    <Qualitie key={q} id={q} />
                ))}
            </>
        )
    } else return "Loading..."
}

QualitiesList.propTypes = {
    qualities: PropTypes.array
}

export default QualitiesList
