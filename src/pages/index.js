import * as React from "react"
import { Link, graphql } from "gatsby"
import {useEffect} from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from 'styled-components';
import media from 'styles/media';
import colors from 'styles/colors';
import text from 'styles/text';

const HomeIndex = ({ data }) => {
  const posts = data?.allContentfulPage?.edges

  return (
    <Layout>
      <PageListWrapper style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post?.node?.title || post?.node?.slug

          return (
            <PageItem key={post?.node?.slug}>
                <Wrapper>
                    <Linked to={post?.node?.slug} itemProp="url">
                      <IFRAME className={'iframeBox'}src={title}itemProp="headline" scrolling='no'>{title}</IFRAME>
                    </Linked>
                </Wrapper>
        
            </PageItem>
          )
        })}
      </PageListWrapper>
    </Layout>
  )
}

export default HomeIndex

const IFRAME = styled.iframe`
width:100%;
height: 100%;
border:unset;
border-radius: 25px;
pointer-events: none;
border:2px inset silver;

`
const Linked = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
height: 400px;
`
const PageItem = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const PageListWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

`
const Wrapper = styled.div`
display: flex;
width: 100%;
height: auto;
flex-wrap: wrap;
padding:0vw 2vw;
`
export const Head = () => <Seo title="All posts" />


export const pageQuery = graphql`
  query {
    allContentfulPage {
      edges {
        node {
          slug
        }
      }
    }
  }
`
