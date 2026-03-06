import React from "react"
import { RP2040 } from "./imports/RP2040"
import { TYPE_C_16PIN_2MD_073_ } from "./imports/TYPE_C_16PIN_2MD_073_"
import { XC6206P332MR } from "./imports/XC6206P332MR"
import { USBLC6_2SC6 } from "./imports/USBLC6_2SC6"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"
import { XL_1608SYGC_06 } from "./imports/XL_1608SYGC_06"
import { HX_3x4x2_2P_1_6N_TACTILE_SWITCH } from "./imports/HX_3x4x2_2P_1_6N_TACTILE_SWITCH"
import { A_0603WAF1002T5E } from "./imports/A_0603WAF1002T5E"
import { A_0603WAF1001T5E } from "./imports/A_0603WAF1001T5E"
import { CC0603KRX7R9BB104 } from "./imports/CC0603KRX7R9BB104"
import { CL10A105KB8NNNC } from "./imports/CL10A105KB8NNNC"

export default function Rp2040Breakout() {
  return (
    <board width="42mm" height="30mm" borderRadius="2mm" routingDisabled>
      <TYPE_C_16PIN_2MD_073_
        name="J1"
        pcbX={0}
        pcbY={12.2}
        schX={-9}
        schY={0}
      />

      <RP2040 name="U1" pcbX={0} pcbY={0} schX={0} schY={0} />

      <X322512MSB4SI
        name="Y1"
        pcbX={-8.4}
        pcbY={-1.8}
        schX={-2.2}
        schY={4.8}
      />

      <XC6206P332MR
        name="U2"
        pcbX={10.5}
        pcbY={10.2}
        pcbRotation={180}
        schX={5.5}
        schY={-0.5}
      />

      <USBLC6_2SC6
        name="U3"
        pcbX={0}
        pcbY={9.1}
        schX={-4.7}
        schY={-0.5}
      />

      <HX_3x4x2_2P_1_6N_TACTILE_SWITCH
        name="SW1"
        pcbX={13.5}
        pcbY={-7}
        schX={4.8}
        schY={5.2}
      />

      <XL_1608SYGC_06
        name="D1"
        pcbX={16.4}
        pcbY={4.9}
        pcbRotation={180}
        schX={5.2}
        schY={2.3}
      />

      <A_0603WAF1001T5E
        name="R1"
        pcbX={13.8}
        pcbY={4.9}
        schX={3.5}
        schY={2.3}
      />

      <A_0603WAF1002T5E
        name="R2"
        pcbX={-3.8}
        pcbY={9}
        pcbRotation={90}
        schX={-7.1}
        schY={3.2}
      />
      <A_0603WAF1002T5E
        name="R3"
        pcbX={3.8}
        pcbY={9}
        pcbRotation={90}
        schX={-6.1}
        schY={3.2}
      />
      <A_0603WAF1002T5E
        name="R4"
        pcbX={9.1}
        pcbY={-7}
        pcbRotation={90}
        schX={3.2}
        schY={5.2}
      />
      <A_0603WAF1002T5E
        name="R5"
        pcbX={10.5}
        pcbY={11.1}
        pcbRotation={90}
        schX={3.7}
        schY={-3.2}
      />

      <CC0603KRX7R9BB104
        name="C1"
        pcbX={-5.7}
        pcbY={5.6}
        schX={-1.2}
        schY={-4.2}
      />
      <CC0603KRX7R9BB104
        name="C2"
        pcbX={-2.2}
        pcbY={5.6}
        schX={-0.2}
        schY={-4.2}
      />
      <CC0603KRX7R9BB104
        name="C3"
        pcbX={1.3}
        pcbY={5.6}
        schX={0.8}
        schY={-4.2}
      />
      <CC0603KRX7R9BB104
        name="C4"
        pcbX={4.8}
        pcbY={5.6}
        schX={1.8}
        schY={-4.2}
      />
      <CC0603KRX7R9BB104
        name="C5"
        pcbX={6.6}
        pcbY={4.2}
        schX={2.8}
        schY={-4.2}
      />
      <CC0603KRX7R9BB104
        name="C6"
        pcbX={-11.8}
        pcbY={-1.8}
        pcbRotation={90}
        schX={-2.2}
        schY={6.2}
      />
      <CC0603KRX7R9BB104
        name="C7"
        pcbX={-11.8}
        pcbY={-5.2}
        pcbRotation={90}
        schX={-0.8}
        schY={6.2}
      />
      <CC0603KRX7R9BB104
        name="C8"
        pcbX={7.4}
        pcbY={10.2}
        schX={5.8}
        schY={-3.2}
      />
      <CC0603KRX7R9BB104
        name="C9"
        pcbX={12.8}
        pcbY={2.9}
        schX={6.8}
        schY={-3.2}
      />

      <CL10A105KB8NNNC
        name="C10"
        pcbX={10.5}
        pcbY={7.3}
        schX={4.7}
        schY={-3.2}
      />
      <CL10A105KB8NNNC
        name="C11"
        pcbX={12.9}
        pcbY={5.9}
        schX={7.8}
        schY={-3.2}
      />

      <trace from="J1.VBUS1" to="net.VBUS" />
      <trace from="J1.VBUS2" to="net.VBUS" />
      <trace from="J1.GND1" to="net.GND" />
      <trace from="J1.GND2" to="net.GND" />
      <trace from="J1.SHELL1" to="net.GND" />
      <trace from="J1.SHELL2" to="net.GND" />
      <trace from="J1.pin13_alt1" to="net.GND" />
      <trace from="J1.pin14_alt1" to="net.GND" />
      <trace from="J1.CC1" to="R2.pin1" />
      <trace from="R2.pin2" to="net.GND" />
      <trace from="J1.CC2" to="R3.pin1" />
      <trace from="R3.pin2" to="net.GND" />
      <trace from="J1.DP1" to="U3.pin1" />
      <trace from="J1.DP2" to="U3.pin1" />
      <trace from="J1.DN1" to="U3.pin6" />
      <trace from="J1.DN2" to="U3.pin6" />
      <trace from="U3.pin3" to="U1.USB_DP" />
      <trace from="U3.pin4" to="U1.USB_DM" />
      <trace from="U3.GND" to="net.GND" />
      <trace from="U3.VBUS" to="net.VBUS" />

      <trace from="net.VBUS" to="U2.VIN" />
      <trace from="net.VBUS" to="C10.pin1" />
      <trace from="C10.pin2" to="net.GND" />
      <trace from="U2.VSS" to="net.GND" />
      <trace from="U2.VOUT" to="net.V3_3" />
      <trace from="U2.VOUT" to="C11.pin1" />
      <trace from="C11.pin2" to="net.GND" />

      <trace from="U1.IOVDD1" to="net.V3_3" />
      <trace from="U1.IOVDD2" to="net.V3_3" />
      <trace from="U1.IOVDD3" to="net.V3_3" />
      <trace from="U1.IOVDD4" to="net.V3_3" />
      <trace from="U1.IOVDD5" to="net.V3_3" />
      <trace from="U1.IOVDD6" to="net.V3_3" />
      <trace from="U1.USB_VDD" to="net.V3_3" />
      <trace from="U1.ADC_AVDD" to="net.V3_3" />
      <trace from="U1.VREG_IN" to="net.V3_3" />
      <trace from="U1.VREG_VOUT" to="net.V1_1" />
      <trace from="U1.DVDD1" to="net.V1_1" />
      <trace from="U1.DVDD2" to="net.V1_1" />
      <trace from="U1.GND" to="net.GND" />

      <trace from="C1.pin1" to="net.V3_3" />
      <trace from="C1.pin2" to="net.GND" />
      <trace from="C2.pin1" to="net.V3_3" />
      <trace from="C2.pin2" to="net.GND" />
      <trace from="C3.pin1" to="net.V3_3" />
      <trace from="C3.pin2" to="net.GND" />
      <trace from="C4.pin1" to="net.V3_3" />
      <trace from="C4.pin2" to="net.GND" />
      <trace from="C5.pin1" to="net.V1_1" />
      <trace from="C5.pin2" to="net.GND" />
      <trace from="C6.pin1" to="U1.XIN" />
      <trace from="C6.pin2" to="net.GND" />
      <trace from="C7.pin1" to="U1.XOUT" />
      <trace from="C7.pin2" to="net.GND" />
      <trace from="C8.pin1" to="net.V3_3" />
      <trace from="C8.pin2" to="net.GND" />
      <trace from="C9.pin1" to="net.VBUS" />
      <trace from="C9.pin2" to="net.GND" />

      <trace from="Y1.OSC1" to="U1.XIN" />
      <trace from="Y1.OSC2" to="U1.XOUT" />
      <trace from="Y1.GND1" to="net.GND" />
      <trace from="Y1.GND2" to="net.GND" />

      <trace from="U1.RUN" to="R4.pin1" />
      <trace from="R4.pin2" to="net.V3_3" />
      <trace from="U1.RUN" to="SW1.pin1" />
      <trace from="SW1.pin2" to="net.GND" />

      <trace from="U1.GPIO25" to="R1.pin1" />
      <trace from="R1.pin2" to="D1.A" />
      <trace from="D1.K" to="net.GND" />

      <trace from="U1.QSPI_SCLK" to="net.QSPI_SCLK" />
      <trace from="U1.QSPI_SS" to="net.QSPI_SS" />
      <trace from="U1.QSPI_SD0" to="net.QSPI_SD0" />
      <trace from="U1.QSPI_SD1" to="net.QSPI_SD1" />
      <trace from="U1.QSPI_SD2" to="net.QSPI_SD2" />
      <trace from="U1.QSPI_SD3" to="net.QSPI_SD3" />
      <trace from="U1.TESTEN" to="net.GND" />
      <trace from="U1.SWCLK" to="net.SWCLK" />
      <trace from="U1.SWD" to="net.SWDIO" />

      <trace from="R5.pin1" to="net.V3_3" />
      <trace from="R5.pin2" to="net.SWDIO" />

      <hole name="H1" pcbX={-17} pcbY={10.5} diameter="2.2mm" />
      <hole name="H2" pcbX={17} pcbY={10.5} diameter="2.2mm" />

      <silkscreentext text="RP2040" pcbX={0} pcbY={-11.5} fontSize={1.8} />
      <silkscreentext text="USB" pcbX={0} pcbY={10.7} fontSize={1.2} />
    </board>
  )
}