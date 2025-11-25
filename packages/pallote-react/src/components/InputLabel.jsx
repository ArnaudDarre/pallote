import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export const InputLabel = ({
  isLegend = false,
  htmlFor,
  label = 'Input label',
  hint,
  error,
  hideLabel = false
}) => {

  const LabelTag = isLegend ? 'legend' : 'label';

  return (
    <>
      {label && (
        <LabelTag 
          className={classnames('input_label', { 'sr-only': hideLabel })}
          {...(!isLegend && { htmlFor })}
        >
          {label}
        </LabelTag>
      )}
      {hint && <p id={htmlFor + '-hint'} className={'input_hint'}>{hint}</p>}
      {error && <p id={htmlFor + '-error'} className={'input_error'}>{error}</p>}
    </>
  )
}

InputLabel.propTypes = {
  isLegend: PropTypes.bool,
  htmlFor: (props, propName, componentName) => {
    if (!props.isLegend && !props[propName]) {
      return new Error(`The prop \`${propName}\` is required in \`${componentName}\` when \`isLegend\` is false.`);
    }
  },
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  error: PropTypes.string,
  hideLabel: PropTypes.bool
}
