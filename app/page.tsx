import Presentation from "@/components/presentation";
import Stats from "@/components/stats";
import { redis, BEES_KEY } from "@/lib/redis";

export const dynamic = "force-dynamic";

type BeeStats = { total: number; updatedAt: number };

export default async function Home() {
  const stats = await redis.hgetall<BeeStats>(BEES_KEY);

  return (
    <>
      <Presentation />
      <Stats total={stats?.total ?? 0} updatedAt={stats?.updatedAt ?? null} />
    </>
  );
}
