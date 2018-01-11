{% method %}
## /accounts/{accountId}/portins/{orderid}/loas/{fileid}/metadata

Retrieves the metadata associated with the file.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |
| `fileid` | string | true |






{% common %}


## Example : The Metatdata has been successfully retrieved.


* Response: 200

{% sample lang="xml" %}

```xml
<FileMetaData>
    <DocumentName>
         [string] 
    </DocumentName>
    <DocumentType>
         [LOA | INVOICE | CSR | OTHER] 
    </DocumentType>
</FileMetaData>
```


{% endmethod %}