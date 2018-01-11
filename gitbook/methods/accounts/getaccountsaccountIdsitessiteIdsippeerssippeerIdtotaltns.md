{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/totaltns

Retrieve count of Telephone numbers for Sip Peer


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |
| `sippeerId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `feature` | string | false | Telephone number feature |




{% common %}


## Example : A successful result that contains the response data

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerTelephoneNumbersCountResponse>
    <SipPeerTelephoneNumbersCount>
        <SipPeerTelephoneNumbersCount>
            4
        </SipPeerTelephoneNumbersCount>
        <CnamCount>
            4
        </CnamCount>
        <LidbCount>
            0
        </LidbCount>
    </SipPeerTelephoneNumbersCount>
</SipPeerTelephoneNumbersCountResponse>
```


{% endmethod %}