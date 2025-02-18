var inputFocusElement = document.querySelector('.input-focused .input_control');
if (inputFocusElement !== null) {
  inputFocusElement.focus();
}

document.querySelectorAll(
  '.input-disabled .input_control, ' +
  '.checkbox-disabled .checkbox_control, ' +
  '.input-disabled .checkbox_control, ' +
  '.radio-disabled .radio_control, ' +
  '.input-disabled .radio_control'
).forEach(element => element.setAttribute('disabled', 'disabled'));

document.querySelectorAll(
  '.input:not(.input-optional) input, ' +
  '.input:not(.input-optional) textarea, ' +
  '.input:not(.input-optional) select'
).forEach(element => element.setAttribute('required', 'required'));
