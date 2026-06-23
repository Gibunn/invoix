import AuthFormLayout from "@/common/AuthFormLayout";
import AuthSeparator from "@/common/AuthSeparator";
import SignInFooter from "../components-sign-in/SignInFooter";
import SignInForm from "../components-sign-in/SignInForm";
import SignInGoogle from "../components-sign-in/SignInGoogle";
import SignInHeader from "../components-sign-in/SignInHeader";

export default function SignIn() {
	return (
		<AuthFormLayout>
			<SignInHeader />
			<SignInForm />
			<AuthSeparator />
			<SignInGoogle />
			<SignInFooter />
		</AuthFormLayout>
	);
}
