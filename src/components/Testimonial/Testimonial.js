import React from 'react'
import './Testimonial.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from 'react-reveal/Zoom';
import MyImage from './port.jpg';

const Testimonial = () => {

  const data = [
    {
      name: "Hazelwood",
      position: "MD of Google",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam ",
    },

    {
      name: "Smith",
      position: "MD of Google",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam ",
      image: "https://www.bhaktiphotos.com/wp-content/uploads/2021/08/HD-Shivudu-God-Bhagwan-Shivudu-Wallpaper.jpg"
    },

    {
      name: "Warner",
      position: "MD of Google",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaa2vaxPbjmKWnYNXcYXA1djdGWEK_9HNx_g&usqp=CAU"
    },

    {
      name: "Jhonson",
      position: "MD of Google",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORonbZ6kGyD1JNCyJjytZ1cfdebTHSe6duQ&usqp=CAU"
    },
    {
      name: "Ricky",
      position: "MD of Google",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZ_PKvb7AstHkYiVBp3rM21EIzdrS9RLxBA&usqp=CAU"
    },
    {
      name: "Michael",
      position: "MD of Google",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fT2rHUgO84kWMZWOjCHPv7htUgseOorS0g&usqp=CAU"
    },
    {
      name: "David",
      position: "MD of Google",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN84ReCIZlGWrKR2UPjc-pmNvMOXZINEHkGQ&usqp=CAU"
    },
    {
      name: "Zampa",
      position: "MD of Google",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66FT3capcrv-Ua8VmXAis4OpK-FaOmG8FJA&usqp=CAU"
    },
    {
      name: "Tim",
      position: "MD of Google",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2hEXKYBEJMmit0SeKQP_JsGOknHaKGmx8Q&usqp=CAU"
    },
    {
      name: "Cummins",
      position: "MD of Google",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnqa-uECVLQiYfOE-9hVv9QFtLwSzGxj61A&usqp=CAU"
    },

  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    // slidesToScroll: 4,
    initialSlide: 0,
    autoplay:true,
    rows:1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const colors = [
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#4808BA",
    "#FF6347",
    "#FF1042",
    "purple",
    "black",
    "grey",
     "aqua"
]




  return (
    <div className='container testimonial-section' id='testimonials'>
      <div className="section-title">
        <h5>Testimonials</h5>
        <span className="line"></span>
      </div>

      <div className="testimonial-slider">

        <Slider {...settings}>

          {data.map((item, index) => (
          
          <Zoom>
            <div className="content-slider-main">
              <div className="content-slider" style={{backgroundColor:colors[index]}} key={index}>

                <img src={MyImage} alt="testimonial iamge" className='center-image' />
                <p>{item.name}</p>
                <p>{item.position}</p>
                <p>{item.des}</p>
              </div>
            </div>
            </Zoom>
          ))}
        </Slider>
      </div>



    </div>
  )
}

export default Testimonial