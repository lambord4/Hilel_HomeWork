import Cat from "./app";

describe('Cat class', () => {
    test('создаёт объект с правильными полями', () => {
      const cat = new Cat('Мурка', 2);
      expect(cat.name).toBe('Мурка');
      expect(cat.age).toBe(2);
    });
  
    test('метод meow возвращает корректную строку', () => {
      const cat = new Cat('Барсик', 4);
      expect(cat.meow()).toBe('Барсик говорит "мяу"');
    });
  });