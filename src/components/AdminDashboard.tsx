import { useMemo, useState } from 'react'
import { getAllStudents } from '../utils/auth'
import type { User } from '../types/usertype'
import Modal from './Modal'
import UserDetailsRow from './UserDetailsRow'

export default function AdminDashboard() {
	//  we are memoize the results so that it cannot call this function again and again
	const students = useMemo(() => getAllStudents(), [])
	const [search, setSearch] = useState('')
	const [subjectFilter, setSubjectFilter] = useState('')
	const [selectedUser, setSelectedUser] = useState<User | null>(null)

	// making a list of all the subject dropdown from all students list uniquely using set Data structure
	const allSubjects = useMemo(() => {
		const s = new Set<string>()
		students.forEach(st => st.subjects.forEach(sub => s.add(sub)))
		return Array.from(s).sort()
	}, [students])

	const filtered = students.filter(student => {
		const q = search.trim().toLowerCase()
		const matchesName = !q || student.userName.toLowerCase().includes(q)
		const matchesSubject =
			!subjectFilter || student.subjects.some(sub => sub.toLowerCase() === subjectFilter.toLowerCase())
		return matchesName && matchesSubject
	})

	return (
		<div className='mt-6'>
			<div className='flex items-center justify-between mb-4'>
				<h3 className='text-xl font-semibold'>Students ({students.length})</h3>
			</div>

			<div className='bg-white p-4 rounded shadow'>
				<div className='flex gap-3 mb-4 flex-col md:flex-row'>
					<input
						value={search}
						onChange={e => setSearch(e.target.value)}
						placeholder='Search by name...'
						className='flex-1 p-2 border rounded'
					/>
					<select value={subjectFilter} onChange={e => setSubjectFilter(e.target.value)} className='p-2 border rounded'>
						<option value=''>All subjects</option>
						{allSubjects.map(sub => (
							<option key={sub} value={sub}>
								{sub}
							</option>
						))}
					</select>
					<button
						onClick={() => {
							setSearch('')
							setSubjectFilter('')
						}}
						className='px-3 py-2 border rounded'>
						Reset
					</button>
				</div>

				<div className='student-list-scroll'>
					{filtered.length === 0 ? (
						<div className='text-sm text-slate-600 p-4 text-center'>No students found.</div>
					) : (
						<table className='w-full table-auto'>
							<thead className='text-left text-sm text-slate-600 border-b'>
								<tr>
									<th className='py-2'>Name</th>
									<th>Email</th>
									<th>Subjects</th>
									<th>Standard</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{filtered.map(s => (
									<UserDetailsRow key={s.email} student={s} onDetails={() => setSelectedUser(s)} />
								))}
							</tbody>
						</table>
					)}
				</div>
			</div>

			{selectedUser && (
				<Modal onClose={() => setSelectedUser(null)} title='Student details'>
					<div className='space-y-2'>
						<div>
							<strong>Name:</strong> {selectedUser.userName}
						</div>
						<div>
							<strong>Email:</strong> {selectedUser.email}
						</div>
						<div>
							<strong>Language:</strong> {selectedUser.language}
						</div>
						<div>
							<strong>Address:</strong> {selectedUser.address}
						</div>
						<div>
							<strong>Standard:</strong> {selectedUser.standard}
						</div>
						<div>
							<strong>Subjects:</strong> {selectedUser.subjects.join(', ')}
						</div>
					</div>
				</Modal>
			)}
		</div>
	)
}
