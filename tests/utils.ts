import { Utils } from "../src/utils";

describe('utils', () => {
  it('should return number of characters in a string', () => {
    const text = 'aaabbba';
    const character = 'a';
    const numberOfCharacters = 4;
    expect(Utils.characterCount(text, character)).toBe(numberOfCharacters);
  });

    it('should return the count of a move up character', () => {
        const text : string = 'uduududdu';
        const numberOfMoveUpCharacters = 5;
        process.env.CHARACTER_MOVE_UP = 'u';
        expect(Utils.numberOfMovesUp(text)).toBe(numberOfMoveUpCharacters);
    });



    it('should return the count of a move down character', () => {
        const text : string = 'uududddu)';
        const numberOfMoveDownCharacters = 4;
        process.env.CHARACTER_MOVE_DOWN = 'd';
        expect(Utils.numberOfMovesUp(text)).toBe(numberOfMoveDownCharacters);
    });

    it('should return the resulting floor', () => {
        const text : string = 'uduududdu';
        const resultingFloor = 1;
        process.env.CHARACTER_MOVE_UP = 'u';
        process.env.CHARACTER_MOVE_DOWN = 'd';
        expect(Utils.calculateResultingFloor(text)).toBe(resultingFloor);
    });
});