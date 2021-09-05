import Main from "@/components/Main";
import { RouteLink } from "@/components/RouteLink";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

const offline = () => {
  return (
    <Main>
      <div className="text-center">
        <Image
          width={280}
          height={216}
          src="/dino.gif"
          className="mx-auto"
          alt="offline dino"
        />
        <p className="mt-4">Looks like you&apos;re offline :((</p>
        <p>Click button bellow if you&apos;re already online</p>
        <RouteLink href="/">
          <FaHome className="inline" /> Home
        </RouteLink>
      </div>
    </Main>
  );
};

export default offline;
