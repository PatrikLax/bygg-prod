import { db } from "@/prisma/db-client";
import Link from 'next/link';

export default async function Home() {
  const books = await db.book.findMany();
  return (
    <>      
      {books.map((book) => (
        <div key={book.id} className="flex-col w-3xl p-6">
          <h1 className="mb-2 text-4xl">
            <Link href={`/book/${book.id}`}>{book.title}</Link>
          </h1>
          <h2 className="mb-4 text-2xl">{book.author}</h2>
        </div>
      ))}
    </>
  );
}
