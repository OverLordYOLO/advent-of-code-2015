import { Utils } from "../src/utils";

describe('Utils', () => {
    it('should return correct character count for non-empty string and existing character', () => {
        const text = 'abcabcabc';
        const character = 'a';
        const expectedCount = 3;
        expect(Utils.characterCount(text, character)).toBe(expectedCount);
    });

    it('should return zero for non-empty string and non-existing character', () => {
        const text = 'abcabcabc';
        const character = 'd';
        expect(Utils.characterCount(text, character)).toBe(0);
    });

    it('should return zero for empty string regardless of character', () => {
        const text = '';
        const character = 'a';
        expect(Utils.characterCount(text, character)).toBe(0);
    });

    it('should return correct number of moves up for non-empty string and existing move up character', () => {
        process.env.CHARACTER_MOVE_UP = 'u';
        const text = 'uudud';
        const expectedCount = 3;
        expect(Utils.numberOfMovesUp(text)).toBe(expectedCount);
    });

    it('should return correct number of moves down for non-empty string and existing move down character', () => {
        process.env.CHARACTER_MOVE_DOWN = 'd';
        const text = 'uudud';
        const expectedCount = 2;
        expect(Utils.numberOfMovesDown(text)).toBe(expectedCount);
    });

    it('should return correct resulting floor for non-empty string and existing move up and down characters', () => {
        process.env.CHARACTER_MOVE_UP = 'u';
        process.env.CHARACTER_MOVE_DOWN = 'd';
        const text = 'uudud';
        const expectedFloor = 1;
        expect(Utils.calculateResultingFloor(text)).toBe(expectedFloor);
    });
});