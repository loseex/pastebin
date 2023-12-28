import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const CreatePasteView = lazy(() => import("./create-paste/create-paste.view"));
const PasteView = lazy(() => import("./paste/paste.view"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<CreatePasteView />} />
      <Route path=":pasteId" element={<PasteView />} />
    </Routes>
  );
};
