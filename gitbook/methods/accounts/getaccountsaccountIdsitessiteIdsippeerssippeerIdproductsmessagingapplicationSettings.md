{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/applicationSettings

Retrieve sipper application settings



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
<ApplicationsSettingsResponse>
    <ApplicationsSettings>
        <HttpMessagingV2AppId>
            4a4ca6c1-156b-4fca-84e9-34e35e2afc32
        </HttpMessagingV2AppId>
    </ApplicationsSettings>
</ApplicationsSettingsResponse>
```


{% endmethod %}