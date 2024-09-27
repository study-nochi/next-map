// pages/api/stores.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { StoreApiResponse, StoreType } from "@/interface";
import { prisma } from "@/lib/prisma"; // 싱글톤 인스턴스 가져오기

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StoreApiResponse>
) {
  const { page = "1" }: { page?: string } = req.query;
  const skipPage = parseInt(page) - 1;

  const count = await prisma.store.count();
  const stores = await prisma.store.findMany({
    orderBy: { id: "asc" },
    take: 10,
    skip: 10 * skipPage,
  });

  console.log("stores", stores);

  res.status(200).json({
    page: parseInt(page),
    data: stores,
    totalCount: count,
    totalPage: Math.ceil(count / 10),
  });
}
