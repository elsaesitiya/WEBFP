$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      namaDepan: "required",
      namaBelakang: "required",
      username: {
        required: true,
        minlength: 4
      },
      emailRegistrasi: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 8
      }
    },
    // Specify validation error messages
    messages: {
      namaDepan: "Mohon isikan nama depan",
      namaBelakang: "Mohon isikan nama belakang",
      username: {
        required: "Mohon masukan nama pengguna",
        minlength: "Nama pengguna tidak boleh kurang dari 4 karakter"
      },
      password: {
        required: "Mohon isikan password",
        minlength: "password tidak boleh kurang dari 8 karakter"
      },
      emailRegistrasi: "Mohon alamat masukan email yang valid"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});