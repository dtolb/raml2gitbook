{% method %}
## /callbacks/portOutValidationCallbackApi

The initial request for validation is a post to the pre-configured URL defined by the customer.
This request contains optional elements for:
<ul>
  <li>PIN (optional) ( 10 digits )</li>
  <li>Account Number (optional) ( 25 digits )</li>
  <li>zipcode (optional) ( 15 characters )</li>
  <li>a list of one or more telephone numbers (at least one telephone number must be provided) ( 10 digits )</li>
  <li>Subscriber name for information purposes. (optional)( 93 characters )</li>
  <li>PON for information and correlation purposes. (optional)( 25 characters )</li>
</ul>








## Example Request
```xml
<?xml version="1.0"?>
<PortOutValidationRequest>
    <PON>
        some_pon
    </PON>
    <Pin>
        1111
    </Pin>
    <AccountNumber>
        777
    </AccountNumber>
    <ZipCode>
        62025
    </ZipCode>
    <SubscriberName>
        Subscriber Name
    </SubscriberName>
    <TelephoneNumbers>
        <TelephoneNumber>
            2223331000
        </TelephoneNumber>
        <TelephoneNumber>
            2223331001
        </TelephoneNumber>
    </TelephoneNumbers>
</PortOutValidationRequest>
```


{% common %}



{% endmethod %}