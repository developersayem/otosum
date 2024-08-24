// Server Component for fetching data
import { Suspense } from "react";
import ShopSwitcher from "./shop-switcher";

export default async function ShopSelector() {
  const res = await fetch(`${process.env.BASE_URL}/api/v1/shops`);
  const shops = await res.json();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopSwitcher shops={shops} />
    </Suspense>
  );
}
