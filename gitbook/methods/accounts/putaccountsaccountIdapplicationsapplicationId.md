{% method %}
## /accounts/{accountId}/applications/{applicationId}

Update an Application


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `applicationId` | string | true |





## Example Request
```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<Application>
    <ApplicationId>
        e5a9e103-097e-4ec4-87a0-50109fb7b4b1
    </ApplicationId>
    <ServiceType>
        Messaging-V2
    </ServiceType>
    <AppName>
        qMmmTT
    </AppName>
    <CallbackUrl>
        https://example.com
    </CallbackUrl>
    <CallbackCreds>
        <UserId>
            15jPWZmXdm
        </UserId>
        <Password>
            xxv3jPsPR2
        </Password>
    </CallbackCreds>
</Application>
```


{% common %}


## Example : 

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ApplicationProvisioningResponse>
    <Application>
        <ApplicationId>
            e5a9e103-097e-4ec4-87a0-50109fb7b4b1
        </ApplicationId>
        <ServiceType>
            Messaging-V2
        </ServiceType>
        <AppName>
            qMmmTT
        </AppName>
        <CallbackUrl>
            https://example.com
        </CallbackUrl>
        <CallbackCreds>
            <UserId>
                15jPWZmXdm
            </UserId>
            <Password>
                xxv3jPsPR2
            </Password>
        </CallbackCreds>
    </Application>
</ApplicationProvisioningResponse>
```


{% endmethod %}