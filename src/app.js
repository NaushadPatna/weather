const express =  require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);

hbs.registerPartials(partial_path);
app.use(express.static(static_path));

app.get("", (req, res)=>{
    res.render('index');
})

app.get("/about", (req, res)=>{
    res.render('about');
})

app.get("/weather", (req, res)=>{
    res.render('weather');
})

app.get("/temp", (req, res)=>{
    res.set("temp.html");
})

app.get("*", (req, res)=>{
    res.render('404error', {
        errorMsg : 'Opps! Page Not Found!'
    })
})
app.listen(port ,() =>{
    console.log(`listening to the port at ${port}`);
});