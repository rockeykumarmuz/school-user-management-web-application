import React, { useState } from 'react'
import { findUserByEmail, validatePassword } from '../utils/auth'
import type { User } from '../types/usertype'

interface Props {
	onLogin: (user: User) => void
}

export default function LoginForm({ onLogin }: Props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [err, setErr] = useState<string | null>(null)

	//  added regex to for email validation
	function isValidEmail(e: string) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
	}

	// function to handle login and all valdations for user id and password
	function formSubmit(e: React.FormEvent) {
		e.preventDefault()
		setErr(null)

		if (!isValidEmail(email)) {
			setErr('Please enter a valid email Id.')
			return
		}
		if (!password.trim()) {
			setErr('Password cannot be empty!.')
			return
		}

		const user = findUserByEmail(email)
		if (!user) {
			setErr('No user found with this email Id.')
			return
		}

		const fetchPassword = validatePassword(password, user.password)
		if (!fetchPassword) {
			setErr('Incorrect password.')
			return
		}

		// login success; do not expose password field becuase it will be set in localstorgae so just display username
		const safeUser: User = { ...user, password: '' }
		onLogin(safeUser)
	}

	return (
		<form onSubmit={formSubmit} className='bg-white p-6 rounded-lg shadow'>
			<h2 className='text-xl font-semibold mb-4'>Login</h2>

			<label className='block mb-3'>
				<div className='field-label'>Email</div>
				<input
					value={email}
					onChange={e => setEmail(e.target.value)}
					className='w-full mt-1 p-2 border rounded-md'
					type='email'
					placeholder='test@gmail.com'
				/>
			</label>

			<label className='block mb-3'>
				<div className='field-label'>Password</div>
				<input
					value={password}
					onChange={e => setPassword(e.target.value)}
					className='w-full mt-1 p-2 border rounded-md'
					type='password'
					placeholder='Your password'
				/>
			</label>

			{err && <div className='text-sm text-red-600 mb-3'>{err}</div>}

			<div className='flex justify-end gap-2'>
				<button type='submit' className='px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700'>
					Login
				</button>
			</div>

			<div className='text-xs text-slate-500 mt-3'>
				Note: Try the sample accounts from the dataset(users.json) (e.g. <b>aman.kumar@example.com</b> /{' '}
				<i>student123</i>).
			</div>
		</form>
	)
}
