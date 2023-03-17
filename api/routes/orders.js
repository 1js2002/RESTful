const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'ordere was fetched'
    })

})
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'ordere was created'
    })

})
router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: 'ordere was fetched',
        id: id
    })

})
router.delete('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: 'ordere was fetched',
        deltedOrder: id
    })

})



module.exports = router;

