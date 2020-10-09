let okno, result, curOp="";
okno = document.getElementById("display");



function Operation(op)
{
    // если последний символ в поле - цифра, то добавляем знак арифметической операции
    if (parseInt(okno.value[okno.value.length - 1]) >= 0 && parseInt(okno.value[okno.value.length - 1]) <= 9)
    {
        okno.value += " " + op + " ";
    }
}

function SetNumber(num)
{
    // если в поле значение 0, обновляем поле
    if (parseInt(okno.value) == 0)
    {
        okno.value = num;
        return;
    }
    okno.value += num;
}

function Clear()
{
    okno.value = "0";
    result = 0;
}