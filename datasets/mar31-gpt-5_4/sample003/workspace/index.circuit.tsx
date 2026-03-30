import { RP2040 } from "./imports/RP2040"
import { HX_USB3_1TYPE_C_16P_FS } from "./imports/HX_USB3_1TYPE_C_16P_FS"
import { ME6211C33M5G_N } from "./imports/ME6211C33M5G_N"

const leftHeaderLabels = [
  "GP0",
  "GP1",
  "GND",
  "GP2",
  "GP3",
  "GP4",
  "GP5",
  "GND",
  "GP6",
  "GP7",
  "GP8",
  "GP9",
  "GND",
  "GP10",
  "GP11",
  "GP12",
  "GP13",
  "GND",
  "GP14",
  "GP15",
] as const

const leftHeaderTargets = [
  "U1.GPIO0",
  "U1.GPIO1",
  "net.GND",
  "U1.GPIO2",
  "U1.GPIO3",
  "U1.GPIO4",
  "U1.GPIO5",
  "net.GND",
  "U1.GPIO6",
  "U1.GPIO7",
  "U1.GPIO8",
  "U1.GPIO9",
  "net.GND",
  "U1.GPIO10",
  "U1.GPIO11",
  "U1.GPIO12",
  "U1.GPIO13",
  "net.GND",
  "U1.GPIO14",
  "U1.GPIO15",
] as const

const rightHeaderLabels = [
  "VBUS",
  "3V3",
  "GND",
  "RUN",
  "GP28_A2",
  "GP27_A1",
  "GP26_A0",
  "GND",
  "GP22",
  "GP21",
  "GP20",
  "GP19",
  "GND",
  "GP18",
  "GP17",
  "GP16",
  "SWCLK",
  "SWD",
  "ADC_VDD",
  "GND",
] as const

const rightHeaderTargets = [
  "net.VBUS",
  "net.V3_3",
  "net.GND",
  "U1.RUN",
  "U1.GPIO28_ADC2",
  "U1.GPIO27_ADC1",
  "U1.GPIO26_ADC0",
  "net.GND",
  "U1.GPIO22",
  "U1.GPIO21",
  "U1.GPIO20",
  "U1.GPIO19",
  "net.GND",
  "U1.GPIO18",
  "U1.GPIO17",
  "U1.GPIO16",
  "U1.SWCLK",
  "U1.SWD",
  "U1.ADC_AVDD",
  "net.GND",
] as const

const flashPinLabels = {
  pin1: "CS",
  pin2: "DO",
  pin3: "WP",
  pin4: "GND",
  pin5: "DI",
  pin6: "CLK",
  pin7: "HOLD",
  pin8: "VCC",
} as const

export default () => (
  <board width="25mm" height="58mm" layers={4}>
    <HX_USB3_1TYPE_C_16P_FS name="USB1" pcbX={0} pcbY={24} />
    <ME6211C33M5G_N name="U2" pcbX={0} pcbY={16} />
    <RP2040 name="U1" pcbX={0} pcbY={2} />

    <chip
      name="U3"
      footprint="soic8"
      pinLabels={flashPinLabels}
      pcbX={0}
      pcbY={-10}
      supplierPartNumbers={{ jlcpcb: ["C97521"] }}
      manufacturerPartNumber="W25Q16JVSSIQ"
    />

    <chip
      name="Y1"
      footprint={
        <footprint>
          <smtpad portHints={["pin1"]} pcbX="-1.15mm" pcbY="0" width="1mm" height="1.4mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="1.15mm" pcbY="0" width="1mm" height="1.4mm" shape="rect" />
          <silkscreenpath route={[{ x: -2.1, y: -1 }, { x: 2.1, y: -1 }, { x: 2.1, y: 1 }, { x: -2.1, y: 1 }, { x: -2.1, y: -1 }]} />
          <courtyardoutline outline={[{ x: -2.35, y: -1.25 }, { x: 2.35, y: -1.25 }, { x: 2.35, y: 1.25 }, { x: -2.35, y: 1.25 }, { x: -2.35, y: -1.25 }]} />
        </footprint>
      }
      pinLabels={{ pin1: "XTAL1", pin2: "XTAL2" }}
      pcbX={-7.5}
      pcbY={2}
      supplierPartNumbers={{ jlcpcb: ["C9002"] }}
      manufacturerPartNumber="X322512MSB4SI"
    />

    <pinheader
      name="J1"
      pinCount={20}
      pitch="2.54mm"
      pinLabels={[...leftHeaderLabels]}
      pcbX={-11.43}
      pcbY={0}
      pcbOrientation="vertical"
      showSilkscreenPinLabels
    />
    <pinheader
      name="J2"
      pinCount={20}
      pitch="2.54mm"
      pinLabels={[...rightHeaderLabels]}
      pcbX={11.43}
      pcbY={0}
      pcbOrientation="vertical"
      showSilkscreenPinLabels
    />

    <resistor name="R1" resistance="5.1k" footprint="0402" pcbX={-3.4} pcbY={19.6} />
    <resistor name="R2" resistance="5.1k" footprint="0402" pcbX={3.4} pcbY={19.6} />
    <resistor name="R3" resistance="27" footprint="0402" pcbX={-1.3} pcbY={12.3} />
    <resistor name="R4" resistance="27" footprint="0402" pcbX={1.3} pcbY={12.3} />
    <resistor name="R5" resistance="10k" footprint="0402" pcbX={4.6} pcbY={6.2} />
    <resistor name="R6" resistance="1k" footprint="0402" pcbX={5.6} pcbY={-16.6} />

    <led name="D1" color="green" footprint="0402" pcbX={5.6} pcbY={-18.8} />

    <capacitor name="C1" capacitance="1uF" footprint="0402" pcbX={-2.4} pcbY={16.2} />
    <capacitor name="C2" capacitance="1uF" footprint="0402" pcbX={2.4} pcbY={16.2} />
    <capacitor name="C3" capacitance="1uF" footprint="0402" pcbX={3.2} pcbY={7.8} />
    <capacitor name="C4" capacitance="100nF" footprint="0402" pcbX={-6.2} pcbY={7.8} />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX={-6.2} pcbY={4.8} />
    <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX={6.2} pcbY={4.8} />
    <capacitor name="C7" capacitance="100nF" footprint="0402" pcbX={6.2} pcbY={7.8} />
    <capacitor name="C8" capacitance="100nF" footprint="0402" pcbX={2.8} pcbY={-12.8} />
    <capacitor name="C9" capacitance="12pF" footprint="0402" pcbX={-10} pcbY={0.6} />
    <capacitor name="C10" capacitance="12pF" footprint="0402" pcbX={-10} pcbY={3.4} />

    <trace from="USB1.A1B12" to="net.GND" />
    <trace from="USB1.B1A12" to="net.GND" />
    <trace from="USB1.A4B9" to="net.VBUS" />
    <trace from="USB1.B4A9" to="net.VBUS" />
    <trace from="USB1.B5" to="R1.pin1" />
    <trace from="R1.pin2" to="net.GND" />
    <trace from="USB1.A5" to="R2.pin1" />
    <trace from="R2.pin2" to="net.GND" />

    <trace from="USB1.A6" to="R4.pin1" />
    <trace from="USB1.B6" to="R4.pin1" />
    <trace from="R4.pin2" to="U1.USB_DP" />

    <trace from="USB1.A7" to="R3.pin1" />
    <trace from="USB1.B7" to="R3.pin1" />
    <trace from="R3.pin2" to="U1.USB_DM" />

    <trace from="net.VBUS" to="U2.VIN" width="0.4mm" />
    <trace from="net.VBUS" to="U2.CE" />
    <trace from="U2.VSS" to="net.GND" />
    <trace from="U2.VOUT" to="net.V3_3" width="0.5mm" />
    <trace from="net.VBUS" to="C1.pin1" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C2.pin1" />
    <trace from="C2.pin2" to="net.GND" />

    <trace from="net.V3_3" to="U1.VREG_IN" width="0.5mm" />
    <trace from="net.V3_3" to="U1.IOVDD1" />
    <trace from="net.V3_3" to="U1.IOVDD2" />
    <trace from="net.V3_3" to="U1.IOVDD3" />
    <trace from="net.V3_3" to="U1.IOVDD4" />
    <trace from="net.V3_3" to="U1.IOVDD5" />
    <trace from="net.V3_3" to="U1.IOVDD6" />
    <trace from="net.V3_3" to="U1.USB_VDD" />
    <trace from="net.V3_3" to="U1.ADC_AVDD" />
    <trace from="U1.TESTEN" to="net.GND" />
    <trace from="U1.GND" to="net.GND" width="0.5mm" />

    <trace from="U1.VREG_VOUT" to="U1.DVDD1" />
    <trace from="U1.VREG_VOUT" to="U1.DVDD2" />
    <trace from="U1.VREG_VOUT" to="C3.pin1" />
    <trace from="C3.pin2" to="net.GND" />

    <trace from="net.V3_3" to="R5.pin1" />
    <trace from="R5.pin2" to="U1.RUN" />

    <trace from="net.V3_3" to="C4.pin1" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C5.pin1" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C6.pin1" />
    <trace from="C6.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C7.pin1" />
    <trace from="C7.pin2" to="net.GND" />

    <trace from="U1.XIN" to="Y1.XTAL1" />
    <trace from="U1.XOUT" to="Y1.XTAL2" />
    <trace from="U1.XIN" to="C9.pin1" />
    <trace from="C9.pin2" to="net.GND" />
    <trace from="U1.XOUT" to="C10.pin1" />
    <trace from="C10.pin2" to="net.GND" />

    <trace from="net.V3_3" to="U3.VCC" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="net.V3_3" to="C8.pin1" />
    <trace from="C8.pin2" to="net.GND" />
    <trace from="U1.QSPI_SS" to="U3.CS" />
    <trace from="U1.QSPI_SCLK" to="U3.CLK" />
    <trace from="U1.QSPI_SD0" to="U3.DI" />
    <trace from="U1.QSPI_SD1" to="U3.DO" />
    <trace from="U1.QSPI_SD2" to="U3.WP" />
    <trace from="U1.QSPI_SD3" to="U3.HOLD" />

    <trace from="U1.GPIO25" to="R6.pin1" />
    <trace from="R6.pin2" to="D1.anode" />
    <trace from="D1.cathode" to="net.GND" />

    {leftHeaderTargets.map((target, index) => (
      <group key={`j1-${index + 1}`}>
        <trace from={`J1.pin${index + 1}`} to={target} />
      </group>
    ))}
    {rightHeaderTargets.map((target, index) => (
      <group key={`j2-${index + 1}`}>
        <trace from={`J2.pin${index + 1}`} to={target} />
      </group>
    ))}
  </board>
)
