import React from "react";

import styles from "./styles.module.scss";

interface NewsTileProps {
  title: string;
  description: string;
  date: string;
}

export const NewsTile = ({ title, description, date }: NewsTileProps) => {
  return (
    <div className={styles.cardContainer}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      <p className={styles.date}>
        Report <span>•</span> {date}
      </p>
    </div>
  );
};
