// @ts-ignore
import express  from "express";
import * as bodyParser from "body-parser";
import axios from "axios";
const app = express();
app.set('view engine', 'ejs')
app.set('views', './src/views');
app.use(bodyParser.json());
app.get('/',async(req,res)=>{
    try{
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=ha giang&appid=bb8a7b6c06fb98dafd7156d1964e2f26&lang=vi';
        // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
        if (data){
            res.render('weather',{data:data})
        } else {
            res.end('<h1>Error</h1>')
        }
    } catch (err){
        res.end('<h1>Error<h1>')
    }
});
app.listen(3000,()=>{
    console.log('http://localhost:3000')
})