import Catagories from "@/components/categories";
import React, { FunctionComponent } from "react";
interface Iparams {
  params: { id: string };
}

const CatagoriesPage: FunctionComponent<Iparams> = ({ params }) => {
  return (
    <div>
      <Catagories params={params.id} />
    </div>
  );
};
export default CatagoriesPage;
