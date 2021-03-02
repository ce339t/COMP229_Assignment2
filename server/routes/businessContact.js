/*File name : businessContact.js
  Author's name : Noushig Chitjian
  Student ID : 301117936
  Web site name : NC
  date : Oct 22, 2020 */

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let contactController = require('../controllers/businessContact');

//helper function for guard purposes
function requireAuth(req, res, next)
{
    //it will check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for displaying the Contact List page */
/*thiis will read Operation*/ 
router.get('/', contactController.displayContactList);

/* GET Route for displaying the Add page */
/*thiis will create Operation*/
router.get('/add', requireAuth, contactController.displayAddPage);

/* POST Route for processing the Add page */
router.post('/add', requireAuth, contactController.processAddPage);
/*thiis will create Operation*/

/* GET Route for displaying the Edit page */
/*thiis will update Operation*/
router.get('/edit/:id', requireAuth, contactController.displayEditPage);


/* POST Route for processing the Edit page - UPDATE Operation */
/*thiis will update Operation*/
router.post('/edit/:id', requireAuth, contactController.processEditPage);


/* GET to perform Contact Deletion */
/*thiis will delete Operation*/
router.get('/delete/:id', requireAuth, contactController.performDelete );

module.exports = router;