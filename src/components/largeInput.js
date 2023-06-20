import React from "react";
import { UilSearch } from "@iconscout/react-unicons";

const LargeInput = () => {

	React.useEffect(() => {
		const input = document.getElementById("mainInput");
		input.focus()
	}, [])

  return (
    <div className="relative w-full">
      <UilSearch
        size="140"
        color="#3FB1B5"
        className="absolute top-[50%] -translate-y-[50%] left-[20px] w-[40px]"
      />
      <input
        id="mainInput"
        type="text"
        className="pl-20 py-3 pr-3 w-full rounded-full text-xl border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
        placeholder="Search"
      />
    </div>
  );
};

export default LargeInput;
