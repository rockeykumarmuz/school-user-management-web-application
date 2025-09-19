import { useEffect, useState } from 'react'
import Header from './components/Header'
import type { User } from './types/usertype'
import AdminDashboard from './components/AdminDashboard'
import StudentDashboard from './components/StudentDashboard'
import LoginForm from './components/LoginForm'

//  it is used as a key in in localStorage to keep persist login for current user
const STORAGE_KEY = 'current_logged_user'

function App() {
	const [currentUser, setCurrentUser] = useState<User | null>(null)

	useEffect(() => {
		const raw = localStorage.getItem(STORAGE_KEY)
		if (raw) {
			try {
				setCurrentUser(JSON.parse(raw))
			} catch {
				localStorage.removeItem(STORAGE_KEY)
			}
		}
	}, [])

	function handleLogin(user: User) {
		setCurrentUser(user)
		localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
	}

	function handleLogout() {
		setCurrentUser(null)
		localStorage.removeItem(STORAGE_KEY)
	}

	return (
		<>
			<div className='min-h-screen bg-slate-50'>
				<Header user={currentUser} onLogout={handleLogout} />
				<main className='container mx-auto p-4'>
					{!currentUser ? (
						<div className='max-w-md mx-auto mt-8'>
							<LoginForm onLogin={handleLogin} />
						</div>
					) : currentUser.userType === 'admin' ? (
						<AdminDashboard />
					) : (
						<StudentDashboard user={currentUser} />
					)}
				</main>
			</div>
		</>
	)
}

export default App
