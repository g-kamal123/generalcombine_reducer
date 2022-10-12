import { Button, Card, Heading, TextField } from "@shopify/polaris";
import React, { useState } from "react";
import { connect } from "react-redux";
import { buy_chocko } from "../Actions/Action";
import { mapToDispatch, mapToState } from "../Maps/Map";
const Chocklate = (props) => {
  const [num, setNum] = useState();
  const [error,setError] = useState(false)
  const [orderstatus,setOrderStatus] = useState(false)

  const inpHandler = (e) => {
    if(e<0){
      alert("quantity can't be negative")
      return
    }
    setNum(e);
  };
  const btnHandler =()=>{
    setOrderStatus(false)
    setError(false)
    if(num===undefined){
      return
    }
    if(Number(num)===0){
      return
    }
    if(num>props.CakeReducer.cake){
      setError(true)
      return
    }
    props.buy(buy_chocko,num)
    setError(false)
    setOrderStatus(true)
  }
  return (
    <Card sectioned>
      <Heading>Number of available Chockolates: {props.ChockoReducer.chocklate}</Heading>
      <TextField
        placeholder="enter number of chockolates to buy"
        type="number"
        value={num}
        onChange={inpHandler}
      />
       {error && <Heading>Ordered quantity is currently not available in store</Heading>}
       {orderstatus && <Heading>Order Placed</Heading>}
      <Button onClick={btnHandler}>Buy</Button>
    </Card>
  );
};

export default connect(mapToState,mapToDispatch)(Chocklate);
