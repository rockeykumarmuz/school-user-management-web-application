import type { User } from '../types/usertype'

export default function StudentDashboard({ user }: { user: User }) {
	return (
		<div className='mt-6'>
			<div className='bg-white p-6 rounded shadow max-w-2xl mx-auto'>
				<h3 className='text-xl font-semibold mb-4'>Your details</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div>
						<div className='text-sm text-slate-600'>Name</div>
						<div className='font-medium'>{user.userName}</div>
					</div>
					<div>
						<div className='text-sm text-slate-600'>Email</div>
						<div className='font-medium'>{user.email}</div>
					</div>
					<div>
						<div className='text-sm text-slate-600'>Language</div>
						<div className='font-medium'>{user.language}</div>
					</div>
					<div>
						<div className='text-sm text-slate-600'>Standard</div>
						<div className='font-medium'>{user.standard}</div>
					</div>
					<div className='md:col-span-2'>
						<div className='text-sm text-slate-600'>Address</div>
						<div className='font-medium'>{user.address}</div>
					</div>
					<div className='md:col-span-2'>
						<div className='text-sm text-slate-600 mb-1'>Subjects</div>
						<div className='flex flex-wrap gap-2'>
							{user.subjects.length === 0 ? (
								<span className='text-slate-500'>No subjects</span>
							) : (
								user.subjects.map(s => (
									<span key={s} className='px-2 py-1 bg-slate-100 rounded text-sm'>
										{s}
									</span>
								))
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
