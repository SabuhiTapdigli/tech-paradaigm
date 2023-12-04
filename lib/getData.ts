import { headers } from "next/headers";

const useFetch = async (gclid: any) => {
  const ip = headers().get("x-forwarded-for");
  console.log("ip", ip);
  console.log("gclid", gclid);
  const url = `https://api.gameindustrytitans.com/logic`;

  const res = await fetch(url, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify({ address: ip, gclid: gclid }),
  });
  const data = await res.json();
  console.log("data", data);
  return data;
};

export default useFetch;
