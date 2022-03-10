const size = { x: 8, y: 8 };
const color = [ new Color3(1, 1, 1), new Color3(0, 0, 0) ];
import { alphabet, standard, ownership } from "./setup";

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
  const rowName = alphabet[row];
  const inverted = row % 2 == 0;

  for (const column = 1, column < size.x, column++) {
    const bgColor = inverted ? color[!(column % 2)] : color[column % 2];
    const identifier = rowName + column;
    const piece = standard[row][column];
    const owner = ownership[row];
    
    
  }
}

boardFrame.Parent = boardGui;

boardGui.Parent = playerGui;
