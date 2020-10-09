let okno, result, curOp="";
okno = document.getElementById("display");

function PlusMinus()
{
    result = okno.value.split(" ");
    // проверка - является ли последний элемент числом
    if ( Number.isInteger(parseInt(result[result.length - 1])) )
    {
        let num = result[result.length - 1] * (-1);
        let s = "";
        result[result.length - 1] = String(num);
        for (let i = 0; i < result.length; i++)
        {
            // костыль, иначе после последнего числа будет пробел, из-за которого
            // не будет смена знака работать не будет
            if (i == result.length - 1)
            {
                s += result[i];
                continue;
            }
            s += result[i] + " ";
        }
        okno.value = s;
    }
}

function Result()
{
    result = okno.value.split(" ");
    let s = parseInt(result[0]);
    for (let i = 1; i < result.length; i++)
    {
        if (i % 2 == 1)
        {
            switch (result[i])
            {
                case "+":
                    s += parseInt(result[i + 1]);
                    break;
                case "-":
                    s -= parseInt(result[i + 1]);
                    break;
                case "*":
                    s *= parseInt(result[i + 1]);
                    break;
                case "/":
                    if (parseInt(result[i + 1]) == 0)
                    {
                        okno.value = "Деление на 0";
                        return ;
                    }
                    s /= Integer.parseInt(s[i + 1]);
                    break;
            }
        }
        else
        {
            continue;
        }
    }
    okno.value = String(s);
}

function Operation(op)
{
    // если последний символ в поле - цифра, то добавляем знак арифметической операции
    if (parseInt(okno.value[okno.value.length - 1]) >= 0 && parseInt(okno.value[okno.value.length - 1]) <= 9)
    {
        okno.value += " " + op + " ";
    }
    // иначе - меняем операцию
    else
    {
        okno.value = okno.value.slice(0, okno.value.length - 3) + " " + op + " ";
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