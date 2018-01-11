{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/origination/settings

update origination settings


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |
| `sippeerId` | string | true |





## Example Request
```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<SipPeerOriginationSettings>
    <HttpSettings>
        <VoiceV2ProxyPeerId>
            500165
        </VoiceV2ProxyPeerId>
        <HttpVoiceV2AppId>
            867b923b-8a92-4579-b29b-405f165b8124
        </HttpVoiceV2AppId>
    </HttpSettings>
</SipPeerOriginationSettings>
```


{% common %}



{% endmethod %}