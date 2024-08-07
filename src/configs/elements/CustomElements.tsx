import React, { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  ele: "button";
  title: string;
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  ele: "achor";
  title: string;
} & ComponentPropsWithoutRef<"a">;

const CustomElements = (props: ButtonProps | AnchorProps) => {
  return props.ele === "button" ? (
    <button {...props}>{props.title}</button>
  ) : (
    <a {...props}>{props.title}</a>
  );
};

export default CustomElements;
