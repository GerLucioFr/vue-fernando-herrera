<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img
          src="@/assets/logo.png"
          class="d-inline-block align-text-top mx-2"
          alt="Vue logo"
        />
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page">Home</a>
          </li>
        </ul>

        <div class="d-flex">
          <button type="button" class="btn btn-sm btn-outline-info">
            <i class="fa fa-sign-out"></i>
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
};
</script>

<style scoped lang="scss">
.navbar {
  img {
    width: 24px;
  }
}
</style>
