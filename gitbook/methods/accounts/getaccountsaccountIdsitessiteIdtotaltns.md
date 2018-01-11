{% method %}
## /accounts/{accountId}/sites/{siteId}/totaltns

Retrieve count of Telephone numbers for the indicated site


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |






{% common %}


## Example : The total count of Telephone Numbers associated with the site.

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SiteTNsResponse>
    <SiteTNs>
        <TotalCount>
            26
        </TotalCount>
    </SiteTNs>
</SiteTNsResponse>
```


{% endmethod %}