
while (true)
{
    let num = prompt('Введите номер задания от 1 до 5')


    if (num == 1)
    {
        let m = prompt('Введите целое m')
        let n = prompt('Введите целое k')
    
        let flag = (m % n == 0);
    
        if (flag) { alert(`${m} делится на ${n}`); }
        else { alert(`${m} не делится на ${n}`); }
    }
    
    
    if (num == 2)
    {
        let A = prompt(`Введите вещественное A`)
        let B = prompt(`Введите вещественное B`)
        let C = prompt(`Введите вещественное C`)
        
        let flag = (A <= B) && (B <= C);
        if (flag) { alert(`${A}, ${B}, ${C} образуют неубывающую последовательность`); }
        else { alert(`${A}, ${B}, ${C} не образуют неубывающую последовательность`); }
    }
    
    
    if (num == 3)
    {
        let X = prompt(`Введите вещественное X`)
        let Y = prompt(`Введите вещественное Y, не равное ${X}`)
        let Z = prompt(`Введите вещественное Z, не равное ${X} и ${Y}`)
        
        let flag = (X > Y) && (X > Z)
        if (flag && Y != Z) { alert(`X(=${X}) является максимумом среди попарно различных X(=${X}), Y(=${Y}) и Z(=${Z})`); }
        else { alert(`X(=${X}) является максимумом или X(=${X}), Y(=${Y}) и Z(=${Z}) не попарно различны`)}
    }
    
    
    if (num == 4)
    {
        let A = prompt(`Введите булевое A`)
        let B = prompt(`Введите булевое B`)
        let C = prompt(`Введите булевое C`)
        
        let flag = !(A || B || C)
        
        if (flag) { alert(`Ни одна переменная из A, B и C не истинна`) }
        else { alert(`Минимум одна из переменных A, B и C истинна`)}
    }
    
    
    if (num == 5)
    {
        let A = prompt(`Введите булевое A`)
        let B = prompt(`Введите булевое B`)
        let C = prompt(`Введите булевое C`)
        
        let flag = A || B || C
        
        if (flag) { alert(`По крайней мере одна из переменных A, B и C истинна`) }
        else { alert(`Ни одна переменная из A, B и C не истинна`)}
    }
}


