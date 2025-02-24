import React from "react";
import ListComponent from "../../components/todo/ListComponent";

const ListPage = () => {
  return (
    <div className="p-4 w-full bg-orange-200">
      <div className="text-3xl font-extrabold">
        Todo List 페이지
        <ListComponent />
      </div>
    </div>
  );
};

export default ListPage;
//url에 따라다녀야 하는 정보
//현재 페이지, 페이지 당 몇개의 데이터
//검색을 하면 검색어 와 title, 내용, writer 은
//url에 따라 다녀야한다
