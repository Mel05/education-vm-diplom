import React from "react"

const UsersTable = ({ users, handleDelete }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретил, раз</th>
            <th scope="col">Оценка</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td> {user.name} </td>
              <td>
                {user.qualities.map((qualitie) => (
                  <span
                    key={qualitie._id}
                    className={`badge m-1 bg-${qualitie.color}`}
                  >
                    {qualitie.name}
                  </span>
                ))}
              </td>
              <td> {user.profession.name} </td>
              <td> {user.completedMeetings} </td>
              <td> {user.rate} </td>
              <td>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-secondary btn-danger"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default UsersTable
