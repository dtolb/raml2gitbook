{% method %}
## /accounts/{accountId}/sipcredentials

POST is used to create SIP credentials and associate its with the account.
The key data elements in the submission are -
 <table style="text-align: left; width: 80%;"
 border="1" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
      <td>UserName</td>
      <td>This is subscriber name or aggregated name and domain value(ex: John@bw.com). Field is required. Max length - 32 characters.</td>
    </tr>
    <tr>
      <td>Domain</td>
      <td>This is subscriber domain. Domain is optional and if present will be appended to the UserName with an '@'. Max length - 32 characters.</td>
    </tr>
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





## Example Request
```xml
<SipCredentials>
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
    <SipCredential>
        <UserName>
            Mathew@bw.com
        </UserName>
        <Hash1>
            43543gggs43g324
        </Hash1>
        <Hash1b>
            1g32gadgs433a34
        </Hash1b>
    </SipCredential>
</SipCredentials>
```


{% common %}


## Example : Created - If there was at least one valid credential entry in specified list then such response will be returned.


* Response: 201

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipCredentialsResponse>
    <Errors>
        <Error>
            <ErrorCode>
                1003
            </ErrorCode>
            <Description>
                UserName is required
            </Description>
            <SipCredential>
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
        </Error>
    </Errors>
    <ValidSipCredentials>
        <SipCredential>
            <UserName>
                Bill
            </UserName>
            <Domain>
                bw.com
            </Domain>
            <Hash1>
                43543gggs43g324
            </Hash1>
            <Hash1b>
                4562gadgs433454
            </Hash1b>
        </SipCredential>
    </ValidSipCredentials>
</SipCredentialsResponse>
```

## Example : Bad Request - If all credential entries in specified list are invalid it will result in bad request with list of errors.


* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipCredentialsResponse>
    <ResponseStatus>
        <Description>
            Please check your input parameters.
        </Description>
    </ResponseStatus>
    <Errors>
        <Error>
            <ErrorCode>
                1003
            </ErrorCode>
            <Description>
                UserName is required
            </Description>
            <SipCredential>
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
        </Error>
        <Error>
            <ErrorCode>
                23009
            </ErrorCode>
            <Description>
                Sip credential Bill@bw.com does already exist on the account with ID = 41
            </Description>
            <SipCredential>
                <UserName>
                    Bill
                </UserName>
                <Domain>
                    bw.com
                </Domain>
                <Hash1>
                    43543gggs43g324
                </Hash1>
                <Hash1b>
                    4562gadgs433454
                </Hash1b>
            </SipCredential>
        </Error>
    </Errors>
</SipCredentialsResponse>
```


{% endmethod %}