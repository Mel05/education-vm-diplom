import React, { useContext, useState, useEffect } from "react"
import PropTypes from "prop-types"
import qualityService from "../services/quality.service"
import { toast } from "react-toastify"

const QualitiesContext = React.createContext()

export const useQualities = () => {
    return useContext(QualitiesContext)
}

export const QualitiesProvider = ({ children }) => {
    const [qualities, setQualities] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getQualitiesList()
    }, [])

    useEffect(() => {
        if (error !== null) {
            toast(error)
            setError(null)
        }
    }, [error])

    function getQualities(id) {
        return qualities.find((q) => q._id === id)
    }

    async function getQualitiesList() {
        try {
            const { content } = await qualityService.get()
            setQualities(content)
            setLoading(false)
        } catch (error) {
            errorCatcher(error)
        }
    }

    function errorCatcher(error) {
        const { message } = error.response.data
        setError(message)
        setLoading(false)
    }

    return (
        <QualitiesContext.Provider
            value={{ isLoading, qualities, getQualities }}
        >
            {children}
        </QualitiesContext.Provider>
    )
}

QualitiesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
