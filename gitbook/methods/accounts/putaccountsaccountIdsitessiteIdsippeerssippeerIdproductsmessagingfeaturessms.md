{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/features/sms

update sms feature settings


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |
| `sippeerId` | string | true |





## Example Request
```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<SipPeerSmsFeature>
    <SipPeerSmsFeatureSettings>
        <TollFree>
            false
        </TollFree>
        <ShortCode>
            true
        </ShortCode>
        <Protocol>
            SMPP
        </Protocol>
        <Zone1>
            true
        </Zone1>
        <Zone2>
            false
        </Zone2>
        <Zone3>
            false
        </Zone3>
        <Zone4>
            false
        </Zone4>
        <Zone5>
            false
        </Zone5>
    </SipPeerSmsFeatureSettings>
    <SmppHosts>
        <SmppHost>
            <HostName>
                235.133.23.79
            </HostName>
            <HostId>
                6
            </HostId>
            <Priority>
                0
            </Priority>
            <ConnectionType>
                TRANSCEIVER
            </ConnectionType>
        </SmppHost>
    </SmppHosts>
</SipPeerSmsFeature>
```


{% common %}



{% endmethod %}