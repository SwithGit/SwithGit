import React, { useState, useEffect } from "react";
import * as S from "./Page.style";
import { useNavigate } from "react-router-dom";
import AccountLogo from "../../../assets/img/Frame 8644.png";
import {
  findPwVerificationCode,
  verifyCode,
  updatePassword,
} from "../../../api/api";
import { useTranslation } from "react-i18next";

const Page: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const [id, setId] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const [isVerificationSuccess, setIsVerificationSuccess] =
    useState<boolean>(false);
  const [timer, setTimer] = useState<number>(180);
  const [verificationMessage, setVerificationMessage] = useState<string>("");
  const [, setIsFormValid] = useState<boolean>(false);
  const [isPasswordResetStep, setIsPasswordResetStep] =
    useState<boolean>(false);
  const [isPasswordResetSuccess, setIsPasswordResetSuccess] =
    useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(
      id.trim() !== "" &&
        phone.trim() !== "" &&
        verificationCode.trim() !== "" &&
        isVerificationSuccess
    );
  }, [id, phone, verificationCode, isVerificationSuccess]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isCodeSent && timer > 0 && !isVerificationSuccess) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    if (timer === 0) {
      clearInterval(interval!);
      setVerificationMessage(t("verificationTimeExpired"));
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCodeSent, timer, isVerificationSuccess, t]);

  //비번 찾기 검증 -> 코드 보냄
  const handlePhoneVerification = async () => {
    if (!phone || !id) {
      alert(t("nameAndPhoneRequired"));
      return;
    }

    try {
      const response = await findPwVerificationCode(id, phone);

      if (response.success) {
        setIsCodeSent(true);
        setTimer(180);
        setVerificationMessage("");
        setVerificationCode("");
        setIsVerificationSuccess(false);
        alert(t("verificationCodeSent"));
      } else {
        if (response.statusCode === 404) {
          alert(t("nonExistentPhone"));
        } else if (response.statusCode === 400) {
          alert(t("invalidId"));
        } else {
          alert(t("sendCodeError"));
        }
      }
    } catch (err) {
      const error = err as any;
      console.error("Error sending verification code:", error);
      alert(t("sendCodeError"));
    }
  };

  //인증번호 검증
  const handleVerificationCodeCheck = async () => {
    if (!verificationCode) {
      alert(t("enterVerificationCode"));
      return;
    }

    try {
      const response = await verifyCode(phone, verificationCode);

      if (response.data.Success) {
        setVerificationMessage(t("verificationSuccess"));
        setIsVerificationSuccess(true);
      } else {
        setVerificationMessage(t("verificationError"));
        setIsVerificationSuccess(false);
      }
    } catch (error) {
      console.error("Error verifying code:", error);
      setVerificationMessage(t("verificationError"));
      setIsVerificationSuccess(false);
    }
  };

  const handlePasswordReset = async () => {
    if (newPassword !== confirmPassword) {
      alert(t("passwordMismatch"));
      return;
    }

    try {
      const response = await updatePassword(id, confirmPassword);

      if (response.success) {
        setIsPasswordResetSuccess(true); // 비밀번호 재설정 성공 상태로 전환
      } else {
        alert(t("passwordResetError"));
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      alert(t("passwordResetError"));
    }
  };

  return (
    <S.Container>
      {isPasswordResetSuccess ? (
        <S.ProfileContent>
          <S.AccountLogo src={AccountLogo} />
          <S.SuccessMessage>{t("passwordResetMessage")}</S.SuccessMessage>
          <S.ButtonWrapper>
            <S.ActionButton onClick={() => navigate("/signin")}>
              {t("loginButton")}
            </S.ActionButton>
            <S.Divider>
              <hr />
              {t("or")}
              <hr />
            </S.Divider>
            <S.ActionButton onClick={() => navigate("/idfind")}>
              {t("findIdButton")}
            </S.ActionButton>
          </S.ButtonWrapper>
        </S.ProfileContent>
      ) : isPasswordResetStep ? (
        <S.ProfileContent>
          <S.AccountLogo src={AccountLogo} />
          <S.PwResetForm>
            <S.PwFindInfo>{t("enterNewPassword")}</S.PwFindInfo>
            <S.InputField
              type="password"
              placeholder={t("enterNewPassword")}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              isEnglish={isEnglish}
            />
            <S.InputField
              type="password"
              placeholder={t("confirmNewPassword")}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              isEnglish={isEnglish}
            />
            <S.PwFindButton onClick={handlePasswordReset}>
              {t("passwordReset")}
            </S.PwFindButton>
          </S.PwResetForm>
        </S.ProfileContent>
      ) : (
        <S.ProfileContent>
          <S.AccountLogo src={AccountLogo} />
          <S.PwFindForm>
            <S.PwFindInfo>{t("enterIdAndPhone")}</S.PwFindInfo>
            <S.InputField
              type="text"
              placeholder={t("idPlaceholder")}
              value={id}
              onChange={(e) => setId(e.target.value)}
              isEnglish={isEnglish}
            />
            <S.PwFindInfoSecond>{t("enterPhone")}</S.PwFindInfoSecond>
            <S.InputFieldWrapper>
              <S.InputField
                type="text"
                placeholder={t("phonePlaceholder")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                checked={!!phone}
                isEnglish={isEnglish}
              />

              <S.CheckButton
                onClick={handlePhoneVerification}
                checked={phone.length > 10}
                isEnglish={isEnglish}
              >
                {isCodeSent
                  ? t("resendVerification")
                  : t("verificationRequest")}
              </S.CheckButton>
            </S.InputFieldWrapper>
            {isCodeSent && (
              <S.InputFieldWrapper>
                <S.InputField
                  type="text"
                  placeholder={t("verificationPlaceholder")}
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  checked={!!verificationCode}
                  isEnglish={isEnglish}
                />
                <S.CheckButton
                  onClick={handleVerificationCodeCheck}
                  checked={true}
                  isEnglish={isEnglish}
                >
                  {t("submit")} ({Math.floor(timer / 60)}:
                  {(timer % 60).toString().padStart(2, "0")})
                </S.CheckButton>
              </S.InputFieldWrapper>
            )}
            <S.VerificationMessage hasError={!isVerificationSuccess}>
              {verificationMessage}
            </S.VerificationMessage>
            <S.PwFindInfoBold>{t("verificationMessage")}</S.PwFindInfoBold>
            <S.PwFindInfoBold>{t("verificationWarning")}</S.PwFindInfoBold>
            <S.IdFindButton
              onClick={() => setIsPasswordResetStep(true)}
              disabled={!isVerificationSuccess}
            >
              {t("findPasswordButton")}
            </S.IdFindButton>
          </S.PwFindForm>
        </S.ProfileContent>
      )}
    </S.Container>
  );
};

export default Page;
