class Board {
  ctx;
  ctxNext;
  grid;

  constructor(ctx, ctxNext) {
    this.ctx = ctx;
    this.ctxNext = ctxNext;
    this.init();
  }

  init() {
    // Calculate size of canvas from constants.
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;

    // Scale so we don't need to give size on every draw.
    this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
  }

  // 새 게임이 시작되면 보드를 초기화한다.
  reset() {
    this.grid = this.getEmptyBoard();
  }

  // 0으로 채워진 행렬을 얻는다.
  getEmptyBoard() {
    return Array.from(
      {length: ROWS}, () => Array(COLS).fill(0)
    );
  }
}