import { db } from "./db-client"

async function main() {

  
}

main()
.then(() => 
  console.log("seeded successfully"))
.catch((err)=> {console.error(err);
  process.exit(1);
  })
.finally(() => db.$disconnect());