import Image from "next/image";
import {
  Footer,
  Header,
  HeroText,
  HotNFT,
  NFTCard,
  ReserveDetails,
  SearchBar,
} from "./components/SharedComponents";

export default function Home() {
  return (
    <main className="p-4">
      <Header />
      <HeroText />
      <SearchBar />
      <NFTCard />
      <ReserveDetails />
      <NFTCard />
      <HotNFT />
      <Footer />
    </main>
  );
}
