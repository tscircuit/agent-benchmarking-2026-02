const rp2040PinLabels = {
  pin1: ["IOVDD1", "IOVDD"],
  pin2: "GPIO0",
  pin3: "GPIO1",
  pin4: "GPIO2",
  pin5: "GPIO3",
  pin6: "GPIO4",
  pin7: "GPIO5",
  pin8: "GPIO6",
  pin9: "GPIO7",
  pin10: ["IOVDD2", "IOVDD"],
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
  pin22: ["IOVDD3", "IOVDD"],
  pin23: ["DVDD1", "DVDD"],
  pin24: "SWCLK",
  pin25: "SWDIO",
  pin26: "RUN",
  pin27: "GPIO16",
  pin28: "GPIO17",
  pin29: "GPIO18",
  pin30: "GPIO19",
  pin31: "GPIO20",
  pin32: "GPIO21",
  pin33: ["IOVDD4", "IOVDD"],
  pin34: "GPIO22",
  pin35: "GPIO23",
  pin36: "GPIO24",
  pin37: "GPIO25",
  pin38: ["GPIO26_ADC0", "GPIO26"],
  pin39: ["GPIO27_ADC1", "GPIO27"],
  pin40: ["GPIO28_ADC2", "GPIO28"],
  pin41: ["GPIO29_ADC3", "GPIO29"],
  pin42: ["IOVDD5", "IOVDD"],
  pin43: "ADC_AVDD",
  pin44: "VREG_VIN",
  pin45: "VREG_VOUT",
  pin46: "USB_DM",
  pin47: "USB_DP",
  pin48: "USB_VDD",
  pin49: ["IOVDD6", "IOVDD"],
  pin50: ["DVDD2", "DVDD"],
  pin51: "QSPI_SD3",
  pin52: "QSPI_SCLK",
  pin53: "QSPI_SD0",
  pin54: "QSPI_SD2",
  pin55: "QSPI_SD1",
  pin56: "QSPI_CSN",
} as const

const flashPinLabels = {
  pin1: "CS",
  pin2: "DO_IO1",
  pin3: "WP_IO2",
  pin4: "GND",
  pin5: "DI_IO0",
  pin6: "CLK",
  pin7: "HOLD_IO3",
  pin8: "VCC",
} as const

const regulatorPinLabels = {
  pin1: "GND",
  pin2: "VOUT",
  pin3: "VIN",
} as const

const gpioLeft = [
  "GPIO0",
  "GPIO1",
  "GPIO2",
  "GPIO3",
  "GPIO4",
  "GPIO5",
  "GPIO6",
  "GPIO7",
] as const

const rp2040PowerPins = [
  "IOVDD1",
  "IOVDD2",
  "IOVDD3",
  "IOVDD4",
  "IOVDD5",
  "IOVDD6",
  "USB_VDD",
  "ADC_AVDD",
] as const

export default () => (
  <board width="62mm" height="58mm" layers={4}>
    <chip
      name="U1"
      manufacturerPartNumber="RP2040"
      footprint="qfn56_w7_h7_p0.4mm_thermalpad_startingpin(topside,rightpin)_ccw"
      pinLabels={rp2040PinLabels}
      schX={0}
      schY={0}
      pcbX={0}
      pcbY={0}
      schPinArrangement={{
        leftSide: {
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
            "USB_DM",
            "USB_DP",
            "XIN",
            "XOUT",
          ],
          direction: "top-to-bottom",
        },
        rightSide: {
          pins: [
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
            "SWDIO",
            "RUN",
          ],
          direction: "top-to-bottom",
        },
        topSide: {
          pins: ["IOVDD", "DVDD", "USB_VDD", "ADC_AVDD", "VREG_VIN", "VREG_VOUT"],
          direction: "left-to-right",
        },
        bottomSide: {
          pins: ["QSPI_CSN", "QSPI_SCLK", "QSPI_SD0", "QSPI_SD1", "QSPI_SD2", "QSPI_SD3", "TESTEN"],
          direction: "left-to-right",
        },
      }}
    />

    <connector
      name="J_USB"
      manufacturerPartNumber="USB-C-DEVICE-LOCAL"
      pinLabels={{
        pin1: "VBUS",
        pin2: "D_N",
        pin3: "D_P",
        pin4: "CC1",
        pin5: "CC2",
        pin6: "GND",
        pin7: "SHIELD1",
        pin8: "SHIELD2",
      }}
      pcbX={0}
      pcbY={-27.2}
      pcbRotation={180}
      schX={-8}
      schY={2}
      footprint={
        <footprint insertionDirection="from_front">
          <smtpad portHints={["pin1"]} pcbX="-2.5mm" pcbY="0" width="0.6mm" height="1.7mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="-1.5mm" pcbY="0" width="0.45mm" height="1.7mm" shape="rect" />
          <smtpad portHints={["pin3"]} pcbX="-0.5mm" pcbY="0" width="0.45mm" height="1.7mm" shape="rect" />
          <smtpad portHints={["pin4"]} pcbX="0.5mm" pcbY="0" width="0.45mm" height="1.7mm" shape="rect" />
          <smtpad portHints={["pin5"]} pcbX="1.5mm" pcbY="0" width="0.45mm" height="1.7mm" shape="rect" />
          <smtpad portHints={["pin6"]} pcbX="2.5mm" pcbY="0" width="0.6mm" height="1.7mm" shape="rect" />
          <smtpad portHints={["pin7"]} pcbX="-4.3mm" pcbY="-1.2mm" width="1.5mm" height="2.4mm" shape="rect" />
          <smtpad portHints={["pin8"]} pcbX="4.3mm" pcbY="-1.2mm" width="1.5mm" height="2.4mm" shape="rect" />
        </footprint>
      }
    />

    <chip name="U2" manufacturerPartNumber="AMS1117-3.3" footprint="sot223" pinLabels={regulatorPinLabels} pcbX={-17} pcbY={-19} schX={-8} schY={-2} />
    <chip name="U3" manufacturerPartNumber="W25Q16JVSSIQ" footprint="soic8_p1.27mm" pinLabels={flashPinLabels} pcbX={14} pcbY={-9} schX={3.5} schY={-5} />
    <crystal name="Y1" frequency="12MHz" loadCapacitance="10pF" footprint="hc49" pcbX={-14} pcbY={9} schX={-4.5} schY={-5} />
    <led name="D1" color="green" footprint="0603" pcbX={18} pcbY={12} schX={6.5} schY={2} />
    <resistor name="R_LED" resistance="330" footprint="0603" pcbX={13.5} pcbY={12} schX={4.5} schY={2} />
    <resistor name="R_CC1" resistance="5.1k" footprint="0603" pcbX={-7.5} pcbY={-23.8} schX={-5.5} schY={3.5} />
    <resistor name="R_CC2" resistance="5.1k" footprint="0603" pcbX={-4} pcbY={-23.8} schX={-4} schY={3.5} />
    <resistor name="R_RUN" resistance="10k" footprint="0603" pcbX={-8} pcbY={14} schX={4.5} schY={-2} />
    <pushbutton name="SW_RUN" footprint="pushbutton" pcbX={-19} pcbY={19} schX={6.5} schY={-2} />
    <pushbutton name="SW_BOOT" footprint="pushbutton" pcbX={20} pcbY={-18} schX={6.5} schY={-4} />

    <capacitor name="C_IN" capacitance="10uF" footprint="0805" pcbX={-24.5} pcbY={-19} schX={-9.5} schY={-4} schOrientation="vertical" />
    <capacitor name="C_OUT" capacitance="10uF" footprint="0805" pcbX={-10.5} pcbY={-19} schX={-6.5} schY={-4} schOrientation="vertical" />
    <capacitor name="C_USB" capacitance="1uF" footprint="0603" pcbX={-5.8} pcbY={-6.5} schX={-3.4} schY={4.4} schOrientation="vertical" />
    <capacitor name="C_CORE1" capacitance="1uF" footprint="0603" pcbX={-7.2} pcbY={-3.8} schX={-1.7} schY={4.4} schOrientation="vertical" />
    <capacitor name="C_CORE2" capacitance="1uF" footprint="0603" pcbX={7.2} pcbY={-3.8} schX={-0.2} schY={4.4} schOrientation="vertical" />
    <capacitor name="C_IO1" capacitance="100nF" footprint="0402" pcbX={-7.2} pcbY={4.4} schX={1.3} schY={4.4} schOrientation="vertical" />
    <capacitor name="C_IO2" capacitance="100nF" footprint="0402" pcbX={7.2} pcbY={4.4} schX={2.8} schY={4.4} schOrientation="vertical" />
    <capacitor name="C_XIN" capacitance="10pF" footprint="0402" pcbX={-19} pcbY={5.2} schX={-6} schY={-6.5} schOrientation="vertical" />
    <capacitor name="C_XOUT" capacitance="10pF" footprint="0402" pcbX={-19} pcbY={13.2} schX={-3} schY={-6.5} schOrientation="vertical" />

    <pinheader
      name="J_LEFT"
      pinCount={10}
      gender="male"
      pitch="2.54mm"
      footprint="pinrow10"
      pinLabels={["V3_3", ...gpioLeft, "GND"]}
      showSilkscreenPinLabels
      pcbX={-27}
      pcbY={0}
      pcbRotation={90}
      schX={-9}
      schY={-8}
      schWidth={0.77}
    />
    <pinheader
      name="J_SWD"
      pinCount={3}
      gender="male"
      pitch="2.54mm"
      footprint="pinrow3"
      pinLabels={["SWDIO", "SWCLK", "GND"]}
      showSilkscreenPinLabels
      pcbX={0}
      pcbY={26}
      schX={8}
      schY={5}
    />

    <trace from="J_USB.VBUS" to="net.VBUS" />
    <trace from="J_USB.GND" to="net.GND" />
    <trace from="J_USB.SHIELD1" to="net.GND" />
    <trace from="J_USB.SHIELD2" to="net.GND" />
    <trace from="J_USB.D_N" to="U1.USB_DM" />
    <trace from="J_USB.D_P" to="U1.USB_DP" />
    <trace from="J_USB.CC1" to="R_CC1.pin1" />
    <trace from="J_USB.CC2" to="R_CC2.pin1" />
    <trace from="R_CC1.pin2" to="net.GND" />
    <trace from="R_CC2.pin2" to="net.GND" />

    <trace from="U2.VIN" to="net.VBUS" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="U2.VOUT" to="net.V3_3" />
    <trace from="C_IN.pin1" to="net.VBUS" />
    <trace from="C_IN.pin2" to="net.GND" />
    <trace from="C_OUT.pin1" to="net.V3_3" />
    <trace from="C_OUT.pin2" to="net.GND" />

    <trace from="U1.VREG_VIN" to="net.V3_3" />
    <trace from="U1.VREG_VOUT" to="U1.DVDD1" />
    <trace from="U1.VREG_VOUT" to="U1.DVDD2" />
    {rp2040PowerPins.map((pinName) => (
      <trace key={`u1-${pinName}-3v3`} from={`U1.${pinName}`} to="net.V3_3" />
    ))}
    <trace from="U1.TESTEN" to="net.GND" />
    <trace from="C_USB.pin1" to="U1.USB_VDD" />
    <trace from="C_USB.pin2" to="net.GND" />
    <trace from="C_CORE1.pin1" to="U1.DVDD1" />
    <trace from="C_CORE1.pin2" to="net.GND" />
    <trace from="C_CORE2.pin1" to="U1.DVDD2" />
    <trace from="C_CORE2.pin2" to="net.GND" />
    <trace from="C_IO1.pin1" to="net.V3_3" />
    <trace from="C_IO1.pin2" to="net.GND" />
    <trace from="C_IO2.pin1" to="net.V3_3" />
    <trace from="C_IO2.pin2" to="net.GND" />

    <trace from="U1.XIN" to="Y1.pin1" />
    <trace from="U1.XOUT" to="Y1.pin2" />
    <trace from="C_XIN.pin1" to="Y1.pin1" />
    <trace from="C_XIN.pin2" to="net.GND" />
    <trace from="C_XOUT.pin1" to="Y1.pin2" />
    <trace from="C_XOUT.pin2" to="net.GND" />

    <trace from="U1.QSPI_CSN" to="U3.CS" />
    <trace from="U1.QSPI_SCLK" to="U3.CLK" />
    <trace from="U1.QSPI_SD0" to="U3.DI_IO0" />
    <trace from="U1.QSPI_SD1" to="U3.DO_IO1" />
    <trace from="U1.QSPI_SD2" to="U3.WP_IO2" />
    <trace from="U1.QSPI_SD3" to="U3.HOLD_IO3" />
    <trace from="U3.VCC" to="net.V3_3" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="SW_BOOT.pin1" to="U3.CS" />
    <trace from="SW_BOOT.pin2" to="net.GND" />

    <trace from="U1.GPIO25" to="R_LED.pin1" />
    <trace from="R_LED.pin2" to="D1.pin1" />
    <trace from="D1.pin2" to="net.GND" />
    <trace from="U1.RUN" to="R_RUN.pin1" />
    <trace from="R_RUN.pin2" to="net.V3_3" />
    <trace from="SW_RUN.pin1" to="U1.RUN" />
    <trace from="SW_RUN.pin2" to="net.GND" />

    {gpioLeft.map((pinName) => (
      <trace key={`left-${pinName}`} from={`U1.${pinName}`} to={`J_LEFT.${pinName}`} />
    ))}
    <trace from="J_LEFT.V3_3" to="net.V3_3" />
    <trace from="J_LEFT.GND" to="net.GND" />
    <trace from="J_SWD.SWDIO" to="U1.SWDIO" />
    <trace from="J_SWD.SWCLK" to="U1.SWCLK" />
    <trace from="J_SWD.GND" to="net.GND" />
  </board>
)
