import "server-only";

import { prisma } from "@/lib/db";
import { requireAdmin } from "./require-admin";

export async function adminGetEnrollmentStats() {
  await requireAdmin();

  const today = new Date();

  const thirtyDaysAgo = new Date(
    Date.UTC(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      today.getUTCDate() - 29,
    ),
  );

  const grouped = await prisma.$queryRaw<{ date: string; count: number }[]>`
  SELECT 
    TO_CHAR("createdAt", 'YYYY-MM-DD') as date,
    COUNT(*) as count
  FROM "Enrollment"
  WHERE "createdAt" >= ${thirtyDaysAgo}
  GROUP BY date
  ORDER BY date ASC
`;

  const map = new Map(grouped.map((g) => [g.date, Number(g.count)]));

  const result: { date: string; enrollments: number }[] = [];

  for (let i = 29; i >= 0; i--) {
    const date = new Date(
      Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate() - i,
      ),
    );

    const formatted = date.toISOString().split("T")[0];

    result.push({
      date: formatted,
      enrollments: map.get(formatted) ?? 0,
    });
  }

  return result;
}
