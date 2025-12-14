import { ReactNode } from 'react'

import { Text } from '../../utilities/Text'

interface ParagraphExampleProps {
  children?: ReactNode
}

export const ParagraphExample = ({ children }: ParagraphExampleProps) => {
  return (
    <>
      <Text>This is a  paragraph component with the <span className='text-bold'>{children}</span> property applied to it.</Text>
      <Text>That property will be applied to any child Text component.</Text>
    </>
  )
}

export default ParagraphExample
