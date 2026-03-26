import { RP2040 } from "./imports/RP2040"
import { TYPE_C_16PIN_2MD_073_ } from "./imports/TYPE_C_16PIN_2MD_073_"
import { XC6206P332MR_G } from "./imports/XC6206P332MR_G"
import { W25Q16JVSSIQ } from "./imports/W25Q16JVSSIQ"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"
import { XL_1608SURC_06 } from "./imports/XL_1608SURC_06"
import { HX_3x4x2_2P_1_6N_TACTILE_SWITCH } from "./imports/HX_3x4x2_2P_1_6N_TACTILE_SWITCH"

const leftHeaderLabels = [
  "GP0",
  "GP1",
  "GND1",
  "GP2",
  "GP3",
  "GP4",
  "GP5",
  "GND2",
  "GP6",
  "GP7",
  "GP8",
  "GP9",
  "GND3",
  "GP10",
  "GP11",
  "GP12",
  "GP13",
  "GND4",
  "GP14",
  "GP15",
]

const rightHeaderLabels = [
  "VBUS",
  "3V3",
  "GND1",
  "GP29",
  "GP28",
  "GP27",
  "GP26",
  "RUN",
  "GP22",
  "GND2",
  "GP21",
  "GP20",
  "GP19",
  "GP18",
  "GND3",
  "GP17",
  "GP16",
  "GP25",
  "GP24",
  "GP23",
]

const BreakoutHeader = ({
  name,
  labels,
  pcbX,
  pcbY,
  schX,
  schY,
}: {
  name: string
  labels: string[]
  pcbX: number
  pcbY: number
  schX: number
  schY: number
}) => {
  const pinLabels = Object.fromEntries(labels.map((label, index) => [`pin${index + 1}`, [label]]))

  return (
    <chip
      name={name}
      pinLabels={pinLabels}
      schX={schX}
      schY={schY}
      schPinArrangement={{
        rightSide: {
          pins: labels,
          direction: "top-to-bottom",
        },
      }}
      footprint={
        <footprint>
          {labels.map((_, index) => (
            <platedhole
              key={`${name}-pad-${index + 1}`}
              portHints={[`pin${index + 1}`]}
              shape="circle"
              pcbX="0mm"
              pcbY={`${(index - (labels.length - 1) / 2) * 2.54}mm`}
              holeDiameter="1mm"
              outerDiameter="1.7mm"
            />
          ))}
        </footprint>
      }
      pcbX={pcbX}
      pcbY={pcbY}
    />
  )
}

const leftHeaderConnections = [
  ["J1.pin1", "U1.GPIO0"],
  ["J1.pin2", "U1.GPIO1"],
  ["J1.pin3", "net.GND"],
  ["J1.pin4", "U1.GPIO2"],
  ["J1.pin5", "U1.GPIO3"],
  ["J1.pin6", "U1.GPIO4"],
  ["J1.pin7", "U1.GPIO5"],
  ["J1.pin8", "net.GND"],
  ["J1.pin9", "U1.GPIO6"],
  ["J1.pin10", "U1.GPIO7"],
  ["J1.pin11", "U1.GPIO8"],
  ["J1.pin12", "U1.GPIO9"],
  ["J1.pin13", "net.GND"],
  ["J1.pin14", "U1.GPIO10"],
  ["J1.pin15", "U1.GPIO11"],
  ["J1.pin16", "U1.GPIO12"],
  ["J1.pin17", "U1.GPIO13"],
  ["J1.pin18", "net.GND"],
  ["J1.pin19", "U1.GPIO14"],
  ["J1.pin20", "U1.GPIO15"],
] as const

const rightHeaderConnections = [
  ["J2.pin1", "net.VBUS"],
  ["J2.pin2", "net.V3_3"],
  ["J2.pin3", "net.GND"],
  ["J2.pin4", "U1.GPIO29_ADC3"],
  ["J2.pin5", "U1.GPIO28_ADC2"],
  ["J2.pin6", "U1.GPIO27_ADC1"],
  ["J2.pin7", "U1.GPIO26_ADC0"],
  ["J2.pin8", "U1.RUN"],
  ["J2.pin9", "U1.GPIO22"],
  ["J2.pin10", "net.GND"],
  ["J2.pin11", "U1.GPIO21"],
  ["J2.pin12", "U1.GPIO20"],
  ["J2.pin13", "U1.GPIO19"],
  ["J2.pin14", "U1.GPIO18"],
  ["J2.pin15", "net.GND"],
  ["J2.pin16", "U1.GPIO17"],
  ["J2.pin17", "U1.GPIO16"],
  ["J2.pin18", "U1.GPIO25"],
  ["J2.pin19", "U1.GPIO24"],
  ["J2.pin20", "U1.GPIO23"],
] as const

export default () => (
  <board width="25.4mm" height="56mm" layers={2}>
    <BreakoutHeader name="J1" labels={leftHeaderLabels} pcbX={-10.16} pcbY={0} schX={-22} schY={0} />
    <BreakoutHeader name="J2" labels={rightHeaderLabels} pcbX={10.16} pcbY={0} schX={22} schY={0} />

    <TYPE_C_16PIN_2MD_073_
      name="USB1"
      pcbX={0}
      pcbY={-25.1}
      pcbRotation={180}
      schX={0}
      schY={-22}
    />
    <XC6206P332MR_G name="U2" pcbX={0} pcbY={-17} pcbRotation={180} schX={0} schY={-15} />
    <RP2040 name="U1" pcbX={0} pcbY={1} schX={0} schY={0} />
    <W25Q16JVSSIQ name="U3" pcbX={0} pcbY={12.5} pcbRotation={90} schX={0} schY={13} />
    <X322512MSB4SI name="Y1" pcbX={-4.9} pcbY={7.8} pcbRotation={90} schX={-11} schY={8} />
    <HX_3x4x2_2P_1_6N_TACTILE_SWITCH
      name="SW1"
      pcbX={5.8}
      pcbY={11.8}
      pcbRotation={90}
      schX={11}
      schY={13}
    />
    <XL_1608SURC_06 name="D1" pcbX={4.9} pcbY={20.5} pcbRotation={180} schX={10} schY={20} />

    <resistor name="R1" resistance="5.1k" footprint="0603" pcbX={-3.3} pcbY={-18.8} schX={-8} schY={-19} />
    <resistor name="R2" resistance="5.1k" footprint="0603" pcbX={3.3} pcbY={-18.8} schX={8} schY={-19} />
    <resistor name="R3" resistance="27ohm" footprint="0402" pcbX={-1.5} pcbY={-15.3} schX={-5} schY={-15} />
    <resistor name="R4" resistance="27ohm" footprint="0402" pcbX={1.5} pcbY={-15.3} schX={5} schY={-15} />
    <resistor name="R5" resistance="10k" footprint="0402" pcbX={5.8} pcbY={6.6} schX={11} schY={7} />
    <resistor name="R6" resistance="10k" footprint="0402" pcbX={5.7} pcbY={9.2} schX={11} schY={10} />
    <resistor name="R7" resistance="1k" footprint="0402" pcbX={5} pcbY={18.2} schX={10} schY={18} />

    <capacitor name="C1" capacitance="10uF" footprint="0805" pcbX={-2.9} pcbY={-21.6} schX={-7} schY={-22} />
    <capacitor name="C2" capacitance="1uF" footprint="0603" pcbX={2.8} pcbY={-17} schX={7} schY={-17} />
    <capacitor name="C3" capacitance="1uF" footprint="0402" pcbX={2.2} pcbY={5.2} schX={6} schY={5} />
    <capacitor name="C4" capacitance="100nF" footprint="0402" pcbX={2.9} pcbY={9.1} schX={7} schY={9} />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX={4.8} pcbY={4.8} schX={10} schY={5} />
    <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX={4.9} pcbY={-0.4} schX={10} schY={0} />
    <capacitor name="C7" capacitance="100nF" footprint="0402" pcbX={4.8} pcbY={-5.2} schX={10} schY={-5} />
    <capacitor name="C8" capacitance="100nF" footprint="0402" pcbX={-4.7} pcbY={-3.6} schX={-10} schY={-4} />
    <capacitor name="C9" capacitance="100nF" footprint="0402" pcbX={-4.8} pcbY={1.8} schX={-10} schY={2} />
    <capacitor name="C10" capacitance="100nF" footprint="0402" pcbX={-2.1} pcbY={15.7} schX={-6} schY={16} />
    <capacitor name="C11" capacitance="15pF" footprint="0402" pcbX={-7} pcbY={7} schX={-14} schY={7} />
    <capacitor name="C12" capacitance="15pF" footprint="0402" pcbX={-7} pcbY={9} schX={-14} schY={9} />
    <capacitor name="C13" capacitance="100nF" footprint="0402" pcbX={-2.2} pcbY={-17} schX={-6} schY={-17} />

    <trace from="USB1.VBUS1" to="net.VBUS" />
    <trace from="USB1.VBUS2" to="net.VBUS" />
    <trace from="USB1.GND1" to="net.GND" />
    <trace from="USB1.GND2" to="net.GND" />
    <trace from="USB1.SHELL1" to="net.GND" />
    <trace from="USB1.SHELL2" to="net.GND" />
    <trace from="USB1.pin13_alt1" to="net.GND" />
    <trace from="USB1.pin14_alt1" to="net.GND" />
    <trace from="USB1.CC1" to="R1.pin1" />
    <trace from="USB1.CC2" to="R2.pin1" />
    <trace from="R1.pin2" to="net.GND" />
    <trace from="R2.pin2" to="net.GND" />
    <trace from="USB1.DN1" to="net.USB_DM_CONN" />
    <trace from="USB1.DN2" to="net.USB_DM_CONN" />
    <trace from="USB1.DP1" to="net.USB_DP_CONN" />
    <trace from="USB1.DP2" to="net.USB_DP_CONN" />
    <trace from="net.USB_DM_CONN" to="R3.pin1" />
    <trace from="net.USB_DP_CONN" to="R4.pin1" />
    <trace from="R3.pin2" to="U1.USB_DM" />
    <trace from="R4.pin2" to="U1.USB_DP" />

    <trace from="net.VBUS" to="U2.Vin" />
    <trace from="net.VBUS" to="C1.pin1" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="U2.Vout" to="net.V3_3" />
    <trace from="net.V3_3" to="C2.pin1" />
    <trace from="C2.pin2" to="net.GND" />
    <trace from="net.VBUS" to="J2.pin1" />

    <trace from="U1.IOVDD1" to="net.V3_3" />
    <trace from="U1.IOVDD2" to="net.V3_3" />
    <trace from="U1.IOVDD3" to="net.V3_3" />
    <trace from="U1.IOVDD4" to="net.V3_3" />
    <trace from="U1.IOVDD5" to="net.V3_3" />
    <trace from="U1.IOVDD6" to="net.V3_3" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.VREG_IN" to="net.V3_3" />
    <trace from="net.V3_3" to="J2.pin2" />

    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.TESTEN" to="net.GND" />

    <trace from="U1.DVDD1" to="net.V1_1" />
    <trace from="U1.DVDD2" to="net.V1_1" />
    <trace from="U1.VREG_VOUT" to="net.V1_1" />
    <trace from="net.V1_1" to="C3.pin1" />
    <trace from="C3.pin2" to="net.GND" />

    <trace from="net.V3_3" to="C4.pin1" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C5.pin1" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C6.pin1" />
    <trace from="C6.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C7.pin1" />
    <trace from="C7.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C8.pin1" />
    <trace from="C8.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C9.pin1" />
    <trace from="C9.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C10.pin1" />
    <trace from="C10.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C13.pin1" />
    <trace from="C13.pin2" to="net.GND" />

    <trace from="U1.XIN" to="Y1.OSC1" />
    <trace from="U1.XOUT" to="Y1.OSC2" />
    <trace from="Y1.GND1" to="net.GND" />
    <trace from="Y1.GND2" to="net.GND" />
    <trace from="Y1.OSC1" to="C11.pin1" />
    <trace from="C11.pin2" to="net.GND" />
    <trace from="Y1.OSC2" to="C12.pin1" />
    <trace from="C12.pin2" to="net.GND" />

    <trace from="U3.pin8" to="net.V3_3" />
    <trace from="U3.pin4" to="net.GND" />
    <trace from="U3.pin1" to="net.QSPI_SS" />
    <trace from="U3.pin2" to="U1.QSPI_SD1" />
    <trace from="U3.IO2" to="U1.QSPI_SD2" />
    <trace from="U3.pin5" to="U1.QSPI_SD0" />
    <trace from="U3.CLK" to="U1.QSPI_SCLK" />
    <trace from="U3.IO3" to="U1.QSPI_SD3" />
    <trace from="net.QSPI_SS" to="U1.QSPI_SS" />
    <trace from="net.QSPI_SS" to="R5.pin1" />
    <trace from="R5.pin2" to="net.V3_3" />
    <trace from="net.QSPI_SS" to="SW1.pin1" />
    <trace from="SW1.pin2" to="net.GND" />

    <trace from="U1.RUN" to="R6.pin1" />
    <trace from="R6.pin2" to="net.V3_3" />

    <trace from="U1.GPIO25" to="R7.pin1" />
    <trace from="R7.pin2" to="D1.A" />
    <trace from="D1.K" to="net.GND" />

    {leftHeaderConnections.map(([from, to], index) => (
      <trace key={`lh-${index}`} from={from} to={to} />
    ))}
    {rightHeaderConnections.map(([from, to], index) => (
      <trace key={`rh-${index}`} from={from} to={to} />
    ))}
  </board>
)
