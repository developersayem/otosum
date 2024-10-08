"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathName = usePathname();

  return (
    <nav
      className={cn(
        "md:flex items-center space-x-4 lg:space-x-6 hidden ",
        className
      )}
      {...props}
    >
      <Link
        href="/dashboard"
        className={`text-sm font-medium transition-colors capitalize hover:text-primary ${
          pathName === "/dashboard" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        dashboard
      </Link>
      <Link
        href="/dashboard/products"
        className={`text-sm font-medium transition-colors capitalize  hover:text-primary ${
          pathName === "/dashboard/products"
            ? "text-primary"
            : "text-muted-foreground"
        }`}
      >
        products
      </Link>
      <Link
        href="/dashboard/employees"
        className={`text-sm font-medium transition-colors capitalize hover:text-primary ${
          pathName === "/dashboard/employees"
            ? "text-primary"
            : "text-muted-foreground"
        }`}
      >
        employees
      </Link>
      <Link
        href="/dashboard/suppliers"
        className={`text-sm font-medium transition-colors capitalize hover:text-primary ${
          pathName === "/dashboard/suppliers"
            ? "text-primary"
            : "text-muted-foreground"
        }`}
      >
        suppliers
      </Link>
      <Link
        href="/dashboard/settings"
        className={`text-sm font-medium transition-colors capitalize hover:text-primary ${
          pathName === "/dashboard/settings"
            ? "text-primary"
            : "text-muted-foreground"
        }`}
      >
        settings
      </Link>
    </nav>
  );
}
