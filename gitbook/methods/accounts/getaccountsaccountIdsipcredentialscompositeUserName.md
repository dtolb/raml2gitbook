{% method %}
## /accounts/{accountId}/sipcredentials/{compositeUserName}

GET is used to retrieve SIP credential for the account by unique combination of user name and domain.
compositeUserName is comprised of the ```UserName```, and, if there is a ```Domain``` part, an @ followed by the <Domain>.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `compositeUserName` | string | true |






{% common %}


## Example : OK - will return full information about SIP credential on this account for specified user name and domain.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipCredentialResponse>
    <SipCredential>
        <UserName>
            John
        </UserName>
        <Domain>
            bw.com
        </Domain>
        <Hash1>
            1g32gadgs433dd4
        </Hash1>
        <Hash1b>
            1g32gadgs433d24
        </Hash1b>
    </SipCredential>
</SipCredentialResponse>
```

## Example : Not Found - if the account specified does not exist or is locked or there are no SIP credential that corresponds to specified combination of user name and domain it will result in a not found.


* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipCredentialResponse>
    <ResponseStatus>
        <ErrorCode>
            23007
        </ErrorCode>
        <Description>
            Sip credential Jack@bw.com was not found on the account with ID = 41
        </Description>
    </ResponseStatus>
</SipCredentialResponse>
```


{% endmethod %}