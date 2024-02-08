export const getBookmarks = async () => {
    const bookmarksFromBE = await fetch("http://localhost:3001/users/bookmarks", {
        method: "GET",
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEzZDYwNTc4LWM2ZWEtNDlkNC1hNTZiLTI3YjY1OTZjYmU1NyIsImlhdCI6MTcwNjc4ODkxM30.w0hFeHXasU4TDF_F8oJ88dbzMGj69hthSceCsQCT6S4",
            'Content-type': "application/json",
        }
    })
    const {bookmarks} = await bookmarksFromBE.json();
    console.log(bookmarks);
    return bookmarks;
}

export const getTasksFromBookmark = async (bookmarkId: string | null) => {
    const tasksFromBookmark = await fetch(`http://localhost:3001/users/bookmarks/${bookmarkId}/tasks`, {
        method: "GET",
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBmNWU3ZDhiLTA0MjItNDgxZi1iNDNiLTJiZGEwNDEyOTIzMCIsImlhdCI6MTcwMDc2MzA0N30.48yIySaiINrz3ZKT5nNF1cmVm4Ndm2UKtGHknD9jBk4`,
            'Content-type': "application/json",
        }
    });
    const {tasks} = await tasksFromBookmark.json();
    return tasks;
}

// export const tasksAmountInBookmark = async (bookmarkID: string) => {
//     // const tasks
// }
