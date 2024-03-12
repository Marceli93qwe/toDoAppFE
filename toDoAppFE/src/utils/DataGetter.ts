export const getBookmarks = async () => {
    const bookmarksFromBE = await fetch("http://192.168.31.115:3001/users/bookmarks", {
        method: "GET",
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5NDdhMzViLTY0NWYtNDQwNC1iNjc2LTgzOWYyM2YwMWU2ZCIsImlhdCI6MTcwMzI1MzI3N30.zc6UKlEZTaZUkt56BWMv1jiH0pfI8b7nVeeWMwdlI44`,
            'Content-type': "application/json",
        }
    })
    const {bookmarks} = await bookmarksFromBE.json();
    console.log(bookmarks);
    return bookmarks;
}

export const getTasksFromBookmark = async (bookmarkId: string | null) => {
    const tasksFromBookmark = await fetch(`http://192.168.31.115:3001/users/bookmarks/${bookmarkId}/tasks`, {
        method: "GET",
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5NDdhMzViLTY0NWYtNDQwNC1iNjc2LTgzOWYyM2YwMWU2ZCIsImlhdCI6MTcwMzI1MzI3N30.zc6UKlEZTaZUkt56BWMv1jiH0pfI8b7nVeeWMwdlI44`,
            'Content-type': "application/json",
        }
    });
    const {tasks} = await tasksFromBookmark.json();
    return tasks;
}

// export const tasksAmountInBookmark = async (bookmarkID: string) => {
//     // const tasks
// }
