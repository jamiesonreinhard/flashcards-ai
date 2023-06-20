import React from "react";

const FlashcardDeck = () => {
  return (
    <div className="relative w-64 h-40 rounded-lg shadow-lg cursor-pointer group">
      <div className="z-10 bg-white absolute w-full h-full flex flex-col justify-center items-center p-4 transition-transform duration-300 transform-gpu">
        <h2 className="text-2xl font-semibold">Flashcard</h2>
        <p className="mt-2 text-gray-600">Some text</p>
      </div>
      <div className="rounded-[16px] z-[5] bg-primary absolute top-[50%] -translate-y-[50%] w-full h-[98%] flex flex-col justify-center items-center p-4 transition-transform duration-300 transform-gpu group-hover:translate-x-1">
      </div>
      <div className="rounded-[16px] z-[4] bg-secondary absolute top-[50%] -translate-y-[50%] w-full h-[96%] flex flex-col justify-center items-center p-4 transition-transform duration-300 transform-gpu group-hover:translate-x-2">
      </div>
      <div className="rounded-[16px] z-[3] bg-accent absolute top-[50%] -translate-y-[50%] w-full h-[94%] flex flex-col justify-center items-center p-4 transition-transform duration-300 transform-gpu group-hover:translate-x-3">
      </div>
    </div>
  );
};

export default FlashcardDeck;
