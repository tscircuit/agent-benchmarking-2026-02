import React from "react"

const rp2040Pins = {
  pin1: "IOVDD_1",
  pin2: "GPIO0",
  pin3: "GPIO1",
  pin4: "GPIO2",
  pin5: "GPIO3",
  pin6: "GPIO4",
  pin7: "GPIO5",
  pin8: "GPIO6",
  pin9: "GPIO7",
  pin10: "IOVDD_2",
  pin11: "GPIO8",
  pin12: "GPIO9",
  pin13: "GPIO10",
  pin14: "GPIO11",
  pin15: "GPIO12",
  pin16: "GPIO13",
  pin17: "GPIO14",
  pin18: "GPIO15",
  pin19: "TESTEN",
  pin20: "XIN",
  pin21: "XOUT",
  pin22: "IOVDD_3",
  pin23: "DVDD_1",
  pin24: "SWCLK",
  pin25: "SWD",
  pin26: "RUN",
  pin27: "GPIO16",
  pin28: "GPIO17",
  pin29: "GPIO18",
  pin30: "GPIO19",
  pin31: "GPIO20",
  pin32: "GPIO21",
  pin33: "IOVDD_4",
  pin34: "GPIO22",
  pin35: "GPIO23",
  pin36: "GPIO24",
  pin37: "GPIO25",
  pin38: "GPIO26_ADC0",
  pin39: "GPIO27_ADC1",
  pin40: "GPIO28_ADC2",
  pin41: "GPIO29_ADC3",
  pin42: "IOVDD_5",
  pin43: "ADC_AVDD",
  pin44: "VREG_VIN",
  pin45: "VREG_VOUT",
  pin46: "USB_DM",
  pin47: "USB_DP",
  pin48: "USB_VDD",
  pin49: "IOVDD_6",
  pin50: "DVDD_2",
  pin51: "QSPI_SD3",
  pin52: "QSPI_SCLK",
  pin53: "QSPI_SD0",
  pin54: "QSPI_SD2",
  pin55: "QSPI_SD1",
  pin56: "QSPI_CSn",
  pin57: "GND_EP",
} as const

const leftHeaderLabels = [
  "VBUS",
  "V3_3",
  "GND",
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
] as const

const rightHeaderLabels = [
  "GPIO13",
  "GPIO14",
  "GPIO15",
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
  "SWCLK",
  "SWD",
  "RUN",
] as const

const leftHeaderMap = leftHeaderLabels.map((label, index) => ({
  rpPin:
    label === "VBUS" || label === "V3_3" || label === "GND"
      ? `net.${label === "V3_3" ? "V3_3" : label}`
      : ({
          GPIO0: "U1.pin2",
          GPIO1: "U1.pin3",
          GPIO2: "U1.pin4",
          GPIO3: "U1.pin5",
          GPIO4: "U1.pin6",
          GPIO5: "U1.pin7",
          GPIO6: "U1.pin8",
          GPIO7: "U1.pin9",
          GPIO8: "U1.pin11",
          GPIO9: "U1.pin12",
          GPIO10: "U1.pin13",
          GPIO11: "U1.pin14",
          GPIO12: "U1.pin15",
        }[label] as string),
  headerPin: `J1.pin${index + 1}`,
}))

const rightHeaderMap = rightHeaderLabels.map((label, index) => ({
  rpPin:
    label === "GPIO26"
      ? "U1.pin38"
      : label === "GPIO27"
        ? "U1.pin39"
        : label === "GPIO28"
          ? "U1.pin40"
          : label === "GPIO29"
            ? "U1.pin41"
            : ({
                GPIO13: "U1.pin16",
                GPIO14: "U1.pin17",
                GPIO15: "U1.pin18",
                GPIO16: "U1.pin27",
                GPIO17: "U1.pin28",
                GPIO18: "U1.pin29",
                GPIO19: "U1.pin30",
                GPIO20: "U1.pin31",
                GPIO21: "U1.pin32",
                GPIO22: "U1.pin34",
                GPIO23: "U1.pin35",
                GPIO24: "U1.pin36",
                GPIO25: "U1.pin37",
                SWCLK: "U1.pin24",
                SWD: "U1.pin25",
                RUN: "U1.pin26",
              }[label] as string),
  headerPin: `J2.pin${index + 1}`,
}))

export default function Rp2040Breakout() {
  return (
    <board width="52mm" height="62mm" layers={2} autorouter="auto-cloud">
      <chip
        name="USB1"
        pcbX={0}
        pcbY={-12}
        shouldBeOnEdgeOfBoard
        schX={-16}
        schY={0}
        footprint="Connector_USB:USB_Micro-B_Molex-105017-0001"
        pinLabels={{
          pin1: "VBUS",
          pin2: "DM",
          pin3: "DP",
          pin4: "ID",
          pin5: "GND",
        }}
      />

      <chip
        name="U1"
        pcbX={0}
        pcbY={0}
        schX={0}
        schY={0}
        footprint="Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP3.2x3.2mm"
        manufacturerPartNumber="RP2040"
        supplierPartNumbers={{ jlcpcb: ["C2040"] }}
        pinLabels={rp2040Pins}
      />

      <chip
        name="U2"
        pcbX={10}
        pcbY={-1}
        pcbRotation={90}
        schX={12}
        schY={-4}
        footprint="Package_SO:SOIC-8_5.23x5.23mm_P1.27mm"
        manufacturerPartNumber="W25Q16JVSSIQ"
        pinLabels={{
          pin1: "CS",
          pin2: "DO",
          pin3: "WP",
          pin4: "GND",
          pin5: "DI",
          pin6: "CLK",
          pin7: "HOLD",
          pin8: "VCC",
        }}
      />

      <chip
        name="U3"
        pcbX={-8}
        pcbY={-1}
        schX={-10}
        schY={-7}
        footprint="Package_TO_SOT_SMD:SOT-23-5"
        manufacturerPartNumber="ME6211C33M5G-N"
        pinLabels={{
          pin1: "VIN",
          pin2: "GND",
          pin3: "EN",
          pin4: "NC",
          pin5: "VOUT",
        }}
        supplierPartNumbers={{ jlcpcb: ["C82942"] }}
      />

      <chip
        name="Y1"
        pcbX={0}
        pcbY={8}
        schX={-8}
        schY={8}
        footprint="Crystal:Crystal_SMD_3225-4Pin_3.2x2.5mm"
        manufacturerPartNumber="X322512MSB4SI"
        supplierPartNumbers={{ jlcpcb: ["C9002"] }}
        pinLabels={{
          pin1: "XTAL1",
          pin2: "GND1",
          pin3: "XTAL2",
          pin4: "GND2",
        }}
      />

      <pinheader
        name="J1"
        pinCount={leftHeaderLabels.length}
        pitch="2.54mm"
        pcbX={-20.25}
        pcbY={1.9}
        pcbRotation={90}
        schX={-28}
        schY={0}
        pinLabels={[...leftHeaderLabels]}
      />

      <pinheader
        name="J2"
        pinCount={rightHeaderLabels.length}
        pitch="2.54mm"
        pcbX={20.25}
        pcbY={-2.9}
        pcbRotation={90}
        schX={28}
        schY={0}
        pinLabels={[...rightHeaderLabels]}
      />

      <pinheader
        name="J3"
        pinCount={4}
        pitch="2.54mm"
        pcbX={0}
        pcbY={11}
        schX={10}
        schY={10}
        pinLabels={["3V3", "SWD", "SWCLK", "GND"]}
      />

      <led
        name="D1"
        color="green"
        footprint="LED_SMD:LED_0603_1608Metric"
        pcbX={12}
        pcbY={9}
        schX={10}
        schY={6}
      />

      <resistor
        name="R1"
        resistance="1k"
        footprint="Resistor_SMD:R_0603_1608Metric"
        pcbX={8.5}
        pcbY={9}
        schX={7}
        schY={6}
        supplierPartNumbers={{ jlcpcb: ["C21190"] }}
      />

      <resistor
        name="R2"
        resistance="27ohm"
        footprint="Resistor_SMD:R_0402_1005Metric"
        pcbX={-1.5}
        pcbY={-7.2}
        pcbRotation={90}
        schX={-8}
        schY={-2}
      />

      <resistor
        name="R3"
        resistance="27ohm"
        footprint="Resistor_SMD:R_0402_1005Metric"
        pcbX={1.5}
        pcbY={-7.2}
        pcbRotation={90}
        schX={-8}
        schY={-4}
      />

      <resistor
        name="R6"
        resistance="10k"
        footprint="Resistor_SMD:R_0402_1005Metric"
        pcbX={-6.5}
        pcbY={3.5}
        schX={-4}
        schY={10}
      />

      <resistor
        name="R7"
        resistance="1k"
        footprint="Resistor_SMD:R_0402_1005Metric"
        pcbX={11.5}
        pcbY={4}
        schX={12}
        schY={0}
      />

      <capacitor
        name="C1"
        capacitance="1uF"
        footprint="Capacitor_SMD:C_0603_1608Metric"
        pcbX={-10.5}
        pcbY={-1}
        schX={-14}
        schY={-4}
      />

      <capacitor
        name="C2"
        capacitance="1uF"
        footprint="Capacitor_SMD:C_0603_1608Metric"
        pcbX={-10.5}
        pcbY={1.5}
        schX={-14}
        schY={-1}
      />

      <capacitor
        name="C3"
        capacitance="100nF"
        footprint="Capacitor_SMD:C_0402_1005Metric"
        pcbX={5.5}
        pcbY={5.5}
        schX={4}
        schY={-8}
      />

      <capacitor
        name="C4"
        capacitance="100nF"
        footprint="Capacitor_SMD:C_0402_1005Metric"
        pcbX={5.5}
        pcbY={3.8}
        schX={6}
        schY={-8}
      />

      <capacitor
        name="C5"
        capacitance="100nF"
        footprint="Capacitor_SMD:C_0402_1005Metric"
        pcbX={5.5}
        pcbY={2.1}
        schX={8}
        schY={-8}
      />

      <capacitor
        name="C6"
        capacitance="100nF"
        footprint="Capacitor_SMD:C_0402_1005Metric"
        pcbX={-5.5}
        pcbY={5.5}
        schX={10}
        schY={-8}
      />

      <capacitor
        name="C7"
        capacitance="100nF"
        footprint="Capacitor_SMD:C_0402_1005Metric"
        pcbX={-5.5}
        pcbY={3.8}
        schX={12}
        schY={-8}
      />

      <capacitor
        name="C8"
        capacitance="1uF"
        footprint="Capacitor_SMD:C_0402_1005Metric"
        pcbX={-1.5}
        pcbY={4.8}
        schX={14}
        schY={-8}
      />

      <capacitor
        name="C9"
        capacitance="100nF"
        footprint="Capacitor_SMD:C_0402_1005Metric"
        pcbX={1.5}
        pcbY={4.8}
        schX={16}
        schY={-8}
      />

      <capacitor
        name="C10"
        capacitance="10pF"
        footprint="Capacitor_SMD:C_0402_1005Metric"
        pcbX={-3}
        pcbY={8}
        schX={-5}
        schY={8}
      />

      <capacitor
        name="C11"
        capacitance="10pF"
        footprint="Capacitor_SMD:C_0402_1005Metric"
        pcbX={3}
        pcbY={8}
        schX={-5}
        schY={10}
      />

      <capacitor
        name="C12"
        capacitance="100nF"
        footprint="Capacitor_SMD:C_0402_1005Metric"
        pcbX={13.5}
        pcbY={-1}
        schX={14}
        schY={-4}
      />

      <pushbutton
        name="SW1"
        pcbX={-12}
        pcbY={8.5}
        schX={-12}
        schY={10}
        footprint="Button_Switch_SMD:SW_SPST_SKQG_WithoutStem"
        pinLabels={{
          pin1: "A",
          pin2: "B",
          pin3: "A2",
          pin4: "B2",
        }}
        internallyConnectedPins={[
          ["pin1", "pin3"],
          ["pin2", "pin4"],
        ]}
      />

      <pushbutton
        name="SW2"
        pcbX={12}
        pcbY={6.5}
        schX={16}
        schY={2}
        footprint="Button_Switch_SMD:SW_SPST_SKQG_WithoutStem"
        pinLabels={{
          pin1: "A",
          pin2: "B",
          pin3: "A2",
          pin4: "B2",
        }}
        internallyConnectedPins={[
          ["pin1", "pin3"],
          ["pin2", "pin4"],
        ]}
      />

      <trace from="USB1.pin1" to="net.VBUS" />
      <trace from="USB1.pin5" to="net.GND" />
      <trace from="USB1.pin2" to="R2.pin1" />
      <trace from="USB1.pin3" to="R3.pin1" />
      <trace from="R2.pin2" to="U1.pin46" />
      <trace from="R3.pin2" to="U1.pin47" />

      <trace from="U3.pin1" to="net.VBUS" />
      <trace from="U3.pin2" to="net.GND" />
      <trace from="U3.pin3" to="net.VBUS" />
      <trace from="U3.pin5" to="net.V3_3" />
      <trace from="C1.pin1" to="net.VBUS" />
      <trace from="C1.pin2" to="net.GND" />
      <trace from="C2.pin1" to="net.V3_3" />
      <trace from="C2.pin2" to="net.GND" />

      <trace from="U1.pin1" to="net.V3_3" />
      <trace from="U1.pin10" to="net.V3_3" />
      <trace from="U1.pin22" to="net.V3_3" />
      <trace from="U1.pin33" to="net.V3_3" />
      <trace from="U1.pin42" to="net.V3_3" />
      <trace from="U1.pin49" to="net.V3_3" />
      <trace from="U1.pin19" to="net.GND" />
      <trace from="U1.pin48" to="net.V3_3" />
      <trace from="U1.pin43" to="net.V3_3" />
      <trace from="U1.pin44" to="net.V3_3" />
      <trace from="U1.pin57" to="net.GND" />
      <trace from="U1.pin23" to="net.VREG_1V1" />
      <trace from="U1.pin50" to="net.VREG_1V1" />
      <trace from="U1.pin45" to="net.VREG_1V1" />
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
      <trace from="C8.pin1" to="net.VREG_1V1" />
      <trace from="C8.pin2" to="net.GND" />
      <trace from="C9.pin1" to="net.V3_3" />
      <trace from="C9.pin2" to="net.GND" />

      <trace from="U1.pin20" to="Y1.pin1" />
      <trace from="U1.pin21" to="Y1.pin3" />
      <trace from="Y1.pin2" to="net.GND" />
      <trace from="Y1.pin4" to="net.GND" />
      <trace from="U1.pin20" to="C10.pin1" />
      <trace from="C10.pin2" to="net.GND" />
      <trace from="U1.pin21" to="C11.pin1" />
      <trace from="C11.pin2" to="net.GND" />

      <trace from="U2.pin8" to="net.V3_3" />
      <trace from="U2.pin4" to="net.GND" />
      <trace from="C12.pin1" to="net.V3_3" />
      <trace from="C12.pin2" to="net.GND" />
      <trace from="U1.pin56" to="R7.pin1" />
      <trace from="R7.pin2" to="U2.pin1" />
      <trace from="U1.pin52" to="U2.pin6" />
      <trace from="U1.pin53" to="U2.pin5" />
      <trace from="U1.pin55" to="U2.pin2" />
      <trace from="U1.pin54" to="U2.pin3" />
      <trace from="U1.pin51" to="U2.pin7" />

      <trace from="U1.pin37" to="R1.pin1" />
      <trace from="R1.pin2" to="D1.pin1" />
      <trace from="D1.pin2" to="net.GND" />

      <trace from="U1.pin26" to="R6.pin1" />
      <trace from="R6.pin2" to="net.V3_3" />
      <trace from="SW1.pin1" to="U1.pin26" />
      <trace from="SW1.pin2" to="net.GND" />
      <trace from="SW2.pin1" to="R7.pin2" />
      <trace from="SW2.pin2" to="net.GND" />

      {leftHeaderMap.map(({ rpPin, headerPin }) => (
        <React.Fragment key={`${rpPin}-${headerPin}`}>
          <trace from={rpPin} to={headerPin} />
        </React.Fragment>
      ))}
      {rightHeaderMap.map(({ rpPin, headerPin }) => (
        <React.Fragment key={`${rpPin}-${headerPin}`}>
          <trace from={rpPin} to={headerPin} />
        </React.Fragment>
      ))}

      <trace from="net.V3_3" to="J3.pin1" />
      <trace from="U1.pin25" to="J3.pin2" />
      <trace from="U1.pin24" to="J3.pin3" />
      <trace from="net.GND" to="J3.pin4" />
    </board>
  )
}
