import classnames from 'classnames'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nnfxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export interface SnippetProps {
  content?: string
  isDefault?: boolean
  dense?: boolean
  fullWidth?: boolean
  className?: string
}

export const Snippet = ({
  content = 'Snippet',
  isDefault = false,
  dense = false,
  fullWidth,
  className,
  ...props
}: SnippetProps) => {
  return (
    <div
      className={classnames([
        'snippet_wrapper',
        { ' w-full': fullWidth }
      ])}
    >
      <SyntaxHighlighter
        language="javascript"
        style={nnfxDark}
        className={classnames([
          'snippet',
          { ' snippet-dense': dense },
          { ' snippet-default': isDefault },
          className
        ])}
        {...props}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  )
}
