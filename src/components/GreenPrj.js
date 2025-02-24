import axios from "axios";
import { useState } from "react";

const GreenPrj = ({ v }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(0);
  return (
    <div>
      Prj,{v}
      {data.pname}
      <div>
        현제 페이지
        <input
          type="text"
          name="page"
          onChange={(e) => setPage(e.target.value)}
          value={page}
        />
      </div>
      <div>
        페이지당 데이터의 갯수
        <input
          type="text"
          name="size"
          onChange={(e) => setSize(e.target.value)}
          value={size}
        />
      </div>
      <button
        onClick={() => {
          const f = async () => {
            const res = await axios.get(
              `http://localhost:8080/api/products/list?size=${size}&page=${page}`
            );
            console.log(res.data);
            setData(res.data);
          };

          f();
        }}
      >
        확인
      </button>
      <div>
        {data.dtoList &&
          data.dtoList.map((i) => (
            <div key={i.pno}>
              {i.pname},{i.pdesc},{i.price}
            </div>
          ))}
      </div>
    </div>
  );
};

export default GreenPrj;
