<template>
  <div>
    <div class="download_our_app">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5">
            <img src="/images/appstorethumbnail.png" width="100%" />
          </div>
          <div class="col-md-7 mt-2">
            <h3 class="title">We're Available on Mobile, Just Download it</h3>
            <p class="desc">Order your laundry with just a few clicks</p>
            <div class="downloadApp">
              <div class="appLink">
                <a href="#"><img src="/images/android.png" height="42" /></a>
                <a href="#"><img src="/images/apple.png" height="42" /></a>
              </div>
              <div class="rating_section">
                <div class="rating">
                  <span class="number">4.8</span>
                  <span class="outOf">out of 5</span>
                </div>
                <div class="star">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>

            <div class="scan">
              <p>or Scan the QR to download our app</p>
              <img src="/images/websiteQRCode.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .appLink{
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
.scan p {
  font-weight: 400;
  font-size: 20px;
  color: #57534e;
  margin: 0;
}
.scan img{
  width: 180px;
}
.desc {
  font-weight: 400;
  font-size: 20px;
  color: #57534e;
  margin: 0;
}
.title {
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;
  color: #1c1917;
}
.downloadApp {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin: 20px 0;
}
.download_our_app {
  padding: 80px 0;
  background: rgba(220, 161, 18, 0.15);
  background-image: url('/images/downloadPath.png');
  background-repeat: no-repeat;
  background-position: right bottom;
}
.rating_section {
  display: flex;
  align-items: center;
  gap: 5px;
}
.star {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 6px 12px;
  gap: 4px;
  background: #ffffff;
  border-radius: 24px;
  color: #ffb83a;
  margin: 0 4px;
}
.rating {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 22px;
}
.rating .number{
  font-weight: 600;
  font-size: 28px;
  color: #1C1917;
}
.rating .outOf{
  color: #57534E;
  font-weight: 400;
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  .desc {
  font-size: 18px;
  text-align: center;
}
.title {
  font-size: 28px;
  margin-top: 14px;
  text-align: center;
}
.downloadApp{
  justify-content: center;
}
.scan{
  text-align: center;
}
.scan p {
  font-size: 18px;
  margin-bottom: 4px;
}
}
</style>
