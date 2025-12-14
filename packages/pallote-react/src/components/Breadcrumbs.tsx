import classnames from 'classnames'

type BreadcrumbSeparator = 'slash' | 'arrow'

interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  separator?: BreadcrumbSeparator
  className?: string
}

export const Breadcrumbs = ({ items, separator = "slash", className }: BreadcrumbsProps) => (
  <nav
    aria-label="breadcrumbs"
    className={classnames([
      'breadcrumbs',
      {
        [`breadcrumbs-${separator}`]: separator,
      },
      className
    ])}
  >
    <ol>
      {items.map((item, index) => (
        <li key={index} className='breadcrumbs_item'>
          {index === items.length - 1 ? (
            <p aria-current="page">{item.label}</p>
          ) : (
            <a href={item.href}>{item.label}</a>
          )}
        </li>
      ))}
    </ol>
  </nav>
)
