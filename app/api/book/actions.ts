"use server"

import { db } from "@/prisma/db-client"
import { getSession } from "better-auth/api"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function deleteBook(id: string) {

  const session = getSession()

  if(!session) redirect("/")

    await db.book.delete({ where: {id} })  
    revalidatePath("/")
  
}