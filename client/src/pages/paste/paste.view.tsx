import { FC } from "react";
import { useGetPasteQuery } from "@/entities/paste/paste.api";
import { PasteField } from "@/entities/paste/ui/paste-field/paste-field.component";
import { Preloader } from "@/widgets/preloader/preloader.component";
import { useParams } from "react-router-dom";

const PasteView: FC = () => {
  const { pasteId } = useParams();
  const { data, isLoading } = useGetPasteQuery(pasteId!);

  if (isLoading || !data) {
    return <Preloader />;
  }

  return <PasteField value={data.value} />;
};

export default PasteView;
