const qr = require('qrcode');

const express = require('express')
const app = express()
const port = 3000



app.use(express.urlencoded({ extended: true })); //to handle form data


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/submit', (req, res) => {

    if (req.body.qrInput==='') {
        res.render('index.ejs');
    }else{
        let qrInputText = req.body.qrInput;

        qr.toDataURL(qrInputText, { type: 'png' }, (err, qrData) => {
            res.render('index.ejs', { qrData: qrData });
        }); // so wer are sending base64 encoded data to the html to generate it accordingly we dont need to include data:image/png,base64 qr.toDataURL is automatically doing this. so we just need to send the qrData to the page
    }
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


