import Link from "next/link";
import React from "react";

import ArrowIcon from "../../../assets/svg/Arrow.svg";

import styles from "./styles.module.scss";

interface CustomLinkProps {
  label: string;
  variant?: "primary" | "secondary";
  href?: string;
}

export const CustomLink = ({
  label,
  variant = "primary",
  href = "",
}: CustomLinkProps) => {
  return (
    <div className={`${styles.linkContainer} ${styles[variant]}`}>
      <Link href={href}>{label}</Link>
      <ArrowIcon />
    </div>
  );
};
