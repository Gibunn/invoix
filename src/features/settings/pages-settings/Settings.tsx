import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { TabItem } from "../../../common/TabItem";
import BusinessProfile from "../components-settings/BusinessProfile/BusinessProfile";
import InvoicePreference from "../components-settings/InvoicePreference/InvoicePreference";
import Notification from "../components-settings/Notification/Notification";
import PaymentInformation from "../components-settings/PaymentInformation/PaymentInformation";

export default function Settings() {
	return (
		<TabGroup className="p-5">
			<TabList className="flex gap-1 bg-white w-fit p-1 rounded-xl mb-4">
				<TabItem>Profil Bisnis</TabItem>
				<TabItem>Info Pembayaran</TabItem>
				<TabItem>Preferensi Invoice</TabItem>
				<TabItem>Notifikasi</TabItem>
				<TabItem>Akun</TabItem>
			</TabList>

			<TabPanels>
				<TabPanel>
					<BusinessProfile />
				</TabPanel>
				<TabPanel>
					<PaymentInformation />
				</TabPanel>
				<TabPanel>
					<InvoicePreference />
				</TabPanel>
				<TabPanel>
					<Notification />
				</TabPanel>
			</TabPanels>
		</TabGroup>
	);
}
