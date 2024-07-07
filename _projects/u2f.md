---
layout: project
priority: 2
hide: false
---
#### Teensy U2F Authenticator

<img src="" data-echo="/resources/hardware_key.jpeg" class="innerphoto" alt="Image of the Hardware Key build. A perfboard soldered onto an arduino adding a Male USB Type A port and a button for proof of presence."/>

As part of a computer systems security team, we designed and open sourced a homemade 2-factor
authentication security key based on the FIDO alliance's U2F specification. We designed it
to require minimal hardware (a teensy 3.2 and a recommended button+resistor combo is all you need!).
Since it works on generic teensy's and all the code is open source, you can verify the security
of the key. 

I primarily worked on the communication scheme over RawHID and hardware interfacing and the 
authentication protocol on the key side. Here is a cool [write-up](https://www.itstorque.com/u2f/write-up.pdf) on the security key and here
is the [repository](https://github.com/itstorque/u2f) you can use to make your own security key!