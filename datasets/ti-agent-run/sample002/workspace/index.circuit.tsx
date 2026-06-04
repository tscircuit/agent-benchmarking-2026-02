import { RP2040 } from "./imports/RP2040"

export default () => (
  <board width="100mm" height="55mm" layers={2} routingDisabled>
    <net name="VBUS" />
    <net name="V3_3" />
    <net name="V1_1" />
    <net name="GND" />
    <net name="USB_DP" />
    <net name="USB_DM" />
    <net name="CC1" />
    <net name="CC2" />
    <net name="XIN" />
    <net name="XOUT" />
    <net name="QSPI_SCLK" />
    <net name="QSPI_SS" />
    <net name="QSPI_SD0" />
    <net name="QSPI_SD1" />
    <net name="QSPI_SD2" />
    <net name="QSPI_SD3" />
    <net name="RUN" />
    <net name="SWCLK" />
    <net name="SWDIO" />
    <net name="LED_STATUS" />
    <net name="LED_PWR" />
    <net name="GPIO0" />
    <net name="GPIO1" />
    <net name="GPIO2" />
    <net name="GPIO3" />
    <net name="GPIO4" />
    <net name="GPIO5" />
    <net name="GPIO6" />
    <net name="GPIO7" />
    <net name="GPIO8" />
    <net name="GPIO9" />
    <net name="GPIO10" />
    <net name="GPIO11" />
    <net name="GPIO12" />
    <net name="GPIO13" />
    <net name="GPIO14" />
    <net name="GPIO15" />
    <net name="GPIO16" />
    <net name="GPIO17" />
    <net name="GPIO18" />
    <net name="GPIO19" />
    <net name="GPIO20" />
    <net name="GPIO21" />
    <net name="GPIO22" />
    <net name="GPIO25" />
    <net name="GPIO26_ADC0" />
    <net name="GPIO27_ADC1" />
    <net name="GPIO28_ADC2" />
    <net name="GPIO29_ADC3" />

    <schematicsection name="usb" displayName="USB-C and Power Input" />
    <schematicsection name="power" displayName="3.3V and RP2040 Core Power" />
    <schematicsection name="mcu" displayName="RP2040 Microcontroller" />
    <schematicsection name="clock" displayName="12MHz Crystal" />
    <schematicsection name="flash" displayName="QSPI Flash and BOOTSEL" />
    <schematicsection name="debug" displayName="Reset, SWD, and Indicators" />
    <schematicsection name="io" displayName="GPIO Expansion Headers" />

    <connector
      name="J1"
      standard="usb_c"
      pcbX={-30}
      pcbY={0}
      pcbRotation="90deg"
      schX={-16.317}
      schY={-5.791}
      schWidth={0.85}
      schSectionName="usb"
      connections={{
        VBUS1: "net.VBUS",
        VBUS2: "net.VBUS",
        GND1: "net.GND",
        GND2: "net.GND",
        DP1: "net.USB_DP",
        DP2: "net.USB_DP",
        DM1: "net.USB_DM",
        DM2: "net.USB_DM",
        CC1: "net.CC1",
        CC2: "net.CC2",
      }}
    />
    <resistor
      name="R1"
      resistance="5.1k"
      footprint="0402"
      schX={-13.307}
      schY={-5.966}
      schSectionName="usb"
      connections={{ pin1: "net.CC1", pin2: "net.GND" }}
    />
    <resistor
      name="R2"
      resistance="5.1k"
      footprint="0402"
      schX={-13.307}
      schY={-4.377}
      schSectionName="usb"
      connections={{ pin1: "net.CC2", pin2: "net.GND" }}
    />
    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="0805"
      schX={-13.712}
      schY={-2.562}
      schRotation="90deg"
      schSectionName="usb"
      connections={{ pin1: "net.VBUS", pin2: "net.GND" }}
    />

    <chip
      name="U1"
      manufacturerPartNumber="AP2112K-3.3"
      footprint="sot23_5"
      pcbX={-16}
      pcbY={0}
      schX={-8.008}
      schY={-6.38}
      schHeight={0.6}
      schSectionName="power"
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
      name="C2"
      capacitance="1uF"
      footprint="0402"
      schX={-8.008}
      schY={-3.96}
      schRotation="90deg"
      schSectionName="power"
      connections={{ pin1: "net.VBUS", pin2: "net.GND" }}
    />
    <capacitor
      name="C3"
      capacitance="1uF"
      footprint="0402"
      schX={-5.098}
      schY={-5.573}
      schRotation="90deg"
      schSectionName="power"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      capacitance="100nF"
      footprint="0402"
      schX={-5.098}
      schY={-7.613}
      schRotation="90deg"
      schSectionName="power"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="0402"
      schX={-5.698}
      schY={-3.533}
      schRotation="90deg"
      schSectionName="power"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C6"
      capacitance="1uF"
      footprint="0402"
      schX={-8.008}
      schY={-1.92}
      schRotation="90deg"
      schSectionName="power"
      connections={{ pin1: "net.V1_1", pin2: "net.GND" }}
    />

    <RP2040
      name="U2"
      pcbX={0}
      pcbY={0}
      schX={0.353}
      schY={-4.767}
      schSectionName="mcu"
      schPinArrangement={{
        topSide: {
          direction: "left-to-right",
          pins: [
            "IOVDD1",
            "IOVDD2",
            "IOVDD3",
            "IOVDD4",
            "IOVDD5",
            "IOVDD6",
            "USB_VDD",
            "ADC_AVDD",
          ],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: ["DVDD1", "DVDD2", "VREG_IN", "VREG_VOUT", "GND"],
        },
        leftSide: {
          direction: "top-to-bottom",
          pins: [
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
            "USB_DP",
            "USB_DM",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "QSPI_SD3",
            "QSPI_SCLK",
            "QSPI_SD0",
            "QSPI_SD2",
            "QSPI_SD1",
            "QSPI_SS",
            "XIN",
            "XOUT",
            "SWCLK",
            "SWD",
            "RUN",
            "GPIO16",
            "GPIO17",
            "GPIO18",
            "GPIO19",
            "GPIO20",
            "GPIO21",
            "GPIO22",
            "GPIO26_ADC0",
            "GPIO27_ADC1",
            "GPIO28_ADC2",
            "GPIO29_ADC3",
          ],
        },
      }}
      connections={{
        IOVDD1: "net.V3_3",
        IOVDD2: "net.V3_3",
        IOVDD3: "net.V3_3",
        IOVDD4: "net.V3_3",
        IOVDD5: "net.V3_3",
        IOVDD6: "net.V3_3",
        USB_VDD: "net.V3_3",
        ADC_AVDD: "net.V3_3",
        VREG_IN: "net.V3_3",
        VREG_VOUT: "net.V1_1",
        DVDD1: "net.V1_1",
        DVDD2: "net.V1_1",
        GND: "net.GND",
        USB_DP: "net.USB_DP",
        USB_DM: "net.USB_DM",
        XIN: "net.XIN",
        XOUT: "net.XOUT",
        QSPI_SCLK: "net.QSPI_SCLK",
        QSPI_SS: "net.QSPI_SS",
        QSPI_SD0: "net.QSPI_SD0",
        QSPI_SD1: "net.QSPI_SD1",
        QSPI_SD2: "net.QSPI_SD2",
        QSPI_SD3: "net.QSPI_SD3",
        RUN: "net.RUN",
        SWCLK: "net.SWCLK",
        SWD: "net.SWDIO",
        GPIO0: "net.GPIO0",
        GPIO1: "net.GPIO1",
        GPIO2: "net.GPIO2",
        GPIO3: "net.GPIO3",
        GPIO4: "net.GPIO4",
        GPIO5: "net.GPIO5",
        GPIO6: "net.GPIO6",
        GPIO7: "net.GPIO7",
        GPIO8: "net.GPIO8",
        GPIO9: "net.GPIO9",
        GPIO10: "net.GPIO10",
        GPIO11: "net.GPIO11",
        GPIO12: "net.GPIO12",
        GPIO13: "net.GPIO13",
        GPIO14: "net.GPIO14",
        GPIO15: "net.GPIO15",
        GPIO16: "net.GPIO16",
        GPIO17: "net.GPIO17",
        GPIO18: "net.GPIO18",
        GPIO19: "net.GPIO19",
        GPIO20: "net.GPIO20",
        GPIO21: "net.GPIO21",
        GPIO22: "net.GPIO22",
        GPIO25: "net.GPIO25",
        GPIO26_ADC0: "net.GPIO26_ADC0",
        GPIO27_ADC1: "net.GPIO27_ADC1",
        GPIO28_ADC2: "net.GPIO28_ADC2",
        GPIO29_ADC3: "net.GPIO29_ADC3",
      }}
    />

    <crystal
      name="Y1"
      frequency="12MHz"
      loadCapacitance="18pF"
      footprint="hc49"
      pcbX={0}
      pcbY={-10}
      schX={5.803}
      schY={-3.747}
      schSectionName="clock"
      connections={{ pin1: "net.XIN", pin2: "net.XOUT" }}
    />
    <capacitor
      name="C7"
      capacitance="18pF"
      footprint="0402"
      schX={5.803}
      schY={-5.792}
      schRotation="90deg"
      schSectionName="clock"
      connections={{ pin1: "net.XIN", pin2: "net.GND" }}
    />
    <capacitor
      name="C8"
      capacitance="18pF"
      footprint="0402"
      schX={8.113}
      schY={-4.769}
      schRotation="90deg"
      schSectionName="clock"
      connections={{ pin1: "net.XOUT", pin2: "net.GND" }}
    />

    <chip
      name="U3"
      manufacturerPartNumber="W25Q128JVSIQ"
      footprint="soic8"
      pcbX={13}
      pcbY={0}
      schX={16.218}
      schY={-3.547}
      schSectionName="flash"
      pinLabels={{
        pin1: "CS",
        pin2: "DO_IO1",
        pin3: "WP_IO2",
        pin4: "GND",
        pin5: "DI_IO0",
        pin6: "CLK",
        pin7: "HOLD_IO3",
        pin8: "VCC",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["CS", "DO_IO1", "WP_IO2", "GND"] },
        rightSide: { direction: "top-to-bottom", pins: ["VCC", "HOLD_IO3", "CLK", "DI_IO0"] },
      }}
      connections={{
        VCC: "net.V3_3",
        GND: "net.GND",
        CS: "net.QSPI_SS",
        CLK: "net.QSPI_SCLK",
        DI_IO0: "net.QSPI_SD0",
        DO_IO1: "net.QSPI_SD1",
        WP_IO2: "net.QSPI_SD2",
        HOLD_IO3: "net.QSPI_SD3",
      }}
    />
    <capacitor
      name="C9"
      capacitance="100nF"
      footprint="0402"
      schX={16.218}
      schY={-6.067}
      schRotation="90deg"
      schSectionName="flash"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <pushbutton
      name="SW1"
      footprint="pushbutton_id1.3mm_od2mm"
      pcbX={23}
      pcbY={-9}
      schX={13.163}
      schY={-4.337}
      schSectionName="flash"
      connections={{ pin1: "net.QSPI_SS", pin2: "net.GND" }}
    />
    <resistor
      name="R3"
      resistance="10k"
      footprint="0402"
      schX={13.908}
      schY={-5.956}
      schSectionName="flash"
      connections={{ pin1: "net.QSPI_SS", pin2: "net.V3_3" }}
    />

    <resistor
      name="R4"
      resistance="10k"
      footprint="0402"
      schX={-2.873}
      schY={-14.139}
      schSectionName="debug"
      connections={{ pin1: "net.RUN", pin2: "net.V3_3" }}
    />
    <pushbutton
      name="SW2"
      footprint="pushbutton_id1.3mm_od2mm"
      pcbX={23}
      pcbY={9}
      schX={-5.128}
      schY={-14.108}
      schSectionName="debug"
      connections={{ pin1: "net.RUN", pin2: "net.GND" }}
    />
    <pinheader
      name="J2"
      pinCount={4}
      footprint="pinrow4"
      pcbX={29}
      pcbY={9}
      schX={-3.523}
      schY={-16.433}
      schWidth={0.675}
      schSectionName="debug"
      pinLabels={{
        pin1: "V3_3",
        pin2: "SWDIO",
        pin3: "SWCLK",
        pin4: "GND",
      }}
      connections={{
        V3_3: "net.V3_3",
        SWDIO: "net.SWDIO",
        SWCLK: "net.SWCLK",
        GND: "net.GND",
      }}
    />
    <led
      name="D1"
      color="green"
      footprint="0603"
      schX={-6.088}
      schY={-15.858}
      schDisplayValue="PWR"
      schSectionName="debug"
      connections={{ pin1: "net.LED_PWR", pin2: "net.GND" }}
    />
    <resistor
      name="R5"
      resistance="1k"
      footprint="0402"
      schX={-6.078}
      schY={-17.578}
      schSectionName="debug"
      connections={{ pin1: "net.V3_3", pin2: "net.LED_PWR" }}
    />
    <led
      name="D2"
      color="blue"
      footprint="0603"
      schX={-4.717}
      schY={-12.358}
      schDisplayValue="GPIO25"
      schSectionName="debug"
      connections={{ pin1: "net.LED_STATUS", pin2: "net.GND" }}
    />
    <resistor
      name="R6"
      resistance="1k"
      footprint="0402"
      schX={-7.037}
      schY={-12.358}
      schSectionName="debug"
      connections={{ pin1: "net.GPIO25", pin2: "net.LED_STATUS" }}
    />

    <pinheader
      name="J3"
      pinCount={18}
      footprint="pinrow18"
      pcbX={-22}
      pcbY={14}
      schX={2.527}
      schY={-14.903}
      schWidth={0.77}
      schSectionName="io"
      pinLabels={{
        pin1: "V3_3",
        pin2: "GND",
        pin3: "GPIO0",
        pin4: "GPIO1",
        pin5: "GPIO2",
        pin6: "GPIO3",
        pin7: "GPIO4",
        pin8: "GPIO5",
        pin9: "GPIO6",
        pin10: "GPIO7",
        pin11: "GPIO8",
        pin12: "GPIO9",
        pin13: "GPIO10",
        pin14: "GPIO11",
        pin15: "GPIO12",
        pin16: "GPIO13",
        pin17: "GPIO14",
        pin18: "GPIO15",
      }}
      connections={{
        V3_3: "net.V3_3",
        GND: "net.GND",
        GPIO0: "net.GPIO0",
        GPIO1: "net.GPIO1",
        GPIO2: "net.GPIO2",
        GPIO3: "net.GPIO3",
        GPIO4: "net.GPIO4",
        GPIO5: "net.GPIO5",
        GPIO6: "net.GPIO6",
        GPIO7: "net.GPIO7",
        GPIO8: "net.GPIO8",
        GPIO9: "net.GPIO9",
        GPIO10: "net.GPIO10",
        GPIO11: "net.GPIO11",
        GPIO12: "net.GPIO12",
        GPIO13: "net.GPIO13",
        GPIO14: "net.GPIO14",
        GPIO15: "net.GPIO15",
      }}
    />
    <pinheader
      name="J4"
      pinCount={14}
      footprint="pinrow14"
      pcbX={22}
      pcbY={14}
      schX={6.487}
      schY={-14.503}
      schWidth={1.245}
      schSectionName="io"
      pinLabels={{
        pin1: "V3_3",
        pin2: "GND",
        pin3: "GPIO16",
        pin4: "GPIO17",
        pin5: "GPIO18",
        pin6: "GPIO19",
        pin7: "GPIO20",
        pin8: "GPIO21",
        pin9: "GPIO22",
        pin10: "GPIO26_ADC0",
        pin11: "GPIO27_ADC1",
        pin12: "GPIO28_ADC2",
        pin13: "GPIO29_ADC3",
        pin14: "VBUS",
      }}
      connections={{
        V3_3: "net.V3_3",
        GND: "net.GND",
        GPIO16: "net.GPIO16",
        GPIO17: "net.GPIO17",
        GPIO18: "net.GPIO18",
        GPIO19: "net.GPIO19",
        GPIO20: "net.GPIO20",
        GPIO21: "net.GPIO21",
        GPIO22: "net.GPIO22",
        GPIO26_ADC0: "net.GPIO26_ADC0",
        GPIO27_ADC1: "net.GPIO27_ADC1",
        GPIO28_ADC2: "net.GPIO28_ADC2",
        GPIO29_ADC3: "net.GPIO29_ADC3",
        VBUS: "net.VBUS",
      }}
    />
  </board>
)
