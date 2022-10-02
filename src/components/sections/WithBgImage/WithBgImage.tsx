import React from "react";

import { CenteredCard } from "../../elements/CenteredCard";

import styles from "./styles.module.scss";

export const WithBgImage = () => {
  return (
    <div className={styles.section}>
      <CenteredCard
        title="A world made safer for all"
        description="Critical work in support of climate justice and equity"
      />
    </div>
  );
};
