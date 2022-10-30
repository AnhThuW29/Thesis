export const isValidObjectField = (obj) => {
    return Object.values(obj).every(value => value.trim())
}

export const updateError = (error, stateUpdate) => {
    stateUpdate(error)
    setTimeout(() => {
        stateUpdate('')
    }, 3000)
}

export const isValidEmail = (value) => {
    const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    return regx.test(value)
}