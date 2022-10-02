import React from "react";
import { CustomLink } from "../CustomLink";

import styles from "./styles.module.scss";

interface CenteredCardProps {
  title: string;
  description: string;
}

export const CenteredCard = ({ title, description }: CenteredCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.title}>{title}</h2>
      <h4 className={styles.description}>{description}</h4>
      <div style={{ marginTop: "15px" }}>
        <CustomLink label="Climate Justice" variant="secondary" />
      </div>
    </div>
  );
};
