export const SetUser = (jwt: string, user: object) => {
    if (window?.localStorage) {
        try {
            window.localStorage.setItem("jwt", jwt)
            window.localStorage.setItem("user", JSON.stringify(user))
            return true;
        } catch (e) {
            console.error(e)
            return false;
        }
    }
    return false;
}
/*
TODO temporarily storing in local storage
 should be changed in future
 */
