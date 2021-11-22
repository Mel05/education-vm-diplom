import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"

const Pagination = ({ pageCount, currentPage, onPageChange }) => {
    const pages = _.range(1, pageCount + 1)

    return (
        <nav>
            <ul className={"pagination"}>
                {
                    <button
                        disabled={currentPage === 1 && true}
                        className={"bi bi-arrow-left-square-fill btn btn-light"}
                        onClick={() => {
                            onPageChange(currentPage - 1)
                        }}
                    ></button>
                }
                {pages.map((page) => (
                    <li
                        className={
                            "page-item" +
                            (page === currentPage ? " active" : "")
                        }
                        key={page}
                    >
                        <a
                            className={"page-link"}
                            onClick={() => onPageChange(page)}
                        >
                            <span>{page}</span>
                        </a>
                    </li>
                ))}
                {
                    <button
                        disabled={pageCount <= currentPage && true}
                        className={
                            "bi bi-arrow-right-square-fill btn btn-light"
                        }
                        onClick={() => {
                            onPageChange(currentPage + 1)
                        }}
                    ></button>
                }
            </ul>
        </nav>
    )
}
Pagination.propTypes = {
    pageCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination
