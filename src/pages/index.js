import * as React from "react"
import { Link, graphql } from "gatsby"
import { useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"

const HomeIndex = ({ data }) => {
  const posts = data?.allContentfulPage?.edges

  return (
    <Layout>
      <PageListWrapper>
        {posts.map(post => {
          const title = post?.node?.title || post?.node?.slug
          return (
            <Wrapper key={post?.node?.slug}>
              <Linked to={`/${post?.node?.slug}`} itemProp="url">
                <Page
                  className={"pageItem"}
                  src={title}
                  itemProp="headline"
                  scrolling="no"
                >
                  <PageName>{title} </PageName>
                  <GIPH src={post.node?.pageGiphRef?.url} alt={title} />
                  <About>{post?.node?.about}</About>
                </Page>
              </Linked>
            </Wrapper>
          )
        })}
      </PageListWrapper>
    </Layout>
  )
}

export default HomeIndex
const GIPH = styled.img`
  width: 8.681vw;
  height: 8.681vw;
  align-self: center;
  justify-self: center;
  border-radius: 25px;
  ${media.fullWidth} {
    width: 125px;
    height: 125px;
  }

  ${media.tablet} {
    width: 12.207vw;
    height: 12.207vw;
  }

  ${media.mobile} {
    width: 29.206vw;
    height: 29.206vw;
  }
`
const About = styled.p`
  ${text.bodyM}
`
const PageName = styled.h4`
  ${text.h4}
`
const Page = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  width: 20.833vw;
  height: auto;
  align-items: center;
  justify-content: center;
  border: unset;
  padding: 0.347vw;
  pointer-events: none;

  ${media.fullWidth} {
    padding: 5px;
    width: 300px;
  }

  ${media.tablet} {
    padding: 0.488vw;
    width: 25.391vw;
  }

  ${media.mobile} {
    padding: 1.168vw;
    width: 65.421vw;
  }
`
const Linked = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0vw 2.014vw;
  border-radius: 25px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03) scaleX(1.04) ;
    background-color: rgba(0, 0, 300, 0.2);
    border: 0.069vw outset rgba(20, 0, 200, 0.6);
    -webkit-box-shadow: 1px 11px 15px 2px rgba(0, 0, 0, 0.67);
    box-shadow: 1px 11px 15px 2px rgba(0, 0, 0, 0.67);
  }
  -webkit-box-shadow: 0px 9px 15px 2px rgba(0,0,0,0.3); 
box-shadow: 0px 9px 15px 2px rgba(0,0,0,0.3);
  ${media.fullWidth} {
    padding: 0px 29px;
  }

  ${media.tablet} {
    padding: 0vw 2.832vw;
  }

  ${media.mobile} {
    padding: 0vw 6.776vw;
  }
`
const PageListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;

  padding: 3.472vw 3.472vw;
  gap: 1.042vw;
  ${media.fullWidth} {
    gap: 15px;
    padding: 50px 50px;
  }

  ${media.tablet} {
    gap: 4vw 1.465vw;
    padding: 4.883vw 4.883vw;
  }

  ${media.mobile} {
    gap: 3.505vw;
    padding: 1.168vw 1.168vw;
  }
`
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  query {
    allContentfulPage {
      edges {
        node {
          slug
          about
          pageGiphRef {
            url
          }
        }
      }
    }
  }
`
