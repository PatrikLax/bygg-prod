import { getSession } from "better-auth/api";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await getSession()

    if(!session) redirect("/")
    
    return (
        <main>
            <h1>Dashboard</h1>
        </main>
    )
}