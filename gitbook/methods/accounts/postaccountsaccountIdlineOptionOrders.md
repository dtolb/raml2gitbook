{% method %}
## /accounts/{accountId}/lineOptionOrders

This link is used for configuring multiple telephone numbers with specific attributes:<br/>
CNAM, NumberFormat, RPIDFormat, RewriteUser, CallForward, Protected and Sms.<br/>
There are some possible attribute values:
<ul>
<li> TelephoneNumber - [ 10digit ] </li>
<li> CallingNameDisplay - [ on | off | <i>unchanged</i> | <i>systemdefault</i> ] </li>
<li> NumberFormat - [ 10digit | 11digit | e164 | <i>unchanged</i> | <i>systemdefault</i> ] </li>
<li> RPIDFormat - [ 10digit | 11digit | e164 | <i>unchanged</i> | <i>systemdefault</i> ] </li>
<li> RewriteUser - [ string | <i>unchanged</i> | <i>systemdefault</i>] </li>
<li> CallForward - [ 10digit | <i>unchanged</i> | <i>systemdefault</i>] </li>
<li> Protected - [ true | false | <i>unchanged</i> | <i>systemdefault</i>] </li>
<li> Sms - [ on | off | <i>unchanged</i>] </li>
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
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LineOptionOrder>
    <TnLineOptions>
        <TelephoneNumber>
            5209072451
        </TelephoneNumber>
        <CallingNameDisplay>
            on
        </CallingNameDisplay>
        <NumberFormat>
            unchanged
        </NumberFormat>
        <RPIDFormat>
            systemdefault
        </RPIDFormat>
        <RewriteUser>
            Antonio
        </RewriteUser>
        <CallForward>
            2033018394
        </CallForward>
        <Protected>
            true
        </Protected>
        <Sms>
            on
        </Sms>
    </TnLineOptions>
    <TnLineOptions>
        <!-- ...SNIP... -->
    </TnLineOptions>
    <!-- ...SNIP... -->
</LineOptionOrder>
```


{% common %}


## Example : There can be only CompletedNumbers in the returned body of response. It means that all telephone numbers have been successfully provisioned.
Also Errors can be present if telephone numbers didn't pass a validation.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LineOptionOrderResponse>
    <LineOptions>
        <AccountId>
            14
        </AccountId>
        <CompletedNumbers>
            <TelephoneNumber>
                5209072451
            </TelephoneNumber>
        </CompletedNumbers>
        <Errors>
            <Error>
                <TelephoneNumber>
                    2033018394
                </TelephoneNumber>
                <ErrorCode>
                    5005
                </ErrorCode>
                <Description>
                    Telephone Number Unavailable
                </Description>
            </Error>
        </Errors>
    </LineOptions>
</LineOptionOrderResponse>
```

## Example : Possible errors in response:
<li>
<li> 50xx "Telephone number is invalid."  </li>
<li> 50xx "Telephone number is not available on the system."    </li>
<li> 50xx "Duplicate telephone number."    </li>
<li> 50xx "Telephone number is required."       </li>
<li> 50xx "Telephone number is not available."    </li>
<li> 50xx "There is an issue with telephone number. Please contact Customer Service."    </li>
<li> 50xx "There are no valid telephone numbers."     </li>
<li> 50xx "Account has no 'CNAM'/ 'CallForward' product feature."      </li>
<li> 50xx "CallingNameDisplay '--' is invalid. Valid values are: on, off, unchanged, systemdefault." </li>
<li> 50xx "Call Forwarding number '--' is not a valid 10-digit telephone number."     </li>
<li> 50xx "Number Format '--' is invalid."     </li>
<li> 50xx "Rewrite User '--' is invalid."     </li>
<li> 50xx "RPID Format '--' is invalid."      </li>
<li> 13xxx "Protected attribute '--' is invalid. Valid values are: true,  false,unchanged, systemdefault." </li>
<li> 13xxx "Toll free numbers are not candidates for Protected status." </li>
<li> 13xxx "Non-Tier-0 numbers are not candidates for Protected status." </li>
</ul>


* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LineOptionOrderResponse>
    <ResponseStatus>
        <Description>
            Validation Failed. Please check your input parameters.
        </Description>
    </ResponseStatus>
    <LineOptions>
        <AccountId>
            14
        </AccountId>
        <Errors>
            <Error>
                <TelephoneNumber>
                    5209072451
                </TelephoneNumber>
                <ErrorCode>
                    5072
                </ErrorCode>
                <Description>
                    Duplicate telephone number
                </Description>
            </Error>
            <Error>
                <TelephoneNumber>
                    2033018394
                </TelephoneNumber>
                <ErrorCode>
                    5005
                </ErrorCode>
                <Description>
                    Telephone Number Unavailable
                </Description>
            </Error>
        </Errors>
    </LineOptions>
</LineOptionOrderResponse>
```


{% endmethod %}