import Image from "next/image";
import {
  CurrentBid,
  Footer,
  Header,
  HeroText,
  HotNFT,
  LiveAuction,
  NFTCard,
  ReserveDetails,
  SearchBar,
  Sold,
} from "./components/SharedComponents";

export default function Home() {
  return (
    <main className="p-4 bg-gray-100">
      <Header />
      <HeroText />
      <SearchBar />
      <NFTCard />
      <ReserveDetails />
      <NFTCard />
      <LiveAuction />
      <NFTCard />
      <Sold />
      <NFTCard />
      <Sold />
      <NFTCard />
      <Sold />
      <NFTCard />
      <CurrentBid />
      <HotNFT />
      <Footer />
    </main>
  );
}
