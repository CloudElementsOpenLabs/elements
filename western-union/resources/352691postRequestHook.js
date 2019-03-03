var arr = ['invoices'];

done ({
"continue": true, //By sending false in the pre hook, it stops the execution at this and returns the response
"response_body": arr //over write the vendor parameters that needs to be sent to the endpoint
})