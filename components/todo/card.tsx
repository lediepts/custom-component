import React from "react";
import { toHtml } from "../../lib/parserHTML";
import styles from "./card.module.scss";
interface Props {
  category: string;
}
export default function TodoCard({ category }: Props) {

  return (
    <div className={styles.container}>
      <h2 className={styles.category}>{toHtml(category)}</h2>
      <div style={{ width: 100, height: 100 }}>
        zzzz
      </div>
    </div>
  );
}
