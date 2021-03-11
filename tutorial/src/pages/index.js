import React from "react"
import "./index.css"
import Layout from "../components/layout"
import {ExampleButton} from '../components/button';

const index = () => (
  <Layout>
    <h1>helo from gatsby</h1>
    <ExampleButton>click me</ExampleButton>
  </Layout>
)

export default index;