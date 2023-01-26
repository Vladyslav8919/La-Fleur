import React from 'react';
import {
  AiOutlineGift,
  AiOutlineClockCircle,
  AiOutlineHeart,
} from 'react-icons/ai';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <AiOutlineGift />,
    title: 'ENCHANTING GIFTS',
    text: 'Put your love on display with the most whimsicle arrangements, along with the most elite floral experience featuring our Lifetime Flowers.',
  },
  {
    id: 2,
    icon: <AiOutlineClockCircle />,
    title: 'THE LIFETIME FLOWERS',
    text: 'Our unique preservation process ensures your bouquet will keep the look and feel of fresh flowers month after month. ',
  },
  {
    id: 3,
    icon: <AiOutlineHeart />,
    title: 'IMPRESSION',
    text: 'Whether you are looking for a more creative "Thank you" or a simple and sweet "I love you" - La Fleur delivers a box of flowers guaranteed to leave an everlasting impression!',
  },
];

export const products_url = '/.netlify/functions/products';

export const single_product_url = '/.netlify/functions/single-product?id=';
