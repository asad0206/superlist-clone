import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { TabsPlaylist } from "@/components/ui/tabview";
import PitchDeck from "@/components/ui/pitchdeck";
import Vid from "@/components/ui/vid";
import ListStructure from "@/components/ui/ListStructure";
import Footer from "@/components/ui/Footer";
import DrawButton from "@/components/ui/DrawButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Button variant="default">
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>
        </p>

        <p className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <DrawButton></DrawButton>
        </p>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/Superlist.svg"
          alt="Superlist Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-8xl text-center">Home to</p>
        <p className="font-bold text-8xl text-center">
          all your <span className="text-[#f84f39]">Lists</span>
        </p>
      </div>

      <div className="relative flex w-full justify-center lg:static lg:h-auto lg:w-auto lg:bg-none p-10">
        <TabsPlaylist></TabsPlaylist>
      </div>

      <div className="relative flex w-full justify-center lg:static lg:h-auto lg:w-auto lg:bg-none p-10">
        <PitchDeck></PitchDeck>
      </div>

      <div className="relative flex w-full justify-center lg:static lg:h-auto lg:w-auto lg:bg-none p-20">
        <Vid></Vid>
      </div>

      <div className="relative flex w-full lg:static lg:h-auto lg:w-auto lg:bg-none">
        <ListStructure></ListStructure>
      </div>
      <div className="relative flex w-full lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Footer />
      </div>
    </main>
  );
}
