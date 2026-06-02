const events = [
  { name: 'Eurovision 2021 finals' },
  { name: 'Atlas Weekend' },
  { name: 'LP' },
  { name: 'MONATIK' },
];

const input = document.querySelector('#searchInput');

input.addEventListener('input', event => {
  const value = event.target.value.toLowerCase();

  const result = events.filter(item => item.name.toLowerCase().includes(value));

  console.log(result);
});
