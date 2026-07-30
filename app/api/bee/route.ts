import { NextResponse } from "next/server";
import { BEES_KEY, redis } from "@/lib/redis";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  const givenSecret: string | null = req.headers.get("x-bees-secret");
  if (givenSecret !== process.env.BEES_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const [total] = await redis
      .multi()
      .hincrby(BEES_KEY, "total", 1)
      .hset(BEES_KEY, { updatedAt: Date.now() })
      .exec<[number, number]>();

    revalidatePath("/");
    return NextResponse.json({ total });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
