// SPDX-License-Identifier: GPL-2.0-or-later
#include QMK_KEYBOARD_H

enum layer_names {
    _DEFAULT,
    _NUM,
    _NAV
};

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    [0] = LAYOUT_ortho_split_3x10_3_2(
        KC_Q,    KC_W,    KC_E,    KC_R,    KC_T,
        KC_A,    KC_S,    KC_D,    KC_F,    KC_G,    KC_ESC,
        KC_Z,    KC_X,    KC_C,    KC_V,    KC_B,    KC_TAB,
                                            KC_LSFT,   KC_LCMD,  KC_SPC,

                                KC_Y,    KC_U,    KC_I,    KC_O,    KC_P,
                 LT(2,KC_ESC),  KC_H,    KC_J,    KC_K,    KC_L,    KC_SLSH,
                 KC_ENT,        KC_N,    KC_M,    KC_COMM, KC_DOT,  KC_BSLS,
        KC_RCTL,   KC_RALT,   TG(1)
    ),
    [1] = LAYOUT_ortho_split_3x10_3_2(
        KC_1,       KC_2,       KC_3,       KC_4,       KC_5,
        KC_GRV,     KC_QUOT,    KC_LPRN,    KC_LCBR,    KC_LBRC,    KC_TRNS,
        KC_Z,       KC_X,       KC_C,       KC_UNDS,    KC_MINS,    KC_TRNS,
                                              KC_TRNS,   KC_TRNS,  KC_TRNS,

                           KC_6,       KC_7,       KC_8,        KC_9,       KC_0,
                 KC_TRNS,  KC_RBRC,    KC_RCBR,    KC_RPRN,     KC_EQL,     KC_TRNS,
                 KC_TRNS,  KC_SCLN,    KC_COLN,    KC_TRNS,     KC_TRNS,    KC_TRNS,
        KC_TRNS,   KC_TRNS,   KC_TRNS
    ),
    [2] = LAYOUT_ortho_split_3x10_3_2(
        KC_PGUP,    KC_HOME,    KC_UP,      KC_END,     KC_MUTE,
        KC_PGDN,    KC_LEFT,    KC_DOWN,    KC_RGHT,    KC_TRNS,    KC_VOLU,
        KC_TRNS,    KC_TRNS,    KC_TRNS,    KC_TRNS,    KC_TRNS,    KC_VOLD,
                                                    KC_TRNS,   KC_TRNS,  KC_TRNS,

                            KC_INS,     KC_DEL,     KC_TRNS,    KC_TRNS,    KC_TRNS,
                 KC_TRNS,   KC_TRNS,    KC_TRNS,    KC_TRNS,    KC_TRNS,    KC_TRNS,
                 KC_TRNS,   KC_TRNS,    KC_TRNS,    KC_TRNS,    KC_TRNS,    KC_TRNS,
        KC_BSPC,   KC_TRNS,   KC_TRNS
    )
};

#ifdef OLED_ENABLE
oled_rotation_t oled_init_user(oled_rotation_t rotation) {
    if (is_keyboard_master()) {
        return OLED_ROTATION_270;
    }

    return rotation;
}

void keyboard_post_init_user(void) {
    // debug_enable=true;
}

bool oled_task_user(void) {
    if (is_keyboard_master()) {
        // Host Keyboard Layer Status
        oled_write_P(PSTR("\n"), false);
        oled_write_P(PSTR(">>"), false);

        switch (get_highest_layer(layer_state)) {
            case _DEFAULT:
                oled_write_P(PSTR("STD\n"), false);
                break;
            case _NUM:
                oled_write_P(PSTR("NUM\n"), false);
                break;
            case _NAV:
                oled_write_P(PSTR("CMD\n"), false);
                break;
            default:
                // Or use the write_ln shortcut over adding '\n' to the end of your string
                oled_write_ln_P(PSTR("ERR"), false);
        }

        // Host Keyboard LED Status
        //led_t led_state = host_keyboard_led_state();
        //oled_write_P(led_state.num_lock ? PSTR("NUM ") : PSTR("    "), false);
        //oled_write_P(led_state.caps_lock ? PSTR("CAP ") : PSTR("    "), false);
        //oled_write_P(led_state.scroll_lock ? PSTR("SCR ") : PSTR("    "), false);
    } else {
        // Slave side should never render...
    }
    return false;
}
#endif
