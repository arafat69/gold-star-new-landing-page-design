<template>
  <section class="why-choose-us">
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <h1 class="choose-title mb-3">Why Choose Us?</h1>
          <p class="choosetext">
            We are targeting corporate professionals, household members who face
            daily challenges to iron everyday wear along with having to find a
            cobbler to clean/repair/restore one’s shoes/trainers.
          </p>
        </div>
      </div>
      <ChooseUsCard />
    </div>
  </section>
</template>
<style scoped>
.why-choose-us {
  background: #fafaf9;
  padding: 90px 0;
}
.choose-title {
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  color: #1c1917;
}
.choosetext {
  font-size: 18px;
  font-weight: 400;
  color: #57534e;
}

@media screen and (max-width: 768px) {
  .choose-title {
    font-size: 30px;
    text-align: center;
  }
  .choosetext {
    font-size: 16px;
    text-align: center;
  }
}
</style>
