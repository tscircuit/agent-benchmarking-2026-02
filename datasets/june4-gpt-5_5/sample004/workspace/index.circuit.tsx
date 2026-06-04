import type { ChipProps } from "tscircuit"

const rp2040PinLabels = {
  pin1: "IOVDD",
  pin2: "GPIO0",
  pin3: "GPIO1",
  pin4: "GPIO2",
  pin5: "GPIO3",
  pin6: "GPIO4",
  pin7: "GPIO5",
  pin8: "GPIO6",
  pin9: "GPIO7",
  pin10: "IOVDD2",
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
  pin22: "IOVDD3",
  pin23: "DVDD",
  pin24: "SWCLK",
  pin25: "SWDIO",
  pin26: "RUN",
  pin27: "GPIO16",
  pin28: "GPIO17",
  pin29: "GPIO18",
  pin30: "GPIO19",
  pin31: "GPIO20",
  pin32: "GPIO21",
  pin33: "IOVDD4",
  pin34: "GPIO22",
  pin35: "GPIO23",
  pin36: "GPIO24",
  pin37: "GPIO25",
  pin38: "GPIO26_ADC0",
  pin39: "GPIO27_ADC1",
  pin40: "GPIO28_ADC2",
  pin41: "GPIO29_ADC3",
  pin42: "IOVDD5",
  pin43: "ADC_AVDD",
  pin44: "VREG_VIN",
  pin45: "VREG_VOUT",
  pin46: "USB_DM",
  pin47: "USB_DP",
  pin48: "USB_VDD",
  pin49: "IOVDD6",
  pin50: "DVDD2",
  pin51: "QSPI_SD3",
  pin52: "QSPI_SCLK",
  pin53: "QSPI_SD0",
  pin54: "QSPI_SD2",
  pin55: "QSPI_SD1",
  pin56: "QSPI_SS",
} as const

const flashPinLabels = {
  pin1: "CS",
  pin2: "SO_IO1",
  pin3: "WP_IO2",
  pin4: "GND",
  pin5: "SI_IO0",
  pin6: "SCLK",
  pin7: "HOLD_IO3",
  pin8: "VCC",
} as const

const Rp2040 = (props: ChipProps<typeof rp2040PinLabels>) => (
  <chip
    footprint="qfn56"
    pinLabels={rp2040PinLabels}
    schPinArrangement={{
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
          "GPIO26_ADC0",
          "GPIO27_ADC1",
          "GPIO28_ADC2",
          "GPIO29_ADC3",
        ],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          "QSPI_SS",
          "QSPI_SD0",
          "QSPI_SD1",
          "QSPI_SD2",
          "QSPI_SD3",
          "QSPI_SCLK",
          "USB_DP",
          "USB_DM",
          "SWCLK",
          "SWDIO",
          "RUN",
          "XIN",
          "XOUT",
          "TESTEN",
        ],
      },
      topSide: {
        direction: "left-to-right",
        pins: [
          "IOVDD",
          "IOVDD2",
          "IOVDD3",
          "IOVDD4",
          "IOVDD5",
          "IOVDD6",
          "USB_VDD",
          "ADC_AVDD",
          "VREG_VIN",
          "VREG_VOUT",
        ],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: ["DVDD", "DVDD2"],
      },
    }}
    pinAttributes={{
      IOVDD: { requiresPower: true },
      IOVDD2: { requiresPower: true },
      IOVDD3: { requiresPower: true },
      IOVDD4: { requiresPower: true },
      IOVDD5: { requiresPower: true },
      IOVDD6: { requiresPower: true },
      USB_VDD: { requiresPower: true },
      ADC_AVDD: { requiresPower: true },
      VREG_VIN: { requiresPower: true },
      VREG_VOUT: { providesPower: true },
      RUN: { mustBeConnected: true },
      SWCLK: { mustBeConnected: true },
      SWDIO: { mustBeConnected: true },
    }}
    {...props}
  />
)

const Flash = (props: ChipProps<typeof flashPinLabels>) => (
  <chip
    footprint="soic8"
    pinLabels={flashPinLabels}
    supplierPartNumbers={{ jlcpcb: ["C82317"] }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["CS", "SO_IO1", "WP_IO2", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "HOLD_IO3", "SCLK", "SI_IO0"],
      },
    }}
    {...props}
  />
)

export default () => (
  <board width="55mm" height="45mm" layers={2} routingDisabled>
    <net name="VBUS" />
    <net name="V3_3" />
    <net name="GND" />
    <net name="USB_DP" />
    <net name="USB_DM" />
    <net name="USB_DP_MCU" />
    <net name="USB_DM_MCU" />
    <net name="CC1" />
    <net name="CC2" />
    <net name="RUN" />
    <net name="SWCLK" />
    <net name="SWDIO" />
    <net name="XIN" />
    <net name="XOUT" />
    <net name="QSPI_SS" />
    <net name="QSPI_SD0" />
    <net name="QSPI_SD1" />
    <net name="QSPI_SD2" />
    <net name="QSPI_SD3" />
    <net name="QSPI_SCLK" />
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
    <net name="GPIO23" />
    <net name="GPIO24" />
    <net name="GPIO25" />
    <net name="GPIO26_ADC0" />
    <net name="GPIO27_ADC1" />
    <net name="GPIO28_ADC2" />
    <net name="GPIO29_ADC3" />

    <schematicsection name="usb" displayName="USB-C Power and Data" />
    <schematicsection name="power" displayName="3.3V Power" />
    <schematicsection name="mcu" displayName="RP2040 Microcontroller" />
    <schematicsection name="memory" displayName="QSPI Flash" />
    <schematicsection name="clock" displayName="12MHz Clock" />
    <schematicsection name="debug" displayName="Reset, Boot, and SWD" />
    <schematicsection name="headers" displayName="GPIO Headers" />

    <connector
      name="J1"
      standard="usb_c"
      schSectionName="usb"
      pcbX={-23}
      pcbY={0}
      schX={-6.115}
      schY={-4.6}
      schWidth={0.85}
      schHeight={3.2}
      connections={{
        VBUS1: "net.VBUS",
        VBUS2: "net.VBUS",
        DP1: "net.USB_DP",
        DP2: "net.USB_DP",
        DM1: "net.USB_DM",
        DM2: "net.USB_DM",
        CC1: "net.CC1",
        CC2: "net.CC2",
        GND1: "net.GND",
        GND2: "net.GND",
      }}
    />
    <resistor
      name="R1"
      resistance="5.1k"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C25905"] }}
      schSectionName="usb"
      pcbX={-18}
      pcbY={5}
      connections={{ pin1: "net.CC1", pin2: "net.GND" }}
    />
    <resistor
      name="R2"
      resistance="5.1k"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C25905"] }}
      schSectionName="usb"
      pcbX={-18}
      pcbY={2}
      connections={{ pin1: "net.CC2", pin2: "net.GND" }}
    />
    <resistor
      name="R3"
      resistance="27"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C25190"] }}
      schSectionName="usb"
      pcbX={-14}
      pcbY={-2}
      schX={-2.885}
      schY={-5.985}
      connections={{ pin1: "net.USB_DP", pin2: "net.USB_DP_MCU" }}
    />
    <resistor
      name="R4"
      resistance="27"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C25190"] }}
      schSectionName="usb"
      pcbX={-14}
      pcbY={-5}
      connections={{ pin1: "net.USB_DM", pin2: "net.USB_DM_MCU" }}
    />

    <chip
      name="U2"
      footprint="sot23_5"
      schSectionName="power"
      pcbX={-14}
      pcbY={9}
      schHeight={0.6}
      pinLabels={{
        pin1: "VIN",
        pin2: "GND",
        pin3: "EN",
        pin4: "NC",
        pin5: "VOUT",
      }}
      supplierPartNumbers={{ jlcpcb: ["C5446"] }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["VIN", "EN", "GND"] },
        rightSide: { direction: "top-to-bottom", pins: ["VOUT", "NC"] },
      }}
      connections={{
        VIN: "net.VBUS",
        EN: "net.VBUS",
        GND: "net.GND",
        VOUT: "net.V3_3",
      }}
    />
    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="0805"
      supplierPartNumbers={{ jlcpcb: ["C15850"] }}
      schSectionName="power"
      pcbX={-20}
      pcbY={9}
      schRotation={90}
      schX={-6.805}
      schY={-6.479}
      connections={{ pin1: "net.VBUS", pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      capacitance="10uF"
      footprint="0805"
      supplierPartNumbers={{ jlcpcb: ["C15850"] }}
      schSectionName="power"
      pcbX={-8}
      pcbY={9}
      schRotation={90}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />

    <Rp2040
      name="U1"
      schSectionName="mcu"
      pcbX={0}
      pcbY={0}
      schX={-0.165}
      schY={-4.6}
      schWidth={2.2}
      schHeight={4.13}
      connections={{
        IOVDD: "net.V3_3",
        IOVDD2: "net.V3_3",
        IOVDD3: "net.V3_3",
        IOVDD4: "net.V3_3",
        IOVDD5: "net.V3_3",
        IOVDD6: "net.V3_3",
        USB_VDD: "net.V3_3",
        ADC_AVDD: "net.V3_3",
        VREG_VIN: "net.V3_3",
        VREG_VOUT: "net.V3_3",
        DVDD: "net.GND",
        DVDD2: "net.GND",
        TESTEN: "net.GND",
        USB_DP: "net.USB_DP_MCU",
        USB_DM: "net.USB_DM_MCU",
        RUN: "net.RUN",
        SWCLK: "net.SWCLK",
        SWDIO: "net.SWDIO",
        XIN: "net.XIN",
        XOUT: "net.XOUT",
        QSPI_SS: "net.QSPI_SS",
        QSPI_SD0: "net.QSPI_SD0",
        QSPI_SD1: "net.QSPI_SD1",
        QSPI_SD2: "net.QSPI_SD2",
        QSPI_SD3: "net.QSPI_SD3",
        QSPI_SCLK: "net.QSPI_SCLK",
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
        GPIO23: "net.GPIO23",
        GPIO24: "net.GPIO24",
        GPIO25: "net.GPIO25",
        GPIO26_ADC0: "net.GPIO26_ADC0",
        GPIO27_ADC1: "net.GPIO27_ADC1",
        GPIO28_ADC2: "net.GPIO28_ADC2",
        GPIO29_ADC3: "net.GPIO29_ADC3",
      }}
    />
    <capacitor
      name="C3"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      schSectionName="mcu"
      pcbX={-5}
      pcbY={6}
      schRotation={90}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      schSectionName="mcu"
      pcbX={0}
      pcbY={6}
      schRotation={90}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      schSectionName="mcu"
      pcbX={5}
      pcbY={6}
      schRotation={90}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />

    <Flash
      name="U3"
      schSectionName="memory"
      pcbX={10}
      pcbY={-4}
      connections={{
        VCC: "net.V3_3",
        GND: "net.GND",
        CS: "net.QSPI_SS",
        SI_IO0: "net.QSPI_SD0",
        SO_IO1: "net.QSPI_SD1",
        WP_IO2: "net.QSPI_SD2",
        HOLD_IO3: "net.QSPI_SD3",
        SCLK: "net.QSPI_SCLK",
      }}
    />
    <capacitor
      name="C6"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      schSectionName="memory"
      pcbX={15}
      pcbY={-4}
      schRotation={90}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />

    <crystal
      name="Y1"
      frequency="12MHz"
      loadCapacitance="18pF"
      footprint="hc49_p4.88mm_id0.8mm_od1.5mm_w5.6mm_h3.5mm"
      supplierPartNumbers={{ jlcpcb: ["C9002"] }}
      schSectionName="clock"
      pcbX={10}
      pcbY={5}
      connections={{ pin1: "net.XIN", pin2: "net.XOUT" }}
    />
    <capacitor
      name="C7"
      capacitance="18pF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1549"] }}
      schSectionName="clock"
      pcbX={5}
      pcbY={10}
      schRotation={90}
      connections={{ pin1: "net.XIN", pin2: "net.GND" }}
    />
    <capacitor
      name="C8"
      capacitance="18pF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1549"] }}
      schSectionName="clock"
      pcbX={15}
      pcbY={10}
      schRotation={90}
      connections={{ pin1: "net.XOUT", pin2: "net.GND" }}
    />

    <resistor
      name="R5"
      resistance="10k"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C25744"] }}
      schSectionName="debug"
      pcbX={-5}
      pcbY={-9}
      connections={{ pin1: "net.V3_3", pin2: "net.RUN" }}
    />
    <pushbutton
      name="SW1"
      footprint="pushbutton2"
      schSectionName="debug"
      pcbX={1}
      pcbY={-11}
      schX={6.465}
      schY={-4.975}
      connections={{ pin1: "net.RUN", pin2: "net.GND" }}
    />
    <pushbutton
      name="SW2"
      footprint="pushbutton2"
      schSectionName="debug"
      pcbX={8}
      pcbY={-11}
      schX={6.465}
      schY={-6.625}
      connections={{ pin1: "net.GPIO23", pin2: "net.GND" }}
    />
    <pinheader
      name="J2"
      pinCount={3}
      pitch="2.54mm"
      schSectionName="debug"
      pcbX={18}
      pcbY={-12}
      schX={5.735}
      schY={-2.75}
      pinLabels={{ pin1: "SWDIO", pin2: "SWCLK", pin3: "GND" }}
      connections={{
        SWDIO: "net.SWDIO",
        SWCLK: "net.SWCLK",
        GND: "net.GND",
      }}
    />

    <pinheader
      name="J3"
      pinCount={20}
      pitch="2.54mm"
      schSectionName="headers"
      pcbX={-20}
      pcbY={-9}
      pcbRotation={90}
      schX={2.105}
      schY={-13.8}
      schWidth={0.77}
      schHeight={4.2}
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
        pin19: "RUN",
        pin20: "GND2",
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
        RUN: "net.RUN",
        GND2: "net.GND",
      }}
    />
    <pinheader
      name="J4"
      pinCount={20}
      pitch="2.54mm"
      schSectionName="headers"
      pcbX={20}
      pcbY={-9}
      pcbRotation={90}
      schX={-1.855}
      schY={-13.8}
      schWidth={1.245}
      schHeight={4.2}
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
        pin10: "GPIO23",
        pin11: "GPIO24",
        pin12: "GPIO25",
        pin13: "GPIO26_ADC0",
        pin14: "GPIO27_ADC1",
        pin15: "GPIO28_ADC2",
        pin16: "GPIO29_ADC3",
        pin17: "SWDIO",
        pin18: "SWCLK",
        pin19: "USB_DP",
        pin20: "USB_DM",
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
        GPIO23: "net.GPIO23",
        GPIO24: "net.GPIO24",
        GPIO25: "net.GPIO25",
        GPIO26_ADC0: "net.GPIO26_ADC0",
        GPIO27_ADC1: "net.GPIO27_ADC1",
        GPIO28_ADC2: "net.GPIO28_ADC2",
        GPIO29_ADC3: "net.GPIO29_ADC3",
        SWDIO: "net.SWDIO",
        SWCLK: "net.SWCLK",
        USB_DP: "net.USB_DP",
        USB_DM: "net.USB_DM",
      }}
    />
  </board>
)
