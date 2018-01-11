{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/features/sms

Set sms feature settings



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
            <Priority>
                0
            </Priority>
            <ConnectionType>
                RECEIVER_ONLY
            </ConnectionType>
        </SmppHost>
    </SmppHosts>
</SipPeerSmsFeature>
```


{% common %}


## Example : setting were successfully added

* Response: 201

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