import FruitImg01 from "../images/fruit-img01.jpg";
import FruitImg02 from "../images/fruit-img02.jpg";
import FruitImg03 from "../images/fruit-img03.jpg";
import FruitImg04 from "../images/fruit-img04.jpg";
import FruitImg05 from "../images/fruit-img05.jpg";
import FruitImg06 from "../images/fruit-img06.jpg";
import FruitImg07 from "../images/fruit-img07.jpg";



const fruits = [
  {
    id: "01",
    title: "Cam",
    city: "HiepDuc",
    distance: 300,
    address:'QuangNam',
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "NhatDuat",
        rating: 4.6,
      },
      {
        name: "NhatDuat",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: FruitImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Xoài",
    city: "QueTho",
    distance: 400,
    address:'QuangNam',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "NhatDuat",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: FruitImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Ổi",
    city: "QueTho",
    distance: 500,
    address:'QuangNam',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "NhatDuat",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: FruitImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Bưởi",
    city: "QueTho",
    distance: 500,
    address:'QuangNam',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "NhatDuat",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: FruitImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nho",
    city: "QueSon",
    distance: 500,
    address:'QuangNam',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "NhatDuat",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: FruitImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Vải",
    city: "QueSon",
    distance: 500,
    address:'QuangNam',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "NhatDuat",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: FruitImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Dừa",
    city: "QueTho",
    distance: 500,
    address:'QuangNam',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
     
    ],
    avgRating: 4.5,
    photo: FruitImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Ổi",
    city: "QueTho",
    distance: 500,
    address:'QuangNam',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
    
    ],
    avgRating: 4.5,
    photo: FruitImg03,
    featured: false,
  },
];

export default fruits;
