import React from "react"
import "tscircuit"

const rp2040PinLabels = {
  pin1: "IOVDD_0",
  pin2: "GPIO0",
  pin3: "GPIO1",
  pin4: "GPIO2",
  pin5: "GPIO3",
  pin6: "GPIO4",
  pin7: "GPIO5",
  pin8: "GPIO6",
  pin9: "GPIO7",
  pin10: "IOVDD_1",
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
  pin22: "IOVDD_2",
  pin23: "DVDD_0",
  pin24: "SWCLK",
  pin25: "SWDIO",
  pin26: "RUN",
  pin27: "GPIO16",
  pin28: "GPIO17",
  pin29: "GPIO18",
  pin30: "GPIO19",
  pin31: "GPIO20",
  pin32: "GPIO21",
  pin33: "IOVDD_3",
  pin34: "GPIO22",
  pin35: "GPIO23",
  pin36: "GPIO24",
  pin37: "GPIO25",
  pin38: "GPIO26_ADC0",
  pin39: "GPIO27_ADC1",
  pin40: "GPIO28_ADC2",
  pin41: "GPIO29_ADC3",
  pin42: "IOVDD_4",
  pin43: "ADC_AVDD",
  pin44: "VREG_VIN",
  pin45: "VREG_VOUT",
  pin46: "USB_DM",
  pin47: "USB_DP",
  pin48: "USB_VDD",
  pin49: "IOVDD_5",
  pin50: "DVDD_1",
  pin51: "QSPI_SD3",
  pin52: "QSPI_SCLK",
  pin53: "QSPI_SD0",
  pin54: "QSPI_SD2",
  pin55: "QSPI_SD1",
  pin56: "QSPI_SS_N",
} as const

const flashPinLabels = {
  pin1: "CS_N",
  pin2: "DO_IO1",
  pin3: "WP_IO2",
  pin4: "GND",
  pin5: "DI_IO0",
  pin6: "CLK",
  pin7: "HOLD_IO3",
  pin8: "VCC",
} as const

export default () => (
  <board width="48mm" height="32mm" layers={2} routingDisabled>
    <net name="VBUS" />
    <net name="V3V3" />
    <net name="GND" />
    <net name="USB_DP" />
    <net name="USB_DM" />
    <net name="CC1" />
    <net name="CC2" />
    <net name="XIN" />
    <net name="XOUT" />
    <net name="QSPI_SS_N" />
    <net name="QSPI_SCLK" />
    <net name="QSPI_SD0" />
    <net name="QSPI_SD1" />
    <net name="QSPI_SD2" />
    <net name="QSPI_SD3" />
    <net name="RUN" />
    <net name="SWCLK" />
    <net name="SWDIO" />
    <net name="BOOTSEL" />
    <net name="LED" />

    <schematicsection name="usb_power" displayName="USB and Power" />
    <schematicsection name="mcu" displayName="RP2040 MCU" />
    <schematicsection name="clock_flash" displayName="Clock and Flash" />
    <schematicsection name="debug_io" displayName="Debug and GPIO" />

    <connector
      name="J1"
      schSectionName="usb_power"
      pinLabels={{
        pin1: "VBUS",
        pin2: "D_NEG",
        pin3: "D_POS",
        pin4: "CC1",
        pin5: "CC2",
        pin6: "GND",
      }}
      schPinArrangement={{
        leftSide: { pins: ["VBUS", "D_NEG", "D_POS"], direction: "top-to-bottom" },
        rightSide: { pins: ["CC1", "CC2", "GND"], direction: "top-to-bottom" },
      }}
      footprint={
        <footprint>
          <smtpad portHints={["pin1"]} pcbX="-2.5mm" pcbY="0" width="0.6mm" height="1.5mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="-1.5mm" pcbY="0" width="0.6mm" height="1.5mm" shape="rect" />
          <smtpad portHints={["pin3"]} pcbX="-0.5mm" pcbY="0" width="0.6mm" height="1.5mm" shape="rect" />
          <smtpad portHints={["pin4"]} pcbX="0.5mm" pcbY="0" width="0.6mm" height="1.5mm" shape="rect" />
          <smtpad portHints={["pin5"]} pcbX="1.5mm" pcbY="0" width="0.6mm" height="1.5mm" shape="rect" />
          <smtpad portHints={["pin6"]} pcbX="2.5mm" pcbY="0" width="0.6mm" height="1.5mm" shape="rect" />
        </footprint>
      }
      supplierPartNumbers={{ jlcpcb: ["C165948"] }}
      connections={{
        VBUS: "net.VBUS",
        GND: "net.GND",
        D_POS: "net.USB_DP",
        D_NEG: "net.USB_DM",
        CC1: "net.CC1",
        CC2: "net.CC2",
      }}
    />
    <resistor
      name="R3"
      resistance="5.1k"
      footprint="0402"
      schSectionName="usb_power"
      supplierPartNumbers={{ jlcpcb: ["C25905"] }}
      connections={{ pin1: "net.CC1", pin2: "net.GND" }}
    />
    <resistor
      name="R4"
      resistance="5.1k"
      footprint="0402"
      schSectionName="usb_power"
      supplierPartNumbers={{ jlcpcb: ["C25905"] }}
      connections={{ pin1: "net.CC2", pin2: "net.GND" }}
    />
    <chip
      name="U2"
      footprint="sot23_5"
      schSectionName="usb_power"
      schHeight={0.6}
      supplierPartNumbers={{ jlcpcb: ["C347222"] }}
      pinLabels={{
        pin1: "VIN",
        pin2: "GND",
        pin3: "EN",
        pin4: "NC",
        pin5: "VOUT",
      }}
      schPinArrangement={{
        leftSide: { pins: ["VIN", "GND", "EN"], direction: "top-to-bottom" },
        rightSide: { pins: ["VOUT", "NC"], direction: "top-to-bottom" },
      }}
      connections={{
        VIN: "net.VBUS",
        GND: "net.GND",
        EN: "net.VBUS",
        VOUT: "net.V3V3",
      }}
    />
    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="0805"
      schSectionName="usb_power"
      schOrientation="vertical"
      supplierPartNumbers={{ jlcpcb: ["C15850"] }}
      connections={{ pin1: "net.VBUS", pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      capacitance="10uF"
      footprint="0805"
      schSectionName="usb_power"
      schOrientation="vertical"
      supplierPartNumbers={{ jlcpcb: ["C15850"] }}
      connections={{ pin1: "net.V3V3", pin2: "net.GND" }}
    />

    <chip
      name="U1"
      footprint="qfn56"
      schSectionName="mcu"
      schHeight={1.8}
      supplierPartNumbers={{ jlcpcb: ["C2040"] }}
      pinLabels={rp2040PinLabels}
      schPinArrangement={{
        leftSide: {
          pins: [
            "IOVDD_0",
            "GPIO0",
            "GPIO1",
            "GPIO2",
            "GPIO3",
            "XIN",
            "XOUT",
            "RUN",
          ],
          direction: "top-to-bottom",
        },
        rightSide: {
          pins: [
            "SWCLK",
            "SWDIO",
            "GPIO25",
            "USB_DM",
            "USB_DP",
            "QSPI_SD3",
            "QSPI_SCLK",
            "QSPI_SD0",
            "QSPI_SD2",
            "QSPI_SD1",
            "QSPI_SS_N",
          ],
          direction: "top-to-bottom",
        },
      }}
      connections={{
        IOVDD_0: "net.V3V3",
        IOVDD_1: "net.V3V3",
        IOVDD_2: "net.V3V3",
        IOVDD_3: "net.V3V3",
        IOVDD_4: "net.V3V3",
        IOVDD_5: "net.V3V3",
        DVDD_0: "net.V3V3",
        DVDD_1: "net.V3V3",
        USB_VDD: "net.V3V3",
        ADC_AVDD: "net.V3V3",
        VREG_VIN: "net.V3V3",
        VREG_VOUT: "net.V3V3",
        USB_DP: "net.USB_DP",
        USB_DM: "net.USB_DM",
        XIN: "net.XIN",
        XOUT: "net.XOUT",
        QSPI_SS_N: "net.QSPI_SS_N",
        QSPI_SCLK: "net.QSPI_SCLK",
        QSPI_SD0: "net.QSPI_SD0",
        QSPI_SD1: "net.QSPI_SD1",
        QSPI_SD2: "net.QSPI_SD2",
        QSPI_SD3: "net.QSPI_SD3",
        RUN: "net.RUN",
        SWCLK: "net.SWCLK",
        SWDIO: "net.SWDIO",
        GPIO25: "net.LED",
        TESTEN: "net.GND",
      }}
    />
    <capacitor
      name="C3"
      capacitance="100nF"
      footprint="0402"
      schSectionName="mcu"
      schOrientation="vertical"
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      connections={{ pin1: "net.V3V3", pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      capacitance="100nF"
      footprint="0402"
      schSectionName="mcu"
      schOrientation="vertical"
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      connections={{ pin1: "net.V3V3", pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      capacitance="1uF"
      footprint="0402"
      schSectionName="mcu"
      schOrientation="vertical"
      supplierPartNumbers={{ jlcpcb: ["C52923"] }}
      connections={{ pin1: "net.V3V3", pin2: "net.GND" }}
    />

    <chip
      name="U3"
      footprint="soic8"
      schSectionName="clock_flash"
      schX={14.18}
      schY={-5.65}
      supplierPartNumbers={{ jlcpcb: ["C82317"] }}
      pinLabels={flashPinLabels}
      schPinArrangement={{
        leftSide: { pins: ["CS_N", "DO_IO1", "WP_IO2", "GND"], direction: "top-to-bottom" },
        rightSide: { pins: ["VCC", "HOLD_IO3", "CLK", "DI_IO0"], direction: "top-to-bottom" },
      }}
      connections={{
        CS_N: "net.QSPI_SS_N",
        CLK: "net.QSPI_SCLK",
        DI_IO0: "net.QSPI_SD0",
        DO_IO1: "net.QSPI_SD1",
        WP_IO2: "net.QSPI_SD2",
        HOLD_IO3: "net.QSPI_SD3",
        VCC: "net.V3V3",
        GND: "net.GND",
      }}
    />
    <crystal
      name="Y1"
      frequency="12MHz"
      loadCapacitance="10pF"
      footprint={
        <footprint>
          <smtpad portHints={["pin1"]} pcbX="-0.8mm" pcbY="0" width="0.9mm" height="1.2mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="0.8mm" pcbY="0" width="0.9mm" height="1.2mm" shape="rect" />
        </footprint>
      }
      schSectionName="clock_flash"
      supplierPartNumbers={{ jlcpcb: ["C9002"] }}
      connections={{ pin1: "net.XIN", pin2: "net.XOUT" }}
    />
    <capacitor
      name="C6"
      capacitance="15pF"
      footprint="0402"
      schSectionName="clock_flash"
      schOrientation="vertical"
      schX={11.17}
      schY={-5.4}
      supplierPartNumbers={{ jlcpcb: ["C1548"] }}
      connections={{ pin1: "net.XIN", pin2: "net.GND" }}
    />
    <capacitor
      name="C7"
      capacitance="15pF"
      footprint="0402"
      schSectionName="clock_flash"
      schOrientation="vertical"
      supplierPartNumbers={{ jlcpcb: ["C1548"] }}
      connections={{ pin1: "net.XOUT", pin2: "net.GND" }}
    />

    <pinheader
      name="J2"
      pinCount={4}
      schSectionName="debug_io"
      schX={1.32}
      schY={-12.6}
      supplierPartNumbers={{ jlcpcb: ["C124378"] }}
      connections={{
        pin1: "net.V3V3",
        pin2: "net.SWCLK",
        pin3: "net.SWDIO",
        pin4: "net.GND",
      }}
    />
    <pinheader
      name="J3"
      pinCount={8}
      schSectionName="debug_io"
      schX={-1.72}
      schY={-12.4}
      supplierPartNumbers={{ jlcpcb: ["C124375"] }}
      connections={{
        pin1: "U1.GPIO0",
        pin2: "U1.GPIO1",
        pin3: "U1.GPIO2",
        pin4: "U1.GPIO3",
        pin5: "net.V3V3",
        pin6: "net.GND",
        pin7: "net.RUN",
        pin8: "net.BOOTSEL",
      }}
    />
    <pushbutton
      name="SW1"
      footprint="pushbutton_4_pin"
      schSectionName="debug_io"
      supplierPartNumbers={{ jlcpcb: ["C318884"] }}
      connections={{ pin1: "net.RUN", pin2: "net.GND", pin3: "net.RUN", pin4: "net.GND" }}
    />
    <pushbutton
      name="SW2"
      footprint="pushbutton_4_pin"
      schSectionName="debug_io"
      supplierPartNumbers={{ jlcpcb: ["C318884"] }}
      connections={{ pin1: "net.BOOTSEL", pin2: "net.GND", pin3: "net.BOOTSEL", pin4: "net.GND" }}
    />
    <resistor
      name="R1"
      resistance="10k"
      footprint="0402"
      schSectionName="debug_io"
      supplierPartNumbers={{ jlcpcb: ["C25744"] }}
      connections={{ pin1: "net.V3V3", pin2: "net.RUN" }}
    />
    <resistor
      name="R2"
      resistance="1k"
      footprint="0402"
      schSectionName="debug_io"
      supplierPartNumbers={{ jlcpcb: ["C11702"] }}
      connections={{ pin1: "net.V3V3", pin2: "net.LED" }}
    />
    <led
      name="D1"
      color="green"
      footprint="0603"
      schSectionName="debug_io"
      supplierPartNumbers={{ jlcpcb: ["C72043"] }}
      connections={{ anode: "net.LED", cathode: "net.GND" }}
    />

    <trace from="U1.GPIO0" to="J3.pin1" schDisplayLabel="GPIO0" />
    <trace from="U1.GPIO1" to="J3.pin2" schDisplayLabel="GPIO1" />
    <trace from="U1.GPIO2" to="J3.pin3" schDisplayLabel="GPIO2" />
    <trace from="U1.GPIO3" to="J3.pin4" schDisplayLabel="GPIO3" />
  </board>
)
