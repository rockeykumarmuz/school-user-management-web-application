import { sha256 } from 'js-sha256'

// this functional will take the user password and hashed in the form of string and return it back
export function hashPassword(password: string): string {
	return sha256(password)
}
