import { HotKeys } from "react-hotkeys";
import React from "react";
import confetti from "canvas-confetti";
import { configure } from "react-hotkeys";

configure({
  ignoreTags: []
});

const keyMap = {
  up: "c h a n g w o r k s"
};

const handlers = {
  up: () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
};

function Keys() {
  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <input />
    </HotKeys>
  );
}

export default Keys;
