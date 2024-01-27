export const loginMiddleware = (store) => {
    return (next) => {
        return async (action) => {
            switch (action.type) {
                case 'FETCH_USER':
                    const { payload } =action;
                    const { userId } = payload;
                    const data = await fetch('http://localhost:1337/api/auth/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userId: userId
                        })
                    })

                    const userData = await data.json()
                    store.dispatch({type: 'SET_USER_DATA', payload: userData.userData.user})
                    break;
                default:
                    next(action);
                    break;
            }
        }
    }
}