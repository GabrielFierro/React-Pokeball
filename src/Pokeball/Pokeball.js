import React from "react";

const Pokeball = ({ children }) => {
  return (
    <div class="pokebola_red">
      <div class="color_red"></div>
      <div class="line"></div>
      <div class="dark_circle"></div>
      <div class="light_circle"></div>
      <div class="little_circle"></div>
      <div>{children}</div>
    </div>
  );
};

export default Pokeball;