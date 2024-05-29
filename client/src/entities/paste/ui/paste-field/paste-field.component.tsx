import { FC } from "react";
import { PasteResponse } from "@/entities/paste/types/paste";

export const PasteField: FC<PasteResponse> = ({ value }) => {
  return (
    <input
      className="w-full p-2 rounded bg-none text-white placeholder:text-center"
      type="text"
      value={value}
      placeholder="not found"
      disabled={true}
    />
  );
};
