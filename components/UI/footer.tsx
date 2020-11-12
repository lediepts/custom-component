import React from "react";
import styles from "./styles/footer.module.scss";

export default function footer() {
  return (
    <footer>
      <div className={` ${styles.copyright} conner`}>
        <p>Copyright © 4S All Rights Reserved.</p>
      </div>
    </footer>
  );
}
