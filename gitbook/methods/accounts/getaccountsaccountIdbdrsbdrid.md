{% method %}
## /accounts/{accountId}/bdrs/{bdrid}

A GET on the BDR ID will return a "still processing" indication if the file creation has not completed, or will redirect to the file to be downloaded.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `bdrid` | string | true |






{% common %}


## Example : A 200 OK means that the request is valid, but that the file is not yet ready. The payload indicates the status.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BdrCreationResponse>
    <Info>
        The requested BDR archive is still being constructed, please check back later
    </Info>
</BdrCreationResponse>
```


{% endmethod %}