export class HistoryStack {
  constructor(maxSteps = 20) {
    this.stack = [];
    this.maxSteps = maxSteps;
  }

  push(ctx) {
    try {
      const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.stack.push(imageData);
      if (this.stack.length > this.maxSteps) {
        this.stack.shift();
      }
    } catch (e) {
      console.warn('Cannot push to history stack', e);
    }
  }

  undo(ctx) {
    if (this.stack.length > 1) {
      this.stack.pop();
      const prev = this.stack[this.stack.length - 1];
      ctx.putImageData(prev, 0, 0);
    }
  }
}
