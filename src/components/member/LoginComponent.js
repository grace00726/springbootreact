import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { login, loginPostAsync } from "../../slices/loginSlice";
import useCustomLogin from "../../hooks/useCustomLogin";

const initState = {
  email: "",
  pw: "",
};

const LoginComponent = () => {
  const [loginParam, setLoginParam] = useState({ ...initState });
  const { doLogin, moveToPath } = useCustomLogin();
  const handleChange = (e) => {
    loginParam[e.target.name] = e.target.value;
    setLoginParam({ ...loginParam });
  };
  const handleClickLogin = (e) => {
    console.log("login data:", loginParam);
    doLogin(loginParam).then((data) => {
      console.log("after unwrap....");
      console.log(data);

      // dispatch(login(loginParam)); // 동기화된 호출
      // dispatch(loginPostAsync(loginParam)) // 비동기호출

      if (data.error) alert("이메일과 비밀번호를 다시 확인하세용");
      else alert("로그인 성공 !");
      moveToPath("/");
      //Navigate({ pathname: "/" }); // , { replace: true } 뒤로가기했을때 로그인 화면을 볼수없게
    });
  };
  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      <div className="flex justify-center">
        <div className="text-4xl m-4 p-4 font-extrabold text-blue-500">
          로그인 콤포넌트
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-full p-3 text-left font-bold">이메일</div>
          <input
            type="text"
            className="w-full p-6 rounded-r border border-solid border-neutral-500 shadow-md"
            name="email"
            value={loginParam.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-full p-3 text-left font-bold">비밀번호</div>
          <input
            type="password"
            className="w-full p-6 rounded-r border border-solid border-neutral-500 shadow-md"
            name="pw"
            value={loginParam.pw}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full justify-center">
          <div className="w-2/5 p-6 flex justify-center font-bold">
            <button
              className="rounded p-4 w-36 bg-blue-500 text-xl text-white"
              onClick={handleClickLogin}
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
