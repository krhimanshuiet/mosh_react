import React, { useState } from "react";
import styled  from "styled-components";
import {BsFillCalendarFill} from "react-icons/bs"
type ListItemProps = {
  active: boolean
}

const List =  styled.ul`
list-style: none;
padding: 0;
background: yellowgreen;
`

const ListItem = styled.li<ListItemProps>`
padding: 5px,0px;
background: ${props => props.active && 'blue'}
`
type PropsType = {
    items:string[],
    heading:string,
    handleSelectItem:(item:string) => void,
}
const ListGroup = ({items , heading , handleSelectItem }:PropsType): JSX.Element => {

// hooks for managing state 
  const [selectedIndex , setSelectedIndex] = useState<number>(-1)
  // event handler
  const handleClick = (index:number) => {
    setSelectedIndex(index);
    handleSelectItem(items[index])
  };

  return (
    <React.Fragment>
      <h1 style={{backgroundColor:"red"}}>{heading}</h1>
      {/* <ul className={[styles.listGroup , styles.container].join(' ')}>
        
      </ul> */}
      <BsFillCalendarFill color="red" size="40" />
      <List>
      {items.length ? (
          items.map(
            (listItem: string, index: number): JSX.Element => (
              // <li key={index} onClick={() => handleClick(index)} className={`list-group-item  ${selectedIndex === index && `bg-success`}`}>
              //   {listItem}
              // </li>
              <ListItem active={index === selectedIndex} key={index} onClick={() => handleClick(index)}>{listItem}</ListItem>
            )
          )
        ) : (
          <p>No Items found</p>
        )}
      </List>
    </React.Fragment>
  );
};

export default ListGroup;


// popular UI Libraries

/*
bootstrap
material ui
tailwind css
daisy ui
chakra ui
*/