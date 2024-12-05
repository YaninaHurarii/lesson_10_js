/* 1. Створіть новий елемент <a>, задайте йому текст "Learn More" і атрибут href з посиланням на "#". Додайте цей елемент в footer після параграфу.*/

const footer = document.createElement("footer");
document.body.appendChild(footer);

const p = document.createElement("p");
p.textContent = "Lorem ipsum paragraph";

const a = document.createElement("a");

console.dir(a);

a.href = "#";
a.textContent = "Learn More";

footer.append(p);
footer.append(a);




/* 2.  Створіть новий елемент <select>. Задайте йому ідентифікатор "rating", і додайте його в тег main перед секцією "Features".

Створіть новий елемент <option> зі значенням "4" і текстом "4 Stars", і додайте його до списку вибору рейтингу.

Створіть новий елемент <option> зі значенням "3" і текстом "3 Stars", і додайте його до списку вибору рейтингу.

Створіть новий елемент <option> зі значенням "2" і текстом "2 Stars", і додайте його до списку вибору рейтингу.

Створіть новий елемент <option> зі значенням "1" і текстом "1 Star", і додайте його до списку вибору рейтингу.  */

const main = document.createElement("main");
const select = document.createElement("select");
console.dir(select);
select.id = "rating";

const section = document.createElement("section");
section.classList = "Features";

document.body.prepend(main);

main.append(select);
main.append(section);

const elemOptions = [
  { value: "4", text: "4 Stars" },
  { value: "3", text: "3 Stars" },
  { value: "2", text: "2 Stars" },
  { value: "1", text: "1 Star" },
];

for (const elemOption of elemOptions) {
  const option = document.createElement("option");
  option.value = elemOption.value;
  option.textContent = elemOption.text;
  select.appendChild(option);
}
