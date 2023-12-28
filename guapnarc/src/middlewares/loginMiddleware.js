export const loginMiddleware = (store) => {
    return (next) => {
        return async (action) => {
            switch (action.type) {
                case 'FETCH_USER_DATA':
                    const { email, password } = action.payload;
                    await fetch('http://localhost:1337/api/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password
                        })
                    })
            }
        }
    }
}