import React, { useState } from "react";
import * as S from "./Page.style";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../redux/authSlice";
import AccountLogo from "../../../assets/img/Frame 8644.png";
import { loginApi } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Page: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = async () => {
    if (!id) {
      alert(t("enterId"));
      return;
    }
    if (!password) {
      alert(t("enterPassword"));
      return;
    }
    try {
      const response = await loginApi(id, password);

      if (response.success) {
        dispatch(
          loginSuccess({
            id: response.id,
            token: response.token,
          })
        );
        navigate("/");
      } else {
        switch (response.statusCode) {
          case 400:
            alert(t("incorrectPassword"));
            break;
          case 404:
            alert(t("nonExistentId"));
            break;
          case 500:
            alert(t("serverError"));
            break;
          default:
            alert(response.msg || t("loginFailed"));
            break;
        }
      }
    } catch (error) {
      console.error(t("loginError"), error);
      alert(t("checkInternetConnection"));
    }
  };

  return (
    <>
      <S.Container>
        <S.ProfileContent>
          <S.AccountLogo src={AccountLogo} />
          <S.LoginForm>
            <S.LoginType></S.LoginType>
            <S.LoginInfo>{t("loginExperience")}</S.LoginInfo>
            <S.InputField
              type="text"
              placeholder={t("idPlaceholder")}
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <S.InputField
              type="password"
              placeholder={t("passwordPlaceholder")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.LoginButton onClick={handleLogin}>
              {t("loginButton")}
            </S.LoginButton>
            <S.Divider>
              <hr />
              {t("or")}
              <hr />
            </S.Divider>
            <S.Actions>
              <S.ActionLink
                onClick={() => {
                  navigate("/signup");
                }}
              >
                {t("signup")}
              </S.ActionLink>
              <span>|</span>
              <S.ActionLink
                onClick={() => {
                  navigate("/idfind");
                }}
              >
                {t("findId")}
              </S.ActionLink>
              <span>|</span>
              <S.ActionLink
                onClick={() => {
                  navigate("/pwfind");
                }}
              >
                {t("findPassword")}
              </S.ActionLink>
            </S.Actions>
          </S.LoginForm>
        </S.ProfileContent>
      </S.Container>
    </>
  );
};

export default Page;
