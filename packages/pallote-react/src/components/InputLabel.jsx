import React from 'react'
import PropTypes from 'prop-types'

export const InputLabel = ({
  isLegend = false,
  htmlFor,
  label = 'Input label',
  hint,
  error
}) => {

  const LabelTag = isLegend ? 'legend' : 'label';

  return (
    <>
      {label && <LabelTag className={'input_label'} {...(!isLegend && { htmlFor })}>{label}</LabelTag>}
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
  error: PropTypes.string
}
