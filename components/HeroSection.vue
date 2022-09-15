<template>
  <div>
  <div class="hero_section">
    <div class="left_section">
      <div class="left_section_contents">

        <h3 class="title">Professional Laundry & Dry Cleaning</h3>
        <p>All orders come with free collection & delivery.</p>

        <div class="card postcodeSearchBox border-0">
          <div class="card-body">
            <span class="get_service">Get service with your post code</span>
            <form action="#">
              <div class="searchBox">
                <input type="text" class="form-control" placeholder="Enter Post Code">
                <button class="searchBtn">Proceed Next</button>
            </div>
            </form>
          </div>
        </div>

      </div>
    </div>
    <div class="right_section">
      <img src="/images/Hero-Image.png" width="100%" height="100%">
      <img class="Guaranteed" src="/images/guarnteed.png">
    </div>
  </div>
  <div class="container">
  <div class="herosection_footer">
    <div class="row align-items-center">
      <div class="col-md-6">
        <p class="content_title">"Hands down the best dry cleaners in Dubai. They are the only ones I trust with my designer dresses"</p>
        <p class="content_address">Kelly Power, UK Entrepreneur</p>
      </div>
      <div class="col-md-6 rating_section py-3">
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
          <div class="review">
            <span>660+ trusted reviews </span>
          </div>
        </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .right_section .review{
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #57534E;
  }
.rating_section .star{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 24px;
  gap: 4px;
  background: #FFFFFF;
  border-radius: 24px;
  color:  #FFB83A;
  margin: 0 4px;
}
.rating_section .rating{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.rating_section .rating .number{
  font-weight: 600;
  font-size: 30px;
  line-height: 20px;
  color: #1C1917;
}
.rating_section .rating .outOf{
  color: #57534E;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
}

  .content_address{
    margin: 0;
    color: #DCA112;

  }
  .content_title{
    font-size: 20px;
    color: #1C1917;
    margin: 0;
  }
  .herosection_footer{
    padding: 46px 0;
  }

  .rating_section{
    display: flex;
    justify-content: center;
    align-items:  center;
  }

  .get_service{
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #57534E;
  }
  .postcodeSearchBox{
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-top: 45px;
  }
  .postcodeSearchBox .searchBox{
    display: flex;
    gap: 26px;
  }
  .postcodeSearchBox .searchBox input, .searchBtn{
    height: 50px;
  }
  .searchBtn{
    width: 192px;
    background: #DCA112;
    border-radius: 4px;
    color: #fff;
    border: none;
  }
  .title{
    margin-top: 30px;
    font-size: 52px;
    line-height: 64px;
    font-weight: 700;
    color: #1C1917;
  }
  .description{
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #57534E;
  }
  .hero_section{
    display: flex;
    background: #fff;
    justify-content: center;
    align-items: center;
  }
  .left_section{
    width: 54%;
    background-image: url('/images/Path.png');
    background-position: left bottom;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-end;
    height: 76vh;
    align-items: center;
  }
  .right_section{
    width: 46%;
    position: relative;
    height: 76vh;
  }
  .Guaranteed{
    position: absolute;
    top: 25%;
    left: 20%;
    width: 170px;
  }
  .left_section .left_section_contents{
    width: 640px;
  }

  @media screen and (max-width: 1024px) {
    .title{
      margin-top: 30px;
      font-size: 40px;
      line-height: 46px;
    }
    .left_section{
      width: 54%;
      height: 70vh;
    }
    .right_section{
      height: 70vh;
    }
    .Guaranteed{
      width: 140px;
    }
    .left_section .left_section_contents{
      width: 500px;
    }
    .postcodeSearchBox{
      margin-top: 24px;
    }
    .postcodeSearchBox .searchBox{
      display: flex;
      gap: 10px;
    }
    .searchBtn{
      width: 168px;
    }
  }

  @media screen and (max-width: 769px) {
    .title{
      margin-top: 30px;
      font-size: 28px;
      line-height: 38px;
    }
    .left_section{
      width: 54%;
      height: 65vh;
    }
    .right_section{
      height: 65vh;
    }
    .Guaranteed{
      width: 140px;
    }
    .left_section .left_section_contents{
      width: 380px;
    }
    .postcodeSearchBox{
      margin-top: 24px;
    }
    .postcodeSearchBox .searchBox{
      display: flex;
      gap: 10px;
    }
    .searchBtn{
      width: 168px;
      font-size: 15px;
    }
  }

  @media screen and (max-width: 568px) {
    .hero_section{
      display: block;
    }
    .title{
      margin-top: 90px;
      font-size: 28px;
      line-height: 38px;
    }
    .left_section{
      width: 100%;
      height: auto;
      background: none;
    }
    .right_section{
      margin-top: -180px;
      width: 100%;
      height: auto;
    }
    .Guaranteed{
      width: 140px;
    }
    .left_section .left_section_contents{
      padding:0 24px;
      width: 100%;
    }
    .postcodeSearchBox{
      margin-top: 24px;
      z-index: 111;
      background: #fdfdfea6;
    }
    .searchBtn{
      font-size: 16px;
      width: 100%;
    }
    .postcodeSearchBox .searchBox{
      flex-direction: column;
    }


  }
</style>
