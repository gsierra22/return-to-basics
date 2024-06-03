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

router.post('/', (req,res) => {
    console.log('newpost',req.body);
    const queryString = `INSERT INTO "list"("tasks") VALUES($1);`;
    const values = [req.body.tasks]
    pool.query(queryString, values).then((results)=>{
        res.send(results.rows);
    }).catch ((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})

router.delete('/:id', (req,res) => {
    console.log('delete',req.params);
    const queryString = `DELETE FROM "list" WHERE id=$1;`;
    const values = [req.params.id];
    pool.query(queryString, values).then((results)=>{
        res.send(200);
    }).catch ((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})

router.put('/:id', (req,res) => {
    console.log('put',req.params);
    const queryString = `UPDATE "list" SET "task_completed"=true WHERE id=$1;`;
    const values = [req.params.id];
    pool.query(queryString, values).then((results)=>{
        res.send(200);
    }).catch ((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;