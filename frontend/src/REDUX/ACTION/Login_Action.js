export function login_user(user_doc) {
    return {
        type: "LOGIN",
        payload: user_doc
    }
}

export function logout_user() {
    return {
        type: "LOGOUT"
    }
}
