import React, { useCallback } from "react";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {
  const { tno, page, size } = useParams();

  const moveToModify = useCallback(
    (tno) => {
      navigate({ pathname: `/todo/modify/${tno}`, search: queryStr });
    },
    [tno, page, size]
  );
  const moveToList = useCallback(() => {
    navigate({ pathname: `/todo/list`, search: queryStr });
  });
  return (
    <div className="font-extrabold w-full bg-white mt-6">
      <div className="text-3xl font-extrabold">
        Todo Read Page Component{tno}
        <ReadComponent tno={tno}></ReadComponent>
      </div>
    </div>
  );
};

export default ReadPage;
