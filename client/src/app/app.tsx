import { FC, ReactElement } from "react";
import { withProviders } from "./providers";
import { Routing } from "@/pages";

export const App: FC = withProviders((): ReactElement => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-sm p-2">
        <Routing />
        <div className="text-center mt-10">
          <p className="text-white">
            <a
              className="opacity-70 hover:opacity-100 transition"
              href="https://github.com/loseex"
              target="_blank"
            >
              @losexds
            </a>
          </p>
        </div>
      </div>
    </div>
  );
});
