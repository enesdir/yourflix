import { AuthLink } from '@/components/Link/AuthLink'

// import { redirect } from 'next/navigation'
// import { getServerSession } from 'next-auth'

export default async function Register() {
	// const session = await getServerSession()
	// if (!!session) redirect('/')

	return (
		<section>
			<div className='container mx-auto py-8'>
				<h1 className='mb-6 text-center text-2xl font-bold'>Registration Form</h1>
				<form className='mx-auto w-full max-w-sm rounded-md bg-white p-8 shadow-md'>
					<div className='mb-4'>
						<label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='name'>
							Name
						</label>
						<input
							className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none'
							type='text'
							id='name'
							name='name'
							placeholder='John Doe'
						/>
					</div>
					<div className='mb-4'>
						<label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='email'>
							Email
						</label>
						<input
							className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none'
							type='email'
							id='email'
							name='email'
							placeholder='john@example.com'
						/>
					</div>
					<div className='mb-4'>
						<label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='password'>
							Password
						</label>
						<input
							className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none'
							type='password'
							id='password'
							name='password'
							placeholder='********'
						/>
					</div>
					<div className='mb-4'>
						<label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='confirm-password'>
							Confirm Password
						</label>
						<input
							className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none'
							type='password'
							id='confirm-password'
							name='confirm-password'
							placeholder='********'
						/>
					</div>
					<button
						className='w-full rounded-md bg-indigo-500 px-4 py-2 text-sm font-bold text-white transition duration-300 hover:bg-indigo-600'
						type='submit'
					>
						Register
					</button>
				</form>
				<p>
					Already have an account? <AuthLink href='/ap/login' label='Sign in'></AuthLink>
				</p>
			</div>
		</section>
	)
}
