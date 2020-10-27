import React from "react";
import TodoCard from "../../components/todo/card";
import Layout from "../../components/UI/layout";


export default function index() {
  return (
    <Layout>
      <TodoCard category="Hoge" />
    </Layout>
  );
}
