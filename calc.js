let okno, result, curOp="";
okno = document.getElementById("display");



function Operation(op)
{
    // ���� ��������� ������ � ���� - �����, �� ��������� ���� �������������� ��������
    if (parseInt(okno.value[okno.value.length - 1]) >= 0 && parseInt(okno.value[okno.value.length - 1]) <= 9)
    {
        okno.value += " " + op + " ";
    }
}

function SetNumber(num)
{
    // ���� � ���� �������� 0, ��������� ����
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