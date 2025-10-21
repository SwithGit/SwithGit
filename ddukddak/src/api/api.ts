import axios from "axios";
import { logout } from "../redux/authSlice"; // 로그아웃 액션
import { store } from "../app/store"; // Redux store
const API_BASE_URL = "https://www.pieback.com";
//const API_BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.response.use(
  (response) => {
    // 성공적인 응답은 그대로 반환
    return response;
  },
  (error) => {
    // 인증 관련 에러 (401 Unauthorized, 403 Forbidden) 처리
    if (error.response.status === 401 || error.response.status === 403) {
      // 로그아웃 액션 디스패치
      store.dispatch(logout());

      // 홈 페이지로 리디렉션
      window.location.href = "/"; // useNavigate를 사용할 수 없는 상황에서는 window.location.href로 리디렉션 처리

      alert("세션이 만료되었습니다. 다시 로그인해주세요.");
    }

    return Promise.reject(error);
  }
);
//마이페이지 정보 조회
export const getUserInfo = () => {
  return api.get("api/user/mypage", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
export const getUserCoupons = () => {
  return api.get("api/user/coupons", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
//닉네임 중복체크
export const checkNickname = async (nickname: string) => {
  try {
    const response = await api.post(`/api/check/nickname`, { nickname });
    return response;
  } catch (error: any) {
    if (error.response) {
      return error.response;
    } else {
      throw new Error(`오류가 발생했습니다: ${error.message}`);
    }
  }
};

//아이디 중복체크
export const checkId = async (id: string) => {
  try {
    const response = await api.post(`/api/check/id`, { id });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    } else {
      throw new Error(`오류가 발생했습니다: ${error.message}`);
    }
  }
};
//인증번호 발송
export const sendVerificationCode = async (phone: string) => {
  try {
    const response = await api.post("/send", { phone });
    return response;
  } catch (error) {
    console.error("인증번호 전송 중 오류가 발생했습니다.", error);
    throw error;
  }
};

//인증번호 검증
export const verifyCode = async (phone: string, code: string) => {
  try {
    const response = await api.post(`/verifyMobile`, {
      phone,
      code,
    });
    return response;
  } catch (error) {
    console.error("Error verifying code:", error);
    throw new Error("인증번호 확인 중 오류가 발생했습니다.");
  }
};

//회원가입
export const signup = async (userData: any) => {
  try {
    const response = await api.post("/api/signup/ddukddak", userData);
    return response.data;
  } catch (error) {
    throw new Error("회원가입에 실패했습니다.");
  }
};

//로그인
export const loginApi = async (id: string, password: string) => {
  try {
    const response = await api.post("/web/login", {
      id,
      password,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    } else {
      throw new Error(`오류가 발생했습니다: ${error.message}`);
    }
  }
};

//아이디찾기 사용자 검증
export const findIdVerificationCode = async (name: string, phone: string) => {
  try {
    const response = await api.post("/api/send-id-verification", {
      name,
      phone,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    } else {
      throw new Error(`오류가 발생했습니다: ${error.message}`);
    }
  }
};
//아이디 찾기 이메일 전송
export const findIdSendEmail = async (phone: string) => {
  try {
    const response = await api.post("/api/send-email", {
      phone,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    } else {
      throw new Error(`오류가 발생했습니다: ${error.message}`);
    }
  }
};

//비번 찾기 검증
export const findPwVerificationCode = async (id: string, phone: string) => {
  try {
    const response = await api.post("/api/send-pw-verification", {
      id,
      phone,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    } else {
      throw new Error(`오류가 발생했습니다: ${error.message}`);
    }
  }
};

//비밀번호 변경
export const updatePassword = async (id: string, newPw: string) => {
  try {
    const response = await api.put("/api/change-password", {
      id,
      newPw,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    } else {
      throw new Error(`오류가 발생했습니다: ${error.message}`);
    }
  }
};

//문의사항
export const sendInquiry = async (
  email: string,
  title: string,
  name: string,
  content: string,
  company: string,
  files: File[]
) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("title", title);
  formData.append("name", name);
  formData.append("content", content);
  formData.append("company", company);

  files.forEach((file) => {
    formData.append(`imgFile`, file);
  });
  try {
    const response = await axios.post(
      "https://www.pieback.com/api/notice/send",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("문의 사항 전송 중 오류가 발생했습니다.", error);
    throw error;
  }
};
//마이페이지 정보 수정
export const updateUserInfoPw = async (userInfo: {
  tempPw: string;
  newPw: string;
}) => {
  try {
    const token = localStorage.getItem("token"); // 인증 토큰을 가져옵니다.

    // API 요청을 보냅니다.
    const response = await api.put(
      "/api/user/mypage/pw",
      {
        tempPw: userInfo.tempPw, // 기존 비밀번호
        newPw: userInfo.newPw, // 새 비밀번호
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // 토큰을 헤더에 포함시킵니다.
        },
      }
    );

    return response.data; // 성공적으로 비밀번호 변경 시 서버 응답 반환
  } catch (error: any) {
    if (error.response) {
      // 서버에서 반환된 오류가 있을 때
      console.log(error.response.data);
      return error.response.data; // 서버 응답 데이터 반환
    } else {
      // 네트워크 또는 다른 에러 발생 시
      console.error("비밀번호 변경 중 오류가 발생했습니다:", error);
      throw new Error("비밀번호 변경 중 오류가 발생했습니다."); // 새로운 오류 발생
    }
  }
};

//마이페이지 정보 수정
export const updateUserInfo = async (userInfo: {
  phone: string;
  address: string;
  address2: string;
  company: string;
  department: string;
}) => {
  try {
    const token = localStorage.getItem("token"); // 인증 토큰을 가져옵니다.

    // API 요청을 보냅니다.
    const response = await api.put("/api/user/mypage", userInfo, {
      headers: {
        Authorization: `Bearer ${token}`, // 토큰을 헤더에 포함시킵니다.
      },
    });

    return response.data;
  } catch (error) {
    console.error("정보 업데이트 중 오류가 발생했습니다.", error);
    throw error;
  }
};

// 회원 탈퇴
export const withdrawUser = async (token: string) => {
  try {
    const response = await api.post("/withdrawal", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error: any) {
    console.error("회원 탈퇴 중 오류가 발생했습니다.", error);
    if (error.response) {
      console.error("서버 응답:", error.response.data);
      alert(error.response.data.message || "서버 오류가 발생했습니다.");
    }
    throw new Error("회원 탈퇴 중 오류가 발생했습니다.");
  }
};
//쿠폰등록
export const registerCoupon = async (couponCode: string) => {
  try {
    const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰을 가져옴

    const response = await api.post(
      "/api/user/coupons",
      { couponCode: couponCode },
      {
        headers: {
          Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
        },
      }
    );

    return response.data; // 응답 데이터 반환
  } catch (error: any) {
    return error.response;
  }
};

export const userPoints = async () => {
  try {
    const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰을 가져옴

    const response = await api.get("/api/user/mypage/points", {
      headers: {
        Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
      },
    });
    console.log(response.data);
    return response.data; // 응답 데이터 반환
  } catch (error: any) {
    return error.response;
  }
};

//갤러리 web GL
export const getGalleryInfoAsync = async (code: string) => {
  try {
    const response = await api.get(`/api/v2/gallery/${code}`, {});
    return response.data.response;
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    } else {
      throw new Error(`오류가 발생했습니다: ${error.message}`);
    }
  }
};

const BASE_URL = "https://www.pieback.com/api/v2/gallery/all";

// Gallery API 타입 정의
interface Gallery {
  nickname: string;
  Code: string;
  gallerynickname: string;
  date_time: string;
  Like: number;
}

interface GalleryData {
  currentPage: number;
  data: Gallery[];
  totalPages: number;
  totalItems: number;
}

interface GalleryResponse {
  response: GalleryData; // response 속성이 GalleryData 타입임을 정의
  statusCode: number;
  success: boolean;
}

//allgallery
// export const fetchGallerys = async (
//   page: number,
//   order: string = "Like"
// ): Promise<GalleryResponse> => {
//   console.log(`Fetching galleries with page: ${page}, order: ${order}`);
//   const response = await api.get<GalleryResponse>(
//     `${BASE_URL}/${page}/${order}`
//   );
//   return response.data;
// };
export const fetchGallerys = async (
  page: number,
  order: string = "Like"
): Promise<GalleryData> => {
  console.log(` ${page}, ${order}`);
  try {
    const response = await api.get<GalleryResponse>(
      `${BASE_URL}/${page}/${order}`
    );
    console.log("only response:", response);
    console.log("only response.data:", response.data);
    if (response.data && response.data.response) {
      return response.data.response;
    } else {
      throw new Error("Invalid API response format");
    }
  } catch (error) {
    console.error("API 호출 중 오류가 발생했습니다:", error);
    throw error;
  }
};
