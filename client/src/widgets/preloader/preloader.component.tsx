import { FC } from "react";

export const Preloader: FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center">
        <p className="text-xl">loading...</p>
      </div>
    </div>
  );
};
