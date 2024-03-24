module.exports = {
    params: {
        class: 'B', // for Button
        from: undefined,
        to: undefined
    },
    body: p => `
    (module TACT_SWITCH_SPST_Angled_PTS645Vx39-2LFS (layer F.Cu) (tedit 5B8CD44F)
    ${p.at /* parametric position */}
    
  (fp_text reference "${p.ref}" (at 0 -1.7) (layer F.SilkS) ${p.ref_hide}
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text value SW_RST (at 0 2) (layer F.Fab) hide
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user RESET (at 2.5 2.5 ${p.rot - 180}) (layer F.SilkS)
    (effects (font (size 0.8 0.8) (thickness 0.15)))
  )
  (fp_text user RESET (at 2.5 2.5 ${p.rot}) (layer B.SilkS)
    (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
  )

  ${''/* Outline */}
  (fp_line (start -1.61 -0.9) (end -1.61 1.2) (width 0.12) (layer F.SilkS))
  (fp_line (start -1.61 3.799999) (end -1.609999 4.309999) (width 0.12) (layer F.SilkS))
  (fp_line (start -1.609999 4.309999) (end -1.089999 4.31) (width 0.12) (layer F.SilkS))
  (fp_line (start -1.090001 3.799999) (end -1.089999 4.31) (width 0.12) (layer F.SilkS))
  (fp_line (start -1.089999 0.970001) (end -1.090002 1.200001) (width 0.12) (layer F.SilkS))
  (fp_line (start -1.089999 0.970001) (end -0.55 0.970002) (width 0.12) (layer F.SilkS))
  (fp_line (start 0.55 0.970001) (end 3.950001 0.97) (width 0.12) (layer F.SilkS))
  (fp_line (start 5.05 0.969998) (end 5.589999 0.97) (width 0.12) (layer F.SilkS))
  (fp_line (start 5.589999 0.97) (end 5.589999 1.200001) (width 0.12) (layer F.SilkS))
  (fp_line (start 5.589999 4.309998) (end 6.109999 4.31) (width 0.12) (layer F.SilkS))
  (fp_line (start 5.590001 3.800001) (end 5.589999 4.309998) (width 0.12) (layer F.SilkS))
  (fp_line (start 6.109999 3.799999) (end 6.109999 4.31) (width 0.12) (layer F.SilkS))
  (fp_line (start 6.11 -0.900001) (end 6.109998 1.2) (width 0.12) (layer F.SilkS))
  (fp_line (start -2.5 -2.8) (end 7.050002 -2.8) (width 0.05) (layer F.CrtYd))
  (fp_line (start -2.499998 4.45) (end -2.5 -2.8) (width 0.05) (layer F.CrtYd))
  (fp_line (start 7.05 4.449999) (end -2.499998 4.45) (width 0.05) (layer F.CrtYd))
  (fp_line (start 7.050002 -2.8) (end 7.05 4.449999) (width 0.05) (layer F.CrtYd))
  (fp_line (start -1.500002 -2.590001) (end 6 -2.59) (width 0.1) (layer F.Fab))
  (fp_line (start -1.499999 4.2) (end -1.500002 -2.590001) (width 0.1) (layer F.Fab))
  (fp_line (start -1.499999 4.2) (end -1.200001 4.199999) (width 0.1) (layer F.Fab))
  (fp_line (start -1.200001 4.199999) (end -1.2 0.86) (width 0.1) (layer F.Fab))
  (fp_line (start -1.2 0.86) (end 5.7 0.86) (width 0.1) (layer F.Fab))
  (fp_line (start 0.5 -3.850001) (end 0.5 -2.590001) (width 0.1) (layer F.Fab))
  (fp_line (start 0.5 -3.850001) (end 3.999998 -3.850001) (width 0.1) (layer F.Fab))
  (fp_line (start 3.999998 -3.850001) (end 4.000001 -2.589998) (width 0.1) (layer F.Fab))
  (fp_line (start 5.7 4.2) (end 5.7 0.86) (width 0.1) (layer F.Fab))
  (fp_line (start 5.7 4.2) (end 6 4.199999) (width 0.1) (layer F.Fab))
  (fp_line (start 6 4.199999) (end 6 -2.59) (width 0.1) (layer F.Fab))

  ${''/* Thru holes */}
  (pad "" thru_hole circle (at -1.249999 2.489998) (size 2.1 2.1) (drill 1.3) (layers *.Cu *.Mask))
  (pad "" thru_hole circle (at 5.76 2.49) (size 2.1 2.1) (drill 1.3) (layers *.Cu *.Mask))
  (pad 1 thru_hole circle (at 0 0) (size 1.75 1.75) (drill 0.99) (layers *.Cu *.Mask) ${p.from})
  (pad 2 thru_hole circle (at 4.499999 -0.000001) (size 1.75 1.75) (drill 0.99) (layers *.Cu *.Mask) ${p.to})
)
    
    `
}
