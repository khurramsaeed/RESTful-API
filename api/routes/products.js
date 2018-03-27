const express = require('express');

const router = express.Router();

// .get() handles get requests
router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'GET requests to /products'
    })
});

router.post('/', (req, res, next) =>{
    res.status(200).json({
        message: 'POST requests to /products'
    })
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'Sucess GET request',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an id'
        });
    }
})

module.exports = router;