Положение картинки с точкой и текстов "Вы здесь" меняется при нажатии соответствующих кнопок на экране.
У всех объектов (картинок коортинатной плоскости, точки и элементов формы) положение на экране задано через
```js
style="position: absolute;"
```
Нажание кнопки со стрелкой (```←```, ```→```, ```↑```, ```↓```) меняет координаты изображения на заданное число пикселей через обращение к элементу
```js
document.getElementById("p").style.left = ...
```
или
```js
document.getElementById("p").style.top = ...
```