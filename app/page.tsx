import Image from "next/image";
import {
  CurrentBid,
  Footer,
  Header,
  HeroText,
  HotBid,
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
     
      <HeroText />
      <SearchBar />
      <NFTCard />
      <ReserveDetails />
      <NFTCard />
      <LiveAuction />
      <HotBid/>
     
    </main>
  );
}
