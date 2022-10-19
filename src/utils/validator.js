const validatorEmail = (email) => {
    return email?.toString().includes('@') && email?.toString().includes('.')
} 

const validatorpassword = (password) => {
   return password?.toString().length > 0
} 

export {
    validatorEmail,
    validatorpassword,
}