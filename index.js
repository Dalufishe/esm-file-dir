import { fileURLToPath } from "node:url";
import { dirname } from 'path';

global.__filename = function (importDotMeta) {
    return importDotMeta ? fileURLToPath(importDotMeta.url) : ""
}

global.__dirname = function (importDotMeta) {
    return dirname(__filename(importDotMeta));
}