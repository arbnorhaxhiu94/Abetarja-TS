export interface User {
    role: "User" | "Admin"
    token: string
    data: {
        id: string
        firstName: string
        lastName: string
        email: string
    }
}