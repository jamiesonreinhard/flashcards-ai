import Layout from "../components/Layout";
import LargeInput from "../components/largeInput";

export default function Home() {
  return (
    <Layout>
      <div className="mx-auto w-[90%] max-w-[1200px] py-[120px] text-center flex flex-col items-center gap-[32px]">
        <h1 className="text-[40px] font-bold"><em>Flashcards AI</em></h1>
        <LargeInput />
      </div>
    </Layout>
  );
}
