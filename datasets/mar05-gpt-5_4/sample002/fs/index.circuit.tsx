import React from "react"
import { RP2040 } from "./imports/RP2040"
import { TYPE_C_16PIN_2MD_073_ } from "./imports/TYPE_C_16PIN_2MD_073_"
import { KT_0603R } from "./imports/KT_0603R"
import { A_0603WAF1002T5E } from "./imports/A_0603WAF1002T5E"
import { CC0603KRX7R9BB104 } from "./imports/CC0603KRX7R9BB104"

export default function MinimalRp2040Breakout() {
  return (
    <board width="34mm" height="24mm" routingDisabled>
      <TYPE_C_16PIN_2MD_073_
        name="USB1"
        pcbX={0}
        pcbY={-8.3}
        schX={-16}
        schY={0}
      />

      <RP2040
        name="U1"
        pcbX={0}
        pcbY={2.2}
        schX={0}
        schY={0}
      />

      <CC0603KRX7R9BB104
        name="C1"
        pcbX={7.8}
        pcbY={6.4}
        pcbRotation={90}
        schX={7}
        schY={-7}
      />

      <CC0603KRX7R9BB104
        name="C2"
        pcbX={9.6}
        pcbY={6.4}
        pcbRotation={90}
        schX={9}
        schY={-7}
      />

      <A_0603WAF1002T5E
        name="R1"
        pcbX={10.4}
        pcbY={-1.4}
        schX={8}
        schY={8}
      />

      <KT_0603R
        name="LED1"
        pcbX={13.3}
        pcbY={-1.4}
        schX={12}
        schY={8}
      />

      <trace from="USB1.VBUS1" to="USB1.VBUS2" />
      <trace from="USB1.GND1" to="USB1.GND2" />
      <trace from="USB1.SHELL1" to="net.GND" />
      <trace from="USB1.SHELL2" to="net.GND" />

      <trace from="USB1.VBUS1" to="net.VBUS" />
      <trace from="U1.VREG_IN" to="net.VBUS" />

      <trace from="U1.VREG_VOUT" to="net.V3_3" />
      <trace from="U1.USB_VDD" to="net.V3_3" />
      <trace from="U1.IOVDD1" to="net.V3_3" />
      <trace from="U1.IOVDD2" to="net.V3_3" />
      <trace from="U1.IOVDD3" to="net.V3_3" />
      <trace from="U1.IOVDD4" to="net.V3_3" />
      <trace from="U1.IOVDD5" to="net.V3_3" />
      <trace from="U1.IOVDD6" to="net.V3_3" />
      <trace from="U1.ADC_AVDD" to="net.V3_3" />

      <trace from="U1.DVDD1" to="net.V1_1" />
      <trace from="U1.DVDD2" to="net.V1_1" />
      <trace from="U1.VREG_VOUT" to="net.V1_1" />

      <trace from="U1.GND" to="net.GND" />
      <trace from="USB1.GND1" to="net.GND" />

      <trace from="USB1.DP1" to="USB1.DP2" />
      <trace from="USB1.DN1" to="USB1.DN2" />
      <trace from="USB1.DP1" to="U1.USB_DP" />
      <trace from="USB1.DN1" to="U1.USB_DM" />

      <trace from="C1.pin1" to="net.VBUS" />
      <trace from="C1.pin2" to="net.GND" />
      <trace from="C2.pin1" to="net.V3_3" />
      <trace from="C2.pin2" to="net.GND" />

      <trace from="U1.GPIO25" to="R1.pin1" />
      <trace from="R1.pin2" to="LED1.A" />
      <trace from="LED1.K" to="net.GND" />
    </board>
  )
}