const mapArrayToString = require("./mapArrayToString")

describe("mapArrayToString", () => {
    test(("Если вызываем функцию и передаем массив с числами, то числа преобразуются в строчные элементы"),() => {
        const result = mapArrayToString([1, 2, 3, 4, 5])
        expect(result).toEqual(['1', '2', '3', '4', '5'])
    }),
    test(("Если вызываем функцию и передаем в массиве не только целые числа, но и null, undefined, 0.1 и строку, то числа преобразуются в строчные элементы"),() => {
        const result = mapArrayToString([1, 2, 3, null, undefined, 0.1, 'abcde'])
        expect(result).toEqual(['1', '2', '3' ])
    }),
    test(("Если вызываем функцию и передаем пустой массив, то числа преобразуются в строчные элементы"),() => {
        const result = mapArrayToString([])
        expect(result).toEqual([])
    }),
    test(("Если вызываем функцию и передаем массив с целыми числами, то вернется не null (отрицание)"),() => {
        const result = mapArrayToString([1, 2, 3])
        expect(result).not.toBeNull
    })
})