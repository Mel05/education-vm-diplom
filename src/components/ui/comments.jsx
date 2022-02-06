import React from "react"
import { orderBy } from "lodash"
import CommentsList, { AddCommentForm } from "../common/comments"
import { useComments } from "../../hooks/useComments"

const Comments = () => {
    const { createComment, removeComment, comments } = useComments()

    const addComment = (data) => {
        createComment(data)
    }

    const deleteComment = (commentId) => {
        removeComment(commentId)
    }

    const sortedComments = orderBy(comments, ["created_at"], ["desc"])

    return (
        <>
            <div className="card mb-2">
                <div className="card-body ">
                    <AddCommentForm addComment={addComment} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body ">
                        <h2>Comments</h2>
                        <hr />
                        <CommentsList
                            comments={sortedComments}
                            deleteComment={deleteComment}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Comments
