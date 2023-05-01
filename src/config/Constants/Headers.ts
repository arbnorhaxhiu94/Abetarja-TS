type HeadersType = {
    'Content-Type': string,
    'Accept': string,
    'Authorization'?: string,
}

export const headers = (token?: string): HeadersType => {
    if (token) {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    } else {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
}