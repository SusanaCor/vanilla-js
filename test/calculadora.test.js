import {
    sumar,
    restar,
    multiplicar,
    dividir,
    numerospares,
    numerosresiduos,
  } from "../src/calculadora.js";
  
  describe("suma", () => {
    test("suma 2 + 3 es 5", () => {
      expect(sumar(2, 3)).toBe(5);
    });
  });
  describe("resta", () => {
    test("resta 5 - 3 es 2", () => {
      expect(restar(5, 3)).toBe(2);
    });
  });
  
  describe("multiplica", () => {
    test("multiplica 5 * 3 es 15", () => {
      expect(multiplicar(5, 3)).toBe(15);
    });
  });
  
  describe("dividi", () => {
    test("dividi 10 / 2 es 5", () => {
      expect(dividir(10, 2)).toBe(5);
    });
  });
  
  describe("numero", () => {
    let list = [1, 55, 3, 4, 5, 6, 7, 8, 9, 10];
    test("Numeros pares", () => {
      expect(numerospares(list)).toBe(0);
    });
  
  });
  
  
  
  describe("numero2", () => {
    let listar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    test("Numeros divisibles ", () => {
      expect(numerosresiduos(listar)).toStrictEqual(0);
    });
  });

  