import classnames from 'classnames'

export interface InputLabelProps {
  isLegend?: boolean
  htmlFor?: string
  label?: string
  hint?: string
  error?: string
  hideLabel?: boolean
}

export const InputLabel = ({
  isLegend = false,
  htmlFor,
  label = 'Input label',
  hint,
  error,
  hideLabel = false
}: InputLabelProps) => {
  const LabelTag = isLegend ? 'legend' : 'label'

  return (
    <>
      {label && (
        <LabelTag
          className={classnames('input_label', { 'sr-only': hideLabel })}
          {...(!isLegend && htmlFor ? { htmlFor } : {})}
        >
          {label}
        </LabelTag>
      )}
      {hint && <p id={htmlFor + '-hint'} className={'input_hint'}>{hint}</p>}
      {error && <p id={htmlFor + '-error'} className={'input_error'}>{error}</p>}
    </>
  )
}
