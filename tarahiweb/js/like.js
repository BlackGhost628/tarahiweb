document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll(".like-btn");

  likeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const icon = btn.querySelector(".heart-icon");
      const liked = icon.dataset.liked === "true";

      if (liked) {
        icon.textContent = "♡";
        icon.dataset.liked = "false";
        btn.classList.remove("liked");
      } else {
        icon.textContent = "♥";
        icon.dataset.liked = "true";
        btn.classList.add("liked");
        playLikeAnimation(btn);
      }
    });
  });

  function playLikeAnimation(button) {
    button.classList.add("like-pop");
    setTimeout(() => {
      button.classList.remove("like-pop");
    }, 300);
  }
});

