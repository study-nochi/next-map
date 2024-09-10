import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const StoreEditPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Store Edit : {id}</div>;
};

export default StoreEditPage;
