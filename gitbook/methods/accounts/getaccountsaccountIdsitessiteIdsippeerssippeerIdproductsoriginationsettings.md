{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/origination/settings

Retrieve origination settings for sippeer



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
<SipPeerOriginationSettingsResponse>
    <SipPeerOriginationSettings>
        <HttpSettings>
            <VoiceV2ProxyPeerId>
                500166
            </VoiceV2ProxyPeerId>
            <HttpVoiceV2AppId>
                469ebbac-4459-4d98-bc19-a038960e787f
            </HttpVoiceV2AppId>
        </HttpSettings>
    </SipPeerOriginationSettings>
</SipPeerOriginationSettingsResponse>
```


{% endmethod %}