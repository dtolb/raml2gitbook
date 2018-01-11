{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/tns

Retrieve information about a Telephone number or set of Telephone numbers


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |
| `sippeerId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `includeAttributes` | boolean | false | If the value is false SipPeerTelephoneNumber will contain FullNumber tags only. This makes processing faster. |




{% common %}


## Example : A successful result that contains the response data

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerTelephoneNumbersResponse>
    <SipPeerTelephoneNumbers>
        <SipPeerTelephoneNumber>
            <FullNumber>
                2052160148
            </FullNumber>
            <CallingNameDisplay>
                true
            </CallingNameDisplay>
            <TnAttributes>
                <TnAttribute>
                    Protected
                </TnAttribute>
            </TnAttributes>
            <MessagingSettings>
                <SmsEnabled>
                    true
                </SmsEnabled>
            </MessagingSettings>
        </SipPeerTelephoneNumber>
        <SipPeerTelephoneNumber>
            <FullNumber>
                2053161118
            </FullNumber>
            <CallingNameDisplay>
                false
            </CallingNameDisplay>
            <MessagingSettings>
                <SmsEnabled>
                    true
                </SmsEnabled>
            </MessagingSettings>
        </SipPeerTelephoneNumber>
        <SipPeerTelephoneNumber>
            <FullNumber>
                2053160118
            </FullNumber>
            <CallForward>
                2014563025
            </CallForward>
            <CallingNameDisplay>
                false
            </CallingNameDisplay>
        </SipPeerTelephoneNumber>
    </SipPeerTelephoneNumbers>
</SipPeerTelephoneNumbersResponse>
```


{% endmethod %}