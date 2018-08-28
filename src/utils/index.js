export const getItem = (name) => {
    const v = sessionStorage.getItem(name);

    return !v ? '' : JSON.parse(v);
}
export const setItem = (name, value) => {
    const v = JSON.stringify(value);
    
    sessionStorage.setItem(name, v);
}
export const removeItem = (name) => {
    sessionStorage.removeItem(name);
}