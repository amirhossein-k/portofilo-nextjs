import Footer from "@/components/footer";
import LeftSide from "@/components/leftSide";
import RightSide from "@/components/rightSide";

const GridItems = new Array(64).fill(0);

export default function Home() {
  return (
    <main className=" container flex flex-col gap-10 flex-1 w-full h-full mx-auto xl:flex-row">
      {/* left side */}
      <LeftSide />
      {/* right side */}
      <RightSide />
      {/* footer */}
      <div className="flex xl:hidden px-8 pb-10 w-full">
        <Footer />
      </div>
    </main>
  );
}
