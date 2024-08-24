import { UserNav } from "./components/user-nav";
import { MainNav } from "./components/main-nav";
import ShopSwitcher from "./components/shop-switcher";
import DarkModeBtnCom from "./components/DarkModeBtnCom";
import { Toaster } from "@/components/ui/toaster"

interface Props {
  children: React.ReactNode;
}

const dashboardLayout = ({ children }: Props) => {
  return (
    <div className="">
      <div className="border-b">
        <div className="grid grid-cols-3 h-16 w-full justify-evenly items-center px-4">
          <h1 className="uppercase text-2xl font-bold tracking-tighter">
            otosum
          </h1>
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <ShopSwitcher />
            <DarkModeBtnCom />
            <UserNav />
          </div>
        </div>
      </div>
      {/* className="grow w-full" */}
      <div>{children}</div>
      <Toaster />
    </div>
  );
};

export default dashboardLayout;
