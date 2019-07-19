# Node Home

A proyect of home atomation lauch from Raspberry.

## Getting Started


### Connect relay to Raspberry

    Connect VCC wire to 4th pin (5V) on raspberry.
    Next connect GND wire to 6th pin on raspberry.
    We are using GPIO4 with this app, then connect signal wire to 7th pin on raspberry.

<img src="image_readme/gpio.png" style="width:50px">

![alt text](/image_readme/Solid_state_Relay.png)
![alt text](/image_readme/gpio.png)
![alt text](/image_readme/img_raspberrypi3.png)


### Installing

What things you need to install the software and how to install them

Use this command from within the project in the Raspberry Pi:
```
npm install
```


### Runnign the app

Once you have it installed use this command to lauch the application
```
nodejs node.js
```
or
```
npm start
```

## Deployment


### Built With
This app use:
* [Node](http://www.dropwizard.io/1.0.2/docs/) - A cross-platform JavaScript run-time environment.
* [Express](https://maven.apache.org/) - Use petitions http.
* [Onoff](https://www.npmjs.com/package/onoff) and [Pigpio](https://www.npmjs.com/package/pigpio) - Get control over GPIO pins on Raspberry.


## Authors

* **Javier González Ramírez**

*This project is a class job*

# Contact

Email: javigoracontact@gmail.com OR javigora97@gmail.com

## License
[MIT]()
MIT License

Copyright (c) [2019] Javier González Ramírez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.