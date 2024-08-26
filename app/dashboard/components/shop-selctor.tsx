// Server Component
import { Suspense } from "react";
import ShopSwitcher from "./shop-switcher";

export default async function ShopSelector() {
  const shops = await fetchShops();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopSwitcher shops={shops} />
    </Suspense>
  );
}

async function fetchShops() {
  const res = await fetch(`${process.env.BASE_URL}/api/v1/shops`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
