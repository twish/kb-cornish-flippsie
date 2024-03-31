// Copyright 2024 Johannes Tveitan (@twish)
// SPDX-License-Identifier: GPL-2.0-or-later

#pragma once

/*
 * Feature disable options
 *  These options are also useful to firmware size reduction.
 */

/* disable debug print */
//#define NO_DEBUG

/* disable print */
//#define NO_PRINT

/* disable action features */
//#define NO_ACTION_LAYER
//#define NO_ACTION_TAPPING
//#define NO_ACTION_ONESHOT

/* Detect left/right hand by EEPROM
 *
 * You have to flash the two halves with the correct setting for this to work...
 * You can do this manually with the following bootloader targets using qmk flash -kb <keyboard> -km <keymap> -bl <bootloader> command to flash:
 *
 * Microcontroller Type                           Bootloader Parameter
 * AVR controllers with Caterina bootloader       avrdude-split-left
 * (e.g. Pro Micro)                               avrdude-split-right
 * */
// #define EE_HANDS

/* Define left/right by master
 * The #define should state the side the USB is plugged into
 * */
#define MASTER_LEFT

/* Some basic settings.
 * Check (https://github.com/qmk/qmk_firmware/blob/master/docs/feature_split_keyboard.md) for more info...
 * */
#define FORCED_SYNC_THROTTLE_MS 100
#define SPLIT_MAX_CONNECTION_ERRORS 10
#define SPLIT_CONNECTION_CHECK_TIMEOUT 500

/* Enables communication of layer state to both halves of keyboard for oled display */
/* #define SPLIT_LAYER_STATE_ENABLE */
//#define SPLIT_LED_STATE_ENABLE
//#define SPLIT_MODS_ENABLE
/* #define SPLIT_OLED_ENABLE */


// OLED
//#define OLED_BRIGHTNESS 172
#define OLED_UPDATE_INTERVAL 50
