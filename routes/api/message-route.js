const router = require("express").Router();

// route "/api/message/"
router.route("/send")
    .post((request, response) => {
        response.json('The route is working')
    })

module.exports = router;