import React from "react";

import { Container } from "../../elements/Container";
import { CustomLink } from "../../elements/CustomLink";
import { NewsTile } from "../../elements/NewsTile";

import styles from "./styles.module.scss";

export const NewsSection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.content}>
        <h2 className={styles.heading}>Powerful news collaborations</h2>
        <h4 className={styles.subHeading}>
          Partnerships supporting local newsrooms with world-class resources
        </h4>
        <CustomLink label="See all" />
      </Container>
      <Container>
        <div className={styles.tilesGrid}>
          <div className={styles.tileContainer}>
            <NewsTile
              title="Lacus eget elit dui dapibus volutpat id."
              description="Ornare quis donec odio sagittis, gravida facilisi vivamus. Non potenti et feugiat urna tristique leo ut et. Ultrices diam."
              date="February 3, 2021"
            />
          </div>
          <div className={styles.tileContainer}>
            <NewsTile
              title="Lacus eget elit dui dapibus volutpat id."
              description="Ornare quis donec odio sagittis, gravida facilisi vivamus. Non potenti et feugiat urna tristique leo ut et. Ultrices diam."
              date="February 3, 2021"
            />
          </div>
          <div className={styles.tileContainer}>
            <NewsTile
              title="Lacus eget elit dui dapibus volutpat id."
              description="Ornare quis donec odio sagittis, gravida facilisi vivamus. Non potenti et feugiat urna tristique leo ut et. Ultrices diam."
              date="February 3, 2021"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
