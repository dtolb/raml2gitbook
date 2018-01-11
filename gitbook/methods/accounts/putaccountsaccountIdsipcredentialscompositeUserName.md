{% method %}
## /accounts/{accountId}/sipcredentials/{compositeUserName}

PUT is used to change single SIP credential.<br>
It is not possible to change the UserName or the Domain associated with the Hash Values.  To do so requires deletion of one set of credentials and addition of a new set of credentials.<br>
compositeUserName is comprised of the ```UserName```, and, if there is a ```Domain``` part, an @ followed by the ```Domain```.
The key data elements in the submission are -
 <table style="text-align: left; width: 80%;"
 border="1" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
      <td>Hash1</td>
      <td>This is hash value #1 in MD5 representation. Field is required. Max length - 64 characters.</td>
    </tr>
    <tr>
      <td>Hash1b</td>
      <td>This is hash value #2 in MD5 representation. Field is optional. Max length - 64 characters.</td>
    </tr>
  </tbody>
</table>



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `compositeUserName` | string | true |





## Example Request
```xml
<SipCredential>
    <Hash1>
        1g32gadgs433dd4
    </Hash1>
    <Hash1b>
        1g32gadgs433d24
    </Hash1b>
</SipCredential>
```


{% common %}


## Example : OK - the SIP credential was successfully updated.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipCredentialResponse>
    <SipCredential>
        <UserName>
            Mathew
        </UserName>
        <Domain>
            bw.com
        </Domain>
        <Hash1>
            43533gggs43g324
        </Hash1>
        <Hash1b>
            4562gadgs423454
        </Hash1b>
    </SipCredential>
</SipCredentialResponse>
```

## Example : Bad Request - the SIP credential was not updated.


* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipCredentialResponse>
    <ResponseStatus>
        <ErrorCode>
            23004
        </ErrorCode>
        <Description>
            Unable to change the UserName or the Domain associated with the Hash Values. To do so requires deletion of one set of credentials and addition of a new set of credentials.
        </Description>
    </ResponseStatus>
</SipCredentialResponse>
```

## Example : Not Found - the SIP credential was not found on the account for specified combination of user name and domain.


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
            Sip credential Ross@bw.com was not found on the account with ID = 41
        </Description>
    </ResponseStatus>
</SipCredentialResponse>
```


{% endmethod %}