import React, { useState, useMemo } from "react";
import * as S from "./PricingForm.style";
import PricingDropdown from "../PricingDropdown/PricingDropdown";
import PricingContainer from "../PricingContainer/PricingContainer";
import { useDropdownConfigs } from "../config/dropdownConfigs";
import dateImg from "../../../assets/img/Date_range_light.png";
import CustomCalendar from "../Calendar/Calendar";
import { useTranslation } from "react-i18next";

const PricingForm: React.FC = () => {
  const { t } = useTranslation();
  const [selectedMenu, setSelectedMenu] = useState<string>("");
  const [dropdownSelections, setDropdownSelections] = useState<{
    [key: string]: string;
  }>({});
  const [contentSchedule, setContentSchedule] = useState<string>("");
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  const handleDropdownChange = (title: string, value: string) => {
    if (title === t("selectContent")) {
      setSelectedMenu(value);
      setDropdownSelections({});
    } else {
      setDropdownSelections((prev) => ({ ...prev, [title]: value }));
    }
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  const handleDateSelect = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    setContentSchedule(
      `${formatDate(start)} ${t("from")} ${formatDate(end)} ${t(
        "toTotal"
      )} ${getDateRange(start, end)} ${t("days")}`
    );

    setIsCalendarOpen(false);
  };

  const getDateRange = (start: Date, end: Date) => {
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };

  const { baseDropdowns, spatialDropdowns, arDropdowns, vrDropdowns } =
    useDropdownConfigs();

  const dropdowns = useMemo(() => {
    if (selectedMenu === t("ARContent")) {
      return [...baseDropdowns, ...arDropdowns];
    } else if (selectedMenu === t("spatialContent")) {
      return [...baseDropdowns, ...spatialDropdowns];
    } else if (selectedMenu === t("VRContent")) {
      return [...baseDropdowns, ...vrDropdowns];
    } else {
      return baseDropdowns;
    }
  }, [
    selectedMenu,
    baseDropdowns,
    arDropdowns,
    spatialDropdowns,
    vrDropdowns,
    t,
  ]);

  return (
    <S.Container>
      <S.DropdownRow>
        {dropdowns.map((dropdown, index) => {
          if ("type" in dropdown && dropdown.type === "schedule") {
            return (
              <S.ScheduleContainer key={index}>
                <S.ScheduleTitle>{t(dropdown.title)}</S.ScheduleTitle>{" "}
                <S.ScheduleInput>
                  <div
                    style={{ color: contentSchedule ? "#223345" : "#c4c4c4" }}
                  >
                    {contentSchedule || t("selectDate")}
                  </div>
                  <S.DateImg src={dateImg} onClick={toggleCalendar} />
                </S.ScheduleInput>
                {isCalendarOpen && (
                  <CustomCalendar
                    onDateSelect={handleDateSelect}
                    onClose={toggleCalendar}
                  />
                )}
              </S.ScheduleContainer>
            );
          } else {
            return (
              <PricingDropdown
                key={index}
                menus={dropdown.menus!.map((menu) => t(menu))}
                title={t(dropdown.title)}
                placeholder={t(dropdown.placeholder)}
                selected={
                  dropdownSelections[dropdown.title] ||
                  (index === 0 ? selectedMenu : "")
                }
                onChange={(value) =>
                  handleDropdownChange(dropdown.title, value)
                }
              />
            );
          }
        })}
      </S.DropdownRow>
      <div style={{ margin: "24px" }}></div>
      <PricingContainer
        customPricing={
          selectedMenu === t("spatialContent") ||
          selectedMenu === t("ARContent") ||
          selectedMenu === t("VRContent")
        }
        isARContent={selectedMenu === t("ARContent")}
        isVRContent={selectedMenu === t("VRContent")}
      />
    </S.Container>
  );
};

export default PricingForm;
