import React from "react";
import styles from "./style.module.scss";

export default function Button_RECT() {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <a
            href="#"
            className={`${styles.btn} ${styles.btn_1} ${styles.color_green}`}
          >
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            Hover
          </a>
        </div>

        <div>
          <a
            href="#"
            className={`${styles.btn} ${styles.btn_1} ${styles.color_blue}`}
          >
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            Hover
          </a>
        </div>

        <div>
          <a
            href="#"
            className={`${styles.btn} ${styles.btn_2} ${styles.color_blue}`}
          >
            Hover
          </a>
        </div>
        <div>
          <a href="#" target="_blank" className={styles.link}>
            <span className={styles.border}>
              <span className={styles.underline}>Click me I'm famous</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
