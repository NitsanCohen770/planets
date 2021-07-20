import React, { useState } from "react"
import { StyledUnorderedList } from "./styles"
import NavLink from "../NavLink/NavLink"
import Hamburger from "../../images/icon-hamburger.svg"
import { defaultStyles } from "./defaultStyles"
import { device } from "../../screenSizes"
import { nanoid } from "nanoid"
import { useMediaQuery } from "react-responsive"
import * as themes from "../../themes"

const linksList = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "saturn",
  "jupiter",
  "neptune",
  "uranus",
]

const NavBar = ({ path, mobileNavbarToggle, isNavbarOpen }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: device.mobileL,
  })
  const fixedPath = path.split("/").join("").toLowerCase()
  const themeSelector = themes[`${fixedPath}Theme`].color
  const activeStyles = { borderTop: `solid 4px ${themeSelector}` }
  return (
    <>
      <StyledUnorderedList mobileNavbar={isNavbarOpen}>
        <div>
          THE PLANETS
          <img
            onClick={() => mobileNavbarToggle(prevState => !prevState)}
            src={Hamburger}
            alt="menu button"
          />
        </div>
        {linksList.map(link => (
          <NavLink
            hoverColor={link}
            children={link}
            key={nanoid()}
            activeStyles={!isDesktopOrLaptop && activeStyles}
            styles={defaultStyles}
            page={`/${link}`}
          />
        ))}
      </StyledUnorderedList>
    </>
  )
}

export default NavBar
