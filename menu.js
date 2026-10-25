// Draws the same table menu on every page into <table class="menu">
document.querySelector("table.menu").innerHTML = "<tr>" + [
  ["index.html", "Головна", "Home"],
  ["hobby.html", "Моє хобі", "My hobby"],
  ["rainbow.html", "Веселка", "Rainbow"],
  ["links.html", "Посилання", "Links"],
  ["task3.html", "Завдання 3", "Task 3"],
].map(([href, uk, en]) =>
  `<td><a href="${href}"><span class="uk">${uk}</span><span class="en">${en}</span></a></td>`
).join("") + "</tr>";
