const delay = require("./delay")

describe("Тестируем функцию delay", () => {
   test("Если вызываем функцию delay, то ожидается 10 ", async () => {
    const sum = await delay(() => 5 + 5 , 1000)
    expect(sum).toBe(10)
   })
}) 