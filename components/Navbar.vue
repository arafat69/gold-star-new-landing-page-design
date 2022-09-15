<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/logo.png" height="64"/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">How we work</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Coverage area</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Why us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">FAQ</a>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <button class="nav-link signupBtn">Sign Up</button>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.navbar {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  position: absolute;
  width: 100%;
  z-index: 999999;
}

.navbar .navbar-brand{
  margin-right: 60px;
}

.icon {
  margin-right: 8px;
}
.navbar-light .navbar-nav .nav-link,
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
  color: #000000 !important;
  cursor: pointer !important;
  text-transform: capitalize;
  font-size: 18px;
  padding-right: 12px !important;
  padding-left: 12px !important;
}
.navbar-nav .nav-link.signupBtn ,.navbar-nav .nav-link.signupBtn:hover {
  background: #DCA112;
  border-radius: 4px;
  width: 132px;
  height: 50px;
  border: none;
  color: #FFFFFF !important;
}
</style>
