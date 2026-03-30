import type { ChipProps } from "@tscircuit/props"
import { RP2040 } from "./imports/RP2040"
import { ME6211C33M5G_N } from "./imports/ME6211C33M5G_N"
import { HX_USB3_1TYPE_C_16P_FS } from "./imports/HX_USB3_1TYPE_C_16P_FS"
import { YLED0603R } from "./imports/YLED0603R"

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
    {...props}
    footprint={
      <footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-1.905mm" width="0.6mm" height="1.55mm" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-1.905mm" width="0.6mm" height="1.55mm" shape="rect" />
        <smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-1.905mm" width="0.6mm" height="1.55mm" shape="rect" />
        <smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-1.905mm" width="0.6mm" height="1.55mm" shape="rect" />
        <smtpad portHints={["pin5"]} pcbX="1.905mm" pcbY="1.905mm" width="0.6mm" height="1.55mm" shape="rect" />
        <smtpad portHints={["pin6"]} pcbX="0.635mm" pcbY="1.905mm" width="0.6mm" height="1.55mm" shape="rect" />
        <smtpad portHints={["pin7"]} pcbX="-0.635mm" pcbY="1.905mm" width="0.6mm" height="1.55mm" shape="rect" />
        <smtpad portHints={["pin8"]} pcbX="-1.905mm" pcbY="1.905mm" width="0.6mm" height="1.55mm" shape="rect" />
        <silkscreenpath route={[{ x: -2.6, y: -1.4 }, { x: -2.6, y: 1.4 }, { x: 2.6, y: 1.4 }, { x: 2.6, y: -1.4 }, { x: -2.6, y: -1.4 }]} />
      </footprint>
    }
    pinLabels={flashPinLabels}
  />
)

const crystalPinLabels = {
  pin1: "X1",
  pin2: "X2",
} as const

const Crystal12MHz = (props: ChipProps<typeof crystalPinLabels>) => (
  <chip
    {...props}
    footprint={
      <footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0mm" width="1.2mm" height="1.8mm" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0mm" width="1.2mm" height="1.8mm" shape="rect" />
        <silkscreenpath route={[{ x: -2.1, y: -1.5 }, { x: -2.1, y: 1.5 }, { x: 2.1, y: 1.5 }, { x: 2.1, y: -1.5 }, { x: -2.1, y: -1.5 }]} />
      </footprint>
    }
    pinLabels={crystalPinLabels}
  />
)

const leftHeaderLabels = [
  "VBUS",
  "GND",
  "3V3",
  "RUN",
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
]

const rightHeaderLabels = [
  "SWCLK",
  "SWD",
  "GND",
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
  "USB_DM",
  "USB_DP",
]

const leftHeaderRefs = [
  "net.VBUS",
  "net.GND",
  "net.V3_3",
  "U1.RUN",
  "U1.GPIO0",
  "U1.GPIO1",
  "U1.GPIO2",
  "U1.GPIO3",
  "U1.GPIO4",
  "U1.GPIO5",
  "U1.GPIO6",
  "U1.GPIO7",
  "U1.GPIO8",
  "U1.GPIO9",
  "U1.GPIO10",
  "U1.GPIO11",
  "U1.GPIO12",
  "U1.GPIO13",
  "U1.GPIO14",
  "U1.GPIO15",
]

const rightHeaderRefs = [
  "U1.SWCLK",
  "U1.SWD",
  "net.GND",
  "U1.GPIO16",
  "U1.GPIO17",
  "U1.GPIO18",
  "U1.GPIO19",
  "U1.GPIO20",
  "U1.GPIO21",
  "U1.GPIO22",
  "U1.GPIO23",
  "U1.GPIO24",
  "U1.GPIO25",
  "U1.GPIO26_ADC0",
  "U1.GPIO27_ADC1",
  "U1.GPIO28_ADC2",
  "U1.GPIO29_ADC3",
  "U1.ADC_AVDD",
  "U1.USB_DM",
  "U1.USB_DP",
]

const leftHeaderConnections = Object.fromEntries(
  leftHeaderRefs.map((ref, index) => [`pin${index + 1}`, ref]),
)

const rightHeaderConnections = Object.fromEntries(
  rightHeaderRefs.map((ref, index) => [`pin${index + 1}`, ref]),
)

export default () => (
  <board width="22mm" height="56mm" layers={2}>
    <pinheader
      name="J1"
      pinCount={20}
      pitch="2.54mm"
      pcbX="-8.89mm"
      pcbY="0mm"
      pcbRotation={90}
      pinLabels={leftHeaderLabels}
      connections={leftHeaderConnections}
      showSilkscreenPinLabels
    />
    <pinheader
      name="J2"
      pinCount={20}
      pitch="2.54mm"
      pcbX="8.89mm"
      pcbY="0mm"
      pcbRotation={90}
      pinLabels={rightHeaderLabels}
      connections={rightHeaderConnections}
      showSilkscreenPinLabels
    />

    <HX_USB3_1TYPE_C_16P_FS name="USB1" pcbX="0mm" pcbY="-24mm" schX={-10} schY={0} />
    <ME6211C33M5G_N name="U2" pcbX="0mm" pcbY="-16mm" pcbRotation={180} schX={-10} schY={12} />
    <RP2040 name="U1" pcbX="0mm" pcbY="1mm" pcbRotation={180} schX={12} schY={0} />
    <QspiFlash name="U3" pcbX="4.8mm" pcbY="-7.6mm" pcbRotation={90} schX={24} schY={-4} />
    <Crystal12MHz name="Y1" pcbX="0mm" pcbY="10.2mm" schX={0} schY={12} />
    <YLED0603R name="D1" pcbX="4.5mm" pcbY="20mm" pcbRotation={90} schX={22} schY={14} />

    <capacitor name="C1" capacitance="1uF" footprint="0603" pcbX="-3.8mm" pcbY="-16mm" schX={-22} schY={12} />
    <capacitor name="C2" capacitance="1uF" footprint="0603" pcbX="3.8mm" pcbY="-16mm" schX={-22} schY={16} />
    <capacitor name="C3" capacitance="1uF" footprint="0402" pcbX="3.1mm" pcbY="7.5mm" schX={24} schY={10} />
    <capacitor name="C4" capacitance="100nF" footprint="0402" pcbX="-5.3mm" pcbY="-4.2mm" schX={14} schY={-12} />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX="-5.3mm" pcbY="5.8mm" schX={14} schY={-8} />
    <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX="5.3mm" pcbY="5.8mm" schX={14} schY={-4} />
    <capacitor name="C7" capacitance="100nF" footprint="0402" pcbX="5.3mm" pcbY="-4.2mm" schX={14} schY={0} />
    <capacitor name="C8" capacitance="100nF" footprint="0402" pcbX="4.8mm" pcbY="-11.8mm" schX={24} schY={4} />
    <capacitor name="C9" capacitance="12pF" footprint="0402" pcbX="-2.7mm" pcbY="12.2mm" schX={0} schY={16} />
    <capacitor name="C10" capacitance="12pF" footprint="0402" pcbX="2.7mm" pcbY="12.2mm" schX={4} schY={16} />

    <resistor name="R1" resistance="10k" footprint="0402" pcbX="3.9mm" pcbY="11mm" schX={10} schY={16} />
    <resistor name="R2" resistance="5.1k" footprint="0402" pcbX="-3.3mm" pcbY="-20.2mm" pcbRotation={90} schX={-20} schY={0} />
    <resistor name="R3" resistance="5.1k" footprint="0402" pcbX="3.3mm" pcbY="-20.2mm" pcbRotation={90} schX={-20} schY={4} />
    <resistor name="R4" resistance="27ohm" footprint="0402" pcbX="-1.4mm" pcbY="-18.9mm" pcbRotation={90} schX={-8} schY={-4} />
    <resistor name="R5" resistance="27ohm" footprint="0402" pcbX="1.4mm" pcbY="-18.9mm" pcbRotation={90} schX={-8} schY={0} />
    <resistor name="R6" resistance="1k" footprint="0402" pcbX="4.5mm" pcbY="16.8mm" pcbRotation={90} schX={18} schY={14} />
    <resistor name="R7" resistance="10k" footprint="0402" pcbX="0mm" pcbY="-11.2mm" schX={28} schY={-4} />

    <trace from="USB1.A4B9" to="net.VBUS" />
    <trace from="USB1.B4A9" to="net.VBUS" />
    <trace from="USB1.A1B12" to="net.GND" />
    <trace from="USB1.B1A12" to="net.GND" />
    <trace from="USB1.EH1" to="net.GND" />
    <trace from="USB1.EH2" to="net.GND" />
    <trace from="USB1.EH3" to="net.GND" />
    <trace from="USB1.EH4" to="net.GND" />
    <trace from="USB1.A5" to="R2.pin1" />
    <trace from="R2.pin2" to="net.GND" />
    <trace from="USB1.B5" to="R3.pin1" />
    <trace from="R3.pin2" to="net.GND" />
    <trace from="USB1.A6" to="net.USB_DP_CONN" />
    <trace from="USB1.B6" to="net.USB_DP_CONN" />
    <trace from="USB1.A7" to="net.USB_DM_CONN" />
    <trace from="USB1.B7" to="net.USB_DM_CONN" />
    <trace from="net.USB_DP_CONN" to="R4.pin1" />
    <trace from="R4.pin2" to="U1.USB_DP" />
    <trace from="net.USB_DM_CONN" to="R5.pin1" />
    <trace from="R5.pin2" to="U1.USB_DM" />

    <trace from="U2.VIN" to="net.VBUS" />
    <trace from="U2.VSS" to="net.GND" />
    <trace from="U2.CE" to="net.VBUS" />
    <trace from="U2.VOUT" to="net.V3_3" />
    <trace from="C1.pin1" to="net.VBUS" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin1" to="net.V3_3" />
    <trace from="C2.pin2" to="net.GND" />

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
    <trace from="U1.TESTEN" to="net.GND" />
    <trace from="U1.RUN" to="R1.pin1" />
    <trace from="R1.pin2" to="net.V3_3" />

    <trace from="C3.pin1" to="net.V1_1" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="C4.pin1" to="net.V3_3" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="C5.pin1" to="net.V3_3" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="C6.pin1" to="net.V3_3" />
    <trace from="C6.pin2" to="net.GND" />
    <trace from="C7.pin1" to="net.V3_3" />
    <trace from="C7.pin2" to="net.GND" />

    <trace from="U1.XIN" to="Y1.X1" />
    <trace from="U1.XOUT" to="Y1.X2" />
    <trace from="U1.XIN" to="C9.pin1" />
    <trace from="C9.pin2" to="net.GND" />
    <trace from="U1.XOUT" to="C10.pin1" />
    <trace from="C10.pin2" to="net.GND" />

    <trace from="U3.VCC" to="net.V3_3" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U3.CS" to="U1.QSPI_SS" />
    <trace from="U3.CLK" to="U1.QSPI_SCLK" />
    <trace from="U3.DI" to="U1.QSPI_SD0" />
    <trace from="U3.DO" to="U1.QSPI_SD1" />
    <trace from="U3.IO2" to="U1.QSPI_SD2" />
    <trace from="U3.IO3" to="U1.QSPI_SD3" />
    <trace from="R7.pin1" to="U1.QSPI_SS" />
    <trace from="R7.pin2" to="net.V3_3" />
    <trace from="C8.pin1" to="net.V3_3" />
    <trace from="C8.pin2" to="net.GND" />

    <trace from="U1.GPIO25" to="R6.pin1" />
    <trace from="R6.pin2" to="D1._POS" />
    <trace from="D1._NEG" to="net.GND" />
  </board>
)
