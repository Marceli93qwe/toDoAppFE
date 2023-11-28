export const getBookmarks = async () => {
    const bookmarksFromBE = await fetch("http://localhost:3001/users/bookmarks", {
        method: "GET",
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBmNWU3ZDhiLTA0MjItNDgxZi1iNDNiLTJiZGEwNDEyOTIzMCIsImlhdCI6MTcwMDc2MzA0N30.48yIySaiINrz3ZKT5nNF1cmVm4Ndm2UKtGHknD9jBk4`,
            'Content-type': "application/json",
        }
    })
    const {bookmarks} = await bookmarksFromBE.json();
    console.log(bookmarks);
    return bookmarks;
}

// export const tasksInBookmark = async (bookmarkId: string) => {
//     const tasksInBookmark = await fetch(`http://localhost:3001/users/bookmarks/${bookmarkId}`)
// }

// export const tasksAmountInBookmark = async (bookmarkID: string) => {
//     // const tasks
// }
