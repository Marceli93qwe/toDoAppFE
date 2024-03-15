
export const getBookmarks = async () => {
    const bookmarksFromBE = await fetch("http://192.168.31.115:3001/users/bookmarks", {
        method: "GET",
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEzZDYwNTc4LWM2ZWEtNDlkNC1hNTZiLTI3YjY1OTZjYmU1NyIsImlhdCI6MTcwNjc4ODkxM30.w0hFeHXasU4TDF_F8oJ88dbzMGj69hthSceCsQCT6S4",
            'Content-type': "application/json",
        }
    })
    const {bookmarks} = await bookmarksFromBE.json();
    return bookmarks;
}

export const getTasksFromBookmark = async (bookmarkId: string | null) => {
    const tasksFromBookmark = await fetch(`http://192.168.31.115:3001/users/bookmarks/${bookmarkId}/tasks`, {
        method: "GET",
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEzZDYwNTc4LWM2ZWEtNDlkNC1hNTZiLTI3YjY1OTZjYmU1NyIsImlhdCI6MTcwNjc4ODkxM30.w0hFeHXasU4TDF_F8oJ88dbzMGj69hthSceCsQCT6S4`,
            'Content-type': "application/json",
        }
    });
    const {tasks} = await tasksFromBookmark.json();
    return tasks;
}

export const getAllUsersTasks = async () => {
    const allUsersTasks = await fetch("http://192.168.31.115:3001/users/bookmarks/tasks/all", {
        method: "GET",
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEzZDYwNTc4LWM2ZWEtNDlkNC1hNTZiLTI3YjY1OTZjYmU1NyIsImlhdCI6MTcwNjc4ODkxM30.w0hFeHXasU4TDF_F8oJ88dbzMGj69hthSceCsQCT6S4"
        }
    });
    const tasks =  await allUsersTasks.json();
    console.log(tasks);
    return tasks;
}

// export const tasksAmountInBookmark = async (bookmarkID: string) => {
//     // const tasks
// }
