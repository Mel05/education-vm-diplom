import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router"
import api from "../API"
import QualityUsers from "./qualityUsers"

const User = () => {
    const [user, setUser] = useState()
    const history = useHistory()
    const params = useParams()
    const { userId } = params

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data))
    }, [])

    const handleBack = () => {
        history.replace("/users")
    }

    return (
        <>
            {user && (
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
            )}
        </>
    )
}

export default User
