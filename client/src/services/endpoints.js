const backend_url=process.env.REACT_APP_SERVER_URL

export const endpoints={
    login:`${backend_url}/auth/login`,
    getCoinsList:`${backend_url}/api/coins`,
}