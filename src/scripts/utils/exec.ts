import {spawn} from "cross-spawn";

export function exec(
    command: string,
    errorCallback?: (code: number) => void
): Promise<number | null> {
    return new Promise((resolve) => {
        const [commandName, ...commandArgs] = command.split(" ");
        const childProcess = spawn(commandName, commandArgs, {stdio: "inherit"});

        childProcess.once("exit", (code) => {
            if (code !== 0 && code !== null) {
                errorCallback?.(code);
                process.exit(code);
            }

            resolve(code);
        });
    });
}
