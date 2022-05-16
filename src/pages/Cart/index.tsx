import React, {useEffect} from 'react';
import {CartContainer} from '../Category'
import {useSelector} from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Index = () => {
  const state: any = useSelector(state=>state)
  useEffect(()=>console.log(state.cart),[])
  return (
      <>
        <Header/>
        <CartContainer items={state.cart} />
        <Footer/>
      </>
  );
};

export default Index;
