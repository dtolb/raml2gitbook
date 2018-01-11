{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/tns/{tn}

Link for receiving information about telephone number.
CallForward - Does this telephone number have call forwarding or not.
CallingNameDisplay - Calling Name of the caller is available to the user or not on incoming calls.
TnAttributes - Is this telephone number protected or not.
MessagingSettings -  Does this telephone number have any messaging system configured.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |
| `sippeerId` | string | true |
| `tn` | string | true |






{% common %}


## Example : CallForward, CallingNameDisplay, TnAttributes and MessagingSettings are not required in the response


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerTelephoneNumberResponse>
    <SipPeerTelephoneNumber>
        <FullNumber>
            5209072451
        </FullNumber>
        <CallForward>
            7042661720
        </CallForward>
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
</SipPeerTelephoneNumberResponse>
```


{% endmethod %}