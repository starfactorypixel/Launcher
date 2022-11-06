import {buildLinux} from "./build-linux";

export const buildLinuxX64 = buildLinux.bind(null, "x64");

if (require.main === module) {
    buildLinuxX64();
}
