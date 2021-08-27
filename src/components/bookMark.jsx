import React from "react"

const BookMark = ({ user, handleToggleBookMark }) => {
  return (
    <>
      <label>
        <button
          className={
            user.checked === false
              ? "bi bi-bookmark"
              : "bi bi-bookmark-heart-fill"
          }
          type="checkbox"
          checked={user.checked}
          onClick={() => handleToggleBookMark(user._id)}
        ></button>
      </label>
    </>
  )
}

export default BookMark
