import { UserNav } from "./components/user-nav";
import { Search } from "./components/search";
import { MainNav } from "./components/main-nav";
import TeamSwitcher from "./components/team-switcher";
import DarkModeBtnCom from "./components/DarkModeBtnCom";

interface Props {
  children: React.ReactNode;
}

const dashboardLayout = ({ children }: Props) => {
  return (
    <div className="">
      <div className="">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <DarkModeBtnCom />
              <UserNav />
            </div>
          </div>
        </div>
      </div>
      {/* className="grow w-full" */}
      <div>{children}</div>
    </div>
  );
};

export default dashboardLayout;
