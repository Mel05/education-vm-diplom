import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import TextField from "../../common/form/textField"
import { validator } from "../../../utils/validator"
import RadioField from "../../common/form/radioField"
import SelectField from "../../common/form/selectField"
import BackHistoryButton from "../../common/backButton"
import MultiSelectField from "../../common/form/multiSelectField"
import { useAuth } from "../../../hooks/useAuth"
import { useQualities } from "../../../hooks/useQualities"
import { useProfessions } from "../../../hooks/useProfession"

const UserEditPage = () => {
    const history = useHistory()
    const { currentUser, updateUserData } = useAuth()
    const { professions, isLoading: professionsLoading } = useProfessions()
    const { qualities, isLoading: qualitiesLoading } = useQualities()
    const [isUpdate, setIsUpdate] = useState(true)
    const [userData, setUserData] = useState()
    const [errors, setErrors] = useState({})

    const qualitiesList = qualities.map((q) => ({
        label: q.name,
        value: q._id
    }))

    const professionsList = professions.map((p) => ({
        label: p.name,
        value: p._id
    }))

    const getQualitiesListByIds = (array) => {
        const qualitiesArray = []
        for (const qualId of array) {
            for (const quality of qualities) {
                if (quality._id === qualId) {
                    qualitiesArray.push(quality)
                    break
                }
            }
        }
        return qualitiesArray
    }

    /* const getQualitiesListByIds = (array) => {
        array = array.map((item) => item.value)
        return Object.values(qualities).filter((qualitie) => {
            return array.includes(qualitie._id)
        })
    } */

    const transformData = (data) => {
        return getQualitiesListByIds(data).map((item) => ({
            label: item.name,
            value: item._id
        }))
    }

    useEffect(() => {
        if (
            !professionsLoading &&
            !qualitiesLoading &&
            currentUser & !userData
        ) {
            setUserData()
        }
        setUserData({
            ...currentUser,
            qualities: transformData(currentUser.qualities)
        })
    }, [])

    useEffect(() => {
        if (userData && isUpdate) setIsUpdate(false)
    }, [userData])

    const handleChange = (target) => {
        setUserData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            }
        },
        email: {
            isRequired: { message: "Email обязательная для заполнение" },
            isEmail: { message: "Email введен некорректно" }
        },
        qualities: {
            isRequired: { message: "У Вас должно быть минимум одно качество" }
        }
    }

    useEffect(() => {
        validate()
    }, [userData])

    const validate = () => {
        const errors = validator(userData, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        await updateUserData({
            ...userData,
            qualities: userData.qualities.map((q) => q.value)
        })
        history.push(`/users/${currentUser._id}`)
    }

    return (
        <div className="container mt-5">
            <BackHistoryButton />
            <div className="row ">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {!isUpdate ? (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Имя:"
                                // type="name"
                                name="name"
                                value={userData.name}
                                onChange={handleChange}
                                error={errors.name}
                            />

                            <TextField
                                label="Электронная почта:"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                                error={errors.email}
                            />

                            <SelectField
                                onChange={handleChange}
                                options={professionsList}
                                name="profession"
                                defaultOption="Choose..."
                                error={errors.profession}
                                value={userData.profession}
                                label="Выберите вашу профессию:"
                            />

                            <RadioField
                                onChange={handleChange}
                                options={[
                                    { name: "Male", value: "male" },
                                    { name: "Female", value: "female" },
                                    { name: "Other", value: "other" }
                                ]}
                                value={userData.sex}
                                label="Выберите ваш пол:"
                                name="sex"
                            />

                            <MultiSelectField
                                onChange={handleChange}
                                options={qualitiesList}
                                name="qualities"
                                label="Выберите ваши качества:"
                                defaultValue={userData.qualities}
                                error={errors.qualities}
                            />

                            <button
                                className="btn btn-primary w-100 mx-auto"
                                type="submit"
                                disabled={!isValid}
                            >
                                Обновить
                            </button>
                        </form>
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserEditPage
