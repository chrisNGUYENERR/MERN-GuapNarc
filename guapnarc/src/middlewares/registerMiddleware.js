export const registerMiddleware = (store) => {
    return (next) => {
        return async (action) => {
            switch (action.type) {
                case 'REGISTER_USER':
                    const { payload } = action;
                    const { firstName, lastName, email, password, checkTerms } = payload;
                    await fetch('http://localhost:1337/api/auth/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            password: password,
                            checkTerms: checkTerms
                        })
                    })
                    break;
                default:
                    next(action);
                    break;
            }
        }
    }
}