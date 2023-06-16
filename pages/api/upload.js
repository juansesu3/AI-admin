import multiparty from 'multiparty';

const handle = async (req, res)=>{

    const form = new multiparty.Form();
    form.parse(req, (err, fields, files) =>{
        console.log(files.length);
        res.json('ok');

    });


}


export const config ={
    api:{bodyParser: false},
}

export default handle;