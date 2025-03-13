import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nnfxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const Snippet = ({
  content = 'Snippet',
  isDefault = false,
  dense = false,
  className,
  ...props
}) => {

  return (
    <div className={classnames('snippet_wrapper')} >
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

Snippet.propTypes = {
  content: PropTypes.string.isRequired,
  isDefault: PropTypes.bool,
  dense: PropTypes.bool,
  className: PropTypes.node
}
