import { AP2112K_3_3TRG1 } from "./imports/AP2112K_3_3TRG1"
import { RP2040 } from "./imports/RP2040"
import { TYPE_C_16PIN_2MD_073_ } from "./imports/TYPE_C_16PIN_2MD_073_"
import { W25Q16JVSNIQ } from "./imports/W25Q16JVSNIQ"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"

const leftHeaderLabels = [
  "VBUS",
  "RUN",
  "SWCLK",
  "SWD",
  "GP0",
  "GP1",
  "GP2",
  "GP3",
  "GP4",
  "GP5",
  "GP6",
  "GP7",
  "GP8",
  "GP9",
  "GP10",
  "GP11",
  "GP12",
  "GP13",
  "GND",
  "3V3",
]

const rightHeaderLabels = [
  "GND",
  "BOOTSEL",
  "GP14",
  "GP15",
  "GP16",
  "GP17",
  "GP18",
  "GP19",
  "GP20",
  "GP21",
  "GP22",
  "GP23",
  "GP24",
  "GP25_LED",
  "GP26_ADC0",
  "GP27_ADC1",
  "GP28_ADC2",
  "GP29_ADC3",
  "3V3",
  "GND",
]

const leftHeaderConnections = [
  ["GPIO0", "J1.pin5"],
  ["GPIO1", "J1.pin6"],
  ["GPIO2", "J1.pin7"],
  ["GPIO3", "J1.pin8"],
  ["GPIO4", "J1.pin9"],
  ["GPIO5", "J1.pin10"],
  ["GPIO6", "J1.pin11"],
  ["GPIO7", "J1.pin12"],
  ["GPIO8", "J1.pin13"],
  ["GPIO9", "J1.pin14"],
  ["GPIO10", "J1.pin15"],
  ["GPIO11", "J1.pin16"],
  ["GPIO12", "J1.pin17"],
  ["GPIO13", "J1.pin18"],
] as const

const rightHeaderConnections = [
  ["GPIO14", "J2.pin3"],
  ["GPIO15", "J2.pin4"],
  ["GPIO16", "J2.pin5"],
  ["GPIO17", "J2.pin6"],
  ["GPIO18", "J2.pin7"],
  ["GPIO19", "J2.pin8"],
  ["GPIO20", "J2.pin9"],
  ["GPIO21", "J2.pin10"],
  ["GPIO22", "J2.pin11"],
  ["GPIO23", "J2.pin12"],
  ["GPIO24", "J2.pin13"],
  ["GPIO25", "J2.pin14"],
  ["GPIO26_ADC0", "J2.pin15"],
  ["GPIO27_ADC1", "J2.pin16"],
  ["GPIO28_ADC2", "J2.pin17"],
  ["GPIO29_ADC3", "J2.pin18"],
] as const

export default () => (
  <board width="32mm" height="64mm" layers={4}>
    <TYPE_C_16PIN_2MD_073_
      name="USB1"
      pcbX={0}
      pcbY={-27}
      schX={-9}
      schY={-10}
    />

    <AP2112K_3_3TRG1
      name="U2"
      pcbX={0}
      pcbY={-12}
      schX={-5}
      schY={-2}
    />

    <RP2040
      name="U1"
      pcbX={0}
      pcbY={8}
      schX={0}
      schY={4}
    />

    <W25Q16JVSNIQ
      name="U3"
      pcbX={0}
      pcbY={20}
      pcbRotation={90}
      schX={8}
      schY={6}
    />

    <X322512MSB4SI
      name="Y1"
      pcbX={-6}
      pcbY={18}
      schX={-9}
      schY={6}
    />

    <pinheader
      name="J1"
      pinCount={20}
      pitch="2.54mm"
      holeDiameter="1mm"
      platedDiameter="1.8mm"
      pinLabels={leftHeaderLabels}
      pcbX={-14.1}
      pcbY={0}
      pcbRotation={90}
      schX={-16}
      schY={4}
      schFacingDirection="right"
      showSilkscreenPinLabels
    />

    <pinheader
      name="J2"
      pinCount={20}
      pitch="2.54mm"
      holeDiameter="1mm"
      platedDiameter="1.8mm"
      pinLabels={rightHeaderLabels}
      pcbX={14.1}
      pcbY={0}
      pcbRotation={90}
      schX={16}
      schY={4}
      schFacingDirection="left"
      showSilkscreenPinLabels
    />

    <resistor name="R1" resistance="27" footprint="0402" pcbX={-1.7} pcbY={-17} schX={-6} schY={-8} />
    <resistor name="R2" resistance="27" footprint="0402" pcbX={1.7} pcbY={-17} schX={-4} schY={-8} />
    <resistor name="R3" resistance="5.1k" footprint="0402" pcbX={-5} pcbY={-22} schX={-12} schY={-8} />
    <resistor name="R4" resistance="5.1k" footprint="0402" pcbX={5} pcbY={-22} schX={-12} schY={-6} />
    <resistor name="R5" resistance="1k" footprint="0402" pcbX={6} pcbY={25} schX={10} schY={10} />
    <resistor name="R6" resistance="10k" footprint="0402" pcbX={7} pcbY={7} schX={10} schY={2} />

    <capacitor name="C1" capacitance="1uF" footprint="0402" pcbX={-3.2} pcbY={-12} schX={-2} schY={-2} />
    <capacitor name="C2" capacitance="1uF" footprint="0402" pcbX={3.2} pcbY={-12} schX={-2} schY={0} />
    <capacitor name="C3" capacitance="100nF" footprint="0402" pcbX={-6.4} pcbY={10.5} schX={-2} schY={2} />
    <capacitor name="C4" capacitance="100nF" footprint="0402" pcbX={6.4} pcbY={10.5} schX={-2} schY={4} />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX={-6.4} pcbY={6} schX={-2} schY={6} />
    <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX={6.4} pcbY={6} schX={-2} schY={8} />
    <capacitor name="C7" capacitance="100nF" footprint="0402" pcbX={0} pcbY={24.5} schX={10} schY={8} />
    <capacitor name="C8" capacitance="1uF" footprint="0402" pcbX={3.5} pcbY={15} schX={2} schY={0} />
    <capacitor name="C9" capacitance="12pF" footprint="0402" pcbX={-8.8} pcbY={17} schX={-12} schY={6} />
    <capacitor name="C10" capacitance="12pF" footprint="0402" pcbX={-8.8} pcbY={19} schX={-12} schY={8} />

    <led name="D1" color="green" footprint="0603" pcbX={8.7} pcbY={25} schX={12} schY={10} />

    <trace from="USB1.VBUS1" to="net.VBUS" width="0.5mm" />
    <trace from="USB1.VBUS2" to="net.VBUS" width="0.5mm" />
    <trace from="U2.VIN" to="net.VBUS" width="0.5mm" />
    <trace from="U2.EN" to="net.VBUS" />
    <trace from="J1.pin1" to="net.VBUS" width="0.5mm" />

    <trace from="USB1.GND1" to="net.GND" width="0.5mm" />
    <trace from="USB1.GND2" to="net.GND" width="0.5mm" />
    <trace from="USB1.SHELL1" to="net.GND" width="0.6mm" />
    <trace from="USB1.SHELL2" to="net.GND" width="0.6mm" />
    <trace from="USB1.pin13_alt1" to="net.GND" width="0.6mm" />
    <trace from="USB1.pin14_alt1" to="net.GND" width="0.6mm" />

    <trace from="USB1.DN1" to="R1.pin1" />
    <trace from="USB1.DN2" to="R1.pin1" />
    <trace from="USB1.DP1" to="R2.pin1" />
    <trace from="USB1.DP2" to="R2.pin1" />
    <trace from="R1.pin2" to="U1.USB_DM" />
    <trace from="R2.pin2" to="U1.USB_DP" />

    <trace from="USB1.CC1" to="R3.pin1" />
    <trace from="USB1.CC2" to="R4.pin1" />
    <trace from="R3.pin2" to="net.GND" />
    <trace from="R4.pin2" to="net.GND" />

    <trace from="U2.GND" to="net.GND" />
    <trace from="U2.VOUT" to="net.V3_3" width="0.5mm" />

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
    <trace from="J1.pin20" to="net.V3_3" width="0.5mm" />
    <trace from="J2.pin19" to="net.V3_3" width="0.5mm" />
    <trace from="U3.VCC" to="net.V3_3" />

    <trace from="U1.VREG_VOUT" to="net.DVDD" />
    <trace from="U1.DVDD1" to="net.DVDD" />
    <trace from="U1.DVDD2" to="net.DVDD" />

    <trace from="U1.GND" to="net.GND" width="0.5mm" />
    <trace from="U1.TESTEN" to="net.GND" />

    <trace from="C3.pin1" to="net.V3_3" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="C4.pin1" to="net.V3_3" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="C5.pin1" to="net.V3_3" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="C6.pin1" to="net.V3_3" />
    <trace from="C6.pin2" to="net.GND" />
    <trace from="C7.pin1" to="net.V3_3" />
    <trace from="C7.pin2" to="net.GND" />
    <trace from="C8.pin1" to="net.DVDD" />
    <trace from="C8.pin2" to="net.GND" />

    <trace from="Y1.OSC1" to="U1.XIN" />
    <trace from="Y1.OSC2" to="U1.XOUT" />
    <trace from="Y1.GND1" to="net.GND" />
    <trace from="Y1.GND2" to="net.GND" />
    <trace from="C9.pin1" to="U1.XIN" />
    <trace from="C9.pin2" to="net.GND" />
    <trace from="C10.pin1" to="U1.XOUT" />
    <trace from="C10.pin2" to="net.GND" />

    <trace from="U3.CS" to="U1.QSPI_SS" />
    <trace from="U3.CLK" to="U1.QSPI_SCLK" />
    <trace from="U3.pin5" to="U1.QSPI_SD0" />
    <trace from="U3.pin2" to="U1.QSPI_SD1" />
    <trace from="U3.pin3" to="U1.QSPI_SD2" />
    <trace from="U3.pin7" to="U1.QSPI_SD3" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="C7.pin1" to="U3.VCC" />

    <trace from="R6.pin1" to="U1.RUN" />
    <trace from="R6.pin2" to="net.V3_3" />
    <trace from="J1.pin2" to="U1.RUN" />
    <trace from="J1.pin3" to="U1.SWCLK" />
    <trace from="J1.pin4" to="U1.SWD" />
    <trace from="J2.pin2" to="U1.QSPI_SS" />

    <trace from="R5.pin1" to="U1.GPIO25" />
    <trace from="R5.pin2" to="D1.anode" />
    <trace from="D1.cathode" to="net.GND" />

    <trace from="J1.pin19" to="net.GND" width="0.5mm" />
    <trace from="J2.pin1" to="net.GND" width="0.5mm" />
    <trace from="J2.pin20" to="net.GND" width="0.5mm" />

    {leftHeaderConnections.map(([signal, headerPin]) => (
      <group key={signal}>
        <trace from={`U1.${signal}`} to={headerPin} />
      </group>
    ))}

    {rightHeaderConnections.map(([signal, headerPin]) => (
      <group key={signal}>
        <trace from={`U1.${signal}`} to={headerPin} />
      </group>
    ))}
  </board>
)
