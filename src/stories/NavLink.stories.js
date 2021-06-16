import React from "react"
import NavLink from "../components/NavLink"

export default {
  component: NavLink,
  title: "NavBar/NavLink",
}

const Template = args => <NavLink {...args} />

export const Default = Template.bind({})
Default.args = {
  styles: {},
  activeStyles: {},
  page: "/Earth",
  children: "Earth",
}
