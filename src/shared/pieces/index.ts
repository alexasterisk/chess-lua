class BasePiece {
  inCheck: boolean;
  position: { x: number, y: number };
  piece: Frame;
  
  constructor (pieceIcon: string, pieceColor: Color3) {
    const piece = new Instance("Frame");
    const icon = new Instance("ImageLabel");
    icon.Image = pieceIcon;
    icon.ImageColor3 = pieceColor;
    icon.Parent = piece;

    this.piece = piece; // TODO
  }
}


class Pawn extends BasePiece {
  firstMove: boolean = true;
  facing: string,

  constructor (color: Color3, x: number, y: number, direction: string) {
    super("", color); // TODO
    this.position = { x = x, y = y };
    this.facing = direction;
  }

  move (x: number, y: number) {
    // TODO
  }
  
  moveTo (x: number, y: number) {
    if (this.inCheck) return;
    if (this.position.x === x) {
      if (this.facing == "toBlack") {
        if (y - this.position.y === 1) this.move(x, y);
        else if (this.firstMove && y - this.position.y === 2) this.move(x, y);
      } else {
        if (this.position.y - y === 1) this.move(x, y);
        else if (this.firstMove && this.position.y - y === 2) this.move(x, y);
      }
    }
  }
}

function convert(name: string): any {
  switch (name) {
    case "p": return Pawn;
  }
}

export default class Piece {
  constructor (pieceName: string, pos: {x: number, y: number}, ...args: any[]) {
    this = new (convert(pieceName))(pos.x, pos.y, args);
  }
}
