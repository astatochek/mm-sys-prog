Немножко измененный вариант предыдущей бисекции из ```15.9```, дополненной до рекурсивного варианта. Интересно, что в этот раз я решил подойти к ```eval()``` по-другому:
```js
function getF(f)
{
    function func(x)
    {
        return eval(f)
    }
    return func
}
```
Такая функция вернет искомую функцию, которая в качестве аргумента принимает числовую переменную.


Если задать переменную
```js
let f = getF(...)
```
то ее можно передавать в функции в качестве аргумента.