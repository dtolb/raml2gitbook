{% method %}
## /accounts/{accountId}/tnoptions

Create TN Option order to assign line features to the telephone number.
The key data elements in the submission are -
 <table style="text-align: left; width: 80%;"
 border="1" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
      <td>TnOptionGroups</td>
      <td>A list of TnOptionGroups.</td>
    </tr>
    <tr>
      <td>TnOptionGroup</td>
      <td>Contains list of telephone numbers and set of TN options you want to assign to all TNs in the list.</td>
    </tr>
  </tbody>
</table>
There are TN Option values:
<ul>
<li> TelephoneNumber - [ 10digit ] </li>
<li> CallingNameDisplay - [ on | off | <i>unchanged</i> | <i>systemdefault</i> ] </li>
<li> NumberFormat - [ 10digit | 11digit | e164 | <i>unchanged</i> | <i>systemdefault</i> ] </li>
<li> RPIDFormat - [ 10digit | 11digit | e164 | <i>unchanged</i> | <i>systemdefault</i> ] </li>
<li> RewriteUser - [ string | <i>unchanged</i> | <i>systemdefault</i>] </li>
<li> CallForward - [ 10digit | <i>unchanged</i> | <i>systemdefault</i>] </li>
<li> Protected - [ true | false | <i>unchanged</i> | <i>systemdefault</i>] </li>
<li> Sms - [ on | off | <i>unchanged</i>] </li>
<li> FinalDestinationURI - [ string | <i>unchanged</i> | <i>systemdefault</i>] </li>
<ul>
  <li>a 10 digit telephone number, or</li>
  <li>a SIP URI ( without the sip: prefix )
    <ul>
      <li>in the form address-string@host IP:port, where </li>
      <li>the host IP is an IPv4 address in the standard numerical n.n.n.n. form, and </li>
      <li>the port is numeric, and optional</li>
      <li>containing [a-z,A-Z,0-9], with ':', '.' and '@' to delimit the components of the overall string, and</li>
      <li>less than 60 characters long.</li>
    </ul>
  </li>
</ul>
</ul>
Where:
<ul>
<li type="square"> <i>systemdefault</i> - implies that the element profile value should be removed so that the TN changes back to the default system behavior;</li>
<li type="square"> <i>unchanged</i> - the value should remain unchanged - implies a read before write model.</li>
<li type="square"><u>Leaving the element out of the payload is equivalent to <i>unchanged</i>.</u></li>
</ul>



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |





## Example Request
```xml
<TnOptionOrder>
    <TnOptionGroups>
        <TnOptionGroup>
            <NumberFormat>
                10digit
            </NumberFormat>
            <RPIDFormat>
                10digit
            </RPIDFormat>
            <RewriteUser>
                testUser1
            </RewriteUser>
            <CallForward>
                6042661720
            </CallForward>
            <CallingNameDisplay>
                on
            </CallingNameDisplay>
            <Protected>
                true
            </Protected>
            <Sms>
                on
            </Sms>
            <FinalDestinationURI>
                sip:+12345678901@1.2.3.4:5060
            </FinalDestinationURI>
            <TelephoneNumbers>
                <TelephoneNumber>
                    2018551020
                </TelephoneNumber>
            </TelephoneNumbers>
        </TnOptionGroup>
        <TnOptionGroup>
            <CallingNameDisplay>
                off
            </CallingNameDisplay>
            <Protected>
                false
            </Protected>
            <Sms>
                off
            </Sms>
            <TelephoneNumbers>
                <TelephoneNumber>
                    2018551025
                </TelephoneNumber>
            </TelephoneNumbers>
        </TnOptionGroup>
    </TnOptionGroups>
</TnOptionOrder>
```


{% common %}


## Example : Created <br> A 201 response indicates that an order has been created.


* Response: 201

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TnOptionOrderResponse>
    <TnOptionOrder>
        <OrderCreateDate>
            2016-01-15T12:01:14.324Z
        </OrderCreateDate>
        <AccountId>
            14
        </AccountId>
        <CreatedByUser>
            jbm
        </CreatedByUser>
        <OrderId>
            ddbdc72e-dc27-490c-904e-d0c11291b095
        </OrderId>
        <LastModifiedDate>
            2016-01-15T12:01:14.324Z
        </LastModifiedDate>
        <ProcessingStatus>
            RECEIVED
        </ProcessingStatus>
        <TnOptionGroups>
            <TnOptionGroup>
                <NumberFormat>
                    10digit
                </NumberFormat>
                <RPIDFormat>
                    10digit
                </RPIDFormat>
                <RewriteUser>
                    testUser1
                </RewriteUser>
                <CallForward>
                    6042661720
                </CallForward>
                <CallingNameDisplay>
                    on
                </CallingNameDisplay>
                <Protected>
                    true
                </Protected>
                <Sms>
                    on
                </Sms>
                <TelephoneNumbers>
                    <TelephoneNumber>
                        2018551020
                    </TelephoneNumber>
                </TelephoneNumbers>
            </TnOptionGroup>
            <TnOptionGroup>
                <CallingNameDisplay>
                    off
                </CallingNameDisplay>
                <Protected>
                    false
                </Protected>
                <Sms>
                    off
                </Sms>
                <TelephoneNumbers>
                    <TelephoneNumber>
                        2018551025
                    </TelephoneNumber>
                </TelephoneNumbers>
            </TnOptionGroup>
        </TnOptionGroups>
        <ErrorList/>
    </TnOptionOrder>
</TnOptionOrderResponse>
```

## Example : Bad Request <br> A 400 response Indicates that the order could not be created.
Error text and an error code will be provided in the ErrorList element.


* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TnOptionOrderResponse>
    <ResponseStatus>
        <ErrorCode>
            5081
        </ErrorCode>
        <Description>
            Number Format 'wrong' is invalid.
        </Description>
    </ResponseStatus>
</TnOptionOrderResponse>
```


{% endmethod %}