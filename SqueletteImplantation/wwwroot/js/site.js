// Write your Javascript code.
function myFunction(){
    alert("waouuuuuuuuuuuuuuuuuuuuuuu!!!!");
    $(document).ready(function() {
        
  new jBox('Confirm', {
    attach:'button',
    content: 'Do you really want to do this?',
    cancelButton: 'Nope',
    confirmButton: 'Sure do!'
  });

});

}