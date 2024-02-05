window.onload = function () {
  const table = document.getElementById('draggableTable');
  const thElements = table.getElementsByTagName('th');
  let startX, startWidth;

  for (let th of thElements) {
    th.onmousedown = function (event) {
      startX = event.clientX;
      startWidth = this.offsetWidth;
      document.onmousemove = onMouseMove;
      document.onmouseup = () => {
        document.onmousemove = document.onmouseup = null;
      }
    }
  }

  function onMouseMove(event) {
    const dx = event.clientX - startX;
    const newWidth = (startWidth + dx) + 'px';
    event.target.style.width = newWidth;
  }
}
