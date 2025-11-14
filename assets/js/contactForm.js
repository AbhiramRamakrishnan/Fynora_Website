document.addEventListener("DOMContentLoaded", () => {
  $("#submit-form").submit(function (e) {
    e.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const phone = $("#mobile").val().trim();
    const message = $("#subject").val().trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (name === "" || email === "" || phone === "" || message === "") {
      Swal.fire({
        icon: "warning",
        title: "All fields are required!",
      });
      return;
    }

    if (!emailPattern.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email!",
      });
      return;
    }

    if (!phonePattern.test(phone)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone Number!",
      });
      return;
    }

    Swal.fire({
      title: "Submitting...",
      text: "Please wait...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    fetch($("#submit-form").attr("action"), {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(this),
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "We will get back to you soon.",
            timer: 3000,
            showConfirmButton: false,
          });
          $("#submit-form")[0].reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Submission Failed!",
            text: "Please try again later.",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Network Error!",
          text: "Please try again later.",
        });
      });
  });
});
