import { Inter } from "next/font/google";
import { db } from "@/db";
import { events } from "@/db/schema";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const allEvents = await db.select().from(events);

  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      {allEvents.map((event) => (
        <div className="my-8" key={event.id}>
          <h1>{event.name}</h1>
        </div>
      ))}
    </div>
  );
}
