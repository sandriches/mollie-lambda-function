"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_client_1 = require("@mollie/api-client");
const mollieClient = (0, api_client_1.createMollieClient)({ apiKey: 'test_ayMsEe8EhVxcAysPwCPe35WfzQWnWE' });
exports.handler = (async () => {
    // Methods for the Payments API
    let methods = await mollieClient.methods.all();
    // Methods for the Orders API
    methods = await mollieClient.methods.all({ resource: 'orders' });
    console.log(methods);
})();
