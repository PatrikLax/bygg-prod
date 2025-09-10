"use client"

import { Book } from "@/generated/prisma";
import { deleteBook } from "../api/book/actions";

interface Props {
    book: Book
}

export default function DeteleBookButton(props: Props) {
    return <button onClick={() => deleteBook(props.book.id)}>💔</button>

}