// Собирает полноценный index.html из фрагмента source/page.html.
// Фрагмент — исходник для публикации артефакта (он не должен содержать
// doctype/html/head/body), а сайту нужен нормальный документ.
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const fragment = fs.readFileSync(path.join(ROOT, "source/page.html"), "utf8");

const html = `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Обновлённая программа Павла Федоренко для выпускников Института КПТ: трёхуровневая модель тревоги, 9 месяцев обучения, 19 900 ₽.">
<style>:root{color-scheme:light dark}body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
${fragment}
</body>
</html>
`;

fs.writeFileSync(path.join(ROOT, "index.html"), html, "utf8");
console.log("index.html собран:", (html.length / 1024).toFixed(0), "КБ");
