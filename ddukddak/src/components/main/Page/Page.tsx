import React, { useRef, useState, useEffect, useMemo } from "react";
import FirstComponent from "./FirstComponent/FirstComponent";
import SecondComponent from "./SecondComponent/SecondComponent";
import ThirdComponent from "./ThirdComponent/ThirdComponent";
import FourthComponent from "./FourthComponent/FourthComponent";
import * as S from "./Page.style";
import "../../../App.css";
import Footer from "../../../layouts/Footer/Footer";
import { useTranslation } from "react-i18next";
import { useDeviceSize } from "../../../hooks/useDeviceSize";

const Page: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<number>(1);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const { isMobile } = useDeviceSize();

  const firstSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const thirdSectionRef = useRef<HTMLDivElement>(null);
  const fourthSectionRef = useRef<HTMLDivElement>(null);

  // useMemo를 사용하여 sectionRefs를 메모이제이션
  const sectionRefs = useMemo(
    () => [
      firstSectionRef,
      secondSectionRef,
      thirdSectionRef,
      fourthSectionRef,
    ],
    []
  );

  const scrollToSection = (sectionNumber: number) => {
    setScrolling(true);
    const sectionRef = sectionRefs[sectionNumber - 1];
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setSelectedSection(sectionNumber);
        setScrolling(false);
      }, 600);
    }
  };

  useEffect(() => {
    if (scrolling) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.findIndex(
            (ref) => ref.current === entry.target
          );
          if (index !== -1) {
            setSelectedSection(index + 1);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.forEach((sectionRef) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });

    return () => {
      sectionRefs.forEach((sectionRef) => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      });
    };
  }, [scrolling, sectionRefs]);

  return (
    <S.PageContainer isMobile={isMobile}>
      {!isMobile && (
        <S.Nav>
          <S.NavItem>
            <S.NavButton
              onClick={() => scrollToSection(1)}
              active={selectedSection === 1}
            />
            {selectedSection === 1 && <S.NavText>{t("navHome")}</S.NavText>}
          </S.NavItem>
          <S.NavItem>
            <S.NavButton
              onClick={() => scrollToSection(2)}
              active={selectedSection === 2}
            />
            {selectedSection === 2 && <S.NavText>{t("navOverview")}</S.NavText>}
          </S.NavItem>
          <S.NavItem>
            <S.NavButton
              onClick={() => scrollToSection(3)}
              active={selectedSection === 3}
            />
            {selectedSection === 3 && <S.NavText>{t("navIntro")}</S.NavText>}
          </S.NavItem>
          <S.NavItem>
            <S.NavButton
              onClick={() => scrollToSection(4)}
              active={selectedSection === 4}
            />
            {selectedSection === 4 && <S.NavText>{t("navContent")}</S.NavText>}
          </S.NavItem>
        </S.Nav>
      )}
      <S.Section ref={firstSectionRef} isMobile={isMobile}>
        <FirstComponent />
      </S.Section>
      <S.Section ref={secondSectionRef} isMobile={isMobile}>
        <SecondComponent />
      </S.Section>
      <S.Section ref={thirdSectionRef} isMobile={isMobile}>
        <ThirdComponent
          key={selectedSection === 3 ? "third-true" : "third-false"}
        />
      </S.Section>
      <S.Section ref={fourthSectionRef} isMobile={isMobile}>
        <FourthComponent
          key={selectedSection === 4 ? "fourth-true" : "fourth-false"}
        />
        <Footer />
      </S.Section>
    </S.PageContainer>
  );
};

export default Page;
