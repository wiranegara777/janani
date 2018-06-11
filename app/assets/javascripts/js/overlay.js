var overlayBtn = document.querySelectorAll('.btn--overlay');
for (i = 0; i < overlayBtn.length; i++) {
  overlayBtn[i].addEventListener('click', function() {
  	this.parentNode.classList.add("c-overlay--is-hidden");
  });
}