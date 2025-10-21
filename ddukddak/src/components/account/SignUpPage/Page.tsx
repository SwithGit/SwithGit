import React, { useState, useEffect } from "react";
import * as S from "./Page.style";
import AccountLogo from "../../../assets/img/Frame 8644.png";
import EmailSelect from "./EmailSelect/EmailSelect";
import ViewIcon from "../../../assets/img/View.png";
import ViewHideIcon from "../../../assets/img/View_hide.png";
import {
  checkNickname,
  checkId,
  sendVerificationCode,
  verifyCode,
  signup,
} from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../../common/Header/Header";

const loadDaumPostcode = () => {
  const script = document.createElement("script");
  script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  script.async = true;
  document.head.appendChild(script);
};

const Page: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [emailDomain, setEmailDomain] = useState<string>("");
  const [idMessage, setIdMessage] = useState<string>("");
  const [nicknameMessage, setNicknameMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [hasIdError, setHasIdError] = useState<boolean>(false);
  const [isIdSuccess, setIsIdSuccess] = useState<boolean>(false);
  const [hasNicknameError, setHasNicknameError] = useState<boolean>(false);
  const [isNicknameSuccess, setIsNicknameSuccess] = useState<boolean>(false);
  const [hasPasswordError, setHasPasswordError] = useState<boolean>(false);
  const [isPasswordSuccess, setIsPasswordSuccess] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [checkedId, setCheckedId] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [detailedAddress, setDetailedAddress] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [businessNumber, setBusinessNumber] = useState<string>("");
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(180);
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [verificationMessage, setVerificationMessage] = useState<string>("");
  const [isVerificationSuccess, setIsVerificationSuccess] =
    useState<boolean>(false);
  const [isPolicyChecked, setIsPolicyChecked] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    loadDaumPostcode();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isCodeSent && timer > 0 && !isVerificationSuccess) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    if (timer === 0 && interval) {
      clearInterval(interval);
      setVerificationMessage(t("verificationTimeExceeded"));
      setIsVerificationSuccess(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCodeSent, timer, isVerificationSuccess, t]);

  useEffect(() => {
    const formValid: boolean =
      name !== "" &&
      nickname !== "" &&
      id !== "" &&
      password !== "" &&
      passwordConfirm !== "" &&
      password === passwordConfirm &&
      phone !== "" &&
      isVerificationSuccess &&
      address !== "" &&
      detailedAddress !== "" &&
      isNicknameSuccess &&
      isIdSuccess &&
      isPolicyChecked;

    setIsFormValid(formValid);
  }, [
    name,
    nickname,
    id,
    password,
    passwordConfirm,
    phone,
    isVerificationSuccess,
    address,
    detailedAddress,
    isNicknameSuccess,
    isIdSuccess,
    isPolicyChecked,
  ]);

  useEffect(() => {
    if (password && passwordConfirm) {
      if (password === passwordConfirm) {
        setPasswordMessage(t("passwordMatch"));
        setHasPasswordError(false);
        setIsPasswordSuccess(true);
      } else {
        setPasswordMessage(t("passwordMismatch"));
        setHasPasswordError(true);
        setIsPasswordSuccess(false);
      }
    } else {
      setPasswordMessage("");
    }
  }, [password, passwordConfirm, t]);

  const handleSignup = async () => {
    if (!isFormValid) {
      alert(t("fillAllFieldsCorrectly"));
      return;
    }

    const userData = {
      name,
      nickname,
      id,
      password,
      email: `${email}@${emailDomain}`,
      phone,
      address,
      address2: detailedAddress,
      company: companyName,
      department: businessNumber,
    };

    try {
      const response = await signup(userData);
      if (response.success) {
        alert(t("signupCompleted"));
        navigate("/");
      } else {
        alert(response.message || t("signupFailed"));
      }
    } catch (error) {
      alert(t("signupError"));
      console.error(error);
    }
  };

  const handlePhoneVerification = async () => {
    if (!phone) {
      alert(t("enterPhoneNumber"));
      return;
    }

    try {
      const response = await sendVerificationCode(phone);

      if (response.data.Success) {
        setIsCodeSent(true);
        setTimer(180);
        setVerificationMessage("");
        setVerificationCode("");
        setIsVerificationSuccess(false);
        alert(t("verificationCodeSent"));
      } else {
        alert(t("verificationCodeSendFailed"));
      }
    } catch (error) {
      console.error("Error sending verification code:", error);
      alert(t("verificationCodeSendError"));
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
        setVerificationMessage(t("verificationCompleted"));
        setIsVerificationSuccess(true);
      } else {
        setVerificationMessage(t("verificationCodeMismatch"));
        setIsVerificationSuccess(false);
      }
    } catch (error) {
      console.error("Error verifying code:", error);
      setVerificationMessage(t("verificationError"));
      setIsVerificationSuccess(false);
    }
  };

  const handleAddressSearch = () => {
    const daum = (window as any).daum;
    new daum.Postcode({
      oncomplete: function (data: any) {
        setAddress(data.address);
      },
    }).open();
  };

  const handleNicknameCheck = async () => {
    if (!nickname) {
      alert(t("enterNickname"));
      return;
    }
    setChecked(true);
    try {
      const result = await checkNickname(nickname);

      if (result.data.statusCode === 200) {
        setNicknameMessage(t("nicknameAvailable"));
        setHasNicknameError(false);
        setIsNicknameSuccess(true);
      } else if (result.data.statusCode === 409) {
        setNicknameMessage(t("nicknameDuplicate"));
        setHasNicknameError(true);
        setIsNicknameSuccess(false);
      } else if (result.data.statusCode === 422) {
        setNicknameMessage(t("nicknameInappropriate"));
        setHasNicknameError(true);
        setIsNicknameSuccess(false);
      } else {
        setNicknameMessage(t("nicknameCheckError"));
        setHasNicknameError(true);
        setIsNicknameSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setNicknameMessage(t("nicknameCheckError"));
      setHasNicknameError(true);
      setIsNicknameSuccess(false);
    }
  };

  const handleIdCheck = async () => {
    if (!id) {
      alert(t("enterId"));
      return;
    }
    setCheckedId(true);
    try {
      const result = await checkId(id);

      if (result.success) {
        setIdMessage(t("idAvailable"));
        setHasIdError(false);
        setIsIdSuccess(true);
      } else {
        setIdMessage(t("idDuplicate"));
        setHasIdError(true);
        setIsIdSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setIdMessage(t("idCheckError"));
      setHasIdError(true);
      setIsIdSuccess(false);
    }
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setIsNicknameSuccess(false);
    setChecked(false);
    setNicknameMessage("");
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    setIsIdSuccess(false);
    setCheckedId(false);
    setIdMessage("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <S.Container>
        <S.ProfileContent>
          <Header
            title="손쉬운 3D 콘텐츠 제작 플랫폼"
            text="뚝딱 회원가입 하고 모든 서비스 이용하기"
          />
          <S.AccountLogo src={AccountLogo} />
          <S.LoginForm>
            <S.TitleContainer>
              <S.Title>
                {t("name")} <span>*</span>
              </S.Title>
              <S.InputField
                type="text"
                placeholder={t("namePlaceholder")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </S.TitleContainer>
            <S.TitleContainer>
              <S.isOverlap>
                <S.Title>
                  {t("nickname")} <span>*</span>
                </S.Title>
                {nicknameMessage && (
                  <S.IdMessage
                    style={{
                      color: nicknameMessage.includes(t("nicknameAvailable"))
                        ? "#1BA056"
                        : "#FF2F01",
                    }}
                  >
                    {nicknameMessage}
                  </S.IdMessage>
                )}
              </S.isOverlap>
              <S.InputFieldWrapper>
                <S.InputField
                  type="text"
                  placeholder={t("nicknamePlaceholder")}
                  value={nickname}
                  onChange={handleNicknameChange}
                  hasError={hasNicknameError}
                  isSuccess={isNicknameSuccess}
                  checked={checked}
                />
                <S.CheckButton
                  onClick={handleNicknameCheck}
                  checked={nickname.length > 1}
                  isEnglish={isEnglish}
                >
                  {t("checkDuplicate")}
                </S.CheckButton>
              </S.InputFieldWrapper>
            </S.TitleContainer>
            <S.TitleContainer>
              <S.isOverlap>
                <S.Title>
                  {t("id")} <span>*</span>
                </S.Title>
                {idMessage && (
                  <S.IdMessage
                    style={{
                      color: idMessage.includes(t("idAvailable"))
                        ? "#1BA056"
                        : "#FF2F01",
                    }}
                  >
                    {idMessage}
                  </S.IdMessage>
                )}
              </S.isOverlap>
              <S.InputFieldWrapper>
                <S.InputField
                  type="text"
                  placeholder={t("idPlaceholder")}
                  value={id}
                  onChange={handleIdChange}
                  hasError={hasIdError}
                  isSuccess={isIdSuccess}
                  checked={checkedId}
                />
                <S.CheckButton
                  onClick={handleIdCheck}
                  checked={id.length > 3}
                  isEnglish={isEnglish}
                >
                  {t("checkDuplicate")}
                </S.CheckButton>
              </S.InputFieldWrapper>
            </S.TitleContainer>

            <S.TitleContainer>
              <S.isOverlap>
                <S.Title>
                  {t("password")} <span>*</span>
                </S.Title>
                {passwordMessage && (
                  <S.PasswordMessage hasError={hasPasswordError}>
                    {passwordMessage}
                  </S.PasswordMessage>
                )}
              </S.isOverlap>
              <S.PasswordWrapper>
                <S.InputField
                  type={showPassword ? "text" : "password"}
                  placeholder={t("passwordPlaceholder")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  hasError={hasPasswordError}
                  isSuccess={isPasswordSuccess}
                />
                <S.PasswordToggleIcon
                  src={showPassword ? ViewHideIcon : ViewIcon}
                  onClick={togglePasswordVisibility}
                />
              </S.PasswordWrapper>
              <S.PasswordWrapper>
                <S.InputField
                  style={{ marginTop: "11px" }}
                  type={showPassword ? "text" : "password"}
                  placeholder={t("confirmPasswordPlaceholder")}
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  hasError={hasPasswordError}
                  isSuccess={isPasswordSuccess}
                />
              </S.PasswordWrapper>
            </S.TitleContainer>

            <S.TitleContainer>
              <S.isOverlap>
                <S.Title>
                  {t("phoneVerification")} <span>*</span>
                </S.Title>
                {isCodeSent && (
                  <>
                    <S.PhoneMessage>
                      {t("phoneVericationMessage")}
                    </S.PhoneMessage>
                  </>
                )}
              </S.isOverlap>
              <S.InputFieldWrapper>
                <S.InputField
                  type="text"
                  placeholder={t("phonePlaceholder")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <S.CheckButton
                  onClick={handlePhoneVerification}
                  checked={phone.length > 10}
                  isEnglish={isEnglish}
                >
                  {isCodeSent ? t("resend") : t("requestVerification")}
                </S.CheckButton>
              </S.InputFieldWrapper>
            </S.TitleContainer>
            {isCodeSent && (
              <S.TitleContainer>
                <S.isOverlap>
                  <S.Title>
                    {t("verificationCode")} <span>*</span>
                  </S.Title>
                  {verificationMessage && (
                    <S.VerificationMessage hasError={!isVerificationSuccess}>
                      {verificationMessage}
                    </S.VerificationMessage>
                  )}
                </S.isOverlap>
                <S.InputFieldWrapper>
                  <S.InputField
                    type="text"
                    placeholder={t("enterVerificationCode")}
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    hasError={
                      !isVerificationSuccess && verificationMessage !== ""
                    }
                    isSuccess={
                      isVerificationSuccess && verificationMessage !== ""
                    }
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
              </S.TitleContainer>
            )}

            <S.TitleContainer>
              <S.isOverlap>
                <S.Title>
                  {t("address")} <span>*</span>
                </S.Title>
              </S.isOverlap>
              <S.InputFieldWrapper>
                <S.SecondInputWrapper>
                  <S.InputConatiner>
                    <S.InputField
                      type="text"
                      placeholder={t("enterAddress")}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <S.AddressButton
                      onClick={handleAddressSearch}
                      isEnglish={isEnglish}
                    >
                      {t("findAddress")}
                    </S.AddressButton>
                  </S.InputConatiner>
                  <S.InputField
                    type="text"
                    placeholder={t("enterDetailedAddress")}
                    value={detailedAddress}
                    onChange={(e) => setDetailedAddress(e.target.value)}
                  />
                </S.SecondInputWrapper>
              </S.InputFieldWrapper>
            </S.TitleContainer>

            <S.TitleContainer>
              <S.Title>{t("email")}</S.Title>
              <S.EmailWrapper>
                <S.InputField
                  type="text"
                  placeholder={t("enterEmail")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <S.AtSymbol>@</S.AtSymbol>
                <EmailSelect onChange={(e) => setEmailDomain(e.target.value)} />
              </S.EmailWrapper>
              <S.EmailInputField
                type="text"
                placeholder={t("enterEmailDomain")}
                value={emailDomain}
                onChange={(e) => setEmailDomain(e.target.value)}
              />
            </S.TitleContainer>

            <S.TitleContainer>
              <S.Title>{t("companyInformation")}</S.Title>
              <S.InputFieldWrapper>
                <S.SecondInputWrapper>
                  <S.InputConatiner>
                    <S.InputField
                      type="text"
                      placeholder={t("enterCompanyName")}
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </S.InputConatiner>
                  <S.InputField
                    type="text"
                    placeholder={t("enterBusinessNumber")}
                    value={businessNumber}
                    onChange={(e) => setBusinessNumber(e.target.value)}
                  />
                </S.SecondInputWrapper>
              </S.InputFieldWrapper>
            </S.TitleContainer>

            <S.PolicyCheck>
              <input
                type="checkbox"
                checked={isPolicyChecked}
                onChange={(e) => setIsPolicyChecked(e.target.checked)}
              />
              <div>
                {t("required")}{" "}
                <b>
                  <a
                    href="/terms-of-service"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("termsOfService")}
                  </a>
                </b>{" "}
                {t("and")}{" "}
                <b>
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("privacyPolicy")}
                  </a>
                </b>{" "}
                {t("checked")}, {t("agree")}
              </div>
            </S.PolicyCheck>

            <S.SignUpButton onClick={handleSignup} disabled={!isFormValid}>
              {t("signup")}
            </S.SignUpButton>
          </S.LoginForm>
        </S.ProfileContent>
      </S.Container>
    </>
  );
};

export default Page;
