import {getSuperArr} from './../getSuperArr';

export function slideNext(index = 0) {
        const superArr = getSuperArr();

        //зацикливание слайдов 
        //когда текущий индекс (переменная index) доходит до конца массива, то текущий индекс (переменная index) становится нулевым (index = 0)
        if (index == superArr.length-1) {
            index = 0;
        // в других случаях текущий индекс (переменная index) станет следующим слайдом (index+1)
        } else (index = index+1);
}

export function slidePrev(index = 0) {
    const superArr = getSuperArr();

    //обратная прокрутка слайдов
    //когда текущий индекс (переменная index) становится на исходную точку (index == 0), то текущий индекс (переменная index) перелистывается в обратную сторону/с первого слайда на последний (index = superArr.length-1)
    if (index == 0) {
    index = superArr.length-1
    //в других случаях текущий индекс (переменная index) станет предыдущим слайдом (index-1)
    } else (index = index-1);
}