{% method %}
## /accounts/{accountId}/hosts

Retrieve information about the hosts of account, as guided by optional search parameters.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `host` | string | true | An IP address or subnet (CIDR format) associated with the account. Filter for subnet applies by exact match. |
| `type` | string | true | A status value to filter the hosts returned in the payload.  Values that can be accepted include:<ul>    <li>SMS</li>    <li>TERMINATION</li>    <li>ORIGINATION</li></ul> |




{% common %}


## Example : A successful result that contains the response data

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SiteHostsResponse>
    <SiteHosts>
        <SiteHost>
            <SiteId>
                5
            </SiteId>
            <SipPeerHosts>
                <SipPeerHost>
                    <SipPeerId>
                        500146
                    </SipPeerId>
                    <SmsHosts/>
                    <VoiceHosts>
                        <Host>
                            <HostName>
                                47.16.211.63
                            </HostName>
                        </Host>
                    </VoiceHosts>
                    <TerminationHosts/>
                </SipPeerHost>
            </SipPeerHosts>
        </SiteHost>
    </SiteHosts>
</SiteHostsResponse>
```


{% endmethod %}