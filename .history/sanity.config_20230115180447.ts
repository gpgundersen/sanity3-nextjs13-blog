import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {myTheme} from './theme'
import StudioNavBar from './components/StudioNavBar';
import NexusLogo from './components/NexusLogo'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'wisenexus_content_studio',
  title: 'Wisenexus',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: NexusLogo,
      navbar: StudioNavBar,
    },
  },
  theme: myTheme,
})