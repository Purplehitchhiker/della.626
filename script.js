let scrollContainer = document.getElementById("scroll-container");
let scrollAmount = 0;

function scrollContent() {
  scrollAmount++;
  if (scrollAmount > scrollContainer.scrollWidth) {
    scrollAmount = 0;
  }
  scrollContainer.scrollLeft = scrollAmount;
}

setInterval(scrollContent, 30);
// ... (existing scrolling code) ...

function openChat(chatName) {
  alert(`Opening ${chatName}`);
  // Here you can add code to open the actual chat window or navigate to the chat page