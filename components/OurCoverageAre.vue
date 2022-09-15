<template>
  <section class="coverageAre">
    <div class="container">
      <h1 class="choose-title mb-3">Our Coverage Area</h1>
      <p class="choosetext">
        We currently cover the following post codes
      </p>

      <div class="areaCode">
        <span v-for="area in areas" :key="area">{{area}}</span>
      </div>

    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      areas: ['E14', 'E15', 'E16', 'E1W', 'E1', 'E2', 'E3', 'E6', 'E8', 'E9', 'SE16'],
    }
  },
}
</script>
<style scoped>
.coverageAre{
    padding: 50px 0;
    background: #1C1917;
  }
.choose-title{
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  color: #DCA112;
}
.choosetext{
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
}
.areaCode{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.areaCode span{
  color: #DCA112;
  border-right: 1px solid rgba(255, 255, 255, 0.25);
  padding-right: 12px;
  height: 24px;
  font-size: 24px;
  line-height: 24px;
  margin-top: 10px;
}
.areaCode span:last-child{
  border: none;
}
</style>
