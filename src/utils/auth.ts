import usersData from '../data/users.json'
import type { User } from '../types/usertype'
import { hashPassword } from './hash'

/* to find by email from userdata */
export function findUserByEmail(email: string): User | undefined {
	return (usersData as User[]).find(u => u.email.toLowerCase() === email.toLowerCase())
}

/* to validate password by hashing and comparing */
export function validatePassword(plain: string, hashed: string): boolean {
	return hashPassword(plain) === hashed
}

/** to get all students only (for admin role view) */
export function getAllStudents(): User[] {
	return (usersData as User[]).filter(u => u.userType === 'student')
}
