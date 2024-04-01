# cornish_flippsie

![cornish_flippsie](imgur.com image replace me!)

First keyboard made. Custom split keyboard.
This is a custom PCB that is flippable to work for both halves of the split keyboard. Thus making it easier to produce. 
All parts are the most common custom keyboard components. 
The keyboard uses Gateron low profile switches, as I wanted something that resembled the NuPhy keyboard. 

* Keyboard Maintainer: [twish](https://github.com/twish)
* Hardware Supported: Uses custom PCBs (can be found on [my github](https://github.com/twish/kb-cornish-flippsie)), Based on the ProMicro controller and uses Gateron low profile switches.
* Hardware Availability: All components can be found all over the web.

Make example for this keyboard (after setting up your build environment):

    make twish/cornish_flippsie:default

Flashing example for this keyboard:

    make twish/cornish_flippsie:default:flash

See the [build environment setup](https://docs.qmk.fm/#/getting_started_build_tools) and the [make instructions](https://docs.qmk.fm/#/getting_started_make_guide) for more information. Brand new to QMK? Start with our [Complete Newbs Guide](https://docs.qmk.fm/#/newbs).

## Vial support

This keyboard has support for configuration through Vial. To build the firmware for Vial, get your Vial environment set up and symlimk the `qmk-setup` dir to the `keyboards/twish` catalogue in the vial installation dir.
Then run the following commands:

Make example for this keyboard (after setting up your build environment):

    make twish/cornish_flippsie:vial

Flashing example for this keyboard:

    make twish/cornish_flippsie:vial:flash


## Bootloader

Enter the bootloader in 3 ways:

* **Bootmagic reset**: Hold down the key at (0,0) in the matrix (usually the top left key or Escape) and plug in the keyboard
* **Physical reset button**: Briefly press the button on the back of the PCB - some may have pads you must short instead
* **Keycode in layout**: Press the key mapped to `QK_BOOT` if it is available
