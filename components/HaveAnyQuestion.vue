<template>
  <div>
    <div class="have_any_section">
      <div class="container">
        <h3 class="title text-center">Have Any Question?</h3>
        <p class="description text-center m-0">
          Some frequently asked questions and answers below
        </p>

        <div class="row mt-5">
          <div class="col-lg-8 m-auto">
            <client-only placeholder="loading...">
              <VueFaqAccordion :items="myItems" />
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueFaqAccordion from "vue-faq-accordion";

export default {
  components: {
    VueFaqAccordion,
  },
  data() {
    return {
      myItems: [
        {
          title: "How does Gold Star Dry Cleaners Work?",
          value:
            "Use the app to enter your address and set pickup and dropoff times that suit you best. Our driver will bring you our color-coded bags for you to fill. Each type of bag has a different type of service such as HomeCare, Wash & Fold, Clean & Press, and Press Only.",
        },
        {
          title: "What's the turnaround time?",
          value:
            "Venus takes 224.7 Earth days to complete one orbit around the Sun.",
        },
        {
          title: "What do I prepare for my first order?",
          value: "Binturongs smell like popcorn.",
        },
        {
          title: "Can you hang/air-dry items?",
          value: "Binturongs smell like popcorn.",
        },
        {
          title: "How will I know how much my bill is?",
          value: "Binturongs smell like popcorn.",
        },
        {
          title: "Can you remove stains?",
          value: "Binturongs smell like popcorn.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.have_any_section {
  padding: 80px 0;
  background: #fff;
}
.title {
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  color: #1c1917;
}
.description {
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #57534e;
}
@media screen and (max-width: 768px) {
  .title {
  font-size: 28px;
}
.description {
  font-size: 16px;
}
}
</style>
