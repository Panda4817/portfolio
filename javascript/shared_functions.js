function scrollToTargetAdjusted(data) {
	$("html").animate(
		{
			scrollTop: $(data).offset().top - 100,
		},
		2000
	);
}

function scrollToTop(data) {
	$("html, body").animate(
		{
			scrollTop: $("#" + data).offset().top,
		},
		1000
	);
}

function adjustTop() {
	const hash = window.location.hash;
	if (hash) {
		setTimeout(() => {
			window.scrollBy(0, -100);
		}, 10);
	}
}

const data = {
	footer: `<footer id="footer" class="jumbotron text-center" style="margin-bottom:0">
    <div class="profile">
      <a class="profile" onclick="scrollToTop('top');" href="#top" title="Back to top">
        <i class="fas fa-chevron-up"></i>
      </a>
    </div>
    <p>
      Thank you for visiting my portfolio website. To find out more visit the links below.
    </p>
    <div class="social-media">
        <a id="profile-link" href="https://github.kmunton.dev" target="_blank" class="btn profile">
          <i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/kmunton" target="_blank" class="btn profile">
          <i class="fab fa-linkedin"></i></a>
        <a href="https://codepen.io/k_munton" target="_blank" class="btn profile">
          <i class="fab fa-codepen"></i></a>
        <a id="profile-link" href="https://repl.it/@Panda4817" target="_blank" class="btn profile" onmouseover="document.getElementById('repl').src='style/img/repl_it_logo_hover.png';" onmouseout="document.getElementById('repl').src='style/img/repl_it_logo.png';">
          <img id="repl" src="style/img/repl_it_logo.png" width="30" class="mb-2" /></a>
        <a href="https://www.freecodecamp.org/kmunton" target="_blank" class="btn profile">
          <i class="fab fa-free-code-camp"></i></a>
        <a href="https://www.credly.com/users/kanta-munton/badges" target="_blank" class="btn profile" onmouseover="document.getElementById('credly').src='style/img/credly_hover.svg';" onmouseout="document.getElementById('credly').src='style/img/credly_normal.svg';">
          <img id="credly" src="style/img/credly_normal.svg" width="30" class="mb-2" /></a>
    </div>
    <p>
      <i class="far fa-copyright"></i> <span id="year"></span>
    </p>
  </footer>`,
	navbar: `<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="icon-bar top-bar"></span>
    <span class="icon-bar middle-bar"></span>
    <span class="icon-bar bottom-bar"></span>
  </button>
  <div id="extra_dropdown"></div>
  <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="experience.html">Commercial Experience</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="projects.html">Personal Projects</a>
      </li>
    </ul>
  </div>`,
};

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("navbar").innerHTML = data["navbar"];
	document.getElementById("footer_content").innerHTML = data["footer"];
	let x = new Date().getFullYear();
	$("#year").html(x);
	adjustTop();
});
