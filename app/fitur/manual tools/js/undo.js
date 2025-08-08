// js/undo.js
export function undoLast(canvas, ctx, history) {
  if (history.length > 1) {
    history.pop();
    const prevState = history[history.length - 1];
    const img = new Image();
    img.src = prevState;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  }
}
