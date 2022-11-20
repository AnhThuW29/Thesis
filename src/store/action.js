export const Login = ({email, password}) => {
    const token = email+password
    return ({
        type: 'LOGIN',
        payload: token,
    })
}

// export const Account = (data) => {
//     const token = data
//     return ({
//         type: 'ACCOUNT',
//         payload: token,
//     })
// }