{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/features/sms/smpp/hosts

Retrieve smpp hosts



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
<SmsSmppHostsResponse>
    <SmsHosts>
        <SmsHost>
            <HostName>
                36.162.214.238
            </HostName>
            <HostId>
                7
            </HostId>
            <Priority>
                0
            </Priority>
            <ConnectionType>
                RECEIVER_ONLY
            </ConnectionType>
        </SmsHost>
        <SmsHost>
            <HostName>
                249.34.239.161
            </HostName>
            <HostId>
                8
            </HostId>
            <Priority>
                0
            </Priority>
            <ConnectionType>
                RECEIVER_ONLY
            </ConnectionType>
        </SmsHost>
        <SmsHost>
            <HostName>
                3.196.122.33
            </HostName>
            <HostId>
                9
            </HostId>
            <Priority>
                0
            </Priority>
            <ConnectionType>
                RECEIVER_ONLY
            </ConnectionType>
        </SmsHost>
    </SmsHosts>
</SmsSmppHostsResponse>
```


{% endmethod %}