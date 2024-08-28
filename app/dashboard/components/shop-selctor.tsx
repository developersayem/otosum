// "use client";
// import { useEffect, useState } from "react";
// import { Suspense } from "react";
// import ShopSwitcher from "./shop-switcher";

// export default async function ShopSelector() {
//   const [shops, setShops] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/api/v1/shops");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const result = await response.json();
//         setShops(result);
//       } catch (error) {
//         console.error(
//           "There has been a problem with your fetch operation:",
//           error
//         );
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <ShopSwitcher shops={shops} />
//     </Suspense>
//   );
// }
