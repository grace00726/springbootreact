import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import ReadComponent from "../../components/products/ReadComponent";

const ReadPage = () => {
  const { pno, page, size } = useParams();

  const moveToModify = useCallback(
    (pno) => {
      navigate({ pathname: `/products/modify/${pno}`, search: queryStr });
    },
    [pno, page, size]
  );
  const moveToList = useCallback(() => {
    navigate({ pathname: `/products/list`, search: queryStr });
  });
  return (
    <div className="font-extrabold w-full bg-white mt-6">
      <div className="text-3xl font-extrabold">
        Todo Read Page Component{pno}
        <ReadComponent pno={pno}></ReadComponent>
      </div>
    </div>
  );
};

export default ReadPage;
