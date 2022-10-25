export const getUser = () => {
    const user = localStorage.getItem("user");
    const jwt = localStorage.getItem("jwt");
    if (user && jwt) {
        return {user:JSON.parse(user) , jwt};
    }
    return null;
}
