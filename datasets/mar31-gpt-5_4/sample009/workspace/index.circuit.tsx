import type { ChipProps } from "@tscircuit/props"
import { sel } from "tscircuit"
import { RP2040 } from "./imports/RP2040"

const usbPinLabels = {
  pin1: "VBUS",
  pin2: "DM",
  pin3: "DP",
  pin4: "ID",
  pin5: "GND",
  pin6: "SHIELD",
} as const

const UsbMicroB = (props: ChipProps<typeof usbPinLabels>) => (
  <chip
    pinLabels={usbPinLabels}
    manufacturerPartNumber="USB-MicroB-5P"
    footprint={
      <footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.3mm" pcbY="0.85mm" width="0.4mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX="-0.65mm" pcbY="0.85mm" width="0.4mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin3"]} pcbX="0.00mm" pcbY="0.85mm" width="0.4mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin4"]} pcbX="0.65mm" pcbY="0.85mm" width="0.4mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin5"]} pcbX="1.3mm" pcbY="0.85mm" width="0.4mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin6"]} pcbX="-3.7mm" pcbY="0.2mm" width="1.8mm" height="2.2mm" shape="rect" />
        <smtpad portHints={["pin6"]} pcbX="3.7mm" pcbY="0.2mm" width="1.8mm" height="2.2mm" shape="rect" />
        <smtpad portHints={["pin6"]} pcbX="-3.2mm" pcbY="3.1mm" width="1.6mm" height="1.8mm" shape="rect" />
        <smtpad portHints={["pin6"]} pcbX="3.2mm" pcbY="3.1mm" width="1.6mm" height="1.8mm" shape="rect" />
        <silkscreenpath route={[{ x: -4.2, y: -1.3 }, { x: -4.2, y: 4.2 }, { x: 4.2, y: 4.2 }, { x: 4.2, y: -1.3 }]} />
        <courtyardrect pcbX="0mm" pcbY="1.4mm" width="9.2mm" height="6.2mm" />
      </footprint>
    }
    {...props}
  />
)

const ldoPinLabels = {
  pin1: "GND",
  pin2: "VOUT",
  pin3: "VIN",
} as const

const Ldo3V3 = (props: ChipProps<typeof ldoPinLabels>) => (
  <chip
    pinLabels={ldoPinLabels}
    footprint="sot23"
    manufacturerPartNumber="XC6206P332MR"
    supplierPartNumbers={{ jlcpcb: ["C5446"] }}
    {...props}
  />
)

const flashPinLabels = {
  pin1: "CS",
  pin2: "IO1",
  pin3: "IO2",
  pin4: "GND",
  pin5: "IO0",
  pin6: "CLK",
  pin7: "IO3",
  pin8: "VCC",
} as const

const QspiFlash = (props: ChipProps<typeof flashPinLabels>) => (
  <chip
    pinLabels={flashPinLabels}
    footprint="soic8"
    manufacturerPartNumber="W25Q128JVSIQ"
    supplierPartNumbers={{ jlcpcb: ["C97521"] }}
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
    manufacturerPartNumber="12MHz-3225"
    footprint={
      <footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.15mm" pcbY="0mm" width="1.2mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX="1.15mm" pcbY="0mm" width="1.2mm" height="1.6mm" shape="rect" />
        <silkscreenpath route={[{ x: -2.1, y: -1.5 }, { x: -2.1, y: 1.5 }, { x: 2.1, y: 1.5 }, { x: 2.1, y: -1.5 }, { x: -2.1, y: -1.5 }]} />
        <courtyardrect pcbX="0mm" pcbY="0mm" width="5mm" height="3.5mm" />
      </footprint>
    }
    {...props}
  />
)

export default () => (
  <board width="26mm" height="56mm">
    <UsbMicroB
      name="J1"
      pcbX={0}
      pcbY={-24.5}
      schX={-10}
      schY={-7}
      connections={{
        VBUS: "net.VBUS",
        DM: "net.USB_DM_CONN",
        DP: "net.USB_DP_CONN",
        GND: sel.net.GND,
        SHIELD: sel.net.GND,
      }}
    />

    <Ldo3V3
      name="U2"
      pcbX={0}
      pcbY={21}
      pcbRotation="180deg"
      schX={-10}
      schY={6}
      connections={{
        VIN: "net.VBUS",
        VOUT: sel.net.V3_3,
        GND: sel.net.GND,
      }}
    />

    <QspiFlash
      name="U3"
      pcbX={5.8}
      pcbY={6.6}
      pcbRotation="90deg"
      schX={10}
      schY={6}
      connections={{
        CS: ".U1 > .QSPI_SS",
        IO0: ".U1 > .QSPI_SD0",
        IO1: ".U1 > .QSPI_SD1",
        IO2: ".U1 > .QSPI_SD2",
        IO3: ".U1 > .QSPI_SD3",
        CLK: ".U1 > .QSPI_SCLK",
        VCC: sel.net.V3_3,
        GND: sel.net.GND,
      }}
    />

    <Crystal3225
      name="Y1"
      pcbX={-5.8}
      pcbY={6.6}
      schX={-10}
      schY={0}
      connections={{
        X1: "net.XIN",
        X2: "net.XOUT",
      }}
    />

    <RP2040
      name="U1"
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
      connections={{
        IOVDD1: sel.net.V3_3,
        IOVDD2: sel.net.V3_3,
        IOVDD3: sel.net.V3_3,
        IOVDD4: sel.net.V3_3,
        IOVDD5: sel.net.V3_3,
        IOVDD6: sel.net.V3_3,
        USB_VDD: sel.net.V3_3,
        ADC_AVDD: sel.net.V3_3,
        VREG_IN: sel.net.V3_3,
        VREG_VOUT: "net.V1_1",
        DVDD1: "net.V1_1",
        DVDD2: "net.V1_1",
        GND: sel.net.GND,
        TESTEN: sel.R9.pin1,
        XIN: "net.XIN",
        XOUT: "net.XOUT",
        USB_DP: sel.R2.pin2,
        USB_DM: sel.R1.pin2,
        RUN: "net.RUN",
        GPIO0: ".H2 > .GPIO0",
        GPIO1: ".H2 > .GPIO1",
        GPIO2: ".H2 > .GPIO2",
        GPIO3: ".H2 > .GPIO3",
        GPIO4: ".H2 > .GPIO4",
        GPIO5: ".H2 > .GPIO5",
        GPIO25: [sel.R10.pin1, ".H3 > .GPIO25"],
        GPIO26_ADC0: ".H3 > .GPIO26",
        GPIO27_ADC1: ".H3 > .GPIO27",
        GPIO28_ADC2: ".H3 > .GPIO28",
        GPIO29_ADC3: ".H3 > .GPIO29",
      }}
    />

    <pinheader
      name="H2"
      pinCount={10}
      pinLabels={[
        "VBUS",
        "GND",
        "V3_3",
        "RUN",
        "GPIO0",
        "GPIO1",
        "GPIO2",
        "GPIO3",
        "GPIO4",
        "GPIO5",
      ]}
      pcbX={-11.5}
      pcbY={0}
      pcbRotation="90deg"
      schX={-19}
      schY={0}
      connections={{
        VBUS: "net.VBUS",
        GND: sel.net.GND,
        V3_3: sel.net.V3_3,
        RUN: "net.RUN",
        GPIO0: ".U1 > .GPIO0",
        GPIO1: ".U1 > .GPIO1",
        GPIO2: ".U1 > .GPIO2",
        GPIO3: ".U1 > .GPIO3",
        GPIO4: ".U1 > .GPIO4",
        GPIO5: ".U1 > .GPIO5",
      }}
    />

    <pinheader
      name="H3"
      pinCount={6}
      pinLabels={[
        "GND_A",
        "GPIO25",
        "GPIO26",
        "GPIO27",
        "GPIO28",
        "GPIO29",
      ]}
      pcbX={11.5}
      pcbY={0}
      pcbRotation="90deg"
      schX={19}
      schY={0}
      connections={{
        GND_A: sel.net.GND,
        GPIO25: ".U1 > .GPIO25",
        GPIO26: ".U1 > .GPIO26_ADC0",
        GPIO27: ".U1 > .GPIO27_ADC1",
        GPIO28: ".U1 > .GPIO28_ADC2",
        GPIO29: ".U1 > .GPIO29_ADC3",
      }}
    />

    <resistor
      name="R1"
      resistance="27"
      footprint="0402"
      pcbX={-1.6}
      pcbY={-15.5}
      schX={-4}
      schY={-5}
      connections={{
        pin1: "net.USB_DM_CONN",
        pin2: "net.USB_DM",
      }}
    />
    <resistor
      name="R2"
      resistance="27"
      footprint="0402"
      pcbX={1.6}
      pcbY={-15.5}
      schX={-2}
      schY={-5}
      connections={{
        pin1: "net.USB_DP_CONN",
        pin2: "net.USB_DP",
      }}
    />
    <resistor
      name="R8"
      resistance="10k"
      footprint="0402"
      pcbX={2.6}
      pcbY={15.5}
      pcbRotation="90deg"
      schX={-8}
      schY={3}
      connections={{
        pin1: "net.RUN",
        pin2: sel.net.V3_3,
      }}
    />
    <resistor
      name="R9"
      resistance="1k"
      footprint="0402"
      pcbX={-3.6}
      pcbY={2.6}
      pcbRotation="90deg"
      schX={-8}
      schY={1}
      connections={{
        pin1: ".U1 > .TESTEN",
        pin2: sel.net.GND,
      }}
    />
    <resistor
      name="R10"
      resistance="1k"
      footprint="0402"
      pcbX={6.1}
      pcbY={10}
      schX={13}
      schY={0}
      connections={{
        pin1: ".U1 > .GPIO25",
        pin2: sel.LED1.anode,
      }}
    />

    <led
      name="LED1"
      color="green"
      footprint="0603"
      pcbX={8.8}
      pcbY={10}
      schX={15}
      schY={0}
      connections={{
        cathode: sel.net.GND,
      }}
    />

    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0603"
      pcbX={-1.8}
      pcbY={23.5}
      schX={-12}
      schY={8}
      connections={{
        pin1: "net.VBUS",
        pin2: sel.net.GND,
      }}
    />
    <capacitor
      name="C2"
      capacitance="1uF"
      footprint="0603"
      pcbX={1.8}
      pcbY={23.5}
      schX={-8}
      schY={8}
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net.GND,
      }}
    />
    <capacitor
      name="C3"
      capacitance="1uF"
      footprint="0402"
      pcbX={3}
      pcbY={4.2}
      schX={-4}
      schY={4}
      connections={{
        pin1: "net.V1_1",
        pin2: sel.net.GND,
      }}
    />
    <capacitor
      name="C4"
      capacitance="100nF"
      footprint="0402"
      pcbX={-5.4}
      pcbY={5.8}
      schX={-2}
      schY={4}
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net.GND,
      }}
    />
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="0402"
      pcbX={5.4}
      pcbY={5.8}
      schX={0}
      schY={4}
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net.GND,
      }}
    />
    <capacitor
      name="C6"
      capacitance="100nF"
      footprint="0402"
      pcbX={-5.4}
      pcbY={-5.8}
      schX={2}
      schY={4}
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net.GND,
      }}
    />
    <capacitor
      name="C7"
      capacitance="100nF"
      footprint="0402"
      pcbX={5.4}
      pcbY={-5.8}
      schX={4}
      schY={4}
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net.GND,
      }}
    />
    <capacitor
      name="C8"
      capacitance="100nF"
      footprint="0402"
      pcbX={8.2}
      pcbY={7.8}
      schX={12}
      schY={8}
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net.GND,
      }}
    />
    <capacitor
      name="C9"
      capacitance="12pF"
      footprint="0402"
      pcbX={-8.6}
      pcbY={4.8}
      schX={-12}
      schY={2}
      connections={{
        pin1: "net.XIN",
        pin2: sel.net.GND,
      }}
    />
    <capacitor
      name="C10"
      capacitance="12pF"
      footprint="0402"
      pcbX={-8.6}
      pcbY={8.4}
      schX={-12}
      schY={-2}
      connections={{
        pin1: "net.XOUT",
        pin2: sel.net.GND,
      }}
    />
  </board>
)
