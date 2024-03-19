    document.addEventListener("DOMContentLoaded", function() {
      const form = document.querySelector('form');
      const inputField = document.querySelector('input[type="text"]');
  
      form.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent form submission
          // Check if the input value matches the pattern 
          const inputValue = inputField.value.trim();
        // Retrieve the input field value

          // Regular expression pattern for alphanumeric input
          const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  
          if (!alphanumericRegex.test(inputValue)) {
              // Invalid input: display error message
              showError('Input must be alphanumeric');
          } else {
              // Valid input: display confirmation and submit the form
              alert('Input is valid!');
              form.submit();
          }
      });
  
      function showError(message) {
          const errorDiv = document.createElement('div');
          errorDiv.className = 'error';
          errorDiv.appendChild(document.createTextNode(message));
          form.insertBefore(errorDiv, inputField.nextSibling);
          setTimeout(clearError, 3000); // Clear error after 3 seconds
      }
  
      function clearError() {
          const errorDiv = document.querySelector('.error');
          if (errorDiv) {
              errorDiv.remove();
          }
      }
  });