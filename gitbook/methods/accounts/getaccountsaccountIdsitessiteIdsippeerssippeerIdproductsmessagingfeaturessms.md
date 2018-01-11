{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/features/sms

Retrieve sms feature settings for sippeer



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
<SipPeerSmsFeatureResponse>
    <SipPeerSmsFeature>
        <SipPeerSmsFeatureSettings>
            <TollFree>
                true
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
                true
            </Zone2>
            <Zone3>
                true
            </Zone3>
            <Zone4>
                true
            </Zone4>
            <Zone5>
                true
            </Zone5>
        </SipPeerSmsFeatureSettings>
        <SmppHosts>
            <SmppHost>
                <HostName>
                    54.10.88.146
                </HostName>
                <HostId>
                    18
                </HostId>
                <Priority>
                    0
                </Priority>
                <ConnectionType>
                    RECEIVER_ONLY
                </ConnectionType>
            </SmppHost>
        </SmppHosts>
    </SipPeerSmsFeature>
</SipPeerSmsFeatureResponse>
```


{% endmethod %}