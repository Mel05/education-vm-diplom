import React from "react"
import PropTypes from "prop-types"
import TableHeaderRow from "./tableHeaderRow"
import TableBody from "./tableBody"

const Table = ({ onSort, selectedSort, columns, data, children }) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeaderRow
                        columns={columns}
                        selectedSort={selectedSort}
                        onSort={onSort}
                    />
                    <TableBody data={data} columns={columns} />
                </>
            )}
        </table>
    )
}

Table.propTypes = {
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    columns: PropTypes.object,
    data: PropTypes.array,
    children: PropTypes.array
}

export default Table
