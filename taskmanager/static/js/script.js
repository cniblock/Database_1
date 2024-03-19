document.addEventListener('DOMContentLoaded', function() {
  // sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
    MIDIAccess.Sidenav.init(sidenav);

    // datepicker initialization
    var datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    });

    // select initialization
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });