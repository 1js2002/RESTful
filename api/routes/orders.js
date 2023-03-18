const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'ordere was fetched'
    })

})
router.post('/', (req, res, next) => {
    const order ={
        proudctId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'ordere was created',
        order: order
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

