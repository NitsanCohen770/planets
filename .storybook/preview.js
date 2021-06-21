import { action } from "@storybook/addon-actions"
import { addDecorator } from "@storybook/react"
import { withThemes } from "@react-theming/storybook-addon"
import { ThemeProvider } from "styled-components"

import {
  neptuneTheme,
  uranusTheme,
  earthTheme,
  marsTheme,
  saturnTheme,
  mercuryTheme,
  jupiterTheme,
  venusTheme,
} from "../src/themes"

export const parameters = {
  backgrounds: {
    default: "default",
    values: [
      {
        name: "default",
        value: "#070724",
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
// addDecorator(
//   withThemes(ThemeProvider, [
//     neptuneTheme,
//     uranusTheme,
//     earthTheme,
//     marsTheme,
//     saturnTheme,
//     mercuryTheme,
//     jupiterTheme,
//     venusTheme,
//   ])
// )

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/"

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.

window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
