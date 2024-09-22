"use client";

import { CustomButton } from "@components";

const ShowMore = () => {
  return (
    <div className="w-full flex-center gap-5 mt-10">
      (
      <CustomButton
        btnType="button"
        title="Show More"
        containerStyles="bg-primary-blue rounded-full text-white"
      />
      )
    </div>
  );
};

export default ShowMore;
