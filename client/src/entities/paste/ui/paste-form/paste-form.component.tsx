import { FC, useState } from "react";
import { PasteRequest } from "@/entities/paste/types/paste.types";
import { useCreatePasteMutation } from "@/entities/paste/model/paste.model";
import { useNavigate } from "react-router-dom";

export const PasteForm: FC = () => {
  const [state, setState] = useState<PasteRequest>({ value: "", ex: 10 });
  const [request] = useCreatePasteMutation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          className="w-full p-2 rounded border-black"
          value={state.value}
          placeholder="Enter text"
          onChange={(event) =>
            setState((prev) => ({ ...prev, value: event.target.value }))
          }
        />
        <select
          className="w-full p-2 rounded border-black"
          defaultValue={state.ex}
          onChange={(event) =>
            setState((prev) => ({ ...prev, ex: +event.target.value }))
          }
        >
          <option value="10">10 sec</option>
          <option value="60">1 min</option>
          <option value="600">10 min</option>
        </select>
      </div>
      <div>
        <input
          type="button"
          className="w-full p-2 bg-green-600 rounded text-white hover:bg-green-500 cursor-pointer transition disabled:bg-gray-600 disabled:cursor-auto"
          value="Share"
          onClick={() =>
            request(state).then((r) => {
              if ("data" in r) {
                navigate(`/${r.data.token}`);
              }
            })
          }
          disabled={!state.value}
        />
      </div>
    </div>
  );
};
