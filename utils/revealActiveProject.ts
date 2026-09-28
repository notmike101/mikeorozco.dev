export function revealActiveProject(list: HTMLElement) {
  if (!list.clientHeight) return;
  const active = list.querySelector<HTMLElement>('[aria-current]');
  if (!active) return;
  const viewport = list.getBoundingClientRect();
  const item = active.getBoundingClientRect();
  // Adjust only this list; scrolling the element into view can also move the page.
  list.scrollTop += item.top < viewport.top
    ? item.top - viewport.top
    : Math.max(0, item.bottom - viewport.bottom);
}
