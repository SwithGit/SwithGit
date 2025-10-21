import React, { useState, useEffect } from "react";
import * as S from "./CSForm.style";
import mainLogo from "../../../assets/vector/mainLogo.png";
import TypeSelect from "../TypeSelect/TypeSelect";
import { sendInquiry } from "../../../api/api";
import { useTranslation } from "react-i18next";
import AddRound from "../../../assets/img/Add_round.png";

interface FileState {
  [key: number]: File | null;
}

const MAX_FILES = 10; // 최대 파일 개수
const MAX_FILE_SIZE_MB = 20; // 최대 용량 20MB

const CSForm: React.FC = () => {
  const { t } = useTranslation();
  const [files, setFiles] = useState<FileState>({});
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [contactName, setContactName] = useState<string>("");
  const [isPolicyChecked, setIsPolicyChecked] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  // 파일 개수와 용량을 추적하는 상태
  const [fileCount, setFileCount] = useState<number>(1);
  const [totalFileSize, setTotalFileSize] = useState<number>(0);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileSizeMB = file.size / (1024 * 1024); // 파일 크기를 MB로 계산

      // 파일 용량 초과 여부 확인
      if (totalFileSize + fileSizeMB > MAX_FILE_SIZE_MB) {
        alert(t("fileSizeExceeded"));
        return;
      }

      setFiles((prevFiles) => ({
        ...prevFiles,
        [index]: file || null,
      }));

      // 총 파일 용량 업데이트
      setTotalFileSize((prevSize) => prevSize + fileSizeMB);

      // 새로운 파일 입력 필드 추가
      if (fileCount < MAX_FILES) {
        setFileCount(fileCount + 1); // 파일 입력 필드를 추가
      }
    }
  };

  const handleAddFileClick = (index: number) => {
    document.getElementById(`file${index}`)?.click(); // 파일 선택 창 열기
  };

  const handleSubmit = async () => {
    if (isButtonDisabled) {
      return;
    }

    const filesArray = Object.values(files).filter(
      (file): file is File => file !== null
    );

    console.log("Files to be sent:", filesArray);

    try {
      const response = await sendInquiry(
        email,
        title,
        contactName,
        content,
        company,
        filesArray
      );
      if (response.success) {
        alert(t("inquirySuccessMessage"));
      } else {
        alert(t("inquiryFailureMessage"));
      }
    } catch (error) {
      console.error(t("inquiryFailureMessage"), error);
      alert(t("inquiryFailureMessage"));
    }
  };

  useEffect(() => {
    if (contactName && email && isPolicyChecked) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [contactName, email, isPolicyChecked]);

  return (
    <S.FormWrapper>
      <S.Wrapper>
        <S.Main>
          <S.MainLogo src={mainLogo} />
          <S.MainTitle>{t("oneToOneInquiry")}</S.MainTitle>
        </S.Main>
        <S.Container>
          <S.Title>{t("inquiryType")}</S.Title>
          <TypeSelect onChange={(e) => setTitle(e.target.value)} />
        </S.Container>
        <S.Container>
          <S.Title>{t("inquiryContent")}</S.Title>
          <S.ContentTextarea
            placeholder={t("inquiryContentPlaceholder")}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </S.Container>
        <S.Container>
          <S.TitleWraper>
            <S.Title>
              {t("attachFile")} ({Object.keys(files).length} / {MAX_FILES})
            </S.Title>
            <S.SubTitle>
              {totalFileSize.toFixed(1)} / {MAX_FILE_SIZE_MB} MB
            </S.SubTitle>
          </S.TitleWraper>
          <S.AttachmentsWrapper>
            {Array.from({ length: fileCount }).map((_, index) => (
              <S.AttachmentContainer key={index}>
                <S.PlusWrapper>
                  <S.AttachmentInput
                    type="text"
                    value={files[index]?.name || ""}
                    readOnly
                    placeholder={t("attachmentPlaceholder")}
                  />
                  <S.AttachmentButton onClick={() => handleAddFileClick(index)}>
                    <img src={AddRound} alt="add" />{" "}
                  </S.AttachmentButton>
                </S.PlusWrapper>
                <S.AttachmentInputHidden
                  id={`file${index}`}
                  type="file"
                  onChange={(e) => handleFileChange(e, index)}
                />
              </S.AttachmentContainer>
            ))}
          </S.AttachmentsWrapper>
        </S.Container>
        <S.RowContainer>
          <S.HalfContainer>
            <S.Title>
              {t("inquirerName")} <span>*</span>
            </S.Title>
            <S.TitleInput
              type="text"
              placeholder={t("inquirerNamePlaceholder")}
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
          </S.HalfContainer>
          <S.HalfContainer>
            <S.Title>{t("inquirerCompanyName")}</S.Title>
            <S.TitleInput
              type="text"
              placeholder={t("inquirerCompanyNamePlaceholder")}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </S.HalfContainer>
        </S.RowContainer>
        <S.Container>
          <S.TitleWraper>
            <S.Title>
              {t("emailForResponse")} <span>*</span>
            </S.Title>
          </S.TitleWraper>
          <S.EmailWrapper>
            <S.EmailInput
              type="email"
              placeholder={t("emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </S.EmailWrapper>
          <S.PolicyCheck>
            <input
              type="checkbox"
              checked={isPolicyChecked}
              onChange={(e) => setIsPolicyChecked(e.target.checked)}
            />
            <div>
              {t("consentToDataCollection")} <b>{t("viewFullText")}</b>
            </div>
          </S.PolicyCheck>
          <S.Button disabled={isButtonDisabled} onClick={handleSubmit}>
            {t("submitButton")}
          </S.Button>
        </S.Container>
      </S.Wrapper>
    </S.FormWrapper>
  );
};

export default CSForm;
