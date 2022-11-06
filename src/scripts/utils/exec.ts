import {spawn} from "cross-spawn";

export function exec(
    command: string,
    errorCallback?: (code: number) => void
): Promise<number | null> {
    return new Promise((resolve) => {
        const [commandName, ...commandArgs] = command.split(" ");
        const process = spawn(commandName, commandArgs, {stdio: "inherit"});

        process.once("exit", (code) => {
            if (code !== 0 && code !== null) {
                errorCallback?.(code);
            }

            resolve(code);
        });
    });
}
