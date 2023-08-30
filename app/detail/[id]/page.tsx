import ItemDetail from "@/components/item-detail";
import React, { FunctionComponent } from "react";

interface IPrams {
  params: { id: string };
}
const DetailPage: FunctionComponent<IPrams> = ({ params }) => {
  return (
    <div>
      <ItemDetail params={params.id} />
    </div>
  );
};
export default DetailPage;
