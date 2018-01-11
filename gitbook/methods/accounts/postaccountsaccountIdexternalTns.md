{% method %}
## /accounts/{accountId}/externalTns

Create a externalTns order to add or remove telephone numbers provided by the customer from the Bandwidth network.
Note: the attempt to import a telephone number that is already present in the account will *not* create an error, but will reset all of the  attributes of that telephone number in the Dashboard system as if the telephone number was being imported for the first time
The key data elements in the submission are -
 <table style="text-align: left; width: 80%;"
 border="1" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
      <td>CustomerOrderID</td>
      <td>An order ID created by the customer for their tracking purposes</td>
    </tr>
    <tr>
      <td>SiteId</td>
      <td>(Required) The ID of the Site that the Telephone Numbers are to be provisioned to.</td>
    </tr>
    <tr>
      <td>SipPeerId</td>
      <td>(Optional) The ID of the SIP Peer that the Telephone Numbers are to be provisioned to.</td>
    </tr>
    <tr>
      <td>Action</td>
      <td>(Required) Indentify the action on external TNs. Allowed values... IMPORT or REMOVE.</td>
    </tr>
  </tbody>
</table>



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |





## Example Request
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ExternalTnsOrder>
    <CustomerOrderID>
        ICPA123ABC
    </CustomerOrderID>
    <SiteId>
        743
    </SiteId>
    <SipPeerId>
        303716
    </SipPeerId>
    <Action>
        [ IMPORT | REMOVE ]
    </Action>
    <TelephoneNumbers>
        <TelephoneNumber>
            9199918388
        </TelephoneNumber>
        <TelephoneNumber>
            4158714245
        </TelephoneNumber>
        <TelephoneNumber>
            4352154439
        </TelephoneNumber>
        <TelephoneNumber>
            4352154466
        </TelephoneNumber>
    </TelephoneNumbers>
</ExternalTnsOrder>
```


{% common %}


## Example : Created <br> A 201 response indicates that an order has been created.


* Response: 201

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ExternalTnsOrderResponse>
    <OrderCreateDate>
        2016-01-15T11:36:52.727Z
    </OrderCreateDate>
    <AccountId>
        1
    </AccountId>
    <CreatedByUser>
        jbm
    </CreatedByUser>
    <OrderId>
        65e03a35-6b97-48a5-8126-f47bad02df2a
    </OrderId>
    <ProcessingStatus>
        RECEIVED
    </ProcessingStatus>
    <Order>
        <CustomerOrderID>
            ICPA123ABC
        </CustomerOrderID>
        <SiteId>
            743
        </SiteId>
        <SipPeerId>
            303716
        </SipPeerId>
        <Action>
            [ IMPORT | REMOVE ]
        </Action>
        <TelephoneNumbers>
            <TelephoneNumber>
                9199918388
            </TelephoneNumber>
            <TelephoneNumber>
                4158714245
            </TelephoneNumber>
            <TelephoneNumber>
                4352154439
            </TelephoneNumber>
            <TelephoneNumber>
                4352154466
            </TelephoneNumber>
        </TelephoneNumbers>
    </Order>
</ExternalTnsOrderResponse>
```

## Example : Bad Request <br> A 400 response Indicates that the order could not be created.
Error text and an error code will be provided in the ErrorList element.


* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ExternalTnsOrderResponse>
    <ResponseStatus>
        <ErrorCode>
            5081
        </ErrorCode>
        <Description>
            Action is absent or invalid. Possible values  IMPORT, REMOVE
        </Description>
    </ResponseStatus>
</ExternalTnsOrderResponse>
```


{% endmethod %}