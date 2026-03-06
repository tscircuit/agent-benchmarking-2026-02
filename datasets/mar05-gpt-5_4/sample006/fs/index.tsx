import React from "react"
import { board, group, silkscreentext, trace } from "tscircuit"
import { RP2040 } from "./imports/RP2040"
import { KH_TYPE_C_16P } from "./imports/KH_TYPE_C_16P"
import { LTST_C190GKT } from "./imports/LTST_C190GKT"
import { A_0603WAF1001T5E } from "./imports/A_0603WAF1001T5E"
import { CC0603KRX7R9BB104 } from "./imports/CC0603KRX7R9BB104"
import { CL10A105KB8NNNC } from "./imports/CL10A105KB8NNNC"

export default function MinimalRp2040Breakout() {
  return (
    <board
      width="44mm"
      height="28mm"
      routingDisabled
      autorouter="disabled"
    >
      <KH_TYPE_C_16P name="J1" pcbX={-17} pcbY={0} schX={-9} schY={0} />

      <RP2040 name="U1" pcbX={-1} pcbY={0} schX={0} schY={0} />

      <group pcbX={13} pcbY={0} schX={10} schY={0}>
        <LTST_C190GKT name="D1" pcbX={0} pcbY={4} schX={0} schY={2} />
        <A_0603WAF1001T5E
          name="R1"
          pcbX={0} pcbY={1.8}
          schX={0}
          schY={0}
          pcbRotation={90}
        />
        <trace from="R1.pin1" to="D1._POS" />
        <trace from="D1._NEG" to="net.GND" />
      </group>

      <CC0603KRX7R9BB104
        name="C1"
        pcbX={6.6}
        pcbY={6.9}
        schX={3}
        schY={4}
        pcbRotation={90}
      />
      <CC0603KRX7R9BB104
        name="C2"
        pcbX={10}
        pcbY={6.9}
        schX={5}
        schY={4}
        pcbRotation={90}
      />
      <CC0603KRX7R9BB104
        name="C3"
        pcbX={6.6}
        pcbY={-6.9}
        schX={3}
        schY={-4}
        pcbRotation={90}
      />
      <CL10A105KB8NNNC
        name="C4"
        pcbX={10}
        pcbY={-6.9}
        schX={5}
        schY={-4}
        pcbRotation={90}
      />

      <trace from="J1.A1" to="net.GND" />
      <trace from="J1.B1" to="net.GND" />
      <trace from="J1.A12" to="net.GND" />
      <trace from="J1.B12" to="net.GND" />
      <trace from="J1.EP1" to="net.GND" />
      <trace from="J1.EP2" to="net.GND" />
      <trace from="J1.EP3" to="net.GND" />
      <trace from="J1.EP4" to="net.GND" />

      <trace from="J1.A4" to="net.VBUS" />
      <trace from="J1.B9" to="net.VBUS" />
      <trace from="J1.A9" to="net.VBUS" />
      <trace from="J1.B4" to="net.VBUS" />

      <trace from="J1.A6" to="U1.USB_DP" />
      <trace from="J1.B6" to="U1.USB_DP" />
      <trace from="J1.A7" to="U1.USB_DM" />
      <trace from="J1.B7" to="U1.USB_DM" />

      <trace from="J1.A5" to="net.CC1" />
      <trace from="J1.B5" to="net.CC2" />
      <trace from="J1.A8" to="net.SBU1" />
      <trace from="J1.B8" to="net.SBU2" />

      <trace from="U1.GND" to="net.GND" />
      <trace from="U1.USB_VDD" to="net.V3V3" />
      <trace from="U1.IOVDD1" to="net.V3V3" />
      <trace from="U1.IOVDD2" to="net.V3V3" />
      <trace from="U1.IOVDD3" to="net.V3V3" />
      <trace from="U1.IOVDD4" to="net.V3V3" />
      <trace from="U1.IOVDD5" to="net.V3V3" />
      <trace from="U1.IOVDD6" to="net.V3V3" />
      <trace from="U1.ADC_AVDD" to="net.V3V3" />
      <trace from="U1.VREG_IN" to="net.VBUS" />
      <trace from="U1.VREG_VOUT" to="net.V3V3" />
      <trace from="U1.DVDD1" to="net.V1V1" />
      <trace from="U1.DVDD2" to="net.V1V1" />
      <trace from="U1.RUN" to="net.V3V3" />
      <trace from="U1.TESTEN" to="net.GND" />

      <trace from="U1.GPIO25" to="R1.pin2" />

      <trace from="C1.pin1" to="net.V3V3" />
      <trace from="C1.pin2" to="net.GND" />
      <trace from="C2.pin1" to="net.V3V3" />
      <trace from="C2.pin2" to="net.GND" />
      <trace from="C3.pin1" to="net.V1V1" />
      <trace from="C3.pin2" to="net.GND" />
      <trace from="C4.pin1" to="net.VBUS" />
      <trace from="C4.pin2" to="net.GND" />

      <silkscreentext text="RP2040 Breakout" pcbX={0} pcbY={11.5} fontSize={1.2} />
      <silkscreentext text="USB-C + LED" pcbX={0} pcbY={-11.2} fontSize={0.9} />
    </board>
  )
}