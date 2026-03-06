import React from "react"
import { RP2040 } from "./imports/RP2040"
import { KH_TYPE_C_16P } from "./imports/KH_TYPE_C_16P"
import { LTST_C190GKT } from "./imports/LTST_C190GKT"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"
import { A_0402WGF1001TCE } from "./imports/A_0402WGF1001TCE"
import { A_0402WGF5101TCE } from "./imports/A_0402WGF5101TCE"
import { RC0402FR_0727RL } from "./imports/RC0402FR_0727RL"
import { CL05B104KO5NNNC } from "./imports/CL05B104KO5NNNC"
import { CL05A105KA5NQNC } from "./imports/CL05A105KA5NQNC"
import { A_0402WGF1002TCE } from "./imports/A_0402WGF1002TCE"

export default function Rp2040Breakout() {
  return (
    <board width="40mm" height="28mm" routingDisabled>
      <chip
        name="U2"
        manufacturerPartNumber="W25Q16JVUXIQ"
        footprint="soic8"
        pcbX={11.5}
        pcbY={0}
        schX={6}
        schY={-1}
        pinLabels={{
          pin1: ["CS"],
          pin2: ["DO", "IO1"],
          pin3: ["IO2"],
          pin4: ["GND"],
          pin5: ["DI", "IO0"],
          pin6: ["CLK"],
          pin7: ["IO3"],
          pin8: ["VCC"],
        }}
      />

      <group pcbX={-13} pcbY={8.5} schX={-9} schY={3}>
        <KH_TYPE_C_16P name="J1" pcbRotation={180} />
        <A_0402WGF5101TCE name="R1" pcbX={-4.8} pcbY={-2.8} schX={-3} schY={1} />
        <A_0402WGF5101TCE name="R2" pcbX={4.8} pcbY={-2.8} schX={-3} schY={-1} />
        <RC0402FR_0727RL name="R3" pcbX={-3.1} pcbY={5.1} schX={0} schY={2} />
        <RC0402FR_0727RL name="R4" pcbX={-1.4} pcbY={5.1} schX={0} schY={0} />
      </group>

      <group pcbX={0} pcbY={0} schX={0} schY={0}>
        <RP2040 name="U1" />
        <X322512MSB4SI name="Y1" pcbX={0} pcbY={-8.7} schX={-6} schY={-6} />
        <CL05B104KO5NNNC name="C1" pcbX={-9.5} pcbY={5.8} schX={-2} schY={6} />
        <CL05B104KO5NNNC name="C2" pcbX={-7.8} pcbY={3.8} schX={-2} schY={4} />
        <CL05B104KO5NNNC name="C3" pcbX={-7.8} pcbY={1.8} schX={-2} schY={2} />
        <CL05B104KO5NNNC name="C4" pcbX={-7.8} pcbY={-0.2} schX={-2} schY={0} />
        <CL05B104KO5NNNC name="C5" pcbX={7.8} pcbY={4.8} schX={2} schY={5} />
        <CL05B104KO5NNNC name="C6" pcbX={7.8} pcbY={2.8} schX={2} schY={3} />
        <CL05A105KA5NQNC name="C7" pcbX={7.8} pcbY={0.6} schX={2} schY={1} />
        <CL05A105KA5NQNC name="C8" pcbX={4.2} pcbY={8.2} schX={2} schY={7} />
        <A_0402WGF1002TCE name="R5" pcbX={2.7} pcbY={-8.6} schX={-8} schY={-1} />
      </group>

      <group pcbX={12.5} pcbY={8.5} schX={8} schY={5}>
        <LTST_C190GKT name="D1" pcbX={0} pcbY={0} schX={0} schY={1} />
        <A_0402WGF1001TCE name="R6" pcbX={-2.1} pcbY={0} schX={-2.5} schY={1} />
      </group>

      <group pcbX={6.5} pcbY={-7} schX={9} schY={-5}>
        <chip
          name="JP1"
          footprint="pinrow10_p2.54"
          pcbRotation={90}
          schX={0}
          schY={0}
          pinLabels={{
            pin1: ["pin1"],
            pin2: ["pin2"],
            pin3: ["pin3"],
            pin4: ["pin4"],
            pin5: ["pin5"],
            pin6: ["pin6"],
            pin7: ["pin7"],
            pin8: ["pin8"],
            pin9: ["pin9"],
            pin10: ["pin10"],
          }}
        />
        <chip
          name="JP2"
          footprint="pinrow10_p2.54"
          pcbRotation={90}
          pcbX={5.08}
          schX={3}
          schY={0}
          pinLabels={{
            pin1: ["pin1"],
            pin2: ["pin2"],
            pin3: ["pin3"],
            pin4: ["pin4"],
            pin5: ["pin5"],
            pin6: ["pin6"],
            pin7: ["pin7"],
            pin8: ["pin8"],
            pin9: ["pin9"],
            pin10: ["pin10"],
          }}
        />
      </group>

      <trace from="J1.A1" to="net.GND" />
      <trace from="J1.B12" to="net.GND" />
      <trace from="J1.EP1" to="net.GND" />
      <trace from="J1.EP2" to="net.GND" />
      <trace from="J1.EP3" to="net.GND" />
      <trace from="J1.EP4" to="net.GND" />
      <trace from="J1.A4" to="net.VBUS" />
      <trace from="J1.B9" to="net.VBUS" />
      <trace from="J1.A5" to="R1.pin1" />
      <trace from="R1.pin2" to="net.GND" />
      <trace from="J1.B5" to="R2.pin1" />
      <trace from="R2.pin2" to="net.GND" />
      <trace from="J1.A6" to="R3.pin1" />
      <trace from="R3.pin2" to="U1.USB_DP" />
      <trace from="J1.A7" to="R4.pin1" />
      <trace from="R4.pin2" to="U1.USB_DM" />
      <trace from="J1.B6" to="U1.USB_DM" />
      <trace from="J1.B7" to="U1.USB_DP" />

      <trace from="U1.IOVDD1" to="net.V3_3" />
      <trace from="U1.IOVDD2" to="net.V3_3" />
      <trace from="U1.IOVDD3" to="net.V3_3" />
      <trace from="U1.IOVDD4" to="net.V3_3" />
      <trace from="U1.IOVDD5" to="net.V3_3" />
      <trace from="U1.IOVDD6" to="net.V3_3" />
      <trace from="U1.USB_VDD" to="net.V3_3" />
      <trace from="U1.ADC_AVDD" to="net.V3_3" />
      <trace from="U1.VREG_IN" to="net.V3_3" />
      <trace from="U1.VREG_VOUT" to="net.DVDD" />
      <trace from="U1.DVDD1" to="net.DVDD" />
      <trace from="U1.DVDD2" to="net.DVDD" />

      <trace from="C1.pin1" to="net.V3_3" />
      <trace from="C1.pin2" to="net.GND" />
      <trace from="C2.pin1" to="net.V3_3" />
      <trace from="C2.pin2" to="net.GND" />
      <trace from="C3.pin1" to="net.V3_3" />
      <trace from="C3.pin2" to="net.GND" />
      <trace from="C4.pin1" to="net.V3_3" />
      <trace from="C4.pin2" to="net.GND" />
      <trace from="C5.pin1" to="net.DVDD" />
      <trace from="C5.pin2" to="net.GND" />
      <trace from="C6.pin1" to="net.VREG_OUT" />
      <trace from="C6.pin2" to="net.GND" />
      <trace from="C7.pin1" to="net.VBUS" />
      <trace from="C7.pin2" to="net.GND" />
      <trace from="C8.pin1" to="net.V3_3" />
      <trace from="C8.pin2" to="net.GND" />

      <trace from="U1.VREG_VOUT" to="C6.pin1" />
      <trace from="U1.QSPI_SS" to="U2.CS" />
      <trace from="U1.QSPI_SCLK" to="U2.CLK" />
      <trace from="U1.QSPI_SD0" to="U2.IO0" />
      <trace from="U1.QSPI_SD1" to="U2.IO1" />
      <trace from="U1.QSPI_SD2" to="U2.IO2" />
      <trace from="U1.QSPI_SD3" to="U2.IO3" />
      <trace from="U2.VCC" to="net.V3_3" />
      <trace from="U2.GND" to="net.GND" />

      <trace from="Y1.OSC1" to="U1.XIN" />
      <trace from="Y1.OSC2" to="U1.XOUT" />
      <trace from="Y1.GND1" to="net.GND" />
      <trace from="Y1.GND2" to="net.GND" />

      <trace from="R5.pin1" to="net.V3_3" />
      <trace from="R5.pin2" to="U1.RUN" />
      <trace from="U1.TESTEN" to="net.GND" />
      <trace from="R6.pin1" to="net.V3_3" />
      <trace from="R6.pin2" to="D1._POS" />
      <trace from="D1._NEG" to="U1.GPIO25" />

      <trace from="JP1.pin1" to="net.GND" />
      <trace from="JP1.pin2" to="net.VBUS" />
      <trace from="JP1.pin3" to="net.V3_3" />
      <trace from="JP1.pin4" to="U1.RUN" />
      <trace from="JP1.pin5" to="U1.GPIO0" />
      <trace from="JP1.pin6" to="U1.GPIO1" />
      <trace from="JP1.pin7" to="U1.GPIO2" />
      <trace from="JP1.pin8" to="U1.GPIO3" />
      <trace from="JP1.pin9" to="U1.GPIO4" />
      <trace from="JP1.pin10" to="U1.GPIO5" />

      <trace from="JP2.pin1" to="net.GND" />
      <trace from="JP2.pin2" to="U1.GPIO26_ADC0" />
      <trace from="JP2.pin3" to="U1.GPIO27_ADC1" />
      <trace from="JP2.pin4" to="U1.GPIO28_ADC2" />
      <trace from="JP2.pin5" to="U1.GPIO29_ADC3" />
      <trace from="JP2.pin6" to="U1.GPIO18" />
      <trace from="JP2.pin7" to="U1.GPIO19" />
      <trace from="JP2.pin8" to="U1.GPIO20" />
      <trace from="JP2.pin9" to="U1.GPIO21" />
      <trace from="JP2.pin10" to="U1.GPIO25" />
    </board>
  )
}