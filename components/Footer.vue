<template>
  <footer>
    <div class="footer_section">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <h3 class="about">About us</h3>
            <p class="description">
              We are a dry cleaning and laundry specialist serving the East
              London area. When it comes to looking for a Dry Cleaners in Canary
              Wharf, look no further than Gold Star Dry Cleaners. We provide a
              flexible dry cleaning and laundry service in Canary Wharf that is
              available on demand through our website. Just place an order and
              we will pickup your clothes from your home or office, clean them
              and deliver them back to your door. We have over 20 years of
              experience as a dry cleaner and laundry service provider in Canary
              Wharf, so you can relax while your order is in good hands.
            </p>
          </div>

          <div class="col-md-3">
            <h3 class="about Quick">Quick Link</h3>
            <div class="quick_link">
              <li>
                <nuxt-link to="/about-us" class="link">How we work</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/#how-it-work" class="link">Coverage area</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/#services" class="link">Why us</nuxt-link>
              </li>
              <li><nuxt-link to="/contact-us" class="link">FAQ</nuxt-link></li>
            </div>
          </div>
        </div>

        <div class="footer_section_end">
          <div>
            <span class="copyrightText"
              >©{{ copyright_year }} Gold Star Dry Cleaners (UK) Limited</span
            >
          </div>
          <div class="social_link">
            <a href="#" class="social-link">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright_year: new Date().getFullYear(),
    };
  },
};
</script>
<style scoped>
.social_link a {
  display: inline-flex;
  width: 24px;
  height: 24px;
  color: #ffffff;
}
.footer_section_end {
  margin-top: 12px;
  border-top: 1px solid #ffffff25;
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
}
.quick_link li {
  list-style: none;
  margin: 12px 0;
}
.quick_link li a {
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-decoration: none;
}
.footer_section {
  padding-top: 80px;
  background: #dca112;
}
.about {
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 20px;
}
.description {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #f5f5f4;
  margin: 0;
}
.copyrightText {
  font-size: 14px;
  line-height: 20px;
  color: #f5f5f4;
}
@media screen and (max-width: 768px) {
  .Quick {
    margin-top: 20px;
  }
  .quick_link li {
    margin: 4px 0;
  }
  .copyrightText {
    font-size: 12px;
  }
  .description{
    font-size: 14px;
  }
  .quick_link li a {
  font-size: 15px;
}
}
</style>

