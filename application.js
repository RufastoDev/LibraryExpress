const express = require('express');
const app = express();
const fileUpload =require('express-fileupload');

// library express files
app.use(fileUpload());

app.get('/', function(req,res){
    res.sendFile(__dirname + '/input.html');
});

app.post('/',function(req,res){

    if(req.files) {
        console.log(req.files)
        var archivo = req.files.simpleFile
        var archivoName = archivo.name
        console.log(archivoName)

        archivo.mv('./resources'+ archivoName, function(err){
            if(err) {
                res.status(500).send(err);
            } else {
                res.send('Mix enviado exitosamente papu');
            }
        })
    };

});

// Server
app.listen(3000,function(){
    console.log('Server on port 3000');
});