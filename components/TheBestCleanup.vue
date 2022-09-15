<template>
  <div>
    <div class="cleanup_section">
      <div class="container">
        <div class="row align-items-center contents">
          <div class="col-md-6 mb-3">
            <img src="/images/cleanup.png" width="100%" />
          </div>
          <div class="col-md-6">
            <p class="weClean">We Clean Everything</p>
            <p class="title">The Best Cleanups</p>
            <p class="description">
              Offering innovative solutions is our passion. We endeavor to
              attain a high customer satisfaction in our field and want to
              exceed your expectations
            </p>
            <div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="feature">
                    <img src="/images/checkIcon.png" />
                    <span>Guaranteed Services</span>
                  </div>
                  <div class="feature">
                    <img src="/images/checkIcon.png" />
                    <span>Affordable Price</span>
                  </div>
                  <div class="feature">
                    <img src="/images/checkIcon.png" />
                    <span>Always Open</span>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="feature">
                    <img src="/images/checkIcon.png" />
                    <span>Great Rewards</span>
                  </div>
                  <div class="feature">
                    <img src="/images/checkIcon.png" />
                    <span>Faster Service</span>
                  </div>
                  <div class="feature">
                    <img src="/images/checkIcon.png" />
                    <span
                      >Pick up & Delivery Free<span class="text-danger"
                        >*</span
                      ></span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="path">
        <img src="/images/Path.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.feature {
  font-size: 20px;
  line-height: 20px;
  color: #1c1917;
  margin: 14px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}
.feature img {
  width: 18px;
  height: 18px;
}
.description {
  font-size: 20px;
  line-height: 25px;
  color: #57534e;
  margin: 0;
  margin-bottom: 15px;
}
.title {
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  color: #1c1917;
  margin: 0;
  margin-bottom: 10px;
}
.weClean {
  font-size: 20px;
  line-height: 28px;
  color: #dca112;
  margin: 0;
  margin-bottom: 6px;
}
.cleanup_section {
  padding: 80px 0;
  position: relative;
  background: #fff;
  overflow: hidden;
}
.cleanup_section .path {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
}

@media screen and (max-width: 1024px) {
  .cleanup_section .path {
    opacity: 0.4;
  }
  .feature {
  font-size: 16px;
  line-height: 16px;
}
.title {
  font-size: 30px;
}
.description {
  font-size: 18px;
}
  }

@media screen and (max-width: 769px) {
  .cleanup_section .path {
    opacity: 0.4;
  }
  .feature {
  font-size: 16px;
  line-height: 16px;
}
.title {
  font-size: 30px;
  line-height: 40px;
  color: #1c1917;
  margin: 0;
  margin-bottom: 10px;
}
  }
</style>
