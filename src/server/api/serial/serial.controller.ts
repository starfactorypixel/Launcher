import {Controller, Sse, MessageEvent, Post, Body} from "@nestjs/common";
import {SerialService} from "./serial.service";
import {Observable, map} from "rxjs";

export interface RunActionDto {
    type?: string;
    data?: string;
}

@Controller("api/serial")
export class SerialController {
    constructor(private readonly serialService: SerialService) {}

    @Sse("actions")
    public getActions(): Observable<MessageEvent> {
        return this.serialService.getActions().pipe(map((info) => ({data: info})));
    }

    @Post("actions/run")
    public runAction(@Body() body: RunActionDto): void {
        const type: number = Number(body.type ?? 0);
        const data: number[] = JSON.parse(body.data ?? "[]");
        return this.serialService.runAction(type, data);
    }
}