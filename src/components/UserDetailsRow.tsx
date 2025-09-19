import type { User } from '../types/usertype'

export default function StudentRow({ student, onDetails }: { student: User; onDetails: () => void }) {
	return (
		<tr className='border-b hover:bg-slate-50'>
			<td className='py-3'>{student.userName}</td>
			<td>{student.email}</td>
			<td>{student.subjects.join(', ')}</td>
			<td>{student.standard}</td>
			<td>
				<button onClick={onDetails} className='px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700'>
					Details
				</button>
			</td>
		</tr>
	)
}
