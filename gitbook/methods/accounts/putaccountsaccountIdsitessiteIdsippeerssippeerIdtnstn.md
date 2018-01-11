{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/tns/{tn}

This API can be used by the Bandwidth Dashboard or general API users to update the settings for TNs allocated to their account.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |
| `sippeerId` | string | true |
| `tn` | string | true |





## Example Request
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerTelephoneNumber>
    <FullNumber>
        2052160156
    </FullNumber>
    <NumberFormat>
        10digit
    </NumberFormat>
    <RPIDFormat>
        10digit
    </RPIDFormat>
    <RewriteUser>
        false
    </RewriteUser>
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
```


{% common %}



{% endmethod %}