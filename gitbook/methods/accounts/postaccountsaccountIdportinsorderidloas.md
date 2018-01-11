{% method %}
## /accounts/{accountId}/portins/{orderid}/loas

POSTing to the /loas resource will enable the upload of the file.  The key attribute to the POST is ensuring that the headers are correctly set to support the file upload.<br>
    <br>
Header settings typical of a valid upload are...<br>
    <br>
<code>
Host: api.inetwork.com <br>
Authorization: Basic xxxxxxxxxxxxxxxxxxxx== <br>
Content-Type: application/pdf <br>
Accept: */* <br>
Accept-Encoding: gzip, deflate <br>
Accept-Language: en-US,en;q=0.8 <br>
Cache-Control: no-cache <br>
    <br>
----WebKitFormBoundaryE19zNvXGzXaLvS5C <br>
Content-Disposition: form-data; name="george"; filename="Bandwidth Dashboard.pdf" <br>
Content-Type: application/pdf <br>
    <br>
    <br>
----WebKitFormBoundaryE19zNvXGzXaLvS5C <br>
</code>



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |






{% common %}


## Example : The 201 response indicates the successful creation of a file resource containing the uploaded content.
The response header will include a link to the created file as a GET on the identified resource.


* Response: 201

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<fileUploadResponse>
    <filename>
        63097af1-37ae-432f-8a0d-9b0e6517a35b-1429550165581.pdf
    </filename>
    <resultCode>
        0
    </resultCode>
    <resultMessage>
        LOA file uploaded successfully for order 63097af1-37ae-432f-8a0d-9b0e6517a35b
    </resultMessage>
</fileUploadResponse>
```


{% endmethod %}