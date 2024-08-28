import Image from "next/image";
import { Header, HeroText, HotNFT, NFTCard, SearchBar } from "./components/SharedComponents";

export default function Home() {
  return (
    <>
      <Header />
      <HeroText />
      <SearchBar />
      <NFTCard />
      <HotNFT />
    </>
  );
}
