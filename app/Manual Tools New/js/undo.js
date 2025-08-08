export class HistoryStack {
  constructor() {
    this.stack = [];
    this.maxSize = 20;
  }

  push(ctx) {
    try {
      const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.stack.push(imageData);
      if (this.stack.length > this.maxSize) {
        this.stack.shift();
      }
    } catch (e) {
      // Ignore cross-origin errors
    }
  }

  undo(ctx) {
    if (this.stack.length > 1) {
      this.stack.pop();
      const previous = this.stack[this.stack.length - 1];
      ctx.putImageData(previous, 0, 0);
    }
  }
}
