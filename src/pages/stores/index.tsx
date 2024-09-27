import Loading from "@/components/Loading";
import Pagination from "@/components/Pagination";
import { StoreApiResponse, StoreType } from "@/interface";
import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

const StoreListPage: NextPage<{}> = ({}) => {
  const router = useRouter();
  const { page = "1" }: { page?: string } = router.query;

  const {
    isLoading,
    isError,
    data: stores,
  } = useQuery(`stores-${page}`, async () => {
    const { data } = await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/api/stores?page=${page}`
    );
    return data as StoreApiResponse;
  });

  if (isError)
    return (
      <div className="w-full h-screen mx-auto pt-[10%] text-red-500 text-center font-semibold">
        에러가 발생했습니다. 다시 시도해주세요.
      </div>
    );

  return (
    <div className="px-4 md:max-w-5xl mx-auto py-8">
      <ul role="list" className="divide-y divide-gray-100">
        {isLoading ? (
          <Loading />
        ) : (
          stores?.data?.map((store, index) => {
            return (
              <li className="flex justify-between gap-x-6 py-5" key={index}>
                <div className="flex gap-x-4">
                  <Image
                    src={
                      store?.category
                        ? `/images/markers/${store.category}.png`
                        : "/images/markers/default.png"
                    }
                    width={48}
                    height={48}
                    alt="아이콘 이미지"
                  />
                  <div>
                    <div className="text-sm font-semibold leading-9 text-gray-900">
                      {store?.name}
                    </div>
                    <div className="mt-1 text-xs truncate font-semibold leading-5 text-gray-900">
                      {store?.storeType}
                    </div>
                  </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <div className="text-sm font-semibold leading-9 text-gray-900">
                    {store?.address}
                  </div>
                  <div className="mt-1 text-xs truncate font-semibold leading-5 text-gray-900">
                    {store?.phone ?? "번호 없음"} | {store?.foodCertifyName} |{" "}
                    {store?.category}
                  </div>
                </div>
              </li>
            );
          })
        )}
      </ul>
      {stores?.totalPage && <Pagination page={page} total={stores.totalPage} />}
    </div>
  );
};

export default StoreListPage;

export async function getServerSideProps() {
  const stores = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`);

  return {
    props: { stores: stores.data },
  };
}
