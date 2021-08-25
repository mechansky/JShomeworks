/*Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, надо получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 надо получить следующий объект: \
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999,
необходимо выдать соответствующее сообщение с 
помощью console.log и вернуть пустой объект.*/


function numberToObj(number) {
	if (number > 999) {
		console.log('некорректное число')
		return
	}
	else
		var arr = Array.from(String(number), Number)
	var obj = {
		units: arr[2],
		dozens: arr[1],
		hundreds: arr[0]
	}
	return obj
}

console.log(numberToObj(999))
