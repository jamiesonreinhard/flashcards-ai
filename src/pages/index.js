import React from "react";
import Layout from "../components/layout";
import LargeInput from "../components/largeInput";
import FlashcardPreview from "../components/flashcardPreview";
import Image from "next/image";

export default function Home() {


  React.useEffect(() => {
    fetch('/api/example')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Layout>
      <div className="bg-patterned">
        <div className="relative mx-auto w-[90%] max-w-[1200px] py-[120px] text-center flex flex-col items-center h-screen justify-center">
          <div className="p-12 bg-primary/[0.85] flex flex-col items-center gap-[32px] rounded-[16px]">
            <Image
              src="/images/logo.png"
              alt="flashcards-ai"
              width={400}
              height={400}
              className="object-cover"
            />
            <LargeInput />
            <FlashcardPreview />
          </div>
        </div>
      </div>
    </Layout>
  );
}
