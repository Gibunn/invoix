import { Navigate, Route, Routes } from "react-router";
import Client from "./features/client/pages-client/Client";
import Dashboard from "./features/dashboard/pages-dashboard/Dashboard";
import ForgotPassword from "./features/forgot-password/pages-forgot-password/ForgotPassword";
import Invoice from "./features/invoice/pages-invoice/Invoice";
import Register from "./features/register/pages-register/Register";
import ResetPassword from "./features/reset-password/pages-reset-password/ResetPassword";
import Settings from "./features/settings/pages-settings/Settings";
import SignIn from "./features/sign-in/pages-sign-in/SignIn";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/dashboard" replace />} />

			<Route element={<AuthLayout />}>
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/register" element={<Register />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/reset-password" element={<ResetPassword />} />
			</Route>

			<Route path="/dashboard" element={<DashboardLayout />}>
				<Route index element={<Dashboard />} />
				<Route path="invoice" element={<Invoice />} />
				<Route path="client" element={<Client />} />
				<Route path="settings" element={<Settings />} />
			</Route>
		</Routes>
	);
}
