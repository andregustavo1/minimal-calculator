function calc() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const result = document.getElementById('result');

    const calc = (num2 * num3) / num1;

    if (isNaN(calc)) {
        result.textContent = 'X';
    } else{
        const calcStr = calc.toString();
        result.textContent = calcStr.substring(0, 9);
    }
}

function calc2() {
    const num4 = parseFloat(document.getElementById('num4').value);
    const num5 = parseFloat(document.getElementById('num5').value);
    const result2 = document.getElementById('result2');

    const calc2 = num4 * (num5 / 100);

    if (isNaN(calc2)) {
        result2.textContent = 'X';
    } else{
        const calcStr = calc2.toString();
        result2.textContent = calcStr.substring(0, 9);
    }
}

const ruleOfThreeContainer = document.getElementById('rule-of-three-container');
const ruleOfThreeBtn = document.getElementById('rule-of-three-btn');

const percentageContainer = document.getElementById('percentage-container');
const percentageBtn = document.getElementById('percentage-btn');

const h1Calculator = document.getElementById('calculator-h1');

ruleOfThreeBtn.addEventListener('click', () => {
    ruleOfThreeBtn.classList.add('border-b-orange-600');
    percentageBtn.classList.remove('border-b-blue-600');

    ruleOfThreeContainer.classList.remove('hidden');
    percentageContainer.classList.add('hidden');

    h1Calculator.classList.add('hidden');
});

percentageBtn.addEventListener('click', () => {
    ruleOfThreeBtn.classList.remove('border-b-orange-600');
    percentageBtn.classList.add('border-b-blue-600');

    ruleOfThreeContainer.classList.add('hidden');
    percentageContainer.classList.remove('hidden');

    h1Calculator.classList.add('hidden');
});

const html = document.querySelector('html');
const themeSwitcherBtn = document.getElementById('theme-switcher-btn');

html.classList.toggle('dark', localStorage.getItem('theme') === 'dark');

themeSwitcherBtn.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : ' ');
    changeThemeImg();
});

function changeThemeImg() {
    themeSwitcherBtn.classList.toggle('ri-sun-fill', html.classList.contains('dark'));
    themeSwitcherBtn.classList.toggle('ri-moon-fill', !html.classList.contains('dark'));
};

document.addEventListener('DOMContentLoaded', changeThemeImg);

const darkBrowser = window.matchMedia("(prefers-color-scheme: dark)").matches;

const favicon = document.querySelector('link[rel="icon"]');

if (darkBrowser) {
    favicon.href = "./src/images/favicon-light.png";
} else {
    favicon.href = "./src/images/favicon-dark.png";
}
