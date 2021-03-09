export const clearLocalStorage = (tokenKey, userKey) => {
    localStorage.removeItem(tokenKey)
    localStorage.removeItem(userKey)
}

export const populateLocalStorage = (payload, tokenKey, userKey) => {
    localStorage.setItem(tokenKey, payload.jwt)
    localStorage.setItem(userKey, JSON.stringify(payload.user))
}