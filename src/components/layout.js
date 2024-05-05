import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"
import homeFilled from "../images/homeFilled.png"
import homeOutline from "../images/homeOutline.png"

const Layout = ({ location = null, title, children }) => {
  const [homeIcon, setHomeIcon] = useState(homeOutline)
  const rootPath = `/`
  const isRootPath = location?.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Link to="/">
        <HomeIcon src={homeIcon} />
      </Link>
    )
  } else {
    header = <>{title && <HomeIcon src={homeIcon} />}</>
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Nav className="global-nav">
        <Link
          to="/"
          onMouseEnter={() => setHomeIcon(homeFilled)}
          onMouseLeave={() => setHomeIcon(homeOutline)}
        >
          <Home>
            {header}
            <LinkName>Home</LinkName>
          </Home>
        </Link>
      </Nav>
      <main>{children}</main>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <A href="https://www.gatsbyjs.com">Gatsby by Tanner</A>
      </Footer>
    </div>
  )
}

export default Layout
const LinkName = styled.p`
  ${text.bodyMBold}
  align-self: flex-end;
  margin: unset;
`
const Home = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.694vw;
  width: 200px;
`
const Nav = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  padding: 0.347vw;
  padding-left: 25px;
  a {
    color: black;
  }
`
const HomeIcon = styled.img`
  width: 2.083vw;
  ${media.fullWidth} {
    width: 30px;
  }

  ${media.tablet} {
    width: 2.93vw;
  }

  ${media.mobile} {
    width: 8vw;
  }
`
const Footer = styled.footer`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 1px;
  width: 100vw;
  background-color: transparent;
`
const A = styled.a`
  text-decoration: none;
  color: red;
`
