import React from 'react'

export default function Modal({
	title,
	children,
	onClose,
}: {
	title?: string
	children: React.ReactNode
	onClose: () => void
}) {
	return (
		<div className='fixed inset-0 flex items-center justify-center z-50'>
			<div className='absolute inset-0 modal-backdrop' onClick={onClose} />
			<div className='bg-white rounded-lg shadow-lg z-10 w-11/12 md:w-2/3 lg:w-1/3 p-6'>
				<div className='flex items-start justify-between mb-4'>
					<h4 className='text-lg font-semibold'>{title}</h4>
					<button onClick={onClose} className='text-slate-500 hover:text-slate-700'>
						✕
					</button>
				</div>
				<div>{children}</div>
			</div>
		</div>
	)
}
