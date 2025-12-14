import { Card, CardProps } from '../../components/Card'
import { CardHeader } from '../../components/CardHeader'
import { CardMedia } from '../../components/CardMedia'

interface CardExampleProps extends CardProps {
  title?: string
  width?: number
}

export const CardExample = ({
  title,
  width,
  ...props
}: CardExampleProps) => {
  return (
    <Card {...props}>
      <CardMedia image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" height={66.666} width={width} />
      <CardHeader title={title || 'Card Title'} />
    </Card>
  )
}
