$(document).ready(function () {
  $("#regform").validate({
    rules: {
      fname: {
        required: true,
        minlength: 2, // Adjust minlength according to your requirement
      },
      lname: {
        required: true,
        minlength: 2, // Adjust minlength according to your requirement
      },
      email: {
        required: true,
        email: true, // Adjust minlength according to your requirement
        minlength: 5,
      },
      password: {
        minlength: 6,
        required: true,
      },
      cpassword: {
        required: true,
        equalTo: "#floatingPassword",
      },
    },
    messages: {
      fname: {
        required: "Please enter your first name",
        minlength: "First name must be at least 2 characters long", // Adjust error message as needed
      },
      lname: {
        required: "Please enter your last name",
        minlength: "Last name must be at least 2 characters long", // Adjust error message as needed
      },
      email: {
        required: "Please enter your email",
        email: "Enter valid email",
      },
      confirmPassword: {
        required: "Enter password",
        equalTo: "Must be same as password",
      },
    },
    submitHandler: function (form, event) {
      var loginPageUrl = "http://127.0.0.1:5500/index.html#login";
      blockUi("#regform", 3000);
      window.location.href = loginPageUrl;
    },
  });
});

blockUi = (element, timeout) => {
  $(element).block({
    message: '<div id="throbber"></div>',
    timeout: timeout,
  });
};
