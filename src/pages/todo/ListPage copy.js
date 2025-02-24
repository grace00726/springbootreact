import axios from "axios";
import React, { useEffect, useState } from "react";

const ListPage = () => {
  const [data, setData] = useState([]);
  //axios backend 연결
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8080/todo/list");
      console.log(res.data);
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 w-full bg-orange-200">
      <div className="text-3xl font-extrabold">
        Todo List 페이지
        <p>
          {data.map((i) => (
            <div>
              {i.completed ? <>참</> : <>거짓</>},<span>{i.work}</span>,{" "}
              <span className="underline">{i.name}</span>
              <br />
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ListPage;
