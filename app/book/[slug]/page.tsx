import { db } from "@/prisma/db-client";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: id } = await params;

  const book = await db.book.findUnique({
    where: { id: id },
  });

  return {
    title: "Bygg-prod" + " | " + book!.title,
    description: book!.summary.substring(0, 100),
  };
}

export async function generateStaticParams() {
  return db.book.findMany({ select: { id: true } });
}

export const revalidate = 3600;
// Uppdaterar sidan med ny information satt efter tidsspann
// När man köra SSR/SSG

export const dynamic = "force-dynamic";
//

export default async function BookPage({ params }: Props) {
  const { slug: id } = await params;

  const book = await db.book.findUnique({
    where: { id: id },
    include: { comments: true },
  });

  if (book) {
    return (
      <main className="flex-col p-6">
        <div className="flex-col border-2 p-4">
          <h1 className="mb-2 text-4xl">{book.title}</h1>
          <h2 className="mb-4 text-2xl">{book.author}</h2>
          <p className="flex mb-10">{book.summary}</p>
          <div className="flex-col">
            <h2 className="mb-4 text-2xl">Comments:</h2>
            {book.comments.map((c) => (
              <p key={c.id}>{c.content}</p>
            ))}
          </div>
        </div>
      </main>
    );
  }
}
