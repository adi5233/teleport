import HomePageContainer from "@/components/Home/HomePageContainer";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex mt-20 w-full">
      <Sidebar />
      <HomePageContainer />
    </div>
  );
}
