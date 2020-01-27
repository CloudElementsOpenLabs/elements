var attachmentBody;
try {
attachmentBody = JSON.parse(request_vendor_body);
} catch (e) {
done();
}


let params = JSON.parse(request_parameters.message);
let email = {
  "personalizations": [
    {
      "to": [
        {
          "email": params.to
        }
      ],
      "subject": params.subject
    }
  ],
  "from": {
    "email": params.from
  },
  "content": [
    {
      "type": "text/plain",
      "value": params.body
    }
  ],
  "attachments": [
    {
      "content": attachmentBody.body,
      "filename": attachmentBody.name
    }
  ]
};
done({"request_vendor_body":email, "continue":true});
