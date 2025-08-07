import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Sliderhome.css'
function SliderHome() {
  const Sdata = [
    {
      id: 1,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: "../../../public/imgs/SildeCard/slide-1.png",
    },
    {
      id: 2,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: "../../../public/imgs/SildeCard/slide-2.png",
    },
    {
      id: 3,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: "../../../public/imgs/SildeCard/slide-3.png",
    },
    {
      id: 4,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: "../../../public/imgs/SildeCard/slide-4.png",
    },
  ]
  const settings = {
    dots:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className="container">
          <Slider {...settings}>
          {Sdata.map((value , index)=>{
              return(
                <div className=" box d-flex top" key={index}>
                  <div className="left">
                    <h1>{value.title}</h1>
                    <p>{value.desc}</p>
                    <button className='btn-primary'>Visit Collections</button>
                  </div>
                  <div className="right">
                    <img src={value.cover} alt="" />
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default SliderHome
