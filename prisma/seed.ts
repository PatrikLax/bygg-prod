import { db } from "./db-client";

async function main() {
  await db.comment.deleteMany();
  await db.book.deleteMany();

   await db.book.create({
    data: {
      title: "Hobbit",
      author: "Tolkien",
      publishDate: new Date("1990-10-08"),
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      comments: {
        create: [
          {
            content: "Very wow!!!",
            publishDate: new Date(),
            author: "Jane Doe",
          },
          {
            content: "Loved the storytelling!",
            publishDate: new Date(),
            author: "John Smith",
          },
        ],
      },
    },
  });
await db.book.create({
    data: {
      title: "Harry potter",
      author: "JK Rowling",
      publishDate: new Date("2000-10-8"),
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  });

}

main()
  .then(() => console.log("seeded successfully"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
