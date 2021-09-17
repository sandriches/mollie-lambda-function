import AWS from 'aws-sdk';
import { createMollieClient } from '@mollie/api-client';
// import * as dotenv from 'dotenv';
import { loadConfig } from './config';

let config = loadConfig();
// dotenv.config();

let testApiKey: string;
try {
    testApiKey = config.MOLLIE_TEST_API_KEY;
} catch (err) {
    throw new Error('Set env config file');
}

const mollieClient = createMollieClient({ apiKey: testApiKey });


exports.handler = async () => {
    // Methods for the Payments API
    let methods = await mollieClient.methods.all();

    // Methods for the Orders API
    methods = await mollieClient.methods.all({ resource: 'orders' });
    console.log(methods);
    return methods;
};
