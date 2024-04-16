import 'dotenv/config';

/**
 * Utility class that provides methods for character counting and floor calculation.
 */
export class Utils {
    /**
     * Counts the occurrences of a specific character in a given text.
     * @param {string} text - The text to search in.
     * @param {string} character - The character to count.
     * @returns {number} The number of occurrences of the character in the text.
     */
    public static characterCount(text: string, character: string): number {
        let count: number = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === character) {
                count++;
            }
        }
        return count;
    }

    /**
     * Counts the number of 'move up' characters in a given text.
     * The 'move up' character is defined in the environment variable CHARACTER_MOVE_UP.
     * @param {string} text - The text to search in.
     * @throws {Error} If the CHARACTER_MOVE_UP environment variable is not set.
     * @returns {number} The number of 'move up' characters in the text.
     */
    public static numberOfMovesUp(text: string): number {
        if (!process.env.CHARACTER_MOVE_UP) throw new Error("Please set the required environment variables.");

        return this.characterCount(text, process.env.CHARACTER_MOVE_UP);
    }

    /**
     * Counts the number of 'move down' characters in a given text.
     * The 'move down' character is defined in the environment variable CHARACTER_MOVE_DOWN.
     * @param {string} text - The text to search in.
     * @throws {Error} If the CHARACTER_MOVE_DOWN environment variable is not set.
     * @returns {number} The number of 'move down' characters in the text.
     */
    public static numberOfMovesDown(text: string): number {
        if (!process.env.CHARACTER_MOVE_DOWN) throw new Error("Please set the required environment variables.");

        return this.characterCount(text, process.env.CHARACTER_MOVE_DOWN);
    }

    /**
     * Calculates the resulting floor after a series of 'move up' and 'move down' operations.
     * The 'move up' and 'move down' characters are defined in the environment variables CHARACTER_MOVE_UP and CHARACTER_MOVE_DOWN respectively.
     * @param {string} text - The text containing the series of 'move up' and 'move down' operations.
     * @returns {number} The resulting floor after the operations.
     */
    public static calculateResultingFloor(text: string): number {
        return this.numberOfMovesUp(text) - this.numberOfMovesDown(text);
    }
}
