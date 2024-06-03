const router = require('express').Router();
const pool = require ('../modules/pool')

router.get('/', (req,res) => {
    console.log('list');
    const queryString = `SELECT * FROM "list"`;
    pool.query(queryString).then((results)=>{
        res.send(results.rows);
    }).catch ((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;