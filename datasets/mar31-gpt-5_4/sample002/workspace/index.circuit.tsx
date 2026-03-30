import type { ChipProps } from "@tscircuit/props"
import { RP2040 } from "./imports/RP2040"
import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12"
import { XL_1608UGC_04 } from "./imports/XL_1608UGC_04"
import { XC6206P332MR_G } from "./imports/XC6206P332MR_G"

const flashPinLabels = {
  pin1: "CS",
  pin2: "DO",
  pin3: "IO2",
  pin4: "GND",
  pin5: "DI",
  pin6: "CLK",
  pin7: "IO3",
  pin8: "VCC",
} as const

const QspiFlash = (props: ChipProps<typeof flashPinLabels>) => (
  <chip
    pinLabels={flashPinLabels}
    manufacturerPartNumber="W25Q16JVSSIQ"
    footprint={
      <footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.7mm" pcbY="-1.905mm" width="1.5mm" height="0.6mm" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX="-2.7mm" pcbY="-0.635mm" width="1.5mm" height="0.6mm" shape="rect" />
        <smtpad portHints={["pin3"]} pcbX="-2.7mm" pcbY="0.635mm" width="1.5mm" height="0.6mm" shape="rect" />
        <smtpad portHints={["pin4"]} pcbX="-2.7mm" pcbY="1.905mm" width="1.5mm" height="0.6mm" shape="rect" />
        <smtpad portHints={["pin5"]} pcbX="2.7mm" pcbY="1.905mm" width="1.5mm" height="0.6mm" shape="rect" />
        <smtpad portHints={["pin6"]} pcbX="2.7mm" pcbY="0.635mm" width="1.5mm" height="0.6mm" shape="rect" />
        <smtpad portHints={["pin7"]} pcbX="2.7mm" pcbY="-0.635mm" width="1.5mm" height="0.6mm" shape="rect" />
        <smtpad portHints={["pin8"]} pcbX="2.7mm" pcbY="-1.905mm" width="1.5mm" height="0.6mm" shape="rect" />
        <silkscreenpath route={[{ x: -1.9, y: -2.6 }, { x: 1.9, y: -2.6 }, { x: 1.9, y: 2.6 }, { x: -1.9, y: 2.6 }, { x: -1.9, y: -2.6 }]} />
        <silkscreenpath route={[{ x: -2.4, y: -2.1 }, { x: -1.9, y: -2.6 }, { x: -1.9, y: -1.6 }]} />
      </footprint>
    }
    {...props}
  />
)

const crystalPinLabels = {
  pin1: "X1",
  pin2: "X2",
} as const

const Crystal3225 = (props: ChipProps<typeof crystalPinLabels>) => (
  <chip
    pinLabels={crystalPinLabels}
    manufacturerPartNumber="12MHz-3225-2P"
    footprint={
      <footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.15mm" pcbY="0mm" width="1.2mm" height="2.0mm" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX="1.15mm" pcbY="0mm" width="1.2mm" height="2.0mm" shape="rect" />
        <silkscreenpath route={[{ x: -1.9, y: -1.55 }, { x: 1.9, y: -1.55 }, { x: 1.9, y: 1.55 }, { x: -1.9, y: 1.55 }, { x: -1.9, y: -1.55 }]} />
      </footprint>
    }
    {...props}
  />
)

export default () => (
  <board width="26mm" height="56mm" layers={2}>
    <pinheader
      name="J1"
      pinCount={20}
      pitch="2.54mm"
      pcbX="-11.4mm"
      pcbY="0mm"
      pcbRotation={90}
      schX="-20mm"
      schY="0mm"
      schFacingDirection="right"
      showSilkscreenPinLabels
      pinLabels={[
        "3V3",
        "GPIO0",
        "GPIO1",
        "GPIO2",
        "GPIO3",
        "GPIO4",
        "GPIO5",
        "GPIO6",
        "GPIO7",
        "GPIO8",
        "GPIO9",
        "GPIO10",
        "GPIO11",
        "GPIO12",
        "GPIO13",
        "GPIO14",
        "GPIO15",
        "GND",
        "SWCLK",
        "SWD",
      ]}
    />
    <pinheader
      name="J2"
      pinCount={20}
      pitch="2.54mm"
      pcbX="11.4mm"
      pcbY="0mm"
      pcbRotation={270}
      schX="20mm"
      schY="0mm"
      schFacingDirection="left"
      showSilkscreenPinLabels
      pinLabels={[
        "VBUS",
        "3V3",
        "RUN",
        "GPIO16",
        "GPIO17",
        "GPIO18",
        "GPIO19",
        "GPIO20",
        "GPIO21",
        "GPIO22",
        "GPIO23",
        "GPIO24",
        "GPIO25",
        "GPIO26",
        "GPIO27",
        "GPIO28",
        "GPIO29",
        "ADC_AVDD",
        "GND",
        "QSPI_SS",
      ]}
    />

    <TYPE_C_31_M_12 name="USB1" pcbX="0mm" pcbY="-25mm" schX="-6mm" schY="-20mm" />
    <XC6206P332MR_G name="U2" pcbX="0mm" pcbY="-18.2mm" pcbRotation={180} schX="-15mm" schY="-7mm" />
    <RP2040 name="U1" pcbX="0mm" pcbY="-6mm" schX="0mm" schY="0mm" />
    <QspiFlash name="U3" pcbX="6.8mm" pcbY="-6.2mm" pcbRotation={90} schX="16mm" schY="-2mm" />
    <Crystal3225 name="Y1" pcbX="-6.8mm" pcbY="-6.2mm" schX="-15mm" schY="8mm" />
    <XL_1608UGC_04 name="D1" pcbX="0mm" pcbY="20mm" schX="8mm" schY="14mm" />

    <resistor name="R1" resistance="27ohm" footprint="0402" pcbX="-0.8mm" pcbY="-16.3mm" pcbRotation={90} supplierPartNumbers={{ jlcpcb: ["C138021"] }} schX="6mm" schY="-12mm" />
    <resistor name="R2" resistance="27ohm" footprint="0402" pcbX="0.8mm" pcbY="-16.3mm" pcbRotation={90} supplierPartNumbers={{ jlcpcb: ["C138021"] }} schX="8mm" schY="-12mm" />
    <resistor name="R3" resistance="5.1kohm" footprint="0402" pcbX="-3.2mm" pcbY="-19.4mm" pcbRotation={90} supplierPartNumbers={{ jlcpcb: ["C107229"] }} schX="-12mm" schY="-15mm" />
    <resistor name="R4" resistance="5.1kohm" footprint="0402" pcbX="-1.6mm" pcbY="-19.4mm" pcbRotation={90} supplierPartNumbers={{ jlcpcb: ["C107229"] }} schX="-10mm" schY="-15mm" />
    <resistor name="R5" resistance="10kohm" footprint="0402" pcbX="6.8mm" pcbY="0.8mm" pcbRotation={90} supplierPartNumbers={{ jlcpcb: ["C60490"] }} schX="14mm" schY="9mm" />
    <resistor name="R6" resistance="10kohm" footprint="0402" pcbX="9.4mm" pcbY="-10.4mm" pcbRotation={90} supplierPartNumbers={{ jlcpcb: ["C60490"] }} schX="20mm" schY="-7mm" />
    <resistor name="R7" resistance="1kohm" footprint="0402" pcbX="1.8mm" pcbY="20mm" pcbRotation={90} supplierPartNumbers={{ jlcpcb: ["C106235"] }} schX="10mm" schY="14mm" />

    <capacitor name="C1" capacitance="1uF" footprint="0603" pcbX="2.6mm" pcbY="-1.9mm" pcbRotation={90} supplierPartNumbers={{ jlcpcb: ["C15849"] }} schX="6mm" schY="8mm" />
    <capacitor name="C2" capacitance="100nF" footprint="0402" pcbX="-4.8mm" pcbY="-2mm" pcbRotation={90} supplierPartNumbers={{ jlcpcb: ["C1525"] }} schX="-7mm" schY="6mm" />
    <capacitor name="C3" capacitance="100nF" footprint="0402" pcbX="-2.2mm" pcbY="-1.4mm" pcbRotation={90} supplierPartNumbers={{ jlcpcb: ["C1525"] }} schX="-5mm" schY="6mm" />
    <capacitor name="C4" capacitance="100nF" footprint="0402" pcbX="0.4mm" pcbY="-1.4mm" pcbRotation={90} supplierPartNumbers={{ jlcpcb: ["C1525"] }} schX="-3mm" schY="6mm" />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX="4.8mm" pcbY="-1.7mm" pcbRotation={90} supplierPartNumbers={{ jlcpcb: ["C1525"] }} schX="-1mm" schY="6mm" />
    <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX="7.4mm" pcbY="-2.5mm" pcbRotation={90} supplierPartNumbers={{ jlcpcb: ["C1525"] }} schX="1mm" schY="6mm" />
    <capacitor name="C7" capacitance="10uF" footprint="0603" pcbX="-2.1mm" pcbY="-18.2mm" pcbRotation={90} supplierPartNumbers={{ jlcpcb: ["C19702"] }} schX="-18mm" schY="-7mm" />
    <capacitor name="C8" capacitance="1uF" footprint="0603" pcbX="2.1mm" pcbY="-18.2mm" pcbRotation={90} supplierPartNumbers={{ jlcpcb: ["C15849"] }} schX="-16mm" schY="-7mm" />
    <capacitor name="C9" capacitance="15pF" footprint="0402" pcbX="-8.8mm" pcbY="-8.2mm" pcbRotation={90} supplierPartNumbers={{ jlcpcb: ["C1548"] }} schX="-14mm" schY="11mm" />
    <capacitor name="C10" capacitance="15pF" footprint="0402" pcbX="-8.8mm" pcbY="-4.2mm" pcbRotation={90} supplierPartNumbers={{ jlcpcb: ["C1548"] }} schX="-12mm" schY="11mm" />

    <trace from="USB1.A1B12" to="net.GND" />
    <trace from="USB1.B1A12" to="net.GND" />
    <trace from="USB1.EH1" to="net.GND" />
    <trace from="USB1.EH2" to="net.GND" />
    <trace from="USB1.EH3" to="net.GND" />
    <trace from="USB1.EH4" to="net.GND" />
    <trace from="USB1.A4B9" to="net.VBUS" />
    <trace from="USB1.B4A9" to="net.VBUS" />
    <trace from="USB1.A5" to="R3.pin1" />
    <trace from="R3.pin2" to="net.GND" />
    <trace from="USB1.B5" to="R4.pin1" />
    <trace from="R4.pin2" to="net.GND" />
    <trace from="USB1.A5" to="net.CC1" />
    <trace from="USB1.B5" to="net.CC2" />

    <trace from="net.VBUS" to="U2.Vin" />
    <trace from="net.VBUS" to="C7.pin1" />
    <trace from="C7.pin2" to="net.GND" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="U2.Vout" to="net.V3_3" />
    <trace from="net.V3_3" to="C8.pin1" />
    <trace from="C8.pin2" to="net.GND" />

    <trace from="net.VBUS" to="J2.pin1" />
    <trace from="net.V3_3" to="J1.pin1" />
    <trace from="net.V3_3" to="J2.pin2" />

    <trace from="U1.VREG_IN" to="net.V3_3" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.IOVDD1" to="net.V3_3" />
    <trace from="U1.IOVDD2" to="net.V3_3" />
    <trace from="U1.IOVDD3" to="net.V3_3" />
    <trace from="U1.IOVDD4" to="net.V3_3" />
    <trace from="U1.IOVDD5" to="net.V3_3" />
    <trace from="U1.IOVDD6" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.VREG_VOUT" to="U1.DVDD1" />
    <trace from="U1.VREG_VOUT" to="U1.DVDD2" />
    <trace from="U1.VREG_VOUT" to="C1.pin1" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="U1.TESTEN" to="net.GND" />
    <trace from="U1.RUN" to="R5.pin1" />
    <trace from="R5.pin2" to="net.V3_3" />
    <trace from="U1.RUN" to="J2.pin3" />

    <trace from="U1.XIN" to="Y1.X1" />
    <trace from="U1.XOUT" to="Y1.X2" />
    <trace from="U1.XIN" to="C9.pin1" />
    <trace from="C9.pin2" to="net.GND" />
    <trace from="U1.XOUT" to="C10.pin1" />
    <trace from="C10.pin2" to="net.GND" />

    <trace from="U1.USB_DM" to="R1.pin1" />
    <trace from="R1.pin2" to="USB1.A7" />
    <trace from="R1.pin2" to="USB1.B7" />
    <trace from="U1.USB_DP" to="R2.pin1" />
    <trace from="R2.pin2" to="USB1.A6" />
    <trace from="R2.pin2" to="USB1.B6" />

    <trace from="U1.QSPI_SS" to="U3.CS" />
    <trace from="U1.QSPI_SCLK" to="U3.CLK" />
    <trace from="U1.QSPI_SD0" to="U3.DI" />
    <trace from="U1.QSPI_SD1" to="U3.DO" />
    <trace from="U1.QSPI_SD2" to="U3.IO2" />
    <trace from="U1.QSPI_SD3" to="U3.IO3" />
    <trace from="U3.VCC" to="net.V3_3" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U3.CS" to="R6.pin1" />
    <trace from="R6.pin2" to="net.V3_3" />
    <trace from="U1.QSPI_SS" to="J2.pin20" />

    <trace from="net.V3_3" to="C2.pin1" />
    <trace from="C2.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C3.pin1" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C4.pin1" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C5.pin1" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C6.pin1" />
    <trace from="C6.pin2" to="net.GND" />

    <trace from="U1.GPIO25" to="R7.pin1" />
    <trace from="R7.pin2" to="D1.A" />
    <trace from="D1.K" to="net.GND" />

    <trace from="U1.GPIO0" to="J1.pin2" />
    <trace from="U1.GPIO1" to="J1.pin3" />
    <trace from="U1.GPIO2" to="J1.pin4" />
    <trace from="U1.GPIO3" to="J1.pin5" />
    <trace from="U1.GPIO4" to="J1.pin6" />
    <trace from="U1.GPIO5" to="J1.pin7" />
    <trace from="U1.GPIO6" to="J1.pin8" />
    <trace from="U1.GPIO7" to="J1.pin9" />
    <trace from="U1.GPIO8" to="J1.pin10" />
    <trace from="U1.GPIO9" to="J1.pin11" />
    <trace from="U1.GPIO10" to="J1.pin12" />
    <trace from="U1.GPIO11" to="J1.pin13" />
    <trace from="U1.GPIO12" to="J1.pin14" />
    <trace from="U1.GPIO13" to="J1.pin15" />
    <trace from="U1.GPIO14" to="J1.pin16" />
    <trace from="U1.GPIO15" to="J1.pin17" />
    <trace from="J1.pin18" to="net.GND" />
    <trace from="U1.SWCLK" to="J1.pin19" />
    <trace from="U1.SWD" to="J1.pin20" />

    <trace from="U1.GPIO16" to="J2.pin4" />
    <trace from="U1.GPIO17" to="J2.pin5" />
    <trace from="U1.GPIO18" to="J2.pin6" />
    <trace from="U1.GPIO19" to="J2.pin7" />
    <trace from="U1.GPIO20" to="J2.pin8" />
    <trace from="U1.GPIO21" to="J2.pin9" />
    <trace from="U1.GPIO22" to="J2.pin10" />
    <trace from="U1.GPIO23" to="J2.pin11" />
    <trace from="U1.GPIO24" to="J2.pin12" />
    <trace from="U1.GPIO25" to="J2.pin13" />
    <trace from="U1.GPIO26_ADC0" to="J2.pin14" />
    <trace from="U1.GPIO27_ADC1" to="J2.pin15" />
    <trace from="U1.GPIO28_ADC2" to="J2.pin16" />
    <trace from="U1.GPIO29_ADC3" to="J2.pin17" />
    <trace from="U1.ADC_AVDD" to="J2.pin18" />
    <trace from="J2.pin19" to="net.GND" />

    <trace from="U1.GND" to="net.GND" />
  </board>
)
