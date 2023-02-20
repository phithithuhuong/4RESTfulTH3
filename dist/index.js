"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(bodyParser.json());
app.get('/', async (req, res) => {
    try {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=ha giang&appid=bb8a7b6c06fb98dafd7156d1964e2f26&lang=vi';
        const response = await axios_1.default.get(url);
        const data = response.data;
        console.log(data);
        if (data) {
            res.render('weather', { data: data });
        }
        else {
            res.end('<h1>Error</h1>');
        }
    }
    catch (err) {
        res.end('<h1>Error<h1>');
    }
});
app.listen(3000, () => {
    console.log('http://localhost:3000');
});
//# sourceMappingURL=index.js.map