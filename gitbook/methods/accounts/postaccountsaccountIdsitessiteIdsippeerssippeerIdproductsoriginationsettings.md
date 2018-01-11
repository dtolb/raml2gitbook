{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/origination/settings

Set sippeer origination settings



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
            500166
        </VoiceV2ProxyPeerId>
        <HttpVoiceV2AppId>
            469ebbac-4459-4d98-bc19-a038960e787f
        </HttpVoiceV2AppId>
    </HttpSettings>
</SipPeerOriginationSettings>
```


{% common %}


## Example : setting were successfully added

* Response: 201

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

## Example : Bad Request. Possible errors in response:
<ul>
   <li>Account level settings don`t exist</li>
</ul>


* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerSmsFeatureResponse>
    <ResponseStatus>
        <ErrorCode>
            13609
        </ErrorCode>
        <Description>
            Can't create sip peer http protocol sms feature without account level http settings.
        </Description>
    </ResponseStatus>
</SipPeerSmsFeatureResponse>
```


{% endmethod %}