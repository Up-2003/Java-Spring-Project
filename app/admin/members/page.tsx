import PageTitle from "@/components/widgets/page-title";
import MemberSearchComponent from "./_client/member-search-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADMIN | Members",
  description: "Member Management page of Balance Application.",
};

export default function MemberManagementPage() {
    return (
        <section className="space-y-6">
            <PageTitle title="Member Management" icon="Users" />
            <MemberSearchComponent />
        </section>
    )
}