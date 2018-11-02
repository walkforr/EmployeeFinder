$(() => {
  const validateForm = function() {
    let isValid = true;

    $("input").each(function() {
      if (!$(this).val()) {
        isValid = false;
      }
    });

    $(".custom-select").each(function(i, element) {
      if (!$(this).val()) {
        isValid = false;
      }
    });

    return isValid;
  };

  const displayModal = (firstMatch) => {
    document.getElementById('match-name').innerText = firstMatch.name;
    document.getElementById('match-img').setAttribute('src', firstMatch.photo);

    $("#results-modal").modal("toggle");
  };

    
    const addEmployee = function(e) {
      e.preventDefault();
  
      // Here we grab the form elements

      if(validateForm()) {

      const newEmployee = {
        name: document.getElementById('name').value.trim(),
        photo: document.getElementById('photo').value.trim(),
        scores: [
        document.getElementById('q1').value,
        document.getElementById('q2').value,
        document.getElementById('q3').value,
        document.getElementById('q4').value,
        document.getElementById('q5').value,
        document.getElementById('q6').value,
        document.getElementById('q7').value,
        document.getElementById('q8').value,
        document.getElementById('q9').value,
        document.getElementById('q10').value
        ]
      };
  
      // Clear the form when submitting
      document.getElementById('name').value = ('');
      document.getElementById('photo').value = ('');
      document.getElementById('q1').value = ('');
      document.getElementById('q2').value = ('');
      document.getElementById('q3').value = ('');
      document.getElementById('q4').value = ('');
      document.getElementById('q5').value = ('');
      document.getElementById('q6').value = ('');
      document.getElementById('q7').value = ('');
      document.getElementById('q8').value = ('');
      document.getElementById('q9').value = ('');
      document.getElementById('q10').value = ('');
    
      $.post('/api/employees', newEmployee, displayModal);
    } else {

      $("#error")
        .text("Please fill out all fields before submitting!")
        .addClass("alert alert-danger");
    }
      
    };
    
    document.getElementById('submit').addEventListener('click', addEmployee);
  });