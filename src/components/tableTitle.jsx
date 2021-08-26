import React from "react"

const TableTitle = ({ users }) => {
  const renderPhrase = () => {
    let numberUsers = users.length
    return numberUsers
  }

  const getBadgeClasses = () => {
    let classes = "badge bg-"
    classes += renderPhrase() === 0 ? "danger" : "primary"
    return classes
  }

  const titleZero = `Никто не тусанет с тобой сегодня`
  const titleMany = `${renderPhrase()} человек тусанет с тобой сегодня`
  const titleShort = `${renderPhrase()} человека тусанут с тобой сегодня`

  const titleSpan = () => {
    let title = ""

    if (users.length >= 5 && users.length === 1) {
      title = titleMany
    } else if (users.length < 5 && users.length > 1) {
      title = titleShort
    } else if (!users.length) {
      title = titleZero
    }
    return title
  }

  return (
    <>
      <h2>
        <span className={getBadgeClasses()}>{titleSpan()}</span>
      </h2>
    </>
  )
}

export default TableTitle
