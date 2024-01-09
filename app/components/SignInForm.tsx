import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
	callbackUrl?: string;
}

const FormSchema = z.object({
	email: z.string().email("Please enter a valid email address"),
	password: z.string({
		required_error: "Please enter your password"
	})
})

type InputType = z.infer<typeof FormSchema>

const SignInForm = (props: Props) => {
	const [visiblePass, setVisiblePass] = useState(false)
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<InputType>({
		resolver: zodResolver(FormSchema)
	})
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
			<Input
				label="Email" {...register("email")}
				errorMessage={errors.email?.message}
			/>
			<Input
				label="Password" {...register("password")}
				errorMessage={errors.password?.message}
				endContent={
					<button onClick={() => setVisiblePass(prev => !prev)}>
						{visiblePass ? <EyeSlashIcon className="w-4" /> : <EyeIcon className="w-4" />}
					</button>
				}
			/>
			<div className="flex items-center justify-center">
				<Button color="primary" type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
					{isSubmitting ? "Signing In..." : "Sign In"}
				</Button>
				<Button as={Link}>Sign Up</Button>
			</div>
		</form>
	)
}

export default SignInForm
