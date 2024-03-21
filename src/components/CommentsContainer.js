import React from 'react'

const commentsData = [
    {
        name: "Ramesh",
        text: "This is a top-level comment.",
        createdAt: "2024-03-20T12:00:00Z",
        replies: [
            {
                name: "Ramesh B",
                text: "This is a top-level comment.",
                createdAt: "2024-03-20T12:00:00Z",
                replies: []
            },
            {
                name: "Ramesh B",
                text: "This is a top-level comment.",
                createdAt: "2024-03-20T12:00:00Z",
                replies: [
                    {
                        name: "Ramesh",
                        text: "This is a top-level comment.",
                        createdAt: "2024-03-20T12:00:00Z",
                        replies: [
                            {
                                name: "Ramesh",
                                text: "This is a top-level comment.",
                                createdAt: "2024-03-20T12:00:00Z",
                                replies: [
                                    {
                                        name: "Ramesh",
                                        text: "This is a top-level comment.",
                                        createdAt: "2024-03-20T12:00:00Z",
                                        replies: [
                                            {
                                                name: "Ramesh",
                                                text: "This is a top-level comment.",
                                                createdAt: "2024-03-20T12:00:00Z",
                                                replies: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "Ramesh B",
                text: "This is a top-level comment.",
                createdAt: "2024-03-20T12:00:00Z",
                replies: []
            }
        ]
    },
    {
        name: "Ramesh",
        text: "This is a top-level comment.",
        createdAt: "2024-03-20T12:00:00Z",
        replies: [
            {
                name: "Ramesh B",
                text: "This is a top-level comment.",
                createdAt: "2024-03-20T12:00:00Z",
                replies: []
            },
            {
                name: "Ramesh B",
                text: "This is a top-level comment.",
                createdAt: "2024-03-20T12:00:00Z",
                replies: []
            },
            {
                name: "Ramesh B",
                text: "This is a top-level comment.",
                createdAt: "2024-03-20T12:00:00Z",
                replies: []
            }
        ]
    },
    {
        name: "Ramesh",
        text: "This is a top-level comment.",
        createdAt: "2024-03-20T12:00:00Z",
        replies: [
            {
                name: "Ramesh B",
                text: "This is a top-level comment.",
                createdAt: "2024-03-20T12:00:00Z",
                replies: []
            },
            {
                name: "Ramesh B",
                text: "This is a top-level comment.",
                createdAt: "2024-03-20T12:00:00Z",
                replies: []
            },
            {
                name: "Ramesh B",
                text: "This is a top-level comment.",
                createdAt: "2024-03-20T12:00:00Z",
                replies: []
            }
        ]
    },
    {
        name: "Ramesh",
        text: "This is a top-level comment.",
        createdAt: "2024-03-20T12:00:00Z",
        replies: [
            {
                name: "Ramesh B",
                text: "This is a top-level comment.",
                createdAt: "2024-03-20T12:00:00Z",
                replies: []
            },
            {
                name: "Ramesh B",
                text: "This is a top-level comment.",
                createdAt: "2024-03-20T12:00:00Z",
                replies: []
            },
            {
                name: "Ramesh B",
                text: "This is a top-level comment.",
                createdAt: "2024-03-20T12:00:00Z",
                replies: []
            }
        ]
    }
]

const Comment = ({ data }) => {
    const { name, text, createdAt, replies } = data;
    return (
        <div className='flex pt-3 shadow-sm bg-gray-100 py-2 px-2 rounded-md my-2'>
            <img alt="user" className='w-12 h-12' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
            <div className='px-3'>
                <p className='font-bold'>{name} - created : {createdAt}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentsList = ({ comments }) => {
    // don't use index as keys
    return comments.map((comment, index) =>
        <div>
            <Comment key={index} data={comment} />
            <div className='pl-5 ml-5 border border-l-black'>
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    )
}

const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='font-bold font-2xl'>Comments:</h1>
            {/* <Comment data={commentsData[0]} /> */}
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer