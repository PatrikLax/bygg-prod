import { db } from "@/prisma/db-client";
import { getSession } from "better-auth/api";
import { redirect } from "next/navigation";
import DeleteBookButton from "../ui/deleteBookButton";

export default async function DashboardPage() {
    const session = await getSession()
    if(!session) redirect("/")

        const books = await db.book.findMany()
    
    return (
        <main className="flex-col justify-center">
            <h1 className="flex justify-center text-4xl">Dashboard</h1>
            <div className="flex-col justify-center">
            {books.map((book) => (
                <article key={book.id}>
                    <span>{book.title}</span>
                    <DeleteBookButton book={book}/>
                </article>
            ))}
            </div>
        </main>
    )
}