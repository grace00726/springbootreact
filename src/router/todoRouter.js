import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
const Loading = <div>Loading</div>;
const TodoList = lazy(() => import("../pages/todo/ListPage"));
const TodoRead = lazy(() => import("../pages/todo/ReadPage"));
const TodoAdd = lazy(() => import("../pages/todo/AddPage"));
const TodoModify = lazy(() => import("../pages/todo/ModifyPage"));
const todoRouter = () => {
  return [
    {
      path: "add",
      element: (
        <Suspense fallback={Loading}>
          <TodoAdd />
        </Suspense>
      ),
    },
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <TodoList />
        </Suspense>
      ),
    },
    {
      path: "", //todo =>
      element: <Navigate replace to="list" />,
    },
    {
      path: "read/:tno", //todo =>
      element: (
        <Suspense>
          <TodoRead />
        </Suspense>
      ),
    },
    {
      path: "modify/:tno", //todo =>
      element: (
        <Suspense>
          <TodoModify />
        </Suspense>
      ),
    },
  ];
};

export default todoRouter;
