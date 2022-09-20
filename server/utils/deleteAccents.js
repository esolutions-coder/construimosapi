"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deleteAccents(string) {
    return string.replace(/[a,á,à,ä,â]/g, 'a')
        .replace(/[e,é,ë,è]/g, 'e')
        .replace(/[i,í,ï,ì]/g, 'i')
        .replace(/[o,ó,ö,ò]/g, 'o')
        .replace(/[u,ü,ú,ù]/g, 'u');
}
exports.default = deleteAccents;
