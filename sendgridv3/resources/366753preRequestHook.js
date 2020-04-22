let body = JSON.parse(request_body);

let email = {
  "personalizations": [
    {
      "to": [
        {
          "email": body.to
        }
      ],
      "subject": body.subject
    }
  ],
  "from": {
    "email": body.from
  },
  "content": [
    {
      "type": "text/plain",
      "value": body.body
    }
  ],
};

done({"request_vendor_body":email, "continue":true});
