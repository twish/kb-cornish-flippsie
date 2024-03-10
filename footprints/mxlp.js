// Any MXLP switch
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh MX hotswap sockets
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible 
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
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
      (module MX-Low-Profile (layer F.Cu) (tedit 5DD4F777)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 -7.14375 180) (layer Dwgs.User) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value MXLP (at 0 -5.08 180) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* corner marks */}
      (fp_line (start -6.95 -5.95) (end -6.95 -6.95) (layer Dwgs.User) (width 0.15))
      (fp_line (start -6.95 6.95) (end -5.95 6.95) (layer Dwgs.User) (width 0.15))
      (fp_line (start -5.95 -6.95) (end -6.95 -6.95) (layer Dwgs.User) (width 0.15))
      (fp_line (start -6.95 6.95) (end -6.95 5.95) (layer Dwgs.User) (width 0.15))
      (fp_line (start 6.95 5.95) (end 6.95 6.95) (layer Dwgs.User) (width 0.15))
      (fp_line (start 6.95 -6.95) (end 5.95 -6.95) (layer Dwgs.User) (width 0.15))
      (fp_line (start 5.95 6.95) (end 6.95 6.95) (layer Dwgs.User) (width 0.15))
      (fp_line (start 6.95 -6.95) (end 6.95 -5.95) (layer Dwgs.User) (width 0.15))
    
      ${''/* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0 180) (size 6.25 6.25) (drill 6.25) (layers *.Cu *.Mask))

      ${''/* stabilizers maybe? */}
      (pad "" np_thru_hole circle (at 0 3.7 180) (size 2.3 2.3) (drill 2.3) (layers *.Cu *.Mask))

      ${''/* some extra line? */}
      (fp_line (start 7.5 7.5) (end -7.5 7.5) (layer Eco2.User) (width 0.15))
      (fp_line (start -7.5 7.5) (end -7.5 -7.5) (layer Eco2.User) (width 0.15))
      (fp_line (start -7.5 -7.5) (end 7.5 -7.5) (layer Eco2.User) (width 0.15))
      (fp_line (start 7.5 -7.5) (end 7.5 7.5) (layer Eco2.User) (width 0.15))
      `
    const keycap = `
      ${'' /* keycap marks maybe */}
      (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
      `
    function pins(def_neg, def_pos, def_side) {
      if(p.hotswap) {
        return `
        ${'' /* holes */}
        (pad "" np_thru_hole circle (at ${def_pos}0 6.05 180) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at ${def_neg}4.13 3.3 41.9) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        
        ${'' /* net pads */}
        (pad 1 smd rect (at ${def_neg}7.585 3.3 ${p.r}) (size 2.55 2.5) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.from})
        (pad 2 smd rect (at ${def_pos}3 6.05 ${p.r}) (size 2.55 2.5) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.to})
        `
      } else {
          return `
            ${''/* pins */}
            (pad 1 thru_hole circle (at ${def_pos}0 6.05 180) (size 2 2) (drill 1.2) (layers *.Cu *.Mask) ${p.from})
            (pad 2 thru_hole circle (at ${def_neg}4.13 3.3 41.9) (size 2 2) (drill 1.2) (layers *.Cu *.Mask) ${p.to})
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
