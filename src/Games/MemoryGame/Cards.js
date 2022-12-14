import React, { useState } from "react";
import Card from "./Card";
import { Container } from "@nextui-org/react/";
import StartButton from "../../components/StartButton";
import { Button } from "@nextui-org/react";

import styles from "./MemoryGame.module.css";

function Cards() {
  const data = [
    {
      id: 1,
      img: "./memoryGameImg/chess.jpg",

      stat: "",
    },
    {
      id: 1,
      img: "./memoryGameImg/chess.jpg",

      stat: "",
    },
    {
      id: 2,
      img: "./memoryGameImg/flappy.png",

      stat: "",
    },
    {
      id: 2,
      img: "./memoryGameImg/flappy.png",

      stat: "",
    },
    {
      id: 3,
      img: "./memoryGameImg/memorygame.jpg",

      stat: "",
    },
    {
      id: 3,
      img: "./memoryGameImg/memorygame.jpg",

      stat: "",
    },
    {
      id: 4,
      img: "./memoryGameImg/snake1.png",

      stat: "",
    },
    {
      id: 4,
      img: "./memoryGameImg/snake1.png",

      stat: "",
    },
    {
      id: 5,
      img: "./memoryGameImg/tetris.jpg",

      stat: "",
    },
    {
      id: 5,
      img: "./memoryGameImg/tetris.jpg",

      stat: "",
    },
    {
      id: 6,
      img: "./memoryGameImg/tic-tac-toe.jpg",

      stat: "",
    },
    {
      id: 6,
      img: "./memoryGameImg/tic-tac-toe.jpg",

      stat: "",
    },
  ];
  const [items, setItems] = useState(data.sort(() => Math.random() - 0.5));
  const [prev, setPrev] = useState(-1);
  const refreshPage = () => {
    window.location.reload();
  };
  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }
  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }
  return (
    <>
      <div className={styles.container}>
        {items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))}
      </div>
      <Container
        display="flex"
        justify="center"
        css={{ width: "100%", margin: "2rem 0" }}
      >
        <Button
          shadow
          color="primary"
          size="xl"
          css={{
            alignSelf: "center",
            // marginTop: `${marginUp ? marginUp : ""}`,
            fontSize: "1.5rem",
          }}
          auto
          onClick={refreshPage}
          // buttonText="New Game"
        >
          New Game
        </Button>
      </Container>
    </>
  );
}

export default Cards;
