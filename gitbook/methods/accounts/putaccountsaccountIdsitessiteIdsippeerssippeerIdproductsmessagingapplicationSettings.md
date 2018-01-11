{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/applicationSettings

create/update/delete application settings for sippeer (use value 'REMOVE' to unassing application)


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |
| `sippeerId` | string | true |





## Example Request
```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<ApplicationsSettings>
    <HttpMessagingV2AppId>
        c3b0f805-06ab-4d36-8bf4-8baff7623398
    </HttpMessagingV2AppId>
</ApplicationsSettings>
```


{% common %}


## Example : settings were successfully created/updated

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ApplicationsSettingsResponse>
    <ApplicationsSettings>
        <HttpMessagingV2AppId>
            c3b0f805-06ab-4d36-8bf4-8baff7623398
        </HttpMessagingV2AppId>
    </ApplicationsSettings>
</ApplicationsSettingsResponse>
```


{% endmethod %}