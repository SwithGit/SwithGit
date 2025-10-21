import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./AccountPage.style";
import Sidebar from "./Sidebar/Sidebar";
import { getUserInfo } from "../../../api/api";
import { useLogout } from "../../../layouts/NavigationBar/Navbar";
import {
  sendVerificationCode,
  verifyCode,
  updateUserInfo,
} from "../../../api/api"; // API 함수 임포트

const loadDaumPostcode = () => {
  const script = document.createElement("script");
  script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  script.async = true;
  document.head.appendChild(script);
};

const MyPage: React.FC = () => {
  const handleLogout = useLogout();
  const navigate = useNavigate();

  // 사용자 정보와 관련된 상태
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [email, setEmail] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const [company, setCompany] = useState("");
  const [department, setDepartment] = useState("");

  // 초기 사용자 정보 저장
  const [initialPhone, setInitialPhone] = useState("");
  const [initialAddress, setInitialAddress] = useState("");
  const [initialAddress2, setInitialAddress2] = useState("");
  const [initialCompany, setInitialCompany] = useState("");
  const [initialDepartment, setInitialDepartment] = useState("");

  // 버튼 활성화 상태
  const [isPhoneButtonActive, setIsPhoneButtonActive] = useState(false);
  const [isAddressButtonActive, setIsAddressButtonActive] = useState(false);
  const [isCompanyButtonActive, setIsCompanyButtonActive] = useState(false);
  const [isSubmitButtonActive, setIsSubmitButtonActive] = useState(false);

  // 인증 코드 관련 상태
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);

  useEffect(() => {
    loadDaumPostcode();
  }, []);

  // 사용자 정보 불러오기
  useEffect(() => {
    getUserInfo()
      .then((response) => {
        const data = response.data.response;
        setName(data.name);
        setId(data.id);
        setNickname(data.nickname);
        setPhone(data.phone);
        setInitialPhone(data.phone);
        setAddress(data.address);
        setInitialAddress(data.address);
        setAddress2(data.address2);
        setInitialAddress2(data.address2);
        setCompany(data.company);
        setInitialCompany(data.company);
        setDepartment(data.department);
        setInitialDepartment(data.department);

        if (data.email) {
          const emailParts = data.email.split("@");
          setEmail(emailParts[0] || "");
          setEmailDomain(emailParts[1] || "");
        } else {
          setEmail("");
          setEmailDomain("");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [handleLogout, navigate]);

  // 정보 수정 가능 여부를 판단하여 Submit 버튼 활성화
  useEffect(() => {
    const hasChanged =
      phone !== initialPhone ||
      address !== initialAddress ||
      address2 !== initialAddress2 ||
      company !== initialCompany ||
      department !== initialDepartment;

    setIsSubmitButtonActive(hasChanged);
  }, [
    phone,
    address,
    address2,
    company,
    department,
    initialPhone,
    initialAddress,
    initialAddress2,
    initialCompany,
    initialDepartment,
  ]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setIsPhoneButtonActive(e.target.value !== initialPhone);
  };

  const handleVerificationCodeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVerificationCode(e.target.value);
  };

  // 휴대폰 번호 인증 처리
  const updatePhoneNumber = async () => {
    if (!isCodeSent) {
      try {
        await sendVerificationCode(phone);
        setIsCodeSent(true);
        alert("인증 코드가 발송되었습니다.");
      } catch (error) {
        alert("인증 코드 발송 중 오류가 발생했습니다.");
      }
    } else {
      try {
        const response = await verifyCode(phone, verificationCode);
        if (response.data.Success) {
          setIsCodeVerified(true);
          setIsPhoneButtonActive(false); // 인증 성공 후 전화번호 수정 비활성화
          alert("휴대폰 번호가 인증되었습니다.");
        } else {
          alert("인증 코드가 올바르지 않습니다.");
        }
      } catch (error) {
        alert("휴대폰 번호 인증 중 오류가 발생했습니다.");
      }
    }
  };

  // 주소 검색 완료 처리
  const handlePostcodeComplete = (data: any) => {
    setAddress(data.address);
    setIsAddressButtonActive(true);
  };

  // 주소 검색 팝업 열기
  const openPostcodePopup = () => {
    const daum = (window as any).daum;
    new daum.Postcode({
      oncomplete: handlePostcodeComplete,
    }).open();
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
    setIsCompanyButtonActive(e.target.value !== initialCompany);
  };

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepartment(e.target.value);
  };

  // 정보 수정 처리
  const handleSubmit = async () => {
    const userInfo = {
      phone: isCodeVerified ? phone : initialPhone,
      address,
      address2,
      company,
      department,
    };

    try {
      const response = await updateUserInfo(userInfo);
      if (response.success) {
        setInitialPhone(userInfo.phone);
        setInitialAddress(userInfo.address);
        setInitialAddress2(userInfo.address2);
        setInitialCompany(userInfo.company);
        setInitialDepartment(userInfo.department);
        setIsSubmitButtonActive(false);
        setIsCodeSent(false);
        setIsPhoneButtonActive(false);
        alert("정보가 성공적으로 업데이트되었습니다.");
      } else {
        alert("정보 업데이트 중 오류가 발생했습니다.");
      }
    } catch (error) {
      alert("정보 업데이트 중 오류가 발생했습니다.");
    }
  };

  return (
    <S.Container>
      <Sidebar />
      <S.MainContent>
        <S.Title>내 정보</S.Title>
        <S.Form>
          <S.Label>이름</S.Label>
          <S.Input type="text" value={name} readOnly />
          <S.Label>아이디</S.Label>
          <S.Input type="text" value={id} readOnly />
          <S.Label>닉네임</S.Label>
          <S.Input type="text" value={nickname} readOnly />
          <S.Label>휴대폰 인증</S.Label>
          <S.InputWrapper>
            <S.Input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              readOnly={isCodeVerified} // 인증 성공 시 수정 불가
            />
            <S.Button
              checked={isPhoneButtonActive}
              onClick={updatePhoneNumber}
              disabled={!isPhoneButtonActive} // 비활성화 상태
            >
              {isCodeSent ? "코드 확인" : "휴대폰 변경"}
            </S.Button>
          </S.InputWrapper>
          {isCodeSent && (
            <S.Input
              type="text"
              value={verificationCode}
              onChange={handleVerificationCodeChange}
              placeholder="인증 코드 입력"
            />
          )}
          <S.Label>주소</S.Label>
          <S.InputWrapper>
            <S.Input type="text" value={address} readOnly />
            <S.Button checked={true} onClick={openPostcodePopup}>
              주소 찾기
            </S.Button>
          </S.InputWrapper>
          <S.InputSecond
            type="text"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            placeholder="상세 주소"
          />
          <S.Label>이메일</S.Label>
          <S.EmailWrapper>
            <S.Input type="text" value={email} readOnly />
            <S.AtSymbol>@</S.AtSymbol>
            <S.Input type="text" value={emailDomain} readOnly />
          </S.EmailWrapper>
          <S.Note>
            *이메일 변경을 희망하신다면, 상단 메뉴의 ‘문의사항’을 통해
            문의해주시길 바랍니다.
          </S.Note>
          <S.Label>회사 및 소속 정보</S.Label>
          <S.InputWrapper>
            <S.Input
              type="text"
              value={company}
              onChange={handleCompanyChange}
            />
            <S.Button
              checked={isCompanyButtonActive}
              onClick={handleSubmit} // 수정 후 정보 저장
              disabled={!isCompanyButtonActive} // 비활성화 상태
            >
              회사·소속 변경
            </S.Button>
          </S.InputWrapper>
          <S.InputSecond
            type="text"
            value={department}
            onChange={handleDepartmentChange}
            placeholder="부서"
          />
          <S.SubmitButton
            onClick={handleSubmit}
            isActive={isSubmitButtonActive} // Submit 버튼 활성화 상태
            disabled={!isSubmitButtonActive} // Submit 버튼 비활성화 상태
          >
            정보 수정
          </S.SubmitButton>
        </S.Form>
      </S.MainContent>
    </S.Container>
  );
};

export default MyPage;
