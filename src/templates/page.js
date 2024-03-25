import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"

const ContentfulPost = ({ data }) => {


  return (
<div>hello</div>
  )
}
export default ContentfulPost

export const query = graphql`
  query ($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      id
  }
`
