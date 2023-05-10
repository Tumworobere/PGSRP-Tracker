const preventNonNumericInput = (event) => {
  if (isNaN(Number(event.key))) {
      return event.preventDefault();
  }
}