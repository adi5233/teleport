import SearchFormContainer from "../SearchFormContainer";
import Features from "../Features";
import Footer from "../Footer";
import TravelPlans from "../TravelPlans";
import HopOnHopOff from "../HopOnHopOff";

const HomePageContainer = () => {
  return (
    <div className="w-full md:ml-60">
      <SearchFormContainer />
      <Features />
      <HopOnHopOff />
      <TravelPlans />
      <Footer />
    </div>
  );
};

export default HomePageContainer;
