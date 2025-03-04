import React, { useState } from 'react'

import { Grid } from '../utilities/Grid'
import { Alert } from '../components/Alert'
import { Button } from '../components/Button'

export default {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a short message to either notify users about an action he performed or should perform. It can also be used inside the page content to convey important information.',
      },
    },
  },
  argTypes: {
    show: { control: false },
    onClose: { control: false },
    className: { control: false }
  }
}

const Template = (args) => <Alert variant="notice" {...args} />

export const Playground = Template.bind({})

Playground.args = {
  title: 'This is an alert',
  onClose: null
}

export const Color = () => (
  <Grid gap={2} direction="row">
    <Alert title="Success" variant="notice" />
    <Alert color="info" title="Info" variant="notice" />
    <Alert color="warning" title="Warning" variant="notice" />
    <Alert color="error" title="Error" variant="notice" />
  </Grid>
)

Color.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story: 'Change the colour to convey the severity of the alert.'
    }
  }
}

// export const Variant = () => {

//   const [alerts, setAlerts] = useState({})

//   const openAlert = (alertId) => {
//     setAlerts((prevAlerts) => ({
//       ...prevAlerts,
//       [alertId]: true
//     }))
//   }

//   return (
//     <Grid gap={2} direction="column">
//       <Grid item items="start">
//         <Button color="primary" onClick={() => openAlert('toast')}>Open toast alert</Button>
//         <Alert title="Toast" show={alerts['toast']} />
//       </Grid>
//       <Grid item items="start">
//         <Alert variant="notice" title="Notice" subtitle="Inlined alert without absolute positionning to highlight content on the page" />
//       </Grid>
//       <Grid item items="start">
//         <Button color="primary" onClick={() => openAlert('bar')}>Open bar alert</Button>
//         <Alert variant="bar" title="Bar" show={alerts['bar']} />
//       </Grid>
//     </Grid>
//   )
// }

// Variant.parameters = {
//   controls: { disable: true }
// }

export const Subtitle = () => (
  <Alert variant="notice" title="Alert with subtitle" subtitle="This is the subtitle"></Alert>
)

Subtitle.parameters = {
  controls: { disable: true }
}

export const Dense = () => (
  <Alert variant="notice" dense title="This is a dense alert"></Alert>
)

Dense.parameters = {
  controls: { disable: true }
}

// export const OnClose = () => {

//   const [alerts, setAlerts] = useState({})

//   const openAlert = (alertId) => {
//     setAlerts((prevAlerts) => ({
//       ...prevAlerts,
//       [alertId]: true
//     }))
//   }

//   const closeAlert = (alertId) => {
//     setAlerts((prevAlerts) => ({
//       ...prevAlerts,
//       [alertId]: false
//     }))
//   }

//   return (
//     <div>
//       <Button color="primary" onClick={() => openAlert('close')}>Open alert</Button>
//       <Alert title="Alert with onClose function" show={alerts['close']} onClose={() => closeAlert('close')} />
//     </div>
//   )
// }

// OnClose.parameters = {
//   controls: { disable: true }
// }

export const NoIcons = () => (
  <Alert variant="notice" noIcon title="Remove alert icon"></Alert>
)

NoIcons.parameters = {
  controls: { disable: true }
}
