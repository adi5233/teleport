import FeaturesItems from "../public/assets/data/FeaturesItems.json";
import Image from "next/image";

const Features = () => {
  return (
    <div className="mt-8 font-bold text-2xl px-5 md:px-10">
      <div>What KAYAK brings to the table.</div>
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-4 2xl:gap-5 mt-4">
        {FeaturesItems.map((f) => {
          return (
            <div className="border-2 rounded-md p-4 flex flex-row md:flex-col gap-2">
              <div className="w-16 bg-[#ffdac1] p-2">
                <Image
                  src={f.iconURL}
                  width={80}
                  height={88}
                  className="w-8 mx-auto text-[#c24f02]"
                  alt={f.icon}
                />
              </div>
              <div className="">
                <div className="mt-1 font-semibold text-sm md:text-sm">
                  {f.title}
                </div>
                <div className="mt-1 text-xs md:text-sm font-medium text-neutral-400">
                  {f.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
