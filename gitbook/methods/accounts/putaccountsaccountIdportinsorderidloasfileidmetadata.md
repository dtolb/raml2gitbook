{% method %}
## /accounts/{accountId}/portins/{orderid}/loas/{fileid}/metadata

Associate metadata with the file named in the resource path.  This will describe the file, and declare the data that is contained in the file, selected from a list of [LOA | INVOICE | CSR | OTHER].



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |
| `fileid` | string | true |





## Example Request
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


{% common %}



{% endmethod %}