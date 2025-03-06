import React from 'react'
const Categories = () =>{
const data = [
  {cateImg:  "../../../public/imgs/category/cat-1.png",
    cateName: "Fashion",
  },
  {cateImg: "../../../public/imgs/category/cat-2.png",
    cateName: "Electronic",
  },
{
  cateImg: "../../../public/imgs/category/cat-3.png",
  cateName: "Cars",
},
{
  cateImg: "../../../public/imgs/category/cat1.png",
  cateName: "Home & Garden",
},
{
  cateImg: "../../../public/imgs/category/cat10.png",
  cateName: "Gifts",
},
{
  cateImg: "../../../public/imgs/category/cat11.png",
  cateName: "Music",
},
{
  cateImg: "../../../public/imgs/category/cat2.png",
  cateName: "Health & Beauty",
},
{
  cateImg: "../../../public/imgs/category/cat3.png",
  cateName: "Pets",
},
{
  cateImg: "../../../public/imgs/category/cat4.png",
  cateName: "Baby Toys",
},
{
  cateImg: "../../../public/imgs/category/cat5.png",
  cateName: "Groceries",
},
]
  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f-flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories