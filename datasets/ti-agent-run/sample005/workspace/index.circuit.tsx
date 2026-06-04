import React from "react"
import type {} from "tscircuit"

const rp2040Pins = {
  pin1: "VDD1",
  pin2: "GP0",
  pin3: "GP1",
  pin4: "GP2",
  pin5: "GP3",
  pin6: "GP4",
  pin7: "GP5",
  pin8: "GP6",
  pin9: "GP7",
  pin10: "VDD2",
  pin11: "GP8",
  pin12: "GP9",
  pin13: "GP10",
  pin14: "GP11",
  pin15: "GP12",
  pin16: "GP13",
  pin17: "GP14",
  pin18: "GP15",
  pin19: "TESTEN",
  pin20: "XIN",
  pin21: "XOUT",
  pin22: "VDD3",
  pin23: "DVDD1",
  pin24: "SWCLK",
  pin25: "SWDIO",
  pin26: "RUN",
  pin27: "GP16",
  pin28: "GP17",
  pin29: "GP18",
  pin30: "GP19",
  pin31: "GP20",
  pin32: "GP21",
  pin33: "VDD4",
  pin34: "GP22",
  pin35: "GP23",
  pin36: "GP24",
  pin37: "GP25",
  pin38: "ADC0",
  pin39: "ADC1",
  pin40: "ADC2",
  pin41: "ADC3",
  pin42: "VDD5",
  pin43: "AVDD",
  pin44: "VIN",
  pin45: "VOUT",
  pin46: "D_N",
  pin47: "D_P",
  pin48: "USBVDD",
  pin49: "VDD6",
  pin50: "DVDD2",
  pin51: "QSPI_SD3",
  pin52: "QSPI_SCLK",
  pin53: "QSPI_SD0",
  pin54: "QSPI_SD2",
  pin55: "QSPI_SD1",
  pin56: "QSPI_CS",
  pin57: "GND",
} as const

export default () => (
  <board width="52mm" height="42mm" layers={2} routingDisabled schAutoLayoutEnabled>
    <net name="VBUS" />
    <net name="V3_3" />
    <net name="V1_1" />
    <net name="GND" />
    <net name="USB_DP" />
    <net name="USB_DM" />
    <net name="XIN" />
    <net name="XOUT" />
    <net name="RUN" />
    <net name="QSPI_SCLK" />
    <net name="QSPI_SS_N" />
    <net name="QSPI_SD0" />
    <net name="QSPI_SD1" />
    <net name="QSPI_SD2" />
    <net name="QSPI_SD3" />
    <net name="BOOTSEL" />
    <net name="LED" />
    <net name="SWCLK" />
    <net name="SWDIO" />
    <net name="USB_DP_MCU" />
    <net name="USB_DM_MCU" />
    <net name="GP0" />
    <net name="GP1" />
    <net name="GP2" />
    <net name="GP3" />
    <net name="GP4" />
    <net name="GP5" />
    <net name="GP26_ADC0" />
    <net name="GP27_ADC1" />
    <net name="GP28_ADC2" />

    <schematicsection name="usb_power" displayName="USB and Power" />
    <schematicsection name="mcu" displayName="RP2040 MCU" />
    <schematicsection name="clock_flash" displayName="Clock and Flash" />
    <schematicsection name="debug_io" displayName="Debug and IO" />

    <connector
      name="J1"
      schX={-9.05}
      schY={-5.18}
      pinLabels={{
        pin1: "VBUS",
        pin2: "GND",
        pin3: "DP",
        pin4: "DM",
        pin5: "CC1",
        pin6: "CC2",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["VBUS", "DP", "DM", "GND"] },
        rightSide: { direction: "top-to-bottom", pins: ["CC1", "CC2"] },
      }}
      schHeight={0.6}
      footprint={
        <footprint insertionDirection="from_left">
          <smtpad portHints={["pin1"]} pcbX="-2.0mm" pcbY="1.25mm" width="0.6mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="2.0mm" pcbY="1.25mm" width="0.6mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["pin3"]} pcbX="-0.4mm" pcbY="1.25mm" width="0.35mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["pin4"]} pcbX="0.4mm" pcbY="1.25mm" width="0.35mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["pin5"]} pcbX="-1.2mm" pcbY="1.25mm" width="0.35mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["pin6"]} pcbX="1.2mm" pcbY="1.25mm" width="0.35mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["shield1"]} pcbX="-3.4mm" pcbY="-0.8mm" width="1.2mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["shield2"]} pcbX="3.4mm" pcbY="-0.8mm" width="1.2mm" height="1.6mm" shape="rect" />
        </footprint>
      }
      schSectionName="usb_power"
      connections={{
        VBUS: "net.VBUS",
        GND: "net.GND",
        DP: "net.USB_DP",
        DM: "net.USB_DM",
      }}
    />
    <chip
      name="U1"
      footprint="sot23_5"
      schX={-13.09}
      schY={-5.23}
      schHeight={0.6}
      schSectionName="usb_power"
      pinLabels={{
        pin1: "VIN",
        pin2: "GND",
        pin3: "EN",
        pin4: "BYP",
        pin5: "VOUT",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["VIN", "EN", "BYP"] },
        rightSide: { direction: "top-to-bottom", pins: ["VOUT", "GND"] },
      }}
      connections={{
        VIN: "net.VBUS",
        EN: "net.VBUS",
        VOUT: "net.V3_3",
        GND: "net.GND",
      }}
    />
    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="0603"
      schOrientation="vertical"
      schSectionName="usb_power"
      connections={{ pin1: "net.VBUS", pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      capacitance="10uF"
      footprint="0603"
      schOrientation="vertical"
      schSectionName="usb_power"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <resistor
      name="R1"
      resistance="5.1k"
      footprint="0603"
      schSectionName="usb_power"
      connections={{ pin1: "J1.CC1", pin2: "net.GND" }}
    />
    <resistor
      name="R2"
      resistance="5.1k"
      footprint="0603"
      schSectionName="usb_power"
      connections={{ pin1: "J1.CC2", pin2: "net.GND" }}
    />
    <resistor
      name="R3"
      resistance="27"
      footprint="0603"
      schSectionName="usb_power"
      connections={{ pin1: "net.USB_DP", pin2: "net.USB_DP_MCU" }}
    />
    <resistor
      name="R4"
      resistance="27"
      footprint="0603"
      schSectionName="usb_power"
      connections={{ pin1: "net.USB_DM", pin2: "net.USB_DM_MCU" }}
    />

    <chip
      name="U2"
      footprint="qfn56"
      schWidth={1}
      schHeight={1.4}
      schSectionName="mcu"
      pinLabels={rp2040Pins}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["GP0", "GP1", "GP2", "GP3", "GP4", "GP5"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["SWCLK", "SWDIO", "RUN", "GP25", "ADC0", "ADC1", "ADC2"],
        },
      }}
      connections={{
        VDD1: "net.V3_3",
        VDD2: "net.V3_3",
        VDD3: "net.V3_3",
        VDD4: "net.V3_3",
        VDD5: "net.V3_3",
        VDD6: "net.V3_3",
        AVDD: "net.V3_3",
        USBVDD: "net.V3_3",
        DVDD1: "net.V1_1",
        DVDD2: "net.V1_1",
        VIN: "net.V3_3",
        VOUT: "net.V1_1",
        GND: "net.GND",
        TESTEN: "net.GND",
        D_P: "net.USB_DP_MCU",
        D_N: "net.USB_DM_MCU",
        XIN: "net.XIN",
        XOUT: "net.XOUT",
        RUN: "net.RUN",
        SWCLK: "net.SWCLK",
        SWDIO: "net.SWDIO",
        QSPI_SCLK: "net.QSPI_SCLK",
        QSPI_CS: "net.QSPI_SS_N",
        QSPI_SD0: "net.QSPI_SD0",
        QSPI_SD1: "net.QSPI_SD1",
        QSPI_SD2: "net.QSPI_SD2",
        QSPI_SD3: "net.QSPI_SD3",
        GP25: "net.LED",
        GP0: "net.GP0",
        GP1: "net.GP1",
        GP2: "net.GP2",
        GP3: "net.GP3",
        GP4: "net.GP4",
        GP5: "net.GP5",
        ADC0: "net.GP26_ADC0",
        ADC1: "net.GP27_ADC1",
        ADC2: "net.GP28_ADC2",
      }}
    />
    <capacitor name="C3" capacitance="100nF" footprint="0402" schOrientation="vertical" schSectionName="mcu" connections={{ pin1: "net.V3_3", pin2: "net.GND" }} />
    <capacitor name="C4" capacitance="100nF" footprint="0402" schOrientation="vertical" schSectionName="mcu" connections={{ pin1: "net.V3_3", pin2: "net.GND" }} />
    <capacitor name="C5" capacitance="100nF" footprint="0402" schOrientation="vertical" schSectionName="mcu" connections={{ pin1: "net.V1_1", pin2: "net.GND" }} />
    <capacitor name="C6" capacitance="1uF" footprint="0402" schOrientation="vertical" schSectionName="mcu" connections={{ pin1: "net.V1_1", pin2: "net.GND" }} />

    <chip
      name="U3"
      footprint="soic8"
      schSectionName="clock_flash"
      pinLabels={{
        pin1: "CS_N",
        pin2: "DO_IO1",
        pin3: "WP_IO2",
        pin4: "GND",
        pin5: "DI_IO0",
        pin6: "CLK",
        pin7: "HOLD_IO3",
        pin8: "VCC",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["CS_N", "DO_IO1", "WP_IO2", "GND"] },
        rightSide: { direction: "top-to-bottom", pins: ["VCC", "HOLD_IO3", "CLK", "DI_IO0"] },
      }}
      connections={{
        VCC: "net.V3_3",
        GND: "net.GND",
        CS_N: "net.QSPI_SS_N",
        CLK: "net.QSPI_SCLK",
        DI_IO0: "net.QSPI_SD0",
        DO_IO1: "net.QSPI_SD1",
        WP_IO2: "net.QSPI_SD2",
        HOLD_IO3: "net.QSPI_SD3",
      }}
    />
    <capacitor name="C7" capacitance="100nF" footprint="0402" schOrientation="vertical" schSectionName="clock_flash" connections={{ pin1: "net.V3_3", pin2: "net.GND" }} />
    <crystal
      name="Y1"
      frequency="12MHz"
      loadCapacitance="12pF"
      footprint="hc49"
      schSectionName="clock_flash"
      connections={{ pin1: "net.XIN", pin2: "net.XOUT" }}
    />
    <capacitor name="C8" capacitance="15pF" footprint="0402" schOrientation="vertical" schSectionName="clock_flash" connections={{ pin1: "net.XIN", pin2: "net.GND" }} />
    <capacitor name="C9" capacitance="15pF" footprint="0402" schOrientation="vertical" schSectionName="clock_flash" connections={{ pin1: "net.XOUT", pin2: "net.GND" }} />
    <resistor name="R5" resistance="10k" footprint="0603" schSectionName="clock_flash" connections={{ pin1: "net.QSPI_SS_N", pin2: "net.V3_3" }} />
    <pushbutton name="SW1" footprint="pushbutton6mm" schSectionName="clock_flash" connections={{ pin1: "net.QSPI_SS_N", pin2: "net.GND", pin3: "net.QSPI_SS_N", pin4: "net.GND" }} />

    <resistor name="R6" resistance="10k" footprint="0603" schSectionName="debug_io" connections={{ pin1: "net.RUN", pin2: "net.V3_3" }} />
    <pushbutton name="SW2" footprint="pushbutton6mm" schSectionName="debug_io" connections={{ pin1: "net.RUN", pin2: "net.GND", pin3: "net.RUN", pin4: "net.GND" }} />
    <resistor name="R7" resistance="1k" footprint="0603" schSectionName="debug_io" connections={{ pin1: "net.V3_3", pin2: "D1.pin1" }} />
    <led name="D1" color="green" footprint="led0603" schDisplayValue="GP25" schSectionName="debug_io" connections={{ pin1: "R7.pin2", pin2: "net.LED" }} />
    <pinheader
      name="J2"
      pinCount={4}
      schWidth={0.675}
      gender="male"
      pitch="2.54mm"
      schSectionName="debug_io"
      pinLabels={{ pin1: "V3_3", pin2: "SWDIO", pin3: "SWCLK", pin4: "GND" }}
      connections={{ V3_3: "net.V3_3", SWDIO: "net.SWDIO", SWCLK: "net.SWCLK", GND: "net.GND" }}
    />
    <pinheader
      name="J3"
      pinCount={12}
      schWidth={1.055}
      gender="male"
      pitch="2.54mm"
      schSectionName="debug_io"
      pinLabels={{
        pin1: "V3_3",
        pin2: "GND",
        pin3: "GP0",
        pin4: "GP1",
        pin5: "GP2",
        pin6: "GP3",
        pin7: "GP4",
        pin8: "GP5",
        pin9: "GP26_ADC0",
        pin10: "GP27_ADC1",
        pin11: "GP28_ADC2",
        pin12: "RUN",
      }}
      connections={{
        V3_3: "net.V3_3",
        GND: "net.GND",
        GP0: "net.GP0",
        GP1: "net.GP1",
        GP2: "net.GP2",
        GP3: "net.GP3",
        GP4: "net.GP4",
        GP5: "net.GP5",
        GP26_ADC0: "net.GP26_ADC0",
        GP27_ADC1: "net.GP27_ADC1",
        GP28_ADC2: "net.GP28_ADC2",
        RUN: "net.RUN",
      }}
    />
  </board>
)
