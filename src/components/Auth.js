let token;

const login = async () => {
    console.log('start')
    if (window.localStorage.getItem('token')){
        console.log('token exists in local storage')
        token = JSON.parse(window.localStorage.getItem('token'))
    } else {
        console.log('no token')
        const response = await fetch('http://localhost:4000/login', {
         method: 'POST',
         body: JSON.stringify({username: 'test', password: 'cheese'
        }),
         headers: {"Content Type": "application/json"}
    })

    const newtoken = await response.json()
    console.log(newtoken)
    token = newtoken
    window.localStorage.setItem('token', JSON.stringify(token))
    }
}

const test = async () => {
    const response = await fetch('http://localhost:4000/test', {
        method: 'GET',
        headers: {
            'Authorization': `bearer ${token}`
        }
    })
    const result = await response.json()
    console.log(result)
}

const logout = () => {
    token = '';
    window.localStroage.removeItem('token')
}