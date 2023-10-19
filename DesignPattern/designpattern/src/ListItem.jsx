import React from 'react'

const ListItem = ({item}) => {
  return (
      <div  style={{ padding: "10px", backgroundColor: "aliceblue",width:"100px", fontWeight: "bold", color: "black", margin:"10px"}}>
      {item}
    </div>
  )
}

export default ListItem
