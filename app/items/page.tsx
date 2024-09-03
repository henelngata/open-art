import Image from "next/image";

export default function Home() {
  return (
    <main className="red mt-7 p-3">
      <Image
        className="rounded-2xl w-100"
        src="/images/thanos.jpg"
        width={320}
        height={399.21}
        alt="art image"
      />
      <section className="flex justify-between px-3">
        <p className="font-24 font-bold leading-8 py-3 inline-block">
          Silent Wave
        </p>
        <section className="w-1/4 flex justify-between">
          <Image
            className="rounded-full"
            src="/images/heart.svg"
            width={24}
            height={24}
            alt="art image"
          />
          <Image
            className=""
            src="/images/export.svg"
            width={20}
            height={20}
            alt="art image"
          />
        </section>
      </section>
      <section className="px-3">
        <section className="relative border-2 flex justify-between p-2 bg-gray-sold rounded-2xl mb-3 w-3/6">
          <Image
            className="rounded-full"
            src="/images/thanos.jpg"
            width={32}
            height={32}
            alt="art image"
          />
          <p className="font-bold">@openart</p>
        </section>
        <p className="mb-2">
          Together with my design team, we designed this futuristic Cyberyacht
          concept artwork. We wanted to create something that has not been
          created yet, so we started to collect ideas of how we imagine the
          Cyberyacht could look like in the future.
        </p>
        <section className="mb-5">
          <p className="inline-block p-1 rounded-2xl border-2 mr-1">#color</p>
          <p className="inline-block p-1 rounded-2xl border-2 mr-1">#color</p>
          <p className="inline-block p-1 rounded-2xl border-2 mr-1">#color</p>
          <p className="inline-block p-1 rounded-2xl border-2 mr-1">#art</p>
        </section>
      </section>
      <section className="flex justify-between p-3 bg-white rounded-lg mb-3">
        <Image
          className="rounded-full"
          src="/images/thanos.jpg"
          width={32}
          height={32}
          alt="art image"
        />
        <p className="font-bold text-xl">View on Etherscan</p>
        <Image
          className="rounded-full"
          src="/images/external.svg"
          width={24}
          height={24}
          alt="art image"
        />
      </section>
      <section className="flex justify-between p-3 bg-white rounded-lg mb-3">
        <Image
          className="rounded-full"
          src="/images/thanos.jpg"
          width={32}
          height={32}
          alt="art image"
        />
        <p className="font-bold text-xl">View on Etherscan</p>
        <Image
          className="rounded-full"
          src="/images/external.svg"
          width={24}
          height={24}
          alt="art image"
        />
      </section>
      <section className="flex justify-between p-3 bg-white rounded-lg mb-3">
        <Image
          className="rounded-full"
          src="/images/thanos.jpg"
          width={32}
          height={32}
          alt="art image"
        />
        <p className="font-bold text-xl">View on Etherscan</p>
        <Image
          className="rounded-full"
          src="/images/external.svg"
          width={24}
          height={24}
          alt="art image"
        />
      </section>
      <section className="p-4 bg-white rounded-3xl red my-7">
        <p className="text-xl mb-3">
          Sold for <span className="font-bold text-2xl m-2">1.50 ETH</span>
          <span className="font-bold text-gray-500">$2,683.73</span>
        </p>
        <section className="flex justify-between items-center ">
          {" "}
          <p className="text-xl">Owner by</p>
          <section className="relative border-2 flex justify-between p-2 bg-gray-sold rounded-2xl mb-3">
            <Image
              className="rounded-full"
              src="/images/thanos.jpg"
              width={32}
              height={32}
              alt="art image"
            />
            <p className="font-bold">@openart</p>
          </section>
        </section>
      </section>
      <section>
        <p className="text-2xl mb-5">Activity</p>
        <section className="flex justify-between bg-white p-3 rounded-3xl items-center  mb-4">
          <section>
            <Image
              className="rounded-full "
              src="/images/thanos.jpg"
              width={52}
              height={52}
              alt="art image"
            />
          </section>

          <section>
            <b>Auction won by David</b>
            <p className="mb-3">June 04, 2021 at 12:00am</p>
            <b>Sold for 1.50 ETH</b>
          </section>
          <Image
            className="rounded-full"
            src="/images/external.svg"
            width={24}
            height={24}
            alt="art image"
          />
        </section>
        <section className="flex justify-between bg-white p-3 rounded-3xl items-center  mb-4">
          <section>
            <Image
              className="rounded-full "
              src="/images/thanos.jpg"
              width={52}
              height={52}
              alt="art image"
            />
          </section>

          <section>
            <b>Auction won by David</b>
            <p>June 04, 2021 at 12:00am</p>
            <b>Sold for 1.50 ETH</b>
          </section>
          <Image
            className="rounded-full"
            src="/images/external.svg"
            width={24}
            height={24}
            alt="art image"
          />
        </section>
        <section className="flex justify-between bg-white p-3 rounded-3xl items-center mb-4">
          <section>
            <Image
              className="rounded-full "
              src="/images/thanos.jpg"
              width={52}
              height={52}
              alt="art image"
            />
          </section>

          <section>
            <b>Auction won by David</b>
            <p>June 04, 2021 at 12:00am</p>
            <b>Sold for 1.50 ETH</b>
          </section>
          <Image
            className="rounded-full"
            src="/images/external.svg"
            width={24}
            height={24}
            alt="art image"
          />
        </section>
      </section>
    </main>
  );
}
