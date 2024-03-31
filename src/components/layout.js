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
    header = (
      <Link to="/">
        {title && (
          <HomeIcon
            src={homeIcon}
            onMouseEnter={()=>setHomeIcon(homeFilled)}
            onMouseLeave={()=>setHomeIcon(homeOutline)}
          />
        )}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
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
const HomeIcon = styled.img`
  width: 2.083vw;
  ${media.fullWidth} {
  width:30px;
  }
  
  ${media.tablet} {
  width:2.93vw;
  }
  
  ${media.mobile} {
  width:8vw;
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
