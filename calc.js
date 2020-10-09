let okno, result, curOp="";
okno = document.getElementById("display");

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