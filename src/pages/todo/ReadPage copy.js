import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadPage = () => {
  const { tno } = useParams();
  const [data, setData] = useState([]);
  console.log(tno);

  useEffect(() => {
    const f = async () => {
      const res = await axios.get(`http://localhost:8080/todo/read?tno=${tno}`);
      console.log(res.data);
      setData(res.data);
    };
    f();
  }, []);

  return (
    <div className="text-3xl font-extrabold">
      ReadPage
      <p>
        {data.map((i) => (
          <div>
            {i.tno},{i.work}
          </div>
        ))}
      </p>
    </div>
  );
};

export default ReadPage;
