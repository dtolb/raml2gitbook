{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/features/sms/smpp/hosts

Add smpp host



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |
| `sippeerId` | string | true |





## Example Request
```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<SmsHost>
    <HostName>
        3.196.122.33
    </HostName>
    <Priority>
        0
    </Priority>
    <ConnectionType>
        RECEIVER_ONLY
    </ConnectionType>
</SmsHost>
```


{% common %}


## Example : host was successfully added

* Response: 201

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SmsSmppHostResponse>
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
</SmsSmppHostResponse>
```


{% endmethod %}