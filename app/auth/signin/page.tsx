import SignInForm from '@/app/components/SignInForm'
import Link from 'next/link'
import React from 'react'

const SigninPage = () => {
	return (
		<div>
			<SignInForm />
			<Link href={"/auth/forgotPass"}>Forgot your Password</Link>
		</div>
	)
}

export default SigninPage
