import React from "react";

function GameIFrame() {
 return (
  <>
   <div className="game-box">
    <iframe id="gameFrame" src="https://eggycar2.io/eggy-car.embed" frameBorder="0" loading="lazy" />
   </div>
  </>
 );
}

export default GameIFrame;
