// Any ks33 switch
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Gateron low profile hotswap sockets
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible 
//    keycaps: default is false
//      if true, will add nuphy sized keycap box around the footprint
//
// note: hotswap and reverse can be used simultaneously

module.exports = {
  params: {
    designator: 'S',
    hotswap: false,
    reverse: false,
    keycaps: false,
    from: undefined,
    to: undefined
  },
  body: p => {
    const standard = `
      (module Gateron-Low-Profile-ks-33 (layer F.Cu) (tedit 5DD4F777)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 7.14375) (layer Dwgs.User) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value ks33 (at 0 5.08) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* corner marks, marking the base what would be plate hole. */}
      (fp_line (start -7.015 -6.015) (end -7.015 -7.015) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7.015 7.015) (end -6.015 7.015) (layer Dwgs.User) (width 0.15))
      (fp_line (start -6.015 -7.015) (end -7.015 -7.015) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7.015 7.015) (end -7.015 6.015) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7.015 6.015) (end 7.015 7.015) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7.015 -7.015) (end 6.015 -7.015) (layer Dwgs.User) (width 0.15))
      (fp_line (start 6.015 7.015) (end 7.015 7.015) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7.015 -7.015) (end 7.015 -6.015) (layer Dwgs.User) (width 0.15))
    
      ${''/* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0) (size 4.9378 4.9378) (drill 4.9378) (layers *.Cu *.Mask))

      ${''/* stabilizers maybe? - place for RGB diode hole later... */}
      ${''/* (pad "" np_thru_hole circle (at 0 3.7 180) (size 2.3 2.3) (drill 2.3) (layers *.Cu *.Mask)) */}

      ${''/* Switch footprint outline */}
      (fp_line (start 7.5 7.5) (end -7.5 7.5) (layer Eco2.User) (width 0.15))
      (fp_line (start -7.5 7.5) (end -7.5 -7.5) (layer Eco2.User) (width 0.15))
      (fp_line (start -7.5 -7.5) (end 7.5 -7.5) (layer Eco2.User) (width 0.15))
      (fp_line (start 7.5 -7.5) (end 7.5 7.5) (layer Eco2.User) (width 0.15))
      `
    const keycap = `
      ${'' /* keycap marks */}
      (fp_line (start 9 9) (end -9 9) (layer Eco1.User) (width 0.15))
      (fp_line (start -9 9) (end -9 -9) (layer Eco1.User) (width 0.15))
      (fp_line (start -9 -9) (end 9 -9) (layer Eco1.User) (width 0.15))
      (fp_line (start 9 -9) (end 9 9) (layer Eco1.User) (width 0.15))
      `
    function pins(def_neg, def_pos, def_side) {
      if(p.hotswap) {
        return `
        ${'' /* holes */}
        (pad "" np_thru_hole circle (at ${def_pos}4.40 4.70) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at ${def_neg}2.6 5.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        
        ${'' /* net pads */}
        (pad 1 smd rect (at ${def_neg}6.27 5.75 ${p.r}) (size 2.55 2.5) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.from})
        (pad 2 smd rect (at ${def_pos}8.07 4.70 ${p.r}) (size 2.55 2.5) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.to})
        `
      } else {
          return `
            ${''/* pins */}
            (pad 1 thru_hole circle (at ${def_pos}4.40 4.70) (size 2 2) (drill 1.2) (layers *.Cu *.Mask) ${p.from})
            (pad 2 thru_hole circle (at ${def_neg}2.6 5.75) (size 2 2) (drill 1.2) (layers *.Cu *.Mask) ${p.to})
          `
      }
    }
    if(p.reverse){
      return `
        ${standard}
        ${p.keycaps ? keycap : ''}
        ${pins('-', '', 'B')}
        ${pins('', '-', 'F')})
        `
    } else {
      return `
        ${standard}
        ${p.keycaps ? keycap : ''}
        ${pins('-', '', 'B')})
        `
    }
  }
}
