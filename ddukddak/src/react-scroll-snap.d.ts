declare module "react-scroll-snap" {
  import * as React from "react";
  declare module "react-scroll-snap" {
    const ScrollSnap: any;
    const ScrollSnapSection: any;
  }
  export interface ScrollSnapProps {
    children: React.ReactNode;
    onScrollSnapChange?: (index: number) => void;
    threshold?: number;
    debounceTimeout?: number;
    snapPosition?: "start" | "center" | "end";
  }

  export const ScrollSnap: React.FC<ScrollSnapProps>;

  export interface ScrollSnapSectionProps {
    children: React.ReactNode;
  }

  export const ScrollSnapSection: React.FC<ScrollSnapSectionProps>;
}
