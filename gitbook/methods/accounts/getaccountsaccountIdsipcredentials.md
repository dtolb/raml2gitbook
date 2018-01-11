{% method %}
## /accounts/{accountId}/sipcredentials

GET is used to retrieve all SIP credentials for the account.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `page` | string | false | An ID of the first element in a page.  This value will indicate the first value, not the count, of the initial entry in the page being requested.<br>It can be an index of SIP credential or a combination of user name and domain in form {userName}@{domain}. The initial page is tagged with the ID '1'. |
| `size` | integer | false | The number of items to include in a page |
| `usernamefragment` | string | false | The user name fragment. Min length - 3 characters. |
| `domainfragment` | string | false | The domain fragment. Min length - 3 characters. |




{% common %}


## Example : OK - the SIP credentials retrieval request will return a list of the SIP credentials that are created on this account.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipCredentialsResponse>
    <Links>
        <first>
            Link=&lt;http://qa.bandwidth.com/iris/accounts/14/sipcredentials?size=500&amp;page=1&gt;;rel="first"; 
        </first>
    </Links>
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
        </SipCredential>
    </SipCredentials>
</SipCredentialsResponse>
```

## Example : Not Found - if the account specified does not exist or is locked or there are no SIP credentials associated with specified account it will result in a not found.


* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipCredentialsResponse>
    <ResponseStatus>
        <ErrorCode>
            23008
        </ErrorCode>
        <Description>
            There are no Sip credentials associated with the account with ID = 41
        </Description>
    </ResponseStatus>
</SipCredentialsResponse>
```


{% endmethod %}