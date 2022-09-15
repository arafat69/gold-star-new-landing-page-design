<template>
  <section id="how-it-work" class="how-it-works">
    <div class="container">

      <h1 class="heading">How Gold Star Dry Cleaners Work</h1>
      <p class="desc">
        Taking the hassle out of laundry
      </p>

      <div class="row">
        <div class="col-sm-6 col-md-4 mt-2">
          <div class="card card-body text-center h-100 d-flex flex-colum border-0">
            <div class="photo">
              <img src="/images/Order-online.png" class="icons">
            </div>
            <h4 class="title">Arrange a collection online or by using our app</h4>
            <p class="text"></p>
          </div>
        </div>

        <div class="col-sm-6 col-md-4 mt-2 ">
          <div class="card card-body text-center h-100 d-flex flex-colum border-0">
           <div class="photo">
            <img src="/images/We-Collect.png" class="icons">
          </div>
          <h4 class="title">We collect your clothes within your chosen time slot. We work our magic, cleaning your clothes, removing stains and beautifully ironing them.</h4>
          </div>
        </div>

        <div class="col-sm-6 col-md-4 mt-2">
            <div class="card card-body text-center h-100 d-flex flex-colum border-0">
              <div class="photo">
                <img src="/images/We-return-your.png" class="icons">
              </div>
              <h4 class="title">We deliver your clean clothes back to you, so you are ready to go.</h4>
            </div>
          </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.photo{
  width: 160px;
  height: 160px;
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
}
.desc{
  font-size: 24px;
  line-height: 32px;
  color: #57534E;
}
.title{
  font-size: 20px;
  line-height: 28px;
  color: #57534E;
  margin-top: 20px;
}
.text{
font-size: 16px;
line-height: 24px;
color: #294366;
margin: 0;
}

.how-it-works{
  padding: 80px 0;
  background: #FFFFFF;
}

</style>
