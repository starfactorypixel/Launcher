import {Module} from "@nestjs/common";
import {SerialController} from "./serial.controller";
import {SerialService} from "./serial.service";

@Module({
    providers: [
        SerialService
    ],
    controllers: [
        SerialController
    ]
})
export class SerialModule {}