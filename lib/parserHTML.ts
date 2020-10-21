import ReactHtmlParser from "react-html-parser";
export const toHtml = (s: string | undefined) => {
  if (!s) return null;
  return ReactHtmlParser(s);
};
