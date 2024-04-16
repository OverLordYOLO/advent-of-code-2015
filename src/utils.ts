import 'dotenv/config';

export class Utils {
    public static characterCount(text: string, character: string): number {
        let count: number = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === character) {
                count++;
            }
        }
        return count;
    }

    public static numberOfMovesUp(text: string): number {
        if (!process.env.CHARACTER_MOVE_UP) throw new Error("Please set the required environment variables.");

        return this.characterCount(text, process.env.CHARACTER_MOVE_UP);
    }

    public static numberOfMovesDown(text: string): number {
        if (!process.env.CHARACTER_MOVE_DOWN) throw new Error("Please set the required environment variables.");

        return this.characterCount(text, process.env.CHARACTER_MOVE_DOWN);
    }

    public static calculateResultingFloor(text: string): number {
        return this.numberOfMovesUp(text) - this.numberOfMovesDown(text);
    }
}
