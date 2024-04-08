import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full border-b-2 h-20 flex justify-between items-center px-6 py-4 fixed top-0 z-50 bg-white">
      <div className="flex flex-row">
        <div>
          <Image
            src="/assets/images/menu.png"
            width={80}
            height={88}
            className="h-8 w-8"
            alt="menu icon"
          />
        </div>
        <div className="flex mx-4">
          <span className="bg-orange-500 text-white font-bold py-1 px-2 mr-1">
            K
          </span>
          <span className="bg-orange-500 text-white font-bold py-1 px-2 mr-1">
            A
          </span>
          <span className="bg-orange-500 text-white font-bold py-1 px-2 mr-1">
            Y
          </span>
          <span className="bg-orange-500 text-white font-bold py-1 px-2 mr-1">
            A
          </span>
          <span className="bg-orange-500 text-white font-bold py-1 px-2 mr-1">
            K
          </span>
        </div>
      </div>
      <div className="ml-4 flex items-center">
        <div className="mr-2">
          <Image
            src="/assets/images/wishlist.png"
            width={80}
            height={88}
            className="h-5 w-5 mr-2"
            alt="user icon"
          />
        </div>
        <div className="md:hidden">
          <Image
            src="/assets/images/user-icon.png"
            width={80}
            height={88}
            className="h-5 w-5 mr-2"
            alt="user icon"
          />
        </div>
        <div className="hidden lg:flex px-4 py-2 border-2 border-black rounded-md">
          <Image
            src="/assets/images/user-icon.png"
            width={80}
            height={88}
            className="h-5 w-5 mr-2"
            alt="user icon"
          />
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
