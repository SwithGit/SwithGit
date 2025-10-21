import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as S from "./Withdraw.style";
import Sidebar from "../Sidebar/Sidebar";
import {
  sendVerificationCode,
  verifyCode,
  withdrawUser,
} from "../../../../api/api";
import { RootState } from "../../../../app/store";
import { logout } from "../../../../redux/authSlice";

const Withdraw: React.FC = () => {
  const [isPolicyChecked, setIsPolicyChecked] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const [isCodeVerified, setIsCodeVerified] = useState<boolean>(false); // 인증번호 검증 상태
  const [isCodeMismatch, setIsCodeMismatch] = useState<boolean>(false); // 인증번호 불일치 상태
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Redux에서 현재 로그인된 유저 ID 가져오기
  const token = useSelector((state: RootState) => state.auth.token);

  const [timer, setTimer] = useState<number>(180);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleSendVerificationCode = async () => {
    try {
      setError("");
      const response = await sendVerificationCode(phoneNumber);
      if (response.status === 200) {
        setIsCodeSent(true);
        setIsTimerRunning(true); // 타이머 시작
        setTimer(180); // 타이머 초기화
        alert("인증번호가 전송되었습니다.");
      }
    } catch (error) {
      setError("인증번호 전송 중 오류가 발생했습니다.");
    }
  };

  const handleVerifyCode = async () => {
    try {
      setError("");
      const result = await verifyCode(phoneNumber, verificationCode);
      if (result.data.statusCode === 200) {
        setIsCodeVerified(true); // 인증번호 검증 성공
        setIsCodeMismatch(false); // 인증번호 불일치 상태 초기화
        setIsTimerRunning(false); // 타이머 멈춤
        alert("인증번호가 일치합니다.");
      } else {
        setIsCodeMismatch(true); // 인증번호 불일치 상태 설정
        setIsCodeVerified(false); // 인증번호 일치 상태 초기화
      }
    } catch (error) {
      setError("인증번호 확인 중 오류가 발생했습니다.");
    }
  };

  //회원탈퇴
  const handleWithdraw = async () => {
    if (!isCodeVerified) return;
    console.log(token);
    if (!token) {
      alert("로그인 정보가 없습니다. 다시 로그인해주세요.");
      return;
    }
    try {
      const response = await withdrawUser(token);
      console.log(response);
      if (response.data.statusCode === 200) {
        alert(response.data.response);
        dispatch(logout());
        navigate("/");
      }
    } catch (error) {
      alert("회원 탈퇴 중 오류가 발생했습니다.");
    }
  };

  return (
    <S.Container>
      <Sidebar />
      <S.MainContent>
        <S.Title>회원탈퇴</S.Title>
        <S.Form>
          <S.Alert>잠깐! 회원을 탈퇴하시기 전에 확인하세요.</S.Alert>
          <div style={{ marginBottom: "24px" }}>
            뚝딱 회원 탈퇴시 삭제되는 정보를 확인하세요. 한번 삭제된 정보는
            복구가 <span>불가능</span> 합니다.
          </div>
          <S.List>
            <li>계정 정보 삭제</li>
            <li>뚝딱 Point 삭제 (삭제된 Point는 환불이 불가능 합니다.)</li>
            <li>
              제작 중, 제작 완료, 오픈 및 삭제 대기중인 콘텐츠 모두 삭제 (단,
              별도로 저장한 AR콘텐츠 및 VR콘텐츠는 유지됩니다.)
            </li>
            <li>쿠폰 삭제</li>
            <li>캐시 삭제</li>
          </S.List>
          <S.PolicyCheck>
            <input
              type="checkbox"
              checked={isPolicyChecked}
              onChange={(e) => setIsPolicyChecked(e.target.checked)}
            />
            <div>
              (필수) 삭제되는 정보와 복구 및 환불 불가능함을 확인하였고, 이에
              동의합니다.
            </div>
          </S.PolicyCheck>
          <S.WithdrawContainerList>
            <S.PhoneAlert>휴대폰 인증</S.PhoneAlert>
            <S.ConfirmWrapper>
              <S.PhoneConfirm
                placeholder="(-)을 제외한 숫자만 입력해주세요."
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <S.ConfirmBtn
                disabled={!phoneNumber}
                onClick={handleSendVerificationCode}
              >
                인증요청
              </S.ConfirmBtn>
            </S.ConfirmWrapper>

            {/* */}
            {isCodeSent && (
              <>
                {error && <div style={{ color: "red" }}>{error}</div>}
                <S.isVerified>
                  <S.PhoneAlert>인증번호</S.PhoneAlert>{" "}
                  {isCodeVerified && (
                    <S.VerifiedText>인증번호가 일치합니다.</S.VerifiedText>
                  )}
                  {isCodeMismatch && (
                    <S.VerifiedText style={{ color: "#F53030" }}>
                      인증번호가 일치하지 않습니다.
                    </S.VerifiedText>
                  )}
                </S.isVerified>
                <S.ConfirmWrapper>
                  <S.PhoneConfirm
                    placeholder="인증번호 4자리 입력"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    isVerified={isCodeVerified}
                    isMismatch={isCodeMismatch}
                  />
                  <S.ConfirmBtn
                    disabled={!verificationCode || isCodeVerified}
                    onClick={handleVerifyCode}
                  >
                    입력({formatTime(timer)})
                  </S.ConfirmBtn>
                </S.ConfirmWrapper>
              </>
            )}

            {/* */}
            <S.WithdrawBtn
              disabled={!isPolicyChecked || !isCodeVerified}
              onClick={handleWithdraw}
            >
              회원 탈퇴
            </S.WithdrawBtn>
          </S.WithdrawContainerList>
        </S.Form>
      </S.MainContent>
    </S.Container>
  );
};

export default Withdraw;
