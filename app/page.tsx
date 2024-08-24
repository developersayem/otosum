import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 light">
      <Button variant="outline">ShadCN</Button>
      <div className="p-3">
        <Link href="/dashboard">
          <Button variant="greenBtn">Dashboard</Button>
        </Link>
      </div>
    </main>
  );
}
