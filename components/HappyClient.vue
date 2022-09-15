<template>
  <div class="happy_client_section">
    <div class="container">
      <h3 class="title text-center">Happy Clients</h3>
      <p class="description m-0 text-center">Few words from our clients</p>

      <div class="row Client_review">
        <div class="col-md-12 col-lg-6 col-md-8 m-auto">
          <!-- slider -->
          <VueSlickCarousel
            v-bind="setting"
            :arrows="false"
            :dots="true"
            ref="carousel"
          >
            <div class="client">
              <p class="details">
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
              <div class="client_profile">
                <img src="/images/clint1.png" />
                <span>Judith Black</span>
                <span>/</span>
                <span>CEO, Workcation</span>
              </div>
            </div>

            <div class="client">
              <p class="details">
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
              <div class="client_profile">
                <img src="/images/clint1.png" />
                <span>Judith Black</span>
                <span>/</span>
                <span>CEO, Workcation</span>
              </div>
            </div>

            <div class="client">
              <p class="details">
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
              <div class="client_profile">
                <img src="/images/clint1.png" />
                <span>Judith Black</span>
                <span>/</span>
                <span>CEO, Workcation</span>
              </div>
            </div>
          </VueSlickCarousel>

          <!-- <div class="nextPreview">
              <button @click="prev()"><i class="fa fa-arrow-left"></i></button>
              <button @click="next()"><i class="fa fa-arrow-right"></i></button>
            </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      setting: {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
      },
    };
  },
  methods: {
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
    },
  },
};
</script>

<style scoped>
.client_profile {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 30px;
}
.client_profile span:nth-child(2) {
  color: #1c1917;
  font-size: 16px;
}
.client_profile span:nth-child(3) {
  color: #dca112;
}
.client_profile span:last-child {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #a8a29e;
}
.details {
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #1c1917;
}
.client {
  text-align: center;
  margin: auto;
}
.happy_client_section {
  padding: 80px 0;
  background: #fff;
  background-image: url("/images/Path.png");
  background-repeat: no-repeat;
  background-position: left bottom;
}
.title {
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  color: #1c1917;
}
.description {
  font-size: 20px;
  color: #57534e;
}
.Client_review {
  margin-top: 48px;
}
@media screen and (max-width: 600px) {
  .client {
    padding: 8px 12px;
    background: #ffffff60;
    border-radius: 20px;
  }
  .details {
    font-size: 16px;
  }
}
</style>
