import { AP2112K_3_3TRG1 } from "./imports/AP2112K_3_3TRG1"
import { HX_USB3_1TYPE_C_16P_FS } from "./imports/HX_USB3_1TYPE_C_16P_FS"
import { RP2040 } from "./imports/RP2040"
import { W25Q16JVSSIQ } from "./imports/W25Q16JVSSIQ"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"

const leftHeaderLabels: string[] = [
  "GP0",
  "GP1",
  "GP2",
  "GP3",
  "GP4",
  "GP5",
  "GP6",
  "GP7",
  "GP26_ADC0",
  "GP27_ADC1",
  "GP28_ADC2",
  "GP29_ADC3",
  "3V3",
  "GND",
]

const rightHeaderLabels: string[] = [
  "GP8",
  "GP9",
  "GP10",
  "GP11",
  "GP12",
  "GP13",
  "GP14",
  "GP15",
  "GP25",
  "SWDIO",
  "SWCLK",
  "RUN",
  "VBUS",
  "GND",
]

const pinLabelMap = (labels: readonly string[]) =>
  Object.fromEntries(labels.map((label, index) => [`pin${index + 1}`, label]))

const signalBreakout = [
  ["GPIO0", "J1.pin1"],
  ["GPIO1", "J1.pin2"],
  ["GPIO2", "J1.pin3"],
  ["GPIO3", "J1.pin4"],
  ["GPIO4", "J1.pin5"],
  ["GPIO5", "J1.pin6"],
  ["GPIO6", "J1.pin7"],
  ["GPIO7", "J1.pin8"],
  ["GPIO26_ADC0", "J1.pin9"],
  ["GPIO27_ADC1", "J1.pin10"],
  ["GPIO28_ADC2", "J1.pin11"],
  ["GPIO29_ADC3", "J1.pin12"],
  ["GPIO8", "J2.pin1"],
  ["GPIO9", "J2.pin2"],
  ["GPIO10", "J2.pin3"],
  ["GPIO11", "J2.pin4"],
  ["GPIO12", "J2.pin5"],
  ["GPIO13", "J2.pin6"],
  ["GPIO14", "J2.pin7"],
  ["GPIO15", "J2.pin8"],
  ["GPIO25", "J2.pin9"],
  ["SWD", "J2.pin10"],
  ["SWCLK", "J2.pin11"],
  ["RUN", "J2.pin12"],
] as const

export default function RP2040Breakout() {
  return (
    <board width="31mm" height="62mm" layers={4}>
      <pinheader
        name="J1"
        pinCount={14}
        pitch="2.54mm"
        pcbOrientation="vertical"
        pcbX={-13}
        pcbY={-1}
        pinLabels={leftHeaderLabels}
        pcbPinLabels={pinLabelMap(leftHeaderLabels)}
        showSilkscreenPinLabels
        schX={-18}
        schY={0}
        schFacingDirection="right"
      />
      <pinheader
        name="J2"
        pinCount={14}
        pitch="2.54mm"
        pcbOrientation="vertical"
        pcbX={13}
        pcbY={-1}
        pcbRotation={180}
        pinLabels={rightHeaderLabels}
        pcbPinLabels={pinLabelMap(rightHeaderLabels)}
        showSilkscreenPinLabels
        schX={18}
        schY={0}
        schFacingDirection="left"
      />

      <HX_USB3_1TYPE_C_16P_FS
        name="USB1"
        pcbX={0}
        pcbY={27}
        pcbRotation={180}
        schX={0}
        schY={-18}
      />
      <AP2112K_3_3TRG1
        name="U2"
        pcbX={0}
        pcbY={20.5}
        pcbRotation={180}
        schX={-10}
        schY={-10}
      />
      <RP2040 name="U1" pcbX={0} pcbY={5} schX={0} schY={0} />
      <W25Q16JVSSIQ
        name="U3"
        pcbX={0}
        pcbY={-13}
        pcbRotation={90}
        schX={11}
        schY={2}
      />
      <X322512MSB4SI
        name="Y1"
        pcbX={-7.2}
        pcbY={-5}
        schX={-10}
        schY={3}
      />

      <resistor
        name="R1"
        resistance="5.1k"
        footprint="0402"
        pcbX={-3.5}
        pcbY={21.5}
        pcbRotation={90}
        schX={-8}
        schY={-17}
      />
      <resistor
        name="R2"
        resistance="5.1k"
        footprint="0402"
        pcbX={3.5}
        pcbY={21.5}
        pcbRotation={90}
        schX={8}
        schY={-17}
      />
      <resistor
        name="R3"
        resistance="27"
        footprint="0402"
        pcbX={-1.6}
        pcbY={17.5}
        pcbRotation={90}
        schX={-3}
        schY={-13}
      />
      <resistor
        name="R4"
        resistance="27"
        footprint="0402"
        pcbX={1.6}
        pcbY={17.5}
        pcbRotation={90}
        schX={3}
        schY={-13}
      />
      <resistor
        name="R5"
        resistance="10k"
        footprint="0402"
        pcbX={7.8}
        pcbY={9}
        pcbRotation={90}
        schX={8}
        schY={4}
      />
      <resistor
        name="R6"
        resistance="1k"
        footprint="0402"
        pcbX={-7.8}
        pcbY={9}
        pcbRotation={90}
        schX={-7}
        schY={4}
      />
      <resistor
        name="R7"
        resistance="1k"
        footprint="0402"
        pcbX={6.8}
        pcbY={-9.5}
        pcbRotation={90}
        schX={9}
        schY={8}
      />

      <capacitor
        name="C1"
        capacitance="1uF"
        footprint="0402"
        pcbX={-2}
        pcbY={20.5}
        pcbRotation={90}
        schX={-13}
        schY={-10}
      />
      <capacitor
        name="C2"
        capacitance="1uF"
        footprint="0402"
        pcbX={2}
        pcbY={20.5}
        pcbRotation={90}
        schX={-13}
        schY={-7}
      />
      <capacitor
        name="C3"
        capacitance="1uF"
        footprint="0402"
        pcbX={3.4}
        pcbY={10.8}
        pcbRotation={90}
        schX={-13}
        schY={-4}
      />
      <capacitor
        name="C4"
        capacitance="100nF"
        footprint="0402"
        pcbX={-5.8}
        pcbY={8.2}
        pcbRotation={90}
        schX={-12}
        schY={0}
      />
      <capacitor
        name="C5"
        capacitance="100nF"
        footprint="0402"
        pcbX={-5.8}
        pcbY={5.2}
        pcbRotation={90}
        schX={-12}
        schY={2}
      />
      <capacitor
        name="C6"
        capacitance="100nF"
        footprint="0402"
        pcbX={-5.8}
        pcbY={2.2}
        pcbRotation={90}
        schX={-12}
        schY={4}
      />
      <capacitor
        name="C7"
        capacitance="100nF"
        footprint="0402"
        pcbX={5.8}
        pcbY={8.2}
        pcbRotation={90}
        schX={12}
        schY={0}
      />
      <capacitor
        name="C8"
        capacitance="100nF"
        footprint="0402"
        pcbX={5.8}
        pcbY={5.2}
        pcbRotation={90}
        schX={12}
        schY={2}
      />
      <capacitor
        name="C9"
        capacitance="100nF"
        footprint="0402"
        pcbX={5.8}
        pcbY={2.2}
        pcbRotation={90}
        schX={12}
        schY={4}
      />
      <capacitor
        name="C10"
        capacitance="100nF"
        footprint="0402"
        pcbX={4.8}
        pcbY={-13}
        pcbRotation={90}
        schX={14}
        schY={2}
      />
      <capacitor
        name="C11"
        capacitance="10pF"
        footprint="0402"
        pcbX={-10.6}
        pcbY={-5}
        pcbRotation={90}
        schX={-8}
        schY={7}
      />
      <capacitor
        name="C12"
        capacitance="10pF"
        footprint="0402"
        pcbX={-3.8}
        pcbY={-5}
        pcbRotation={90}
        schX={-6}
        schY={7}
      />

      <led
        name="D1"
        color="green"
        footprint="0603"
        pcbX={8.8}
        pcbY={-9.5}
        pcbRotation={90}
        schX={12}
        schY={8}
      />

      {signalBreakout.map(([netName, headerPin]) => (
        <trace key={`${netName}-${headerPin}`} from={`U1.${netName}`} to={`net.${netName}`} />
      ))}
      {signalBreakout.map(([netName, headerPin]) => (
        <trace key={`${headerPin}-${netName}`} from={headerPin} to={`net.${netName}`} />
      ))}

      <trace from="J1.pin13" to="net.V3_3" />
      <trace from="J2.pin13" to="net.VBUS" />
      <trace from="J2.pin14" to="net.GND" />
      <trace from="J1.pin14" to="net.GND" />

      <trace from="USB1.A4B9" to="net.VBUS" />
      <trace from="USB1.B4A9" to="net.VBUS" />
      <trace from="USB1.A1B12" to="net.GND" />
      <trace from="USB1.B1A12" to="net.GND" />
      <trace from="USB1.EH1" to="net.GND" />
      <trace from="USB1.EH2" to="net.GND" />
      <trace from="USB1.EH3" to="net.GND" />
      <trace from="USB1.EH4" to="net.GND" />
      <trace from="USB1.A5" to="net.CC1" />
      <trace from="USB1.B5" to="net.CC2" />
      <trace from="USB1.A6" to="net.USB_DP_CONN" />
      <trace from="USB1.B6" to="net.USB_DP_CONN" />
      <trace from="USB1.A7" to="net.USB_DM_CONN" />
      <trace from="USB1.B7" to="net.USB_DM_CONN" />

      <trace from="R1.pin1" to="net.CC1" />
      <trace from="R1.pin2" to="net.GND" />
      <trace from="R2.pin1" to="net.CC2" />
      <trace from="R2.pin2" to="net.GND" />
      <trace from="R3.pin1" to="net.USB_DM_CONN" />
      <trace from="R3.pin2" to="net.USB_DM" />
      <trace from="R4.pin1" to="net.USB_DP_CONN" />
      <trace from="R4.pin2" to="net.USB_DP" />

      <trace from="U1.USB_DM" to="net.USB_DM" />
      <trace from="U1.USB_DP" to="net.USB_DP" />
      <trace from="U2.VIN" to="net.VBUS" />
      <trace from="U2.EN" to="net.VBUS" />
      <trace from="U2.VOUT" to="net.V3_3" />
      <trace from="U2.GND" to="net.GND" />
      <trace from="C1.pin1" to="net.VBUS" />
      <trace from="C1.pin2" to="net.GND" />
      <trace from="C2.pin1" to="net.V3_3" />
      <trace from="C2.pin2" to="net.GND" />

      <trace from="U1.VREG_IN" to="net.V3_3" />
      <trace from="U1.VREG_VOUT" to="net.VREG_1V1" />
      <trace from="C3.pin1" to="net.VREG_1V1" />
      <trace from="C3.pin2" to="net.GND" />
      <trace from="R5.pin1" to="net.V3_3" />
      <trace from="R5.pin2" to="net.RUN" />
      <trace from="R6.pin1" to="U1.TESTEN" />
      <trace from="R6.pin2" to="net.GND" />

      <trace from="U1.RUN" to="net.RUN" />
      <trace from="U1.IOVDD1" to="net.V3_3" />
      <trace from="U1.IOVDD2" to="net.V3_3" />
      <trace from="U1.IOVDD3" to="net.V3_3" />
      <trace from="U1.IOVDD4" to="net.V3_3" />
      <trace from="U1.IOVDD5" to="net.V3_3" />
      <trace from="U1.IOVDD6" to="net.V3_3" />
      <trace from="U1.USB_VDD" to="net.V3_3" />
      <trace from="U1.ADC_AVDD" to="net.V3_3" />
      <trace from="U1.DVDD1" to="net.VREG_1V1" />
      <trace from="U1.DVDD2" to="net.VREG_1V1" />
      <trace from="U1.GND" to="net.GND" />

      <trace from="C4.pin1" to="net.V3_3" />
      <trace from="C4.pin2" to="net.GND" />
      <trace from="C5.pin1" to="net.V3_3" />
      <trace from="C5.pin2" to="net.GND" />
      <trace from="C6.pin1" to="net.V3_3" />
      <trace from="C6.pin2" to="net.GND" />
      <trace from="C7.pin1" to="net.V3_3" />
      <trace from="C7.pin2" to="net.GND" />
      <trace from="C8.pin1" to="net.V3_3" />
      <trace from="C8.pin2" to="net.GND" />
      <trace from="C9.pin1" to="net.V3_3" />
      <trace from="C9.pin2" to="net.GND" />

      <trace from="U1.XIN" to="net.XIN" />
      <trace from="U1.XOUT" to="net.XOUT" />
      <trace from="Y1.OSC1" to="net.XIN" />
      <trace from="Y1.OSC2" to="net.XOUT" />
      <trace from="Y1.GND1" to="net.GND" />
      <trace from="Y1.GND2" to="net.GND" />
      <trace from="C11.pin1" to="net.XIN" />
      <trace from="C11.pin2" to="net.GND" />
      <trace from="C12.pin1" to="net.XOUT" />
      <trace from="C12.pin2" to="net.GND" />

      <trace from="U3.pin1" to="net.QSPI_SS" />
      <trace from="U3.pin2" to="net.QSPI_SD1" />
      <trace from="U3.IO2" to="net.QSPI_SD2" />
      <trace from="U3.GND" to="net.GND" />
      <trace from="U3.pin5" to="net.QSPI_SD0" />
      <trace from="U3.CLK" to="net.QSPI_SCLK" />
      <trace from="U3.IO3" to="net.QSPI_SD3" />
      <trace from="U3.VCC" to="net.V3_3" />
      <trace from="C10.pin1" to="net.V3_3" />
      <trace from="C10.pin2" to="net.GND" />

      <trace from="U1.QSPI_SS" to="net.QSPI_SS" />
      <trace from="U1.QSPI_SD0" to="net.QSPI_SD0" />
      <trace from="U1.QSPI_SD1" to="net.QSPI_SD1" />
      <trace from="U1.QSPI_SD2" to="net.QSPI_SD2" />
      <trace from="U1.QSPI_SD3" to="net.QSPI_SD3" />
      <trace from="U1.QSPI_SCLK" to="net.QSPI_SCLK" />

      <trace from="R7.pin1" to="net.GPIO25" />
      <trace from="R7.pin2" to="D1.anode" />
      <trace from="D1.cathode" to="net.GND" />
    </board>
  )
}
