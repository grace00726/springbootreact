import React, { useState } from "react";

const Bun = ({ no }) => {
  const [data, setData] = useState({
    math: 0,
    eng: 0,
    korea: 0,
    total: 0,
    avg: 0,
    grade: "",
  });

  const onChangeHandler = (e) => {
    const newData = { ...data, [e.target.name]: parseInt(e.target.value) };
    const total = newData.math + newData.eng + newData.korea;
    const avg = total / 3;
    const grade = (i) => {
      switch (i / 10) {
        case (10, 9):
          "A";
          break;

        case 8:
          "B";
          break;

        case 7:
          "C";
          break;

        case 6:
          "D";
          break;

        default:
          "F";
          break;
      }
    };

    setData({ ...data, total, avg, grade });
  };

  return (
    <div>
      <h1>{no} 번 학생</h1>
      <form>
        <div>
          <label>국어</label>
          <input
            type="number"
            name="korea"
            value={data.korea}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>영어</label>
          <input
            type="number"
            name="eng"
            value={data.eng}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>수학</label>
          <input
            type="number"
            name="math"
            value={data.math}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>총점</label>
          <input
            type="number"
            name="total"
            value={data.total}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>평균</label>
          <input
            type="number"
            name="avg"
            value={data.avg}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>등급</label>
          <input
            type="number"
            name="grade"
            value={data.grade}
            onChange={onChangeHandler}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Bun;

// Ban.js 와 Bun.js 가 있다. 반에는 다섯 명의 학생 => 다섯 개의 컴포넌트
// math eng korea  /  total avg /  grade
// total = math + eng + korea
// avg = total / 3
// grade = > 90~100점 A  / 80_89점 B / 70~79점 C / 60~69점 D / 나머지 F
