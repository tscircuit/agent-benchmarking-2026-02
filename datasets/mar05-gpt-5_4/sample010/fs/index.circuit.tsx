import React from "react"
import { A_2_54_1_20P__ } from "./imports/A_2_54_1_20P__"
import { A_0603WAF1001T5E } from "./imports/A_0603WAF1001T5E"
import { CC0603KRX7R9BB104 } from "./imports/CC0603KRX7R9BB104"
import { RC0603FR_0727RL } from "./imports/RC0603FR_0727RL"
import { RP2040 } from "./imports/RP2040"
import { TYPE_C_16PIN_2MD_073_ } from "./imports/TYPE_C_16PIN_2MD_073_"
import { USBLC6_2P6_MS } from "./imports/USBLC6_2P6_MS"
import { XC6206P332MR } from "./imports/XC6206P332MR"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"
import { XL_1608SYGC_06 } from "./imports/XL_1608SYGC_06"

export default function Rp2040Breakout() {
  return (
    <board width="58mm" height="24mm" routingDisabled>
      <TYPE_C_16PIN_2MD_073_
        name="J1"
        pcbX={-23}
        pcbY={0}
        schX={-18}
        schY={0}
      />

      <USBLC6_2P6_MS
        name="U3"
        pcbX={-16.5}
        pcbY={0}
        schX={-12}
        schY={6}
      />

      <XC6206P332MR
        name="U2"
        pcbX={-12.5}
        pcbY={7}
        pcbRotation={180}
        schX={-12}
        schY={-5}
      />

      <RP2040 name="U1" pcbX={0} pcbY={0} schX={0} schY={0} />

      <X322512MSB4SI
        name="Y1"
        pcbX={0}
        pcbY={-6}
        schX={0}
        schY={-10}
      />

      <CC0603KRX7R9BB104 name="C1" pcbX={-6} pcbY={8} schX={6} schY={-8} />
      <CC0603KRX7R9BB104 name="C2" pcbX={4.5} pcbY={8} schX={8} schY={-8} />
      <CC0603KRX7R9BB104 name="C3" pcbX={6.5} pcbY={6} schX={10} schY={-8} />
      <CC0603KRX7R9BB104 name="C4" pcbX={5.5} pcbY={-6} schX={12} schY={-8} />
      <CC0603KRX7R9BB104 name="C5" pcbX={-8.5} pcbY={7} schX={14} schY={-8} />

      <RC0603FR_0727RL name="R1" pcbX={-18.5} pcbY={4.5} pcbRotation={90} schX={-6} schY={8} />
      <RC0603FR_0727RL name="R2" pcbX={-14.5} pcbY={4.5} pcbRotation={90} schX={-4} schY={8} />
      <A_0603WAF1001T5E name="R3" pcbX={16.5} pcbY={7} schX={6} schY={8} />

      <XL_1608SYGC_06 name="D1" pcbX={20.5} pcbY={7} schX={10} schY={8} />

      <A_2_54_1_20P__
        name="J2"
        pcbX={0}
        pcbY={11}
        schX={20}
        schY={8}
        schRotation={180}
      />
      <A_2_54_1_20P__
        name="J3"
        pcbX={0}
        pcbY={-11}
        pcbRotation={180}
        schX={20}
        schY={-8}
        schRotation={180}
      />

      <trace from="J1.VBUS1" to="J1.VBUS2" />
      <trace from="J1.VBUS1" to="U2.VIN" />
      <trace from="J1.CC1" to="R1.pin1" />
      <trace from="J1.CC2" to="R2.pin1" />
      <trace from="R1.pin2" to="net.GND" />
      <trace from="R2.pin2" to="net.GND" />

      <trace from="J1.GND1" to="net.GND" />
      <trace from="J1.GND2" to="net.GND" />
      <trace from="J1.SHELL1" to="net.GND" />
      <trace from="J1.SHELL2" to="net.GND" />
      <trace from="J1.pin13_alt1" to="net.GND" />
      <trace from="J1.pin14_alt1" to="net.GND" />

      <trace from="J1.DP1" to="J1.DP2" />
      <trace from="J1.DN1" to="J1.DN2" />
      <trace from="J1.DP1" to="U3.pin1" />
      <trace from="J1.DN1" to="U3.pin3" />
      <trace from="U3.pin6" to="U1.USB_DP" />
      <trace from="U3.pin4" to="U1.USB_DM" />
      <trace from="U3.pin2" to="net.GND" />
      <trace from="U3.pin5" to="net.GND" />

      <trace from="U2.VSS" to="net.GND" />
      <trace from="U2.VOUT" to="net.V3_3" />

      <trace from="U1.VREG_IN" to="net.V3_3" />
      <trace from="U1.VREG_VOUT" to="C4.pin1" />
      <trace from="C4.pin2" to="net.GND" />
      <trace from="U1.USB_VDD" to="net.V3_3" />
      <trace from="U1.ADC_AVDD" to="net.V3_3" />

      <trace from="U1.IOVDD1" to="net.V3_3" />
      <trace from="U1.IOVDD2" to="net.V3_3" />
      <trace from="U1.IOVDD3" to="net.V3_3" />
      <trace from="U1.IOVDD4" to="net.V3_3" />
      <trace from="U1.IOVDD5" to="net.V3_3" />
      <trace from="U1.IOVDD6" to="net.V3_3" />
      <trace from="U1.DVDD1" to="net.V3_3" />
      <trace from="U1.DVDD2" to="net.V3_3" />

      <trace from="U1.GND" to="net.GND" />
      <trace from="Y1.GND1" to="net.GND" />
      <trace from="Y1.GND2" to="net.GND" />
      <trace from="Y1.OSC1" to="U1.XIN" />
      <trace from="Y1.OSC2" to="U1.XOUT" />

      <trace from="C1.pin1" to="net.V3_3" />
      <trace from="C1.pin2" to="net.GND" />
      <trace from="C2.pin1" to="net.V3_3" />
      <trace from="C2.pin2" to="net.GND" />
      <trace from="C3.pin1" to="net.V3_3" />
      <trace from="C3.pin2" to="net.GND" />
      <trace from="C5.pin1" to="net.V3_3" />
      <trace from="C5.pin2" to="net.GND" />

      <trace from="R3.pin1" to="U1.GPIO25" />
      <trace from="R3.pin2" to="D1.A" />
      <trace from="D1.K" to="net.GND" />

      <trace from="U1.GPIO0" to="J2.pin1" />
      <trace from="U1.GPIO1" to="J2.pin2" />
      <trace from="U1.GPIO2" to="J2.pin3" />
      <trace from="U1.GPIO3" to="J2.pin4" />
      <trace from="U1.GPIO4" to="J2.pin5" />
      <trace from="U1.GPIO5" to="J2.pin6" />
      <trace from="U1.GPIO6" to="J2.pin7" />
      <trace from="U1.GPIO7" to="J2.pin8" />
      <trace from="U1.GPIO8" to="J2.pin9" />
      <trace from="U1.GPIO9" to="J2.pin10" />
      <trace from="U1.GPIO10" to="J2.pin11" />
      <trace from="U1.GPIO11" to="J2.pin12" />
      <trace from="U1.GPIO12" to="J2.pin13" />
      <trace from="U1.GPIO13" to="J2.pin14" />
      <trace from="U1.GPIO14" to="J2.pin15" />
      <trace from="U1.GPIO15" to="J2.pin16" />
      <trace from="U1.GPIO16" to="J2.pin17" />
      <trace from="U1.GPIO17" to="J2.pin18" />
      <trace from="U1.GPIO18" to="J2.pin19" />
      <trace from="U1.GPIO19" to="J2.pin20" />

      <trace from="U1.GPIO20" to="J3.pin1" />
      <trace from="U1.GPIO21" to="J3.pin2" />
      <trace from="U1.GPIO22" to="J3.pin3" />
      <trace from="U1.GPIO23" to="J3.pin4" />
      <trace from="U1.GPIO24" to="J3.pin5" />
      <trace from="U1.GPIO25" to="J3.pin6" />
      <trace from="U1.GPIO26_ADC0" to="J3.pin7" />
      <trace from="U1.GPIO27_ADC1" to="J3.pin8" />
      <trace from="U1.GPIO28_ADC2" to="J3.pin9" />
      <trace from="U1.GPIO29_ADC3" to="J3.pin10" />
      <trace from="U1.RUN" to="J3.pin11" />
      <trace from="U1.SWCLK" to="J3.pin12" />
      <trace from="U1.SWD" to="J3.pin13" />
      <trace from="net.V3_3" to="J3.pin14" />
      <trace from="net.GND" to="J3.pin15" />
      <trace from="U1.QSPI_SS" to="J3.pin16" />
      <trace from="U1.QSPI_SCLK" to="J3.pin17" />
      <trace from="U1.QSPI_SD0" to="J3.pin18" />
      <trace from="U1.QSPI_SD1" to="J3.pin19" />
      <trace from="U1.QSPI_SD2" to="J3.pin20" />
    </board>
  )
}