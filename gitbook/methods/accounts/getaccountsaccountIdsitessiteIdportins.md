{% method %}
## /accounts/{accountId}/sites/{siteId}/portins

Retrieves the port-in requests for the given site ID.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `page` | string | true | The port-in ID of the first order of the page. "1" is used as a convention for the first port-in in the site ID. |
| `size` | integer | true | The number of port-ins retrieved. |
| `status` | string | true | Displays the port-ins with the given status. |




{% common %}


## Example : The port-ins have been successfully retrieved.

* Response: 200

{% sample lang="xml" %}

```xml
<LNPResponseWrapper>
    <TotalCount>
        7
    </TotalCount>
    <Links>
        <first>
        </first>
    </Links>
</LNPResponseWrapper>
```


{% endmethod %}