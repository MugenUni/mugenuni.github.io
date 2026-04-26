/* Selectors */
const tabButtons = document.querySelectorAll('.tab-button');
const slidingPanels = document.querySelectorAll('.sliding-content');
 
/* Tab Switching */
function switchTab(tabName) {
  tabButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
 
  slidingPanels.forEach(panel => {
    panel.classList.toggle('active', panel.id === `${tabName}-panel`);
  });
}
 
/* Event Listeners */
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabName = button.dataset.tab;
    switchTab(tabName);
  });
});
 
document.addEventListener('DOMContentLoaded', () => {
  switchTab('skills');
});
 