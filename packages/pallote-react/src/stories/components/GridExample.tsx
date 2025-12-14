import { Color, ColorProps } from '../../utilities/Color'
import { Text } from '../../utilities/Text'

type GridExampleFill = 'default' | 'grey5' | 'grey10' | 'grey20'

interface GridExampleProps {
  fill?: GridExampleFill
  content?: string
}

export const GridExample = ({
  fill,
  content,
}: GridExampleProps) => {
  return (
    <Color fill={fill ? fill : 'default'} stroke="grey20" className={'ph-1 pv-½ br-sm w-full'}>
      <Text variant="caption">{content}</Text>
    </Color>
  )
}
