import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Chevron from "../../images/icon-chevron.svg"
import { StyledListItem } from "./styles"

const NavLink = ({ children, page, styles, activeStyles, hoverColor }) => {
  const [isHovering, setIsHovering] = React.useState(false)
  console.log(hoverColor)
  return (
    <StyledListItem
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      isHovering={isHovering}
      hoverColor={hoverColor}
    >
      <div></div>
      <Link role={page} style={styles} activeStyle={activeStyles} to={page}>
        {children}
      </Link>

      <img src={Chevron} alt="menu button" />
    </StyledListItem>
  )
}

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  page: PropTypes.string,
  styles: PropTypes.object,
  activeStyles: PropTypes.object,
}

export default NavLink
