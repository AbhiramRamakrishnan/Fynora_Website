document.addEventListener("DOMContentLoaded", () => {
  $("#submit-form").submit((e) => {
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
        background: "#fff5f5",
        color: "#2f2872",
        iconColor: "#f59e0b",
      });
      return;
    }

    if (!emailPattern.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email!",
        text: "Please enter a valid email address.",
        background: "#fff5f5",
        color: "#2f2872",
        iconColor: "#ef4444",
      });
      return;
    }

    if (!phonePattern.test(phone)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone Number!",
        text: "Enter a 10-digit number without spaces or symbols.",
        background: "#fff5f5",
        color: "#2f2872",
        iconColor: "#ef4444",
      });
      return;
    }

    Swal.fire({
      title: "Submitting...",
      text: "Please wait while we process your request.",
      allowOutsideClick: false,
      allowEscapeKey: false,
      background: "#f0f4ff",
      color: "#2f2872",
      iconColor: "#2f2872",
      didOpen: () => {
        Swal.showLoading();
      },
    });

    $.ajax({
      url: "https://fynora-website-backend.onrender.com/submit-form",
      data: $("#submit-form").serialize(),
      method: "post",
      success: function (response) {
        Swal.fire({
          icon: "success",
          title: "Thank you for reaching out.",
          html: "Your message has been successfully received.<br><small>We will contact you shortly.</small>",
          background: "#f0f4ff",
          color: "#2f2872",
          iconColor: "#2f2872",
          showConfirmButton: false,
          timer: 3000,
        }).then(() => {
          window.location.reload();
        });
      },
      error: function (err) {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong. Please try again 😢",
          background: "#fff5f5",
          color: "#2f2872",
          iconColor: "#ef4444",
          confirmButtonColor: "#2f2872",
          confirmButtonText: "Okay",
        });
      },
    });
  });
});
