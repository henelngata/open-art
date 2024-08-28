import Image from "next/image";
import styles from "./shared.module.css";
import Link from "next/link";
function Header() {
  return (
    //logo
    //the different menus

    <header className="red flex justify-between">
      <section>
        <Image
          src="/images/logo.svg"
          width={100}
          height={100}
          alt="The logo image"
        />
      </section>
      <nav>
        <Image
          src="/images/menu.svg"
          width={20}
          height={20}
          alt="mobile menu"
        />
      </nav>
    </header>
  );
}

function HeroText() {
  return (
    <section>
      <p className="text-center text-[#555555] text-lg font-bold leading-7 tracking-wide">
        Discover, collect, and sell
      </p>
      <h1 className="w-[262.96px] text-center text-[#222222] text-[32px] font-bold  leading-9 tracking-wide">
        Your Digital Art
      </h1>
    </section>
  );
}

function SearchBar() {
  return (
    <section className="flex ">
      <section className="w-10 p-1">
        <Image
          src="/images/search.svg"
          width={20}
          height={20}
          alt="The search image"
        />
      </section>

      <input
        className="w-full p-1 bg-"
        type="text"
        name=""
        id=""
        placeholder="Search items, collections, and accounts"
      />

      <section className="w-10 p-1">
        <Image
          src="/images/mic.svg"
          width={20}
          height={20}
          alt="The search image"
        />
      </section>
    </section>
  );
}

function NFTCard() {
  return (
    //nft
    <section>
      <Image
        className="rounded-2xl w-100"
        src="/images/thanos.jpg"
        width={320}
        height={399.21}
        alt="art image"
      />
      <p className="font-24 font-bold leading-8">Silent Wave</p>
      <section className="red flex justify-between">
        <section className="flex">
          <Image
            className="rounded-full mr-3"
            src="/images/creator.svg"
            width={48}
            height={48}
            alt="creators image"
          />
          <section>
            <p className="leading-7 font-bold font-18">Pawel Czerwinski</p>
            <p className="font-light text-sm">Creator</p>
          </section>
        </section>

        <Image
          src="/images/heart.svg"
          width={24}
          height={24}
          alt="heart icon"
        />
      </section>
      <ReserveDetails />
      <BidButton />
      <ViewButton />
      <LiveAuction />
      <Sold />
      <CurrentBid />
      <HotBid />
    </section>
  );
}

function ReserveDetails() {
  return (
    <section>
      <p className="text-base font-normal">
        Reserve Price
        <span className="text-2xl font-bold leading-7">1.50 ETH</span>
        <span className="font-bold text-gray-500"> $2,683.73</span>
      </p>
    </section>
  );
}
function BidButton() {
  return (
    <Link
      className="font-bold text-xl text-slate-200  p-4 text-center rounded-md block bg-gradient"
      href="#"
    >
      Place a bid{" "}
    </Link>
  );
}

function ViewButton() {
  return (
    <Link
      className="font-bold text-xl  p-4 text-center rounded-md block border-blue-b border-2"
      href="#"
    >
      View artwork
    </Link>
  );
}

function LiveAuction() {
  return (
    <section className="flex justify-between items-center">
      <section className="flex justify-between items-center ">
        <div className={styles.ellipseDiv} />
        <p className="text-2xl font-bold">Live auctions</p>
      </section>
      <Link
        className=" text-base  p-2 text-center rounded-md block border-blue-b border-2 "
        href="#"
      >
        View artwork
      </Link>
    </section>
  );
}

function Sold() {
  return (
    <section className="pl-4 text-xl text-center py-3 rounded-3xl  font-normal bg-gray-sold">
      Sold For <span className="text-2xl font-bold leading-7">2.00 ETH</span>
    </section>
  );
}

function CurrentBid() {
  return (
    <section className=" py-3 rounded-3xl  flex justify-between px-7 border-2 border-black">
      <section>
        <section>
          <span
            className={`inline-block ${styles.ellipseDiv} ${styles.cl}`}
          ></span>
          <p className="inline-block">Current bid</p>
        </section>
        <p className="text-2xl font-bold leading-7">2.00 ETH</p>
      </section>
      <section>
        <section>
          <p className="inline-block">Ending in</p>
        </section>
        <p className="text-2xl font-bold leading-7">27m 30s</p>
      </section>
    </section>
  );
}

function HotBid() {
  return (
    <section className="flex justify-between">
      <section className="flex justify-between">
        <Image
          src="/images/fire.svg"
          width={18.2}
          height={19.24}
          alt="fire emoji"
        />
        <p className="inline-block text-2xl font-bold leading-7 ml-2">
          Hot bid
        </p>
      </section>
      <section className="w-1/6 flex justify-between">
        <Image
          src="/images/back-arrow.svg"
          width={24}
          height={24}
          alt="fire emoji"
        />
        <Image
          src="/images/forward-arrow.svg"
          width={24}
          height={24}
          alt="fire emoji"
        />
      </section>
     
    </section>
  );
}
function HotNFT() {
  return (
    <section>
      <Image
        className="rounded-2xl w-100"
        src="/images/thanos.jpg"
        width={254}
        height={300}
        alt="art image"
      />
      <p className="red my-2 font-base font-bold leading-8 w-100 flex justify-between items-center">
        Inside Kings Cross{" "}
        <span className=" border-2 border-gray-300 rounded-lg p-1 ">
          2.3 ETH
        </span>
      </p>
      <p className="text-sm">
        Highest bid <span className="font-bold">1.00ETH</span>
      </p>
      <HotCollection />
    </section>
  );
}

function HotCollection() {
  return (
    <section>
      <section className="flex justify-between">
        <section className="flex justify-between">
          <Image
            src="/images/hot.svg"
            width={26}
            height={25.24}
            alt="fire emoji"
          />
          <p className="inline-block text-2xl font-bold leading-7 ml-2">
            Hot Collection
          </p>
        </section>
        {/* iages */}
        <Image
          src="/images/hot.svg"
          width={26}
          height={25.24}
          alt="fire emoji"
        />
      </section>
    </section>
  );
}
export { Header, HeroText, SearchBar, NFTCard, HotNFT };
