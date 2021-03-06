$(document).on('turbolinks:load', function() {
  $('select:not(.selectized)').selectize({
    plugins: ['remove_button'],
    delimiter: ',',
    persist: false
  })
})

$(document).on('change', 'select', function() {
  form = $(this).parents('form')[0]
  if (form && form.ClientSideValidations) {
    $(this).isValid(form.ClientSideValidations.settings.validators)
  }
})