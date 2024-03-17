export const authenticateUser = async () => {
    const token = getJWTFromStorage();
    if (token) {
        const response = await fetch("http://192.168.31.115:3001/auth/authenticate",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${getJWTFromStorage()}`
                }
            });
        // returns true if user is authenticated, and false i user is unauthorized
        return [...String(response.status)][0] == "2";
    }
    return false;
}


export const setJWTtoStorage = (token: string) => {
    localStorage.setItem("jwtTokenTimeManager", token);
}
export const getJWTFromStorage = () => {
    return localStorage.getItem("jwtTokenTimeManager")
}