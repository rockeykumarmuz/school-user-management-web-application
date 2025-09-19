export type UserType = 'admin' | 'student'

export interface User {
	userName: string
	userType: UserType
	password: string
	email: string
	language: string
	address: string
	standard: string
	subjects: string[]
}
