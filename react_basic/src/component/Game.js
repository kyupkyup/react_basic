import React, { useState } from "react";
import times from "lodash/times";
import { MAX_POS } from "../constant";
import { getInitialTileList } from "../util/tile";
import useMoveTile from "../hook/useMoveTile";
import Tile from "./Tile";

function Game({ setScore }) {
  const [tileList, setTileList] = useState(getInitialTileList);
  useMoveTile({ tileList, setTileList, setScore });
  return (
    <div className="game-container">
      <div className="grid-container">
        {times(MAX_POS, () => (
          <div className="grid-row">
            {times(MAX_POS, () => (
              <div className="grid-cell"></div>
            ))}
          </div>
        ))}
      </div>
      <div className="tile-container">
        {tileList.map((item) => (
          <Tile
            id={item.id}
            x={item.x}
            y={item.y}
            value={item.value}
            isNew={item.isNew}
            isMerged={item.isMerged}
          />
        ))}
      </div>
    </div>
  );
}

export default Game;
