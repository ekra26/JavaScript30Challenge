const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
  console.log('Hello');
}

function toggleActive(e) {
  // console.log(e.propertyName);
  // console.log(e.propertyName.includes('flex'));
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));