"use client";
import destinations from "../public/assets/data/destinations.json";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart } from "lucide-react";
import { useDispatch } from "react-redux";
import { wishlistActions } from "@/lib/redux/wishlistSlice";

const HopOnHopOff = () => {
  const dispatch = useDispatch();

  const handleAddWishlist = (destination) => {
    dispatch(wishlistActions.addToWishlist(destination));
    alert("Added to watchlist.");
  };
  return (
    <div className="my-10 px-5 md:px-10">
      <div className="text-2xl font-semibold">
        Start your travel planning here
      </div>
      <div className="mx-4">
        <Carousel className="mt-5">
          <CarouselContent>
            {destinations.map((destination) => (
              <CarouselItem
                key={destination.price}
                className="md:basis-1/2 lg:basis-1/4"
              >
                <div className="mx-auto relative">
                  <Image
                    src={`/assets/images/${destination.imageName}.jpg`}
                    width={80}
                    height={88}
                    className="h-96 w-72"
                    alt="menu icon"
                  />
                  <p className="mt-1 font-semibold">{destination.place}</p>
                  <p className="mt-1">{destination.price}</p>
                  <div className="px-4 py-1 bg-white absolute top-3 right-5 z-20 rounded-sm cursor-pointer">
                    <Heart
                      className="w-5"
                      onClick={() => handleAddWishlist(destination)}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-2 p-3 h-14 w-10 rounded-none" />
          <CarouselNext className="border-2 p-3 h-14 w-10 rounded-none" />
        </Carousel>
      </div>
    </div>
  );
};

export default HopOnHopOff;
