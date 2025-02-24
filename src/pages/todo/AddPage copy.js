import axios from "axios";
import React, { useState } from "react";

const AddPage = () => {
  const [form, setForm] = useState({
    work: "",
    name: "",
    tno: 0,
    isCompleted: "",
  });
  const checkHandler = (e) => {
    console.log("check  눌렸어");
    const { name, value } = e.target;
    console.log(name, value);
    if (value == "on") {
      console.log("여기에 들어오는가?  on");
      setForm({ ...form, [name]: true });
    }
  };
  const clickHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const addHandler = (e) => {
    e.preventDefault();
    const addData = async () => {
      const res = await axios.post("http://localhost:8080/todo/add", form, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res.data);
    };

    addData();
  };
  return (
    <div className="">
      <form onSubmit={addHandler}>
        <input
          type="text"
          name="name"
          placeholder="이름"
          onChange={clickHandler}
        ></input>
        <input
          type="text"
          name="work"
          placeholder="할일"
          onChange={clickHandler}
        ></input>
        실행여부
        <input
          type="checkbox"
          name="isCompleted"
          onChange={checkHandler}
        ></input>
        <input type="submit" value={"제출"}></input>
      </form>
    </div>
  );
};

export default AddPage;
