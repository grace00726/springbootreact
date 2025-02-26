import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { getCookies, removeCookies, setCookies } from "../util/cookieUtil";

const initState = {
  email: "",
};

const loadMemberCookie = () => {
  //쿠키에서 로그인 정보 로딩
  const memberInfo = getCookies("meber");

  //닉네임 처리
  if (memberInfo && memberInfo.nickname) {
    memberInfo.nickname = decodeURIComponent(memberInfo.nickname);
  }
  return memberInfo;
};

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
  return loginPost(param);
});

const loginSlice = createSlice({
  name: "LoginSlice",
  initialState: loadMemberCookie() || initState, // 쿠키값이 없으면 초기값 사용
  reducers: {
    login: (state, action) => {
      console.log("login.....");
      //p364
      const data = action.payload;

      //새로운 상태
      return { email: data.email };
    },

    logout: (state, action) => {
      console.log("logout....");

      removeCookies("member");

      return { ...initState };
    },
  },

  //p371
  //loginSlice에서 createAsyncThunk를 사용하여 비동기 통신을 호출하는 함수를 작성하고
  //비동기 호출의 상태에 따라 동작하는 extraReducer 를 추가
  extraReducers: (builder) =>
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fulfilled");
        //p373
        const payload = action.payload;
        //정상적인 로그인시에만 저장(p385)
        if (!payload.error) {
          setCookies("member", JSON.stringify(payload), 1); //1일
          console.log("patload", payload);
        }
        return payload;
      })
      .addCase(loginPostAsync.pending, (state, action) =>
        console.log("pending")
      )
      .addCase(loginPostAsync.rejected, (state, action) =>
        console.log("rejected")
      ),
});
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
