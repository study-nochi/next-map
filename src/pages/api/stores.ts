// pages/api/stores.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { StoreType } from "@/interface";
import { prisma } from "@/lib/prisma"; // 싱글톤 인스턴스 가져오기

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StoreType[]>
) {
  const stores = await prisma.store.findMany({
    orderBy: { id: "asc" },
  });

  console.log("stores", stores);

  res.status(200).json(stores);
}
