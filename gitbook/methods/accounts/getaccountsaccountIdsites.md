{% method %}
## /accounts/{accountId}/sites

retrieve a list of all the sites associated with the account


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |






{% common %}


## Example : 

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0"?>
<SitesResponse>
    <Sites>
        <Site>
            <Id>
                399
            </Id>
            <Name>
                Testsite
            </Name>
            <Description>
                NewSite
            </Description>
        </Site>
        <Site>
            <Id>
                403
            </Id>
            <Name>
                GABESITEa
            </Name>
            <Description>
                Awesomeness
            </Description>
        </Site>
    </Sites>
</SitesResponse>
```


{% endmethod %}