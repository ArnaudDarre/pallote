import { Color, Text } from "pallote-react"

export const GridExample = ({
  fill,
  content,
}) => {

  return (
    <Color fill={fill ? fill : 'default'} stroke="border" className={'ph-1 pv-½ br-sm w-full'}>
      <Text variant="caption">{content}</Text>
    </Color>
  )
}
