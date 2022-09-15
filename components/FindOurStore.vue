<template>
  <section id="how-it-work" class="find_our_store">
    <div class="container">

      <h1 class="heading text-center">Find Our Stores</h1>

      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3 mt-2">
          <div class="card card-body text-center h-100 d-flex flex-colum border-0">
            <div class="photo">
              <img src="/images/store1.png" class="icons">
            </div>
            <h4 class="title">330 Burdett Road Poplar London E14 7DL</h4>
            <a href="#" class="google_map">Google Maps</a>
          </div>
        </div>

        <div class="col-sm-6 col-md-4 col-lg-3 mt-2 ">
          <div class="card card-body text-center h-100 d-flex flex-colum border-0">
           <div class="photo">
            <img src="/images/store2.png" class="icons">
          </div>
          <h4 class="title">48 Westferry Road Isle of Dogs London E14 8LW</h4>
          <a href="#" class="google_map">Google Maps</a>
          </div>
        </div>

        <div class="col-sm-6 col-md-4 col-lg-3 mt-2">
            <div class="card card-body text-center h-100 d-flex flex-colum border-0">
              <div class="photo">
                <img src="/images/store3.png" class="icons">
              </div>
              <h4 class="title">Unit 6 Block H Blackwall Reach Royal Captain Court 32 Arniston Way Poplar London E14 0RE</h4>
              <a href="#" class="google_map">Google Maps</a>
            </div>
          </div>

        <div class="col-sm-6 col-md-4 col-lg-3 mt-2">
            <div class="card card-body text-center h-100 d-flex flex-colum border-0">
              <div class="photo">
                <img src="/images/store4.png" class="icons">
              </div>
              <h4 class="title">16a Royal Crest Ave London E16 2SU</h4>
              <a href="#" class="google_map">Google Maps</a>
            </div>
          </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
  .google_map{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: #DCA112;
    text-decoration: none;
  }
.photo{
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #FBFBFF 0% 0% no-repeat padding-box;
  border-radius: 50%;
  overflow: hidden;
}
.icons{
 width: 100%;
 height: 100%;
}
.heading{
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  color: #1C1917;
  margin-bottom: 28px;
}

.title{
  font-size: 18px;
  line-height: 24px;
  color: #57534E;
  margin-top: 20px;
  font-weight: 400;;
  margin-bottom: 20px;
}

.find_our_store{
  padding: 80px 0;
  background: #FAFAF9;
}
.card{
  background: none !important;
}

</style>
