import ColourConstants from "../logic/ColourConstants";

class Board {
  private width: number;
  private height: number;
  private board: number[][];
  private numOfHexes: number;

  // default: 20x15
  // 12 is the game board, 6 on top for new pieces
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.numOfHexes = 0;
    this.board = [][];
    for (var x: number = 0; x < 20; x++) {
      for (var y: number = 0; y < 15; y++) {
        this.board[y][x] = 0;

        // block off access to the even-odd hexes in the board
        // if (y%2 == 1) {
        //   if (x%2 == 0) {
        //     this.board[y][x] = -1
        //   }
        // } else {
        //   if (x%2 == 1) {
        //     this.board[y][x] = -1
        //   }
        // }
      }
    }
  }

  public clearHexesAtLocation(locations: number[][]): void {
    locations.forEach((coordinate: number[]) => {
      this.board[coordinate[1]][coordinate[0]] = 0
    });
  }

  public clearHexesOfColour(colour: ColourConstants): void {
    for (var x: number = 0; x < 20; x++) {
      for (var y: number = 0; y < 15; y++) {
        if (this.board[y][x] === colour) this.board[y][x] = 0;
      }
    }
  }


  private DFS(start: number[], visited: boolean[][]): number[][] {
    visited[start[1]][start[0]] = true;
    const thisColour = this.board[start[1]][start[0]];

    for (var i = 0; i < (this.numOfHexes - 1); i++) {
      if (this.board[start[1]][start[0]]) 
    }
    const ret: number[][]= [[0]];
    return ret;
  };

  private MatrixTraversal(start: number[][]): number[][] {
    const ret: number[][]= [[0]];
    return ret;
  }

  public checkForSpecialHexagon(): void {
    return;
  }

  public checkForSpecialTriangle(): void {
    // account for upside down
    return;
  }

  public checkForSpecialLine(): void {
    // account for \ and / directions
    return;
  }

  public checkForSix(): void {
    // perform traversal
    if (true) {
      this.checkForSpecialHexagon();
      this.checkForSpecialTriangle();
      this.checkForSpecialLine();
    }
  }
}