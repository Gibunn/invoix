import AuthFormLayout from "@/common/AuthFormLayout";
import AuthSeparator from "@/common/AuthSeparator";
import RegisterFooter from "../components-register/RegisterFooter";
import RegisterForm from "../components-register/RegisterForm";
import RegisterGoogle from "../components-register/RegisterGoogle";
import RegisterHeader from "../components-register/RegisterHeader";

export default function Register() {
	return (
		<AuthFormLayout>
			<RegisterHeader />
			<RegisterForm />
			<AuthSeparator />
			<RegisterGoogle />
			<RegisterFooter />
		</AuthFormLayout>
	);
}
