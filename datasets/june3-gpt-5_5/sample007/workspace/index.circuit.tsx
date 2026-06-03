import type { ChipProps } from "@tscircuit/props"
import React from "react"
import { AP2112K_3_3TRG1 } from "./imports/AP2112K_3_3TRG1"
import { RP2040 } from "./imports/RP2040"
import { W25Q16JVUXIQ } from "./imports/W25Q16JVUXIQ"

const crystalPinLabels = {
  pin1: "XIN",
  pin2: "GND1",
  pin3: "XOUT",
  pin4: "GND2",
} as const

const Crystal12MHz = (props: ChipProps<typeof crystalPinLabels>) => (
  <chip
    pinLabels={crystalPinLabels}
    manufacturerPartNumber="FA-238 12.0000MB-C"
    footprint={
      <footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.05mm" pcbY="0.85mm" width="1mm" height="0.9mm" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX="1.05mm" pcbY="0.85mm" width="1mm" height="0.9mm" shape="rect" />
        <smtpad portHints={["pin3"]} pcbX="1.05mm" pcbY="-0.85mm" width="1mm" height="0.9mm" shape="rect" />
        <smtpad portHints={["pin4"]} pcbX="-1.05mm" pcbY="-0.85mm" width="1mm" height="0.9mm" shape="rect" />
        <silkscreenrect pcbX="0mm" pcbY="0mm" width="3.4mm" height="2.7mm" />
      </footprint>
    }
    {...props}
  />
)

const headerPins = [
  "VBUS_A",
  "V3_3_A",
  "GND_A",
  "RUN",
  "SWCLK",
  "SWD",
  "GP0",
  "GP1",
  "GP16",
  "GP17",
  "GND_B",
  "GP25_LED",
] as const
const headerPinLabels = Object.fromEntries(
  headerPins.map((label, index) => [`pin${index + 1}`, label]),
)

const BreakoutHeader = (props: ChipProps<Record<string, string>>) => (
  <connector
    pinLabels={headerPinLabels}
    footprint={
      <footprint insertionDirection="from_above">
        {headerPins.map((_, index) => {
          const column = index % 6
          const row = index < 6 ? 0 : 1
          return (
            <React.Fragment key={`hdr-${index}`}>
              <platedhole
                portHints={[`pin${index + 1}`]}
                pcbX={`${(column - 2.5) * 2.54}mm`}
                pcbY={`${row === 0 ? -1.27 : 1.27}mm`}
                shape="circle"
                holeDiameter="1mm"
                outerDiameter="1.7mm"
              />
            </React.Fragment>
          )
        })}
        <silkscreenrect pcbX="0mm" pcbY="0mm" width="15.3mm" height="4.7mm" />
        <silkscreentext text="1" pcbX="-6.5mm" pcbY="-3.3mm" fontSize="0.8mm" anchorAlignment="center" />
        <silkscreentext text="12" pcbX="6.5mm" pcbY="3.3mm" fontSize="0.8mm" anchorAlignment="center" />
      </footprint>
    }
    {...props}
  />
)

const gpioHeaderMap = [
  ["U1.GPIO0", "J1.GP0"],
  ["U1.GPIO1", "J1.GP1"],
  ["U1.GPIO16", "J1.GP16"],
  ["U1.GPIO17", "J1.GP17"],
] as const

export default () => (
  <board width="58mm" height="62mm" layers={2}>
    <schematicsection name="USB and Power" />
    <schematicsection name="RP2040 Core" />
    <schematicsection name="Breakout Headers" />

    <RP2040
      name="U1"
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
      schSectionName="RP2040 Core"
      schPinArrangement={{
        topSide: { pins: ["IOVDD1", "IOVDD2", "IOVDD3", "IOVDD4", "IOVDD5", "IOVDD6", "USB_VDD", "ADC_AVDD"], direction: "left-to-right" },
        bottomSide: { pins: ["GND", "DVDD1", "DVDD2", "VREG_IN", "VREG_VOUT"], direction: "left-to-right" },
        leftSide: { pins: ["GPIO0", "GPIO1", "GPIO2", "GPIO3", "GPIO4", "GPIO5", "GPIO6", "GPIO7", "GPIO8", "GPIO9", "GPIO10", "GPIO11", "GPIO12", "GPIO13", "GPIO14", "GPIO15"], direction: "top-to-bottom" },
        rightSide: { pins: ["GPIO16", "GPIO17", "GPIO18", "GPIO19", "GPIO20", "GPIO21", "GPIO22", "GPIO23", "GPIO24", "GPIO25", "GPIO26_ADC0", "GPIO27_ADC1", "GPIO28_ADC2", "GPIO29_ADC3", "SWCLK", "SWD", "RUN", "USB_DM", "USB_DP"], direction: "top-to-bottom" },
      }}
    />

    <connector
      name="USB1"
      standard="usb_c"
      pcbX={0}
      pcbY={-27.3}
      pcbRotation={0}
      schX={-9}
      schY={6}
      schSectionName="USB and Power"
    />

    <AP2112K_3_3TRG1 name="U2" pcbX={-12} pcbY={-16} schX={-8} schY={1} schSectionName="USB and Power" />
    <W25Q16JVUXIQ name="U3" pcbX={9} pcbY={-7} schX={6} schY={2} schSectionName="RP2040 Core" />
    <Crystal12MHz name="Y1" pcbX={-9} pcbY={-7} schX={-4} schY={-5} schSectionName="RP2040 Core" />

    <BreakoutHeader
      name="J1"
      pcbX={0}
      pcbY={23}
      schX={11}
      schY={5}
      schSectionName="Breakout Headers"
    />

    <resistor name="R1" resistance="27" footprint="0402" pcbX={4} pcbY={-18} schX={-4} schY={5} schSectionName="USB and Power" />
    <resistor name="R2" resistance="27" footprint="0402" pcbX={-4} pcbY={-18} schX={-4} schY={4} schSectionName="USB and Power" />
    <resistor name="R3" resistance="5.1k" footprint="0402" pcbX={8} pcbY={-22} schX={-8} schY={3} schSectionName="USB and Power" />
    <resistor name="R4" resistance="5.1k" footprint="0402" pcbX={-8} pcbY={-22} schX={-8} schY={2} schSectionName="USB and Power" />
    <resistor name="R5" resistance="10k" footprint="0402" pcbX={12} pcbY={-1} schX={5} schY={4} schSectionName="RP2040 Core" />
    <resistor name="R6" resistance="10k" footprint="0402" pcbX={-12} pcbY={-1} schX={-5} schY={-2} schSectionName="RP2040 Core" />
    <resistor name="R7" resistance="330" footprint="0402" pcbX={11} pcbY={10} schX={5} schY={-4} schSectionName="RP2040 Core" />
    <led name="D1" footprint="0603" color="green" pcbX={15} pcbY={10} schX={7} schY={-4} schSectionName="RP2040 Core" />

    <capacitor name="C1" capacitance="10uF" footprint="0603" pcbX={-16} pcbY={-18} schX={-7.3} schY={-1} schRotation={90} schSectionName="USB and Power" />
    <capacitor name="C2" capacitance="10uF" footprint="0603" pcbX={-8} pcbY={-16} schX={-5.9} schY={-1} schRotation={90} schSectionName="USB and Power" />
    <capacitor name="C3" capacitance="1uF" footprint="0402" pcbX={2} pcbY={-8} schX={1} schY={-3.7} schRotation={90} schSectionName="RP2040 Core" />
    <capacitor name="C4" capacitance="100nF" footprint="0402" pcbX={-4} pcbY={8} schX={1} schY={-5} schRotation={90} schSectionName="RP2040 Core" />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX={-7} pcbY={8} schX={1} schY={-6.3} schRotation={90} schSectionName="RP2040 Core" />
    <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX={-10} pcbY={8} schX={1} schY={-7.6} schRotation={90} schSectionName="RP2040 Core" />
    <capacitor name="C7" capacitance="100nF" footprint="0402" pcbX={-13} pcbY={8} schX={1} schY={-8.9} schRotation={90} schSectionName="RP2040 Core" />
    <capacitor name="C8" capacitance="100nF" footprint="0402" pcbX={13} pcbY={-7} schX={6} schY={0} schRotation={90} schSectionName="RP2040 Core" />
    <capacitor name="C9" capacitance="15pF" footprint="0402" pcbX={-13} pcbY={-9} schX={-6} schY={-5.8} schRotation={90} schSectionName="RP2040 Core" />
    <capacitor name="C10" capacitance="15pF" footprint="0402" pcbX={-13} pcbY={-5} schX={-6} schY={-7.2} schRotation={90} schSectionName="RP2040 Core" />

    <silkscreentext text="RP2040 USB BREAKOUT" pcbX={0} pcbY={28} fontSize="1.2mm" anchorAlignment="center" />
    <silkscreentext text="LED GP25" pcbX={14} pcbY={12.5} fontSize="0.8mm" anchorAlignment="center" />

    <trace from="USB1.VBUS1" to="net.VBUS" />
    <trace from="USB1.VBUS2" to="net.VBUS" />
    <trace from="USB1.GND1" to="net.GND" />
    <trace from="USB1.GND2" to="net.GND" />
    <trace from="USB1.CC1" to="R3.pin1" />
    <trace from="USB1.CC2" to="R4.pin1" />
    <trace from="R3.pin2" to="net.GND" />
    <trace from="R4.pin2" to="net.GND" />
    <trace from="USB1.DP1" to="R1.pin1" />
    <trace from="USB1.DP2" to="R1.pin1" />
    <trace from="R1.pin2" to="U1.USB_DP" />
    <trace from="USB1.DM1" to="R2.pin1" />
    <trace from="USB1.DM2" to="R2.pin1" />
    <trace from="R2.pin2" to="U1.USB_DM" />

    <trace from="U2.VIN" to="net.VBUS" />
    <trace from="U2.EN" to="net.VBUS" />
    <trace from="U2.GND" to="net.GND" />
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

    <trace from="Y1.XIN" to="U1.XIN" />
    <trace from="Y1.XOUT" to="U1.XOUT" />
    <trace from="Y1.GND1" to="net.GND" />
    <trace from="Y1.GND2" to="net.GND" />
    <trace from="C9.pin1" to="U1.XIN" />
    <trace from="C9.pin2" to="net.GND" />
    <trace from="C10.pin1" to="U1.XOUT" />
    <trace from="C10.pin2" to="net.GND" />

    <trace from="U3.VCC" to="net.V3_3" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U3.EP" to="net.GND" />
    <trace from="C8.pin1" to="net.V3_3" />
    <trace from="C8.pin2" to="net.GND" />
    <trace from="U3.CS" to="U1.QSPI_SS" />
    <trace from="U3.pin2" to="U1.QSPI_SD1" />
    <trace from="U3.pin3" to="U1.QSPI_SD2" />
    <trace from="U3.pin5" to="U1.QSPI_SD0" />
    <trace from="U3.CLK" to="U1.QSPI_SCLK" />
    <trace from="U3.pin7" to="U1.QSPI_SD3" />
    <trace from="R5.pin1" to="U1.QSPI_SS" />
    <trace from="R5.pin2" to="net.V3_3" />

    <trace from="R6.pin1" to="U1.RUN" />
    <trace from="R6.pin2" to="net.V3_3" />
    <trace from="U1.RUN" to="J1.RUN" />
    <trace from="U1.SWCLK" to="J1.SWCLK" />
    <trace from="U1.SWD" to="J1.SWD" />
    <trace from="U1.GPIO25" to="R7.pin1" />
    <trace from="R7.pin2" to="D1.pin1" />
    <trace from="D1.pin2" to="net.GND" />
    <trace from="U1.GPIO25" to="J1.GP25_LED" />

    <trace from="J1.VBUS_A" to="net.VBUS" />
    <trace from="J1.V3_3_A" to="net.V3_3" />
    <trace from="J1.GND_A" to="net.GND" />
    <trace from="J1.GND_B" to="net.GND" />

    {gpioHeaderMap.map(([from, to]) => (
      <React.Fragment key={`${from}-${to}`}>
        <trace from={from} to={to} />
      </React.Fragment>
    ))}

  </board>
)
