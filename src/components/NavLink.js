import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NavLink = ({ children, page, styles, activeStyles }) => {
  return (
    <Link className={styles} to={page}>
      {children}
    </Link>
  )
}

NavLink.propTypes = {
  children: PropTypes.element.isRequired,
  page: PropTypes.string,
  styles: PropTypes.object,
  activeStyles: PropTypes.object,
}

export default NavLink
