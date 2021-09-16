import AWS from 'aws-sdk';
import { createMollieClient } from '@mollie/api-client';
const mollieClient = createMollieClient({ apiKey: 'test_ayMsEe8EhVxcAysPwCPe35WfzQWnWE' });

exports.handler = async () => {
    // Methods for the Payments API
    let methods = await mollieClient.methods.all();

    // Methods for the Orders API
    methods = await mollieClient.methods.all({ resource: 'orders' });
    console.log(methods);
};