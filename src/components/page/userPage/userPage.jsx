import React, { useState, useEffect } from "react"
import { useHistory } from "react-router"
import PropTypes from "prop-types"
import api from "../../../API"
import QualityUsers from "../../ui/qualityUsers"

const UserPage = ({ userId }) => {
    const [user, setUser] = useState()
    const history = useHistory()

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data))
    }, [])

    const handleBack = () => {
        history.replace("/users")
    }

    if (user) {
        return (
            <>
                <div className="m-2">
                    <h2> {user.name} </h2>
                    <h3> Профессия: {user.profession.name}</h3>
                    <h4>
                        <QualityUsers user={user} />
                    </h4>
                    <h4> completedMeetings: {user.completedMeetings} </h4>
                    <h2> Rate: {user.rate} </h2>
                    <button onClick={handleBack}> Все Пользователи </button>
                </div>
            </>
        )
    } else {
        return <h1> Loading ... </h1>
    }
}

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
}

export default UserPage
