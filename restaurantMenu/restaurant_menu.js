const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15']
const mainCourseMenu = ['Steak -$29', 'Pasta -$25', 'Burger -$25', 'Salmon -$29'];
const dessertMenu = ['Cake -$10', 'Ice Cream -$10', 'Pudding -$10', 'Fruit Salad -$10'];


const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

