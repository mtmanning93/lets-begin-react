import React from 'react'

function RenderingLists() {
    const bookList = [
        "To Kill A Mockingbird",
        "The Great Gatsby",
        "The Catcher In The Rye"
    ]

    const books = [
        {
            title: "To Kill A Mockingbird",
            author: "Harper Lee",
            pages: 283
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            pages: 218
        },
        {
            title: "The Catcher In The Rye",
            author: "J. D. Sallinger",
            pages: 234
        }
    ]
    
    return (
        <div>
            {bookList.map(book => {
                return <h2>{book}</h2>
            })}
        </div>
    )
}

export default RenderingLists