import { useMemo } from "react";
import { useTranslation } from "react-i18next"; // useTranslation 훅 import

type DropdownConfig = {
  title: string;
  placeholder: string;
  menus?: string[];
  type?: "schedule"; // '일정 선택'인 경우를 나타내는 선택적 속성
};

export const useDropdownConfigs = () => {
  const { t } = useTranslation();

  const baseDropdowns: DropdownConfig[] = useMemo(
    () => [
      {
        menus: [t("spatialContent"), t("ARContent"), t("VRContent")],
        title: t("selectContent"),
        placeholder: t("selectContentPlaceholder"),
      },
    ],
    [t]
  );

  const spatialDropdowns: DropdownConfig[] = useMemo(
    () => [
      {
        menus: [t("smallScale"), t("mediumScale"), t("largeScale")],
        title: t("selectContentSize"),
        placeholder: t("selectScalePlaceholder"),
      },
      {
        menus: [t("upTo50"), t("from51to100"), t("from101to200")],
        title: t("selectMaxDailyVisitors"),
        placeholder: t("selectVisitorsPlaceholder"),
      },
      {
        type: "schedule",
        title: t("selectContentSchedule"),
        placeholder: t("selectSchedulePlaceholder"),
      },
      {
        menus: [t("applyDiscountCoupon"), t("applyOtherDiscounts")],
        title: t("applyDiscountTitle"),
        placeholder: t("selectDiscountPlaceholder"),
      },
    ],
    [t]
  );

  const arDropdowns: DropdownConfig[] = useMemo(
    () => [
      {
        menus: [t("duration20s"), t("duration40s"), t("duration60s")],
        title: t("selectEncodingDuration"),
        placeholder: t("selectEncodingDurationPlaceholder"),
      },
      {
        menus: ["720p", "1080p", "4K"],
        title: t("selectEncodingQuality"),
        placeholder: t("selectQualityPlaceholder"),
      },
      {
        menus: [t("ownModeling"), t("externalModeling")],
        title: t("selectModelingAndAnimation"),
        placeholder: t("selectModelingAndAnimationPlaceholder"),
      },
      {
        menus: [t("firstARContentDiscount")],
        title: t("applyDiscountTitle"),
        placeholder: t("selectDiscountPlaceholder"),
      },
    ],
    [t]
  );

  const vrDropdowns: DropdownConfig[] = useMemo(
    () => [
      {
        menus: [t("ownModeling"), t("externalModeling")], // 다국어 지원 적용
        title: t("selectModelingAndAnimation"), // 다국어 지원 적용
        placeholder: t("selectModelingAndAnimationPlaceholder"), // 다국어 지원 적용
      },
      {
        menus: [t("firstVRContentDiscount")], // 다국어 지원 적용
        title: t("applyDiscountTitle"), // 다국어 지원 적용
        placeholder: t("selectDiscountCouponPlaceholder"), // 다국어 지원 적용
      },
    ],
    [t]
  );

  return {
    baseDropdowns,
    spatialDropdowns,
    arDropdowns,
    vrDropdowns,
  };
};
