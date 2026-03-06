import React from "react"

import { A_0402WGF1001TCE } from "./imports/A_0402WGF1001TCE"
import { A_0603WAF1001T5E } from "./imports/A_0603WAF1001T5E"
import { CL05A105KA5NQNC } from "./imports/CL05A105KA5NQNC"
import { CL05B104KO5NNNC } from "./imports/CL05B104KO5NNNC"
import { KH_TYPE_C_16P } from "./imports/KH_TYPE_C_16P"
import { RC0402FR_0727RL } from "./imports/RC0402FR_0727RL"
import { RP2040 } from "./imports/RP2040"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"
import { XC6206P332MR } from "./imports/XC6206P332MR"
import { XL_1608PGC_06 } from "./imports/XL_1608PGC_06"

export default () => (
  <board width="44mm" height="26mm" routingDisabled>
    <chip
      name="U2"
      manufacturerPartNumber="W25Q16JVUXIQ"
      supplierPartNumbers={{ jlcpcb: ["C113767"] }}
      footprint="soic8"
      pcbX={11.5}
      pcbY={0}
      schX={8}
      schY={0}
      pinLabels={{
        pin1: "CS",
        pin2: "DO",
        pin3: "IO2",
        pin4: "GND",
        pin5: "DI",
        pin6: "CLK",
        pin7: "IO3",
        pin8: "VCC",
      }}
    />

    <group pcbX={-15} pcbY={6.5} schX={-14} schY={6}>
      <KH_TYPE_C_16P name="J1" pcbRotation={180} />
      <RC0402FR_0727RL name="R1" pcbX={-2.3} pcbY={5.1} schX={-2} schY={3} />
      <RC0402FR_0727RL name="R2" pcbX={-1} pcbY={5.1} schX={-2} schY={1} />
      <chip
        name="R3"
        manufacturerPartNumber="0402WGF5101TCE"
        supplierPartNumbers={{ jlcpcb: ["C25905"] }}
        footprint="0402"
        pcbX={1.8}
        pcbY={5.1}
        schX={2}
        schY={3}
        pinLabels={{ pin1: "pin1", pin2: "pin2" }}
      />
      <chip
        name="R4"
        manufacturerPartNumber="0402WGF5101TCE"
        supplierPartNumbers={{ jlcpcb: ["C25905"] }}
        footprint="0402"
        pcbX={3.1}
        pcbY={5.1}
        schX={2}
        schY={1}
        pinLabels={{ pin1: "pin1", pin2: "pin2" }}
      />
    </group>

    <group pcbX={0} pcbY={0} schX={0} schY={0}>
      <RP2040 name="U1" schX={0} schY={0} />
      <X322512MSB4SI name="Y1" pcbX={0} pcbY={-7} schX={-4} schY={-5} />
      <CL05B104KO5NNNC name="C1" pcbX={6.5} pcbY={4.4} schX={4} schY={-5} />
      <CL05B104KO5NNNC name="C2" pcbX={6.5} pcbY={2.7} schX={4} schY={-3} />
      <CL05B104KO5NNNC name="C3" pcbX={6.5} pcbY={1} schX={4} schY={-1} />
      <CL05B104KO5NNNC name="C4" pcbX={6.5} pcbY={-0.7} schX={4} schY={1} />
      <CL05A105KA5NQNC name="C5" pcbX={6.5} pcbY={-2.6} schX={4} schY={3} />
      <CL05A105KA5NQNC name="C6" pcbX={1.7} pcbY={6.4} schX={0} schY={-7} />
      <A_0402WGF1001TCE name="R5" pcbX={0.3} pcbY={6.4} schX={-2} schY={-7} />
      <XC6206P332MR name="U3" pcbX={13.5} pcbY={-6.2} schX={12} schY={-2} pcbRotation={180} />
      <CL05A105KA5NQNC name="C7" pcbX={16.5} pcbY={-7.2} schX={16} schY={-4} />
      <CL05A105KA5NQNC name="C8" pcbX={16.5} pcbY={-5.2} schX={16} schY={-2} />
      <XL_1608PGC_06 name="D1" pcbX={12.5} pcbY={8.4} schX={12} schY={6} />
      <A_0603WAF1001T5E name="R6" pcbX={9.8} pcbY={8.4} schX={9} schY={6} />
      <chip
        name="SW1"
        manufacturerPartNumber="TS-1088-AR02016"
        supplierPartNumbers={{ jlcpcb: ["C720477"] }}
        footprint="pushbutton_smd_4pin"
        pcbX={15.5}
        pcbY={7.4}
        schX={16}
        schY={6}
        pinLabels={{
          pin1: "A1",
          pin2: "A2",
          pin3: "B1",
          pin4: "B2",
        }}
      />
    </group>

    <trace from=".J1 > .A4" to="net.VBUS" />
    <trace from=".J1 > .B9" to="net.VBUS" />
    <trace from=".J1 > .A1" to="net.GND" />
    <trace from=".J1 > .B12" to="net.GND" />
    <trace from=".J1 > .A12" to="net.GND" />
    <trace from=".J1 > .B1" to="net.GND" />
    <trace from=".J1 > .EP1" to="net.GND" />
    <trace from=".J1 > .EP2" to="net.GND" />
    <trace from=".J1 > .EP3" to="net.GND" />
    <trace from=".J1 > .EP4" to="net.GND" />
    <trace from=".J1 > .A5" to=".R3 > .pin1" />
    <trace from=".R3 > .pin2" to="net.GND" />
    <trace from=".J1 > .B5" to=".R4 > .pin1" />
    <trace from=".R4 > .pin2" to="net.GND" />
    <trace from=".J1 > .A6" to=".R1 > .pin1" />
    <trace from=".R1 > .pin2" to=".U1 > .USB_DP" />
    <trace from=".J1 > .B6" to=".R1 > .pin1" />
    <trace from=".J1 > .A7" to=".R2 > .pin1" />
    <trace from=".R2 > .pin2" to=".U1 > .USB_DM" />
    <trace from=".J1 > .B7" to=".R2 > .pin1" />

    <trace from=".U3 > .VIN" to="net.VBUS" />
    <trace from=".U3 > .VSS" to="net.GND" />
    <trace from=".U3 > .VOUT" to="net.V3_3" />
    <trace from=".C7 > .pin1" to="net.VBUS" />
    <trace from=".C7 > .pin2" to="net.GND" />
    <trace from=".C8 > .pin1" to="net.V3_3" />
    <trace from=".C8 > .pin2" to="net.GND" />

    <trace from=".U1 > .IOVDD1" to="net.V3_3" />
    <trace from=".U1 > .IOVDD2" to="net.V3_3" />
    <trace from=".U1 > .IOVDD3" to="net.V3_3" />
    <trace from=".U1 > .IOVDD4" to="net.V3_3" />
    <trace from=".U1 > .IOVDD5" to="net.V3_3" />
    <trace from=".U1 > .IOVDD6" to="net.V3_3" />
    <trace from=".U1 > .USB_VDD" to="net.V3_3" />
    <trace from=".U1 > .ADC_AVDD" to="net.V3_3" />
    <trace from=".U1 > .VREG_IN" to="net.V3_3" />
    <trace from=".U1 > .DVDD1" to="net.V1_1" />
    <trace from=".U1 > .DVDD2" to="net.V1_1" />
    <trace from=".U1 > .VREG_VOUT" to="net.V1_1" />
    <trace from=".U1 > .GND" to="net.GND" />

    <trace from=".C1 > .pin1" to="net.V3_3" />
    <trace from=".C1 > .pin2" to="net.GND" />
    <trace from=".C2 > .pin1" to="net.V3_3" />
    <trace from=".C2 > .pin2" to="net.GND" />
    <trace from=".C3 > .pin1" to="net.V3_3" />
    <trace from=".C3 > .pin2" to="net.GND" />
    <trace from=".C4 > .pin1" to="net.V1_1" />
    <trace from=".C4 > .pin2" to="net.GND" />
    <trace from=".C5 > .pin1" to="net.VREG_IN" />
    <trace from=".C5 > .pin2" to="net.GND" />
    <trace from=".C6 > .pin1" to="net.RUN" />
    <trace from=".C6 > .pin2" to="net.GND" />

    <trace from=".R5 > .pin1" to="net.V3_3" />
    <trace from=".R5 > .pin2" to="net.RUN" />
    <trace from=".U1 > .RUN" to="net.RUN" />
    <trace from=".SW1 > .A1" to="net.RUN" />
    <trace from=".SW1 > .A2" to="net.RUN" />
    <trace from=".SW1 > .B1" to="net.GND" />
    <trace from=".SW1 > .B2" to="net.GND" />

    <trace from=".Y1 > .OSC1" to=".U1 > .XIN" />
    <trace from=".Y1 > .OSC2" to=".U1 > .XOUT" />
    <trace from=".Y1 > .GND1" to="net.GND" />
    <trace from=".Y1 > .GND2" to="net.GND" />

    <trace from=".U1 > .QSPI_SS" to=".U2 > .CS" />
    <trace from=".U1 > .QSPI_SCLK" to=".U2 > .CLK" />
    <trace from=".U1 > .QSPI_SD0" to=".U2 > .DI" />
    <trace from=".U1 > .QSPI_SD1" to=".U2 > .DO" />
    <trace from=".U1 > .QSPI_SD2" to=".U2 > .IO2" />
    <trace from=".U1 > .QSPI_SD3" to=".U2 > .IO3" />
    <trace from=".U2 > .VCC" to="net.V3_3" />
    <trace from=".U2 > .GND" to="net.GND" />

    <trace from=".U1 > .GPIO25" to=".R6 > .pin1" />
    <trace from=".R6 > .pin2" to=".D1 > .A" />
    <trace from=".D1 > .K" to="net.GND" />

    <trace from=".U1 > .GPIO0" to="net.BOARD_GPIO0" />
    <trace from=".U1 > .GPIO1" to="net.BOARD_GPIO1" />
    <trace from=".U1 > .GPIO2" to="net.BOARD_GPIO2" />
    <trace from=".U1 > .GPIO3" to="net.BOARD_GPIO3" />
    <trace from=".U1 > .GPIO4" to="net.BOARD_GPIO4" />
    <trace from=".U1 > .GPIO5" to="net.BOARD_GPIO5" />
    <trace from=".U1 > .GPIO6" to="net.BOARD_GPIO6" />
    <trace from=".U1 > .GPIO7" to="net.BOARD_GPIO7" />
    <trace from=".U1 > .GPIO8" to="net.BOARD_GPIO8" />
    <trace from=".U1 > .GPIO9" to="net.BOARD_GPIO9" />
    <trace from=".U1 > .GPIO10" to="net.BOARD_GPIO10" />
    <trace from=".U1 > .GPIO11" to="net.BOARD_GPIO11" />
    <trace from=".U1 > .GPIO12" to="net.BOARD_GPIO12" />
    <trace from=".U1 > .GPIO13" to="net.BOARD_GPIO13" />
    <trace from=".U1 > .GPIO14" to="net.BOARD_GPIO14" />
    <trace from=".U1 > .GPIO15" to="net.BOARD_GPIO15" />
    <trace from=".U1 > .GPIO16" to="net.BOARD_GPIO16" />
    <trace from=".U1 > .GPIO17" to="net.BOARD_GPIO17" />
    <trace from=".U1 > .GPIO18" to="net.BOARD_GPIO18" />
    <trace from=".U1 > .GPIO19" to="net.BOARD_GPIO19" />
    <trace from=".U1 > .GPIO20" to="net.BOARD_GPIO20" />
    <trace from=".U1 > .GPIO21" to="net.BOARD_GPIO21" />
    <trace from=".U1 > .GPIO22" to="net.BOARD_GPIO22" />
    <trace from=".U1 > .GPIO26_ADC0" to="net.BOARD_GPIO26" />
    <trace from=".U1 > .GPIO27_ADC1" to="net.BOARD_GPIO27" />
    <trace from=".U1 > .GPIO28_ADC2" to="net.BOARD_GPIO28" />
    <trace from=".U1 > .GPIO29_ADC3" to="net.BOARD_GPIO29" />

    <chip
      name="J2"
      manufacturerPartNumber="HDR-2x15-2.54"
      footprint="pinrow_15x2"
      pcbX={0}
      pcbY={13.5}
      schX={0}
      schY={16}
      pinLabels={{
        pin1: "GPIO0",
        pin2: "GPIO1",
        pin3: "GPIO2",
        pin4: "GPIO3",
        pin5: "GPIO4",
        pin6: "GPIO5",
        pin7: "GPIO6",
        pin8: "GPIO7",
        pin9: "GPIO8",
        pin10: "GPIO9",
        pin11: "GPIO10",
        pin12: "GPIO11",
        pin13: "GPIO12",
        pin14: "GPIO13",
        pin15: "GPIO14",
        pin16: "GPIO15",
        pin17: "GPIO16",
        pin18: "GPIO17",
        pin19: "GPIO18",
        pin20: "GPIO19",
        pin21: "GPIO20",
        pin22: "GPIO21",
        pin23: "GPIO22",
        pin24: "GPIO26",
        pin25: "GPIO27",
        pin26: "GPIO28",
        pin27: "GPIO29",
        pin28: "3V3",
        pin29: "VBUS",
        pin30: "GND",
      }}
    />

    <trace from=".J2 > .GPIO0" to="net.BOARD_GPIO0" />
    <trace from=".J2 > .GPIO1" to="net.BOARD_GPIO1" />
    <trace from=".J2 > .GPIO2" to="net.BOARD_GPIO2" />
    <trace from=".J2 > .GPIO3" to="net.BOARD_GPIO3" />
    <trace from=".J2 > .GPIO4" to="net.BOARD_GPIO4" />
    <trace from=".J2 > .GPIO5" to="net.BOARD_GPIO5" />
    <trace from=".J2 > .GPIO6" to="net.BOARD_GPIO6" />
    <trace from=".J2 > .GPIO7" to="net.BOARD_GPIO7" />
    <trace from=".J2 > .GPIO8" to="net.BOARD_GPIO8" />
    <trace from=".J2 > .GPIO9" to="net.BOARD_GPIO9" />
    <trace from=".J2 > .GPIO10" to="net.BOARD_GPIO10" />
    <trace from=".J2 > .GPIO11" to="net.BOARD_GPIO11" />
    <trace from=".J2 > .GPIO12" to="net.BOARD_GPIO12" />
    <trace from=".J2 > .GPIO13" to="net.BOARD_GPIO13" />
    <trace from=".J2 > .GPIO14" to="net.BOARD_GPIO14" />
    <trace from=".J2 > .GPIO15" to="net.BOARD_GPIO15" />
    <trace from=".J2 > .GPIO16" to="net.BOARD_GPIO16" />
    <trace from=".J2 > .GPIO17" to="net.BOARD_GPIO17" />
    <trace from=".J2 > .GPIO18" to="net.BOARD_GPIO18" />
    <trace from=".J2 > .GPIO19" to="net.BOARD_GPIO19" />
    <trace from=".J2 > .GPIO20" to="net.BOARD_GPIO20" />
    <trace from=".J2 > .GPIO21" to="net.BOARD_GPIO21" />
    <trace from=".J2 > .GPIO22" to="net.BOARD_GPIO22" />
    <trace from=".J2 > .GPIO26" to="net.BOARD_GPIO26" />
    <trace from=".J2 > .GPIO27" to="net.BOARD_GPIO27" />
    <trace from=".J2 > .GPIO28" to="net.BOARD_GPIO28" />
    <trace from=".J2 > .GPIO29" to="net.BOARD_GPIO29" />
    <trace from=".J2 > .3V3" to="net.V3_3" />
    <trace from=".J2 > .VBUS" to="net.VBUS" />
    <trace from=".J2 > .GND" to="net.GND" />
  </board>
)