import * as chalk from "chalk";

export class Logger {
    public log(message: string, options: Logger.LogOptions = {}): void {
        const {
            level = Logger.LogLevel.NONE,
            steps,
            output = Logger.LogOutput.CONSOLE,
            endl = true
        } = options;

        let head: string = chalk.cyan("[Pixel]");
        const body: string = message;

        if (level !== Logger.LogLevel.NONE) {
            switch (level) {
                case Logger.LogLevel.INFO:
                    head += chalk.blue("[Info]");
                    break;

                case Logger.LogLevel.ERROR:
                    head += chalk.red("[Error]");
                    break;
            }
        }
        if (steps) {
            head += chalk.green(`[${steps.current}/${steps.max}]`);
        }

        switch (output) {
            case Logger.LogOutput.CONSOLE:
                return console.log(head, body);
            case Logger.LogOutput.STDOUT:
                return process.stdout.write(`${head} ${body}${endl ? "\n" : ""}`), undefined;
        }
    }

    public info(message: string, options: Omit<Logger.LogOptions, "level"> = {}): void {
        return this.log(message, {level: Logger.LogLevel.INFO, ...options});
    }

    public error(message: string, options: Omit<Logger.LogOptions, "level"> = {}): void {
        return this.log(message, {level: Logger.LogLevel.ERROR, ...options});
    }

    public progress(
        message: string,
        options: Omit<Logger.LogOptions, "output" | "endl"> = {}
    ): Logger.LogProgress {
        let dotCount = 0;
        let stoped = false;

        const progressLog = () => {
            process.stdout.write("\r");
            this.log(message + ".".repeat(dotCount) + " ".repeat(3 - dotCount), {
                ...options,
                output: Logger.LogOutput.STDOUT,
                endl: false
            });

            if (dotCount < 3) {
                dotCount++;
            } else {
                dotCount = 0;
            }
        };

        progressLog();
        const progressInterval: NodeJS.Timer = setInterval(() => progressLog(), 500);

        return {
            stop: (clearLine = true) => {
                if (stoped) {
                    return;
                }

                clearInterval(progressInterval);

                if (clearLine) {
                    process.stdout.clearLine(0);
                    process.stdout.cursorTo(0);
                } else {
                    process.stdout.write("\n");
                }

                stoped = true;
            }
        };
    }
}

export namespace Logger {
    export enum LogLevel {
        NONE,
        INFO,
        ERROR
    }

    export interface LogSteps {
        current: number;
        max: number;
    }

    export enum LogOutput {
        CONSOLE,
        STDOUT
    }

    export interface LogOptions {
        level?: LogLevel;
        steps?: LogSteps;
        output?: LogOutput;
        endl?: boolean;
    }

    export interface LogProgress {
        stop(clearLine?: boolean): void;
    }
}

export const logger = new Logger();
