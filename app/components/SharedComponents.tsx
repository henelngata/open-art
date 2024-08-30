import Image from "next/image";
import styles from "./shared.module.css";
import Link from "next/link";
function Header() {
  return (
    //logo
    //the different menus

    <header className="flex justify-between">
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
      <p className="text-center text-[#555555] text-lg font-bold leading-7 tracking-wide my-2">
        Discover, collect, and sell
        <span className="text-center w-[262.96px]  text-[#222222] text-[32px] font-bold  leading-9 tracking-wide">
          <br></br> Your Digital Art
        </span>
      </p>
    </section>
  );
}

function SearchBar() {
  return (
    <section className="flex p-2 bg-gray-in mb-3">
      <section className="w-10 p-1">
        <Image
          src="/images/search.svg"
          width={20}
          height={20}
          alt="The search image"
        />
      </section>

      <input
        className="w-full p-1 bg-gray-in"
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
    <section className="mb-8 bg-white p-2 rounded-xl">
      <Image
        className="rounded-2xl w-100"
        src="/images/thanos.jpg"
        width={320}
        height={399.21}
        alt="art image"
      />
      <p className="font-24 font-bold leading-8 py-3">Silent Wave</p>
      <section className="flex justify-between">
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
    </section>
  );
}

function ReserveDetails() {
  return (
    <section>
      <p className="text-base font-normal mb-4">
        Reserve Price
        <span className="text-2xl font-bold leading-7">1.50 ETH</span>
        <span className="font-bold text-gray-500"> $2,683.73</span>
      </p>
      <BidButton />
      <ViewButton />
    </section>
  );
}
function BidButton() {
  return (
    <Link
      className="font-bold text-xl text-slate-200  p-4 text-center rounded-md block bg-gradient mb-3"
      href="#"
    >
      Place a bid{" "}
    </Link>
  );
}

function ViewButton() {
  return (
    <Link
      className="font-bold text-xl  p-4 text-center rounded-md block border-blue-b border-2 mb-6"
      href="#"
    >
      View artwork
    </Link>
  );
}

function LiveAuction() {
  return (
    <>
      <section className="flex justify-between items-center mb-4">
        <section className="flex justify-between items-center ">
          <div className={styles.ellipseDiv} />
          <p className="text-2xl font-bold">Live auctions</p>
        </section>
        <Link
          className=" text-base  px-4 py-2 text-center rounded-md block border-gray-400 border-2 "
          href="#"
        >
          View artwork
        </Link>
      </section>
      <section>
        <NFTCard />
      </section>
    </>
  );
}

function Sold() {
  return (
    <section className="pl-4 text-xl text-center py-3 rounded-3xl  font-normal bg-gray-sold mb-4 text-slate-600">
      Sold For <span className="text-2xl font-bold leading-7">2.00 ETH</span>
    </section>
  );
}

function CurrentBid() {
  return (
    <section className=" py-3 rounded-3xl  flex justify-between px-7 border-2 border-black mb-3">
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
    <section>
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
      <div className=" w-auto flex border-2 border-black  overflow-hidden justify-evenly">
        <HotNFT />
        <HotNFT />
        <HotNFT />
        <HotNFT />
      </div>
    </section>
  );
}
function HotNFT() {
  return (
    <section className="red w-100 mr-10">
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
      </section>
      <section className=" red grid grid-cols-2 ">
        {/* iages */}
        <Image
          className=" relative"
          src="/images/1.svg"
          width={165}
          height={200}
          alt="fire emoji"
        />
        <Image src="/images/1.svg" width={165} height={200} alt="fire emoji" />
        <Image src="/images/1.svg" width={165} height={200} alt="fire emoji" />
        <Image src="/images/1.svg" width={165} height={200} alt="fire emoji" />
      </section>
      <section>
        <p className="red my-2 text-lg font-bold leading-8 w-100 flex justify-between items-center">
          Water and sunflower
          <span className=" border-2 border-gray-300 rounded-lg p-1 ">
            30 items
          </span>
        </p>
      </section>
      <section className="flex items-center">
        <section className="flex items-center w-5/6">
          <Image
            className="rounded-full mr-3"
            src="/images/creator.svg"
            width={40}
            height={40}
            alt="creators image"
          />
          <section>
            <p className="leading-7 font-bold  text-sm">By Pawel Czerwinski</p>
          </section>
        </section>
        <section className="w-2/6 flex  justify-around px-7 py-2 rounded-xl border-2 border-gray-ph">
          <Image
            src="/images/heart.svg"
            width={24}
            height={24}
            alt="creators image"
          />
          <p className="inline-block">Follow</p>
        </section>
      </section>
      <ViewLink />
    </section>
  );
}

function ViewLink() {
  return (
    <Link
      className="p-2 text-center rounded-md block border-blue-b border-2 font-bold text-xl"
      href="#"
    >
      View more collection
    </Link>
  );
}
function Footer() {
  return (
    <footer>
      <section>
        <h1>The New Creative Economy</h1>
        <Link
          className="font-bold text-xl text-slate-200  p-4 text-center rounded-md block bg-gradient"
          href="#"
        >
          Place a bid
        </Link>
        <Link
          className="p-2 text-center rounded-md block border-blue-b border-2 font-bold text-xl"
          href="#"
        >
          View more collection
        </Link>
      </section>
      <section>
        <section>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Discord</p>
          <p>Blog</p>
        </section>
        <section>
          <p>About</p>
          <p>Community Guidelines</p>
          <p>Terms of Service</p>
          <p>Privacy</p>
          <p>Careers</p>
          <p>Help</p>
        </section>
        <p>© 2021 Openart</p>
      </section>
    </footer>
  );
}
export {
  Header,
  HeroText,
  SearchBar,
  NFTCard,
  HotNFT,
  Footer,
  ReserveDetails,
  LiveAuction,
  Sold,
  CurrentBid,
  HotBid,
};
