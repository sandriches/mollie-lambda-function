import AWS from 'aws-sdk';
import { createMollieClient } from '@mollie/api-client';
import * as dotenv from 'dotenv';

dotenv.config();

const testApiKey: string = process.env.MOLLIE_TEST_API_KEY!;

const mollieClient = createMollieClient({ apiKey: testApiKey });


exports.handler = async () => {
    // Methods for the Payments API
    let methods = await mollieClient.methods.all();

    // Methods for the Orders API
    methods = await mollieClient.methods.all({ resource: 'orders' });
    console.log(methods);
    return methods;
};