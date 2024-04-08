import SidebarPanelItems from "../public/assets/data/SidebarPanelItems.json";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-20 z-10 h-[100dvh] w-full overflow-hidden transition-all duration-300 lg:max-w-60 pointer-events-none opacity-0 lg:opacity-100 lg:pointer-events-auto border-r-2 ">
      <div className="w-full flex-col gap-4">
        {SidebarPanelItems.map((item) => {
          return (
            <div className="flex px-8 py-5 border-b-2 items-center w-full cursor-pointer hover:bg-gray-100">
              <div className="">
                <Image
                  src={item.iconURL}
                  width={80}
                  height={88}
                  className="h-4 w-4 mr-4"
                  alt={item.icon}
                />
              </div>
              <p className="text-sm font-medium"> {item.name}</p>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
