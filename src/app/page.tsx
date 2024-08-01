import ICText from "@/components/ICText/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div>
        <ICText size="large" color="main">
          This is large and main color text
        </ICText>
        <ICText size="medium" color="secondary">
          This is medium and secondary color text
        </ICText>
        <ICText size="small" color="default">
          This is small and default color text
        </ICText>
      </div>
    </main>
  );
}
