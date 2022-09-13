import {Injectable, OnModuleInit} from "@nestjs/common";
// import {SerialPort} from "serialport";
// import {PortInfo} from "@serialport/bindings-cpp";
// import {DelimiterParser} from "@serialport/parser-delimiter";
import {EventEmitter, DefaultEventMap} from "tsee";
import {Observable, fromEvent} from "rxjs";

export interface SerialActionInfo {
    type: number;
    data: number[];
}

export interface SerialActionEventMap extends DefaultEventMap {
    action: (info: SerialActionInfo) => any;
}

@Injectable()
export class SerialService implements OnModuleInit {
    // public port: SerialPort | null = null;
    public readonly actionsEvents: EventEmitter<SerialActionEventMap> = new EventEmitter;
    
    // public async findPort(): Promise<PortInfo | null> {
    //     const list: PortInfo[] = await SerialPort.list();
    //     return list.find((port) => port.manufacturer === "Silicon Labs") ?? null;
    // }
    
    public async onModuleInit(): Promise<void> { 
        // const portInfo: PortInfo | null = await this.findPort();
        // if(portInfo === null)
        //     return;
        // const port = new SerialPort({
        //     path: portInfo.path, 
        //     baudRate: 115200
        // });
        // this.port = port;
        // const parser: DelimiterParser = port.pipe(new DelimiterParser({
        //     delimiter: "\n", 
        //     includeDelimiter: false
        // }));
        // parser.on("data", (chunk: Buffer) => {
        //     if(chunk.length === 0)
        //         return;
        //     const type: number = chunk[0];
        //     const data: number[] = [...chunk].slice(1);
        //     this.actionsEvents.emit("action", {type, data});
        // });
    }

    public getActions(): Observable<SerialActionInfo> {
        return fromEvent(this.actionsEvents, "action") as Observable<SerialActionInfo>;
    }

    public runAction(type: number, data: number[]): void {
        // if(this.port === null)
        //     return;
        // this.port.write(Buffer.concat([Buffer.from([type, ...data]), Buffer.from("\n")]));
    }
}