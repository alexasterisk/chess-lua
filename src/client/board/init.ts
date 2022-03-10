const size = { x: 8, y: 8 };
const color = [ new Color3(1, 1, 1), new Color3(0, 0, 0) ];
import standard as layout from "./setup";

// end custom data

import Players from "@rbxts/services";
const player = Players.LocalPlayer;
const playerGui = player.WaitForChild("PlayerGui");

const boardGui = new Instance("ScreenGui");
boardGui.Name = "ChessBoard";

const boardFrame = new Instance("Frame");
boardFrame.Name = "Holder";

const boardData = new Map<>();
for (const row = 1, row < size.y, row++) {
  const inverted = row % 2 == 0;
  for (const column = 1, column < size.x, column++) {
    let bgColor = inverted ? color[!(column % 2)] : color[column % 2];
  }
}

boardFrame.Parent = boardGui;

boardGui.Parent = playerGui;
