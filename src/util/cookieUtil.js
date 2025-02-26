import { Cookies } from "react-cookie";
const cookies = new Cookies();

export const setCookies = (name, value, days) => {
  const expires = new Date();
  expires.setUTCDate(expires.getUTCDate() + days); //보관기간

  return cookies.set(name, value, { path: "/", expires: expires });
};

export const getCookies = (name) => {
  return cookies.get(name);
};
export const removeCookies = (name, path = "/") => {
  cookies.remove(name, { path });
};
