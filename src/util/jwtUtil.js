import axios from "axios";
import { getCookies, setCookies } from "./cookieUtil";
import { API_SERVER_HOST } from "../api/todoApi";

const jwtAxios = axios.create();

//p393
const refreshJWT = async (accessToken, refeshToken) => {
  const host = API_SERVER_HOST;
  const header = { header: { Authorization: `Barer${accessToken}` } };

  const res = await axios.get(
    `${host}/api/member/refresh?refreshToken=${refreshToken}`,
    header
  );
  console.log("------------------------------------------");
  console.log(res.data);

  return res.data;
};

//before return request : 요청 보내기 전
const brforeReq = (config) => {
  console.log("before request........");

  const memberInfo = getCookies("member");
  if (!memberInfo) {
    console.log("회원이 없어요!!!");
    return Promise.reject({ response: { data: { error: "로그인해주세요." } } });
  }

  const { accessToken } = memberInfo;

  //Authorization 헤더 처리
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};

const failReq = (err) => {
  console.log("request error.........");
  return Promise.reject(err);
};

//before return request
const beforeRes = async (res) => {
  console.log("before return response...........");
  console.log(res);

  //Error_Access_Token
  const data = res.data;

  if (data && data.error === "Error_Access_Token") {
    const memberCookieValue = getCookies("member");
    //로그인 되면 setCookies(member,개인정보)가 있어서 이렇게 가져다 사용할 수 있음

    const result = await refreshJWT(
      memberCookieValue.accessToken,
      memberCookieValue.refeshToken
    );
    console.log("refreshJWT 결과", result);

    memberCookieValue.accessToken = result.accessToken;
    memberCookieValue.refreshToken = result.refeshToken;

    setCookies("member", JSON.stringify(memberCookieValue), 1); //정보를 얻어와서 쿠키를 local 저장

    //p395
    //원래의 호출
    const originalRequest = res.config;
    originalRequest.headers.Authorization = `Bearer ${result.accessToken}`;

    return await axios(originalRequest);
  }

  return res;
};
//fail response
const responseFail = (err) => {
  console.log("response fail error......");
  return Promise.reject(err);
};

jwtAxios.interceptors.request.use(brforeReq, failReq);
jwtAxios.interceptors.request.use(beforeRes, responseFail);

export default jwtAxios;
