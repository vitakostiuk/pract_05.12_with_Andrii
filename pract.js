// Задание 3
// Напиши скрипт имитирующий авторизацию администратора в панели управления.
// Есть переменная message в которую будет ��аписано сообщение о результате. 
// При загрузке страницы у посетителя запрашивается пароль через prompt: Если нажали Cancel, записать в 
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!' 
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!' 
// После всех проверок вывести в alert значение переменной message.const
// Задание 4
// На счету пользователя есть 35500 кредитов, значение хранится в переменной credits(создай и присвой). 
// Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку.
// Цена одного дроида хранится в переменной pricePerDroid(создай и присвой).
// При посещении страницы, используя prompt, необходимо спросить количество
//  дроидов которые пользователь хочет купить и сохранить в переменную.
// Напиши скрипт который: Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
//  В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
//  Проверяет сможет ли пользователь оплатить заказ: если сумма к оплате превышает количество кредитов на счету,
//     выводи в консоль сообщение 'Недостаточно средств на счету!'.
//     в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.
// const credits = 35500;
// const pricePerDroid = 3000;
// const amauntDroidsToBuy = prompt("еобходимо спросить количество дроидов которые пользователь хочет купить");
// let totalPrice = 0;
// let mess = "";
// const totalOrder = amauntDroidsToBuy * pricePerDroid;

// if (!amauntDroidsToBuy) {
//     mess = 'Отменено пользователем!';
    
// }
// else if (totalOrder> credits) {
//     mess ='Недостаточно средств на счету!'
    
// }
// else {
//     mess=`Вы купили ${amauntDroidsToBuy} дроидов, на счету осталось ${credits - totalOrder} кредитов.`
    
// }
// console.log(mess);
// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
//     Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.Обязательно используй switch.
//  Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.Но доставка есть не везде, если указанной страны нет в списке,
//     то выводи в alert сообщение 'В вашей стране доставка не доступна'.
// Ниже приведен список стран и стоимость доставки.
// Китай - 150 кредитов Чили - 250 кредитов Австралия - 165 кредитов Индия - 90 кредитов Ямайка - 130 кредитов
// let state = prompt("Вудіть країну").toLowerCase().split("");
// state[0] = state[0].toUpperCase();
// state = state.join("");
// let price = 0;
// let state = prompt("Вудіть країну").toLowerCase();
// state = state[0].toUpperCase() + state.slice(1);
// switch (state) {
//     case "Китай":
//         price = 150;
//         console.log(`Доставка в ${state} будет стоить ${price} кредитов`)
//         break;
//     case "Австралия":
//         price = 300;
//         console.log(`Доставка в ${state} будет стоить ${price} кредитов`)
//         break;
//     case "Индия":
//         price = 160;
//         console.log(`Доставка в ${state} будет стоить ${price} кредитов`)
//         break;
//     case "Ямайка":
//         price = 120;
//         console.log(`Доставка в ${state} будет стоить ${price} кредитов`)
//         break;
//     default:
//         console.log("Сьюи немає доставки");
// }