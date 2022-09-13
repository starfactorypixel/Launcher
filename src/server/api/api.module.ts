import {Module} from "@nestjs/common";
import {SerialModule} from "./serial/serial.module";

@Module({
    imports: [
        SerialModule
    ]
})
export class ApiModule {}