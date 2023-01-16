import {buildLegacyTheme, defineConfig} from 'sanity'

const props = {
  '--my-white': '#f7f2f2',
  '--my-black': '#161718',
  '--my-blue': '#2c78f2',
  '--nexus-brand': '#1B9FFF',
  '--my-red': '#e92716',
  '--my-yellow': '#f7cd26',
  '--my-green': '#3bc469',
}

export const myTheme = buildLegacyTheme ({
   /* Base theme colors */
   "--black": props["--my-black"],
   "--white": props["--my-white"], 

   "--gray": "#8690a0",
   "--gray-base": "#8690a0",

   "--component-bg": props["--my-black"],
   "--component-text-color": props["--my-white"],

   /* Brand */
   "--brand-primary": props["--nexus-brand"],

   // Default button
   "--default-button-color": "#8690a0",
   "--default-button-primary-color": props["--nexus-brand"],
   "--default-button-success-color": props["--my-green"],
   "--default-button-warning-color": props["--my-yellow"],
   "--default-button-danger-color": props["--my-red"],

   /* State */
   "--state-info-color": props["--nexus-brand"],
   "--state-success-color": props["--my-green"],
   "--state-warning-color": props["--my-yellow"],
   "--state-danger-color": props["--my-red"],

   /* Navbar */
   "--main-navigation-color": props["--my-black"],
   "--main-navigation-color--inverted": props["--my-white"],

    "--focus-color": props["--nexus-brand"],
})
