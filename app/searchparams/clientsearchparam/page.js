"use client";
import { useSearchParams } from "next/navigation";

const clientsearchparams = () => {
  const clientsearchparams = useSearchParams();
  console.log("inside clientsearchparams");
  const phone = clientsearchparams.get("category");

  return <div>clientsearchparams : {phone}</div>;
};

export default clientsearchparams;
