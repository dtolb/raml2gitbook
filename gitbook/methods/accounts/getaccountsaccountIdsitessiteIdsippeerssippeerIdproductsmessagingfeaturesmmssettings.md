{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/features/mms/settings

Retrieve mms feature settings for sippeer



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |
| `sippeerId` | string | true |






{% common %}


## Example : A successful result that contains the response data

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<MmsFeatureMmsSettingsResponse>
    <MmsSettings>
        <protocol>
            MM4
        </protocol>
    </MmsSettings>
</MmsFeatureMmsSettingsResponse>
```


{% endmethod %}