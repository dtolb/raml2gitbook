{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/features/mms

update mms feature settings


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |
| `sippeerId` | string | true |





## Example Request
```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<MmsFeature>
    <MmsSettings>
        <protocol>
            HTTP
        </protocol>
    </MmsSettings>
    <Protocols>
        <HTTP>
            <HttpSettings>
                <proxyPeerId>
                    500017
                </proxyPeerId>
            </HttpSettings>
        </HTTP>
    </Protocols>
</MmsFeature>
```


{% common %}



{% endmethod %}