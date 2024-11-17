function info(str) {
    if(typeof str !== "string") {                                                   // пункт 1
        console.log('Пожалуйста, введите строковый тип данных');                    // пункт 2
        return;                                                                     // завершает работу функции на текущем этапе
    }

    if(str.length > 64 || str.length < 5) {
        console.log('Длина строки ввода должна составлять от 5 до 64 символов');    // пункт 3-4
        return;   
    }

    if(!/[A-Z]/.test(str) || !/[a-z]/.test(str)){
        console.log('Строка ввода должна содержать хотя бы 1 букву верхнего и нижнего регистра');  // пункт 5-6
        return;   
    }

    if(!/\d/.test(str)){
        console.log('Строка ввода должна содержать хотя бы 1 цифру'); 
        return;   
    }
        
    if(!/[@]/.test(str)){
        console.log('Строка ввода должна содержать хотя бы один символ @');
        return;   
    }

    if(!str.trim() === ""){
        console.log('Строка не должна быть пустой');
        return;  
    }
    console.log('Все проверки проведены успешно!');
}

info('Aaaaa5@');
