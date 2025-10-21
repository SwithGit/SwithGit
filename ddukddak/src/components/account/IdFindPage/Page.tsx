import React, { useState, useEffect } from "react";
import * as S from "./Page.style";
import { useNavigate } from "react-router-dom";
import AccountLogo from "../../../assets/img/Frame 8644.png";
import {
  findIdVerificationCode,
  verifyCode,
  findIdSendEmail,
} from "../../../api/api";
import { useTranslation } from "react-i18next";

const Page: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const [isVerificationSuccess, setIsVerificationSuccess] =
    useState<boolean>(false);
  const [timer, setTimer] = useState<number>(180);
  const [verificationMessage, setVerificationMessage] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(
      name.trim() !== "" &&
        phone.trim() !== "" &&
        verificationCode.trim() !== "" &&
        isVerificationSuccess
    );
  }, [name, phone, verificationCode, isVerificationSuccess]);

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

  const handlePhoneVerification = async () => {
    if (!phone || !name) {
      alert(t("nameAndPhoneRequired"));
      return;
    }

    try {
      const response = await findIdVerificationCode(name, phone);

      if (response.Success) {
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
          alert(t("invalidName"));
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

  const handleFindId = async () => {
    if (!phone || !isVerificationSuccess) {
      alert(t("nameAndPhoneRequired"));
      return;
    }

    try {
      const response = await findIdSendEmail(phone);

      if (response.success) {
        setIsEmailSent(true);
        alert(t("emailSentSuccess"));
      } else {
        alert(t("sendCodeError"));
      }
    } catch (error) {
      console.error("Error finding ID:", error);
      alert(t("sendCodeError"));
    }
  };

  return (
    <S.Container>
      {isEmailSent ? (
        <S.ProfileContent>
          <S.AccountLogo src={AccountLogo} />
          <S.SuccessMessage>{t("idFindText")}</S.SuccessMessage>
          <S.ButtonWrapper>
            <S.ActionButton onClick={() => navigate("/signin")}>
              {t("loginButton")}
            </S.ActionButton>
            <S.Divider>
              <hr />
              {t("or")}
              <hr />
            </S.Divider>
            <S.ActionButton onClick={() => navigate("/pwfind")}>
              {t("findPasswordButton")}
            </S.ActionButton>
          </S.ButtonWrapper>
        </S.ProfileContent>
      ) : (
        <S.ProfileContent>
          <S.AccountLogo src={AccountLogo} />
          <S.IdFindForm>
            <S.IdFindInfo>{t("enterName")}</S.IdFindInfo>
            <S.InputField
              type="text"
              placeholder={t("idFindNamePlaceholder")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              isEnglish={isEnglish}
            />
            <S.IdFindInfoSecond>{t("enterPhone")}</S.IdFindInfoSecond>
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
            <S.IdFindInfoBold>{t("verificationMessage")}</S.IdFindInfoBold>
            <S.IdFindInfoBold>{t("verificationWarning")}</S.IdFindInfoBold>
            <S.IdFindButton onClick={handleFindId} disabled={!isFormValid}>
              {t("findIdButton")}
            </S.IdFindButton>
          </S.IdFindForm>
        </S.ProfileContent>
      )}
    </S.Container>
  );
};

export default Page;
