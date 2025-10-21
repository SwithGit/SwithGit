import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import * as S from "./ChangePassword.style";
import ViewIcon from "../../../../assets/img/View.png"; // 보이기 아이콘
import ViewHideIcon from "../../../../assets/img/View_hide.png"; // 가리기 아이콘
import { updateUserInfoPw } from "../../../../api/api"; // 비밀번호 변경 API 함수 임포트

const ChangePassword: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPasswords, setShowNewPasswords] = useState(false);

  useEffect(() => {
    setIsFormValid(
      currentPassword !== "" &&
        newPassword !== "" &&
        confirmPassword !== "" &&
        newPassword === confirmPassword
    );
  }, [currentPassword, newPassword, confirmPassword]);

  const handlePasswordChange = async () => {
    if (!isFormValid) return;

    try {
      const response = await updateUserInfoPw({
        tempPw: currentPassword,
        newPw: newPassword,
      });

      if (response.success) {
        alert("비밀번호가 성공적으로 변경되었습니다!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        alert(response.message || "유저 정보를 확인하세요.");
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        alert(error.response.data.err || "서버에서 오류가 발생했습니다.");
      } else {
        alert("비밀번호 변경 중 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    }
  };

  return (
    <S.Container>
      <Sidebar />
      <S.MainContent>
        <S.Title>비밀번호 변경</S.Title>
        <S.Form>
          {/* 현재 비밀번호 Label */}
          <S.LabelWrapper>
            <S.Label>현재 비밀번호</S.Label>
          </S.LabelWrapper>
          <S.InputWrapper>
            <S.Input
              type={showCurrentPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="현재 비밀번호를 입력해주세요."
            />
            <S.ViewIcon
              src={showCurrentPassword ? ViewHideIcon : ViewIcon}
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              alt="toggle password visibility"
            />
          </S.InputWrapper>

          {/* 변경할 비밀번호 Label */}
          <S.LabelWrapper>
            <S.Label>변경할 비밀번호</S.Label>
          </S.LabelWrapper>
          <S.InputWrapper>
            <S.Input
              type={showNewPasswords ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="변경할 비밀번호를 입력해주세요."
            />
            <S.ViewIcon
              src={showNewPasswords ? ViewHideIcon : ViewIcon}
              onClick={() => setShowNewPasswords(!showNewPasswords)}
              alt="toggle password visibility"
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <S.InputSecond
              type={showNewPasswords ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="변경할 비밀번호를 재입력해주세요."
            />
          </S.InputWrapper>

          <S.SubmitButton
            isActive={isFormValid}
            disabled={!isFormValid}
            onClick={handlePasswordChange}
          >
            비밀번호 변경
          </S.SubmitButton>
        </S.Form>
      </S.MainContent>
    </S.Container>
  );
};

export default ChangePassword;
