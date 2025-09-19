import type { User } from '../types/usertype'

interface Props {
	user: User | null
	onLogout: () => void
}

export default function Header({ user, onLogout }: Props) {
	return (
		<header className='bg-white shadow-sm'>
			<div className='container mx-auto px-4 py-3 flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					<div className='text-lg font-bold text-slate-700'>School User</div>
					<div className='text-sm text-slate-500'>A Web Application to manage school data</div>
				</div>

				<div className='flex items-center gap-4'>
					{user ? (
						<>
							<div className='text-sm text-slate-600'>
								Hello, <span className='font-medium'>{user.userName}</span> ({user.userType})
							</div>
							<button
								onClick={onLogout}
								className='px-3 py-1.5 bg-red-500 text-white rounded-md text-sm hover:bg-red-600'>
								Logout
							</button>
						</>
					) : (
						<div className='text-sm text-slate-600'>Please login to continue</div>
					)}
				</div>
			</div>
		</header>
	)
}
