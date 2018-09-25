import { 
    addNewContact, 
    getContacts, 
    getContactWithID, 
    updateContact,
    removeContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        console.log(`Request from the url ${req.originalUrl}`)
        console.log(`Request type ${req.method}`)
        next();
    }, getContacts)

    //POST Endpoint
    .post(addNewContact)

    app.route('/contact/:contactId')
    .get(getContactWithID)
    .put(updateContact)
    .delete(removeContact)
}

export default routes;