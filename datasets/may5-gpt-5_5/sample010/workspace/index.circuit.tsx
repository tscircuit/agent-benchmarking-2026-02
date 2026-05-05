import { RP2040 } from "./imports/RP2040"

const powerPins = [
  "IOVDD1",
  "IOVDD2",
  "IOVDD3",
  "IOVDD4",
  "IOVDD5",
  "IOVDD6",
  "ADC_AVDD",
  "USB_VDD",
] as const

const leftHeaderPins = [
  "V3_3",
  "GND",
  "GPIO0",
  "GPIO1",
  "GPIO2",
  "GPIO3",
  "GPIO4",
  "GPIO5",
] as const

const rightHeaderPins = [
  "VBUS",
  "GND",
  "GPIO16",
  "GPIO17",
  "GPIO18",
  "GPIO19",
  "GPIO20",
  "GPIO21",
] as const

export default () => (
  <board width="42mm" height="50mm" layers={2}>
    <RP2040
      name="U1"
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
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
            "GPIO26_ADC0",
            "GPIO27_ADC1",
            "GPIO28_ADC2",
            "GPIO29_ADC3",
            "USB_DM",
            "USB_DP",
            "RUN",
            "SWD",
            "SWCLK",
          ],
          direction: "top-to-bottom",
        },
        topSide: {
          pins: [
            "IOVDD1",
            "IOVDD2",
            "IOVDD3",
            "IOVDD4",
            "IOVDD5",
            "IOVDD6",
            "ADC_AVDD",
            "USB_VDD",
            "VREG_IN",
            "VREG_VOUT",
            "DVDD1",
            "DVDD2",
          ],
          direction: "left-to-right",
        },
        bottomSide: {
          pins: [
            "QSPI_SS",
            "QSPI_SD0",
            "QSPI_SD1",
            "QSPI_SD2",
            "QSPI_SD3",
            "QSPI_SCLK",
            "TESTEN",
            "GND",
          ],
          direction: "left-to-right",
        },
      }}
    />

    <connector
      name="J_USB"
      manufacturerPartNumber="USB-C-SMD-16P"
      pinLabels={{
        pin1: "VBUS",
        pin2: "DM",
        pin3: "DP",
        pin4: "GND",
        pin5: "CC1",
        pin6: "CC2",
        pin7: "SHLD1",
        pin8: "SHLD2",
      }}
      footprint={
        <footprint>
          <hole pcbX="-2.5mm" pcbY="-3mm" diameter="1.3mm" />
          <hole pcbX="2.5mm" pcbY="-3mm" diameter="1.3mm" />
          <smtpad portHints={["pin1"]} pcbX="-3.5mm" pcbY="1.575mm" width="1.1mm" height="3.8mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="-1mm" pcbY="1.575mm" width="1.1mm" height="3.8mm" shape="rect" />
          <smtpad portHints={["pin3"]} pcbX="1mm" pcbY="1.575mm" width="1.1mm" height="3.8mm" shape="rect" />
          <smtpad portHints={["pin4"]} pcbX="3.5mm" pcbY="1.575mm" width="1.1mm" height="3.8mm" shape="rect" />
          <smtpad portHints={["pin5"]} pcbX="-2.8mm" pcbY="-1.2mm" width="0.7mm" height="1.1mm" shape="rect" />
          <smtpad portHints={["pin6"]} pcbX="2.8mm" pcbY="-1.2mm" width="0.7mm" height="1.1mm" shape="rect" />
          <smtpad portHints={["pin7"]} pcbX="7.15mm" pcbY="-1.475mm" width="1.8mm" height="4mm" shape="rect" />
          <smtpad portHints={["pin8"]} pcbX="-7.15mm" pcbY="-1.475mm" width="1.8mm" height="4mm" shape="rect" />
        </footprint>
      }
      pcbX={5}
      pcbY={-21}
      pcbRotation={0}
      schX={-8}
      schY={4}
      schWidth={0.85}
    />

    <chip
      name="U2"
      manufacturerPartNumber="AP2112K-3.3"
      footprint="sot23_5"
      pinLabels={{
        pin1: "IN",
        pin2: "GND",
        pin3: "EN",
        pin4: "NC",
        pin5: "OUT",
      }}
      schPinArrangement={{
        leftSide: { pins: ["IN", "EN"], direction: "top-to-bottom" },
        rightSide: { pins: ["OUT"], direction: "top-to-bottom" },
        bottomSide: { pins: ["GND", "NC"], direction: "left-to-right" },
      }}
      pcbX={-12}
      pcbY={-14}
      schX={-4}
      schY={4}
      schWidth={0.6}
      schHeight={0.4}
    />

    <chip
      name="U3"
      manufacturerPartNumber="W25Q16JVUXIQ"
      footprint="soic8"
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
      schPinArrangement={{
        leftSide: { pins: ["CS", "DO", "WP", "GND"], direction: "top-to-bottom" },
        rightSide: { pins: ["VCC", "HOLD", "CLK", "DI"], direction: "top-to-bottom" },
      }}
      pcbX={5}
      pcbY={9}
      schX={4}
      schY={-4}
    />

    <crystal
      name="Y1"
      frequency="12MHz"
      loadCapacitance="12pF"
      footprint="hc49"
      manufacturerPartNumber="X322512MSB4SI"
      pcbX={-9}
      pcbY={7}
      schX={-5}
      schY={-3}
    />

    <pinheader
      name="J_LEFT"
      pinCount={leftHeaderPins.length}
      gender="female"
      pitch="2.54mm"
      footprint="pinrow8"
      pinLabels={[...leftHeaderPins]}
      showSilkscreenPinLabels
      pcbX={-18.5}
      pcbY={0}
      pcbRotation={90}
      schX={-10}
      schY={-3}
      schWidth={0.675}
    />

    <pinheader
      name="J_RIGHT"
      pinCount={rightHeaderPins.length}
      gender="female"
      pitch="2.54mm"
      footprint="pinrow8"
      pinLabels={[...rightHeaderPins]}
      showSilkscreenPinLabels
      pcbX={18.5}
      pcbY={0}
      pcbRotation={90}
      schX={10}
      schY={-3}
      schWidth={0.77}
    />

    <resistor
      name="R_DP"
      resistance="27ohm"
      footprint="0402"
      pcbX={4.4}
      pcbY={-15.5}
      schX={-4}
      schY={1.2}
    />
    <resistor
      name="R_DM"
      resistance="27ohm"
      footprint="0402"
      pcbX={2}
      pcbY={-15.5}
      schX={-4}
      schY={0}
    />
    <resistor
      name="R_CC1"
      resistance="5.1kohm"
      footprint="0402"
      pcbX={-5}
      pcbY={-16}
      schX={-9}
      schY={1}
    />
    <resistor
      name="R_CC2"
      resistance="5.1kohm"
      footprint="0402"
      pcbX={-7}
      pcbY={-16}
      schX={-9}
      schY={0}
    />
    <resistor
      name="R_LED"
      resistance="1kohm"
      footprint="0603"
      pcbX={8}
      pcbY={13}
      schX={6}
      schY={3}
    />

    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX={11}
      pcbY={13}
      schX={8}
      schY={3}
    />

    <capacitor
      name="C_IN"
      capacitance="10uF"
      footprint="0603"
      pcbX={-14.5}
      pcbY={-10.5}
      schX={-6}
      schY={6}
      schRotation={90}
    />
    <capacitor
      name="C_OUT"
      capacitance="10uF"
      footprint="0603"
      pcbX={-8}
      pcbY={-12}
      schX={-2}
      schY={6}
      schRotation={90}
    />
    <capacitor
      name="C_VREG"
      capacitance="1uF"
      footprint="0402"
      pcbX={6}
      pcbY={2.4}
      schX={1}
      schY={3.5}
      schRotation={90}
    />
    <capacitor
      name="C_USB"
      capacitance="1uF"
      footprint="0402"
      pcbX={6}
      pcbY={4.2}
      schX={2.5}
      schY={3.5}
      schRotation={90}
    />
    <capacitor
      name="C_DEC1"
      capacitance="100nF"
      footprint="0402"
      pcbX={-6}
      pcbY={-4.8}
      schX={0}
      schY={5}
      schRotation={90}
    />
    <capacitor
      name="C_DEC2"
      capacitance="100nF"
      footprint="0402"
      pcbX={6}
      pcbY={-4.8}
      schX={1.5}
      schY={5}
      schRotation={90}
    />
    <capacitor
      name="C_XIN"
      capacitance="18pF"
      footprint="0402"
      pcbX={-11}
      pcbY={3.5}
      schX={-6}
      schY={-5}
      schRotation={90}
    />
    <capacitor
      name="C_XOUT"
      capacitance="18pF"
      footprint="0402"
      pcbX={-11}
      pcbY={11}
      schX={-4}
      schY={-5}
      schRotation={90}
    />

    <pushbutton
      name="SW_BOOT"
      footprint="pushbutton"
      pcbX={3}
      pcbY={19}
      schX={8}
      schY={-2}
    />
    <pushbutton
      name="SW_RUN"
      footprint="pushbutton"
      pcbX={12}
      pcbY={19}
      schX={8}
      schY={-4}
    />

    <silkscreentext text="RP2040 BREAKOUT" pcbX={0} pcbY={23} fontSize="1.2mm" />
    <silkscreentext text="USB-C" pcbX={0} pcbY={-17.5} fontSize="0.8mm" />
    <silkscreentext text="LED GP25" pcbX={10} pcbY={11.4} fontSize="0.7mm" />

    <trace from=".J_USB > .VBUS" to="net.VBUS" />
    <trace from=".J_USB > .GND" to="net.GND" />
    <trace from=".J_USB > .SHLD1" to="net.GND" />
    <trace from=".J_USB > .SHLD2" to="net.GND" />
    <trace from=".J_USB > .CC1" to=".R_CC1 > .pin1" />
    <trace from=".R_CC1 > .pin2" to="net.GND" />
    <trace from=".J_USB > .CC2" to=".R_CC2 > .pin1" />
    <trace from=".R_CC2 > .pin2" to="net.GND" />
    <trace from=".J_USB > .DP" to=".R_DP > .pin1" width="0.18mm" />
    <trace from=".R_DP > .pin2" to=".U1 > .USB_DP" width="0.18mm" />
    <trace from=".J_USB > .DM" to=".R_DM > .pin1" width="0.18mm" />
    <trace from=".R_DM > .pin2" to=".U1 > .USB_DM" width="0.18mm" />

    <trace from=".U2 > .IN" to="net.VBUS" width="0.45mm" />
    <trace from=".U2 > .EN" to="net.VBUS" />
    <trace from=".U2 > .GND" to="net.GND" />
    <trace from=".U2 > .OUT" to="net.V3_3" width="0.35mm" />
    <trace from=".C_IN > .pin1" to="net.VBUS" />
    <trace from=".C_IN > .pin2" to="net.GND" />
    <trace from=".C_OUT > .pin1" to="net.V3_3" />
    <trace from=".C_OUT > .pin2" to="net.GND" />

    {powerPins.map((pin) => (
      <trace key={`pwr-${pin}`} from={`.U1 > .${pin}`} to="net.V3_3" />
    ))}
    <trace from=".U1 > .VREG_IN" to="net.V3_3" />
    <trace from=".U1 > .VREG_VOUT" to="net.VREG_OUT" />
    <trace from=".U1 > .DVDD1" to="net.VREG_OUT" />
    <trace from=".U1 > .DVDD2" to="net.VREG_OUT" />
    <trace from=".C_VREG > .pin1" to="net.VREG_OUT" />
    <trace from=".C_VREG > .pin2" to="net.GND" />
    <trace from=".C_USB > .pin1" to="net.V3_3" />
    <trace from=".C_USB > .pin2" to="net.GND" />
    <trace from=".C_DEC1 > .pin1" to="net.V3_3" />
    <trace from=".C_DEC1 > .pin2" to="net.GND" />
    <trace from=".C_DEC2 > .pin1" to="net.V3_3" />
    <trace from=".C_DEC2 > .pin2" to="net.GND" />
    <trace from=".U1 > .GND" to="net.GND" />
    <trace from=".U1 > .TESTEN" to="net.GND" />

    <trace from=".U3 > .VCC" to="net.V3_3" />
    <trace from=".U3 > .GND" to="net.GND" />
    <trace from=".U3 > .CS" to=".U1 > .QSPI_SS" />
    <trace from=".U3 > .DO" to=".U1 > .QSPI_SD1" />
    <trace from=".U3 > .DI" to=".U1 > .QSPI_SD0" />
    <trace from=".U3 > .CLK" to=".U1 > .QSPI_SCLK" />
    <trace from=".U3 > .WP" to=".U1 > .QSPI_SD2" />
    <trace from=".U3 > .HOLD" to=".U1 > .QSPI_SD3" />

    <trace from=".Y1 > .left" to=".U1 > .XIN" />
    <trace from=".Y1 > .right" to=".U1 > .XOUT" />
    <trace from=".C_XIN > .pin1" to=".U1 > .XIN" />
    <trace from=".C_XIN > .pin2" to="net.GND" />
    <trace from=".C_XOUT > .pin1" to=".U1 > .XOUT" />
    <trace from=".C_XOUT > .pin2" to="net.GND" />

    <trace from=".U1 > .GPIO25" to=".R_LED > .pin1" />
    <trace from=".R_LED > .pin2" to=".D1 > .anode" />
    <trace from=".D1 > .cathode" to="net.GND" />
    <trace from=".SW_BOOT > .pin1" to=".U1 > .QSPI_SS" />
    <trace from=".SW_BOOT > .pin2" to="net.GND" />
    <trace from=".SW_RUN > .pin1" to=".U1 > .RUN" />
    <trace from=".SW_RUN > .pin2" to="net.GND" />

    {leftHeaderPins.map((pin) => (
      <trace
        key={`left-${pin}`}
        from={`.J_LEFT > .${pin}`}
        to={pin === "GND" ? "net.GND" : pin === "V3_3" ? "net.V3_3" : `.U1 > .${pin}`}
      />
    ))}
    {rightHeaderPins.map((pin) => (
      <trace
        key={`right-${pin}`}
        from={`.J_RIGHT > .${pin}`}
        to={pin === "GND" ? "net.GND" : pin === "VBUS" ? "net.VBUS" : `.U1 > .${pin}`}
      />
    ))}

    <copperpour name="GND_TOP" connectsTo="net.GND" layer="top" clearance="0.2mm" />
    <copperpour name="GND_BOTTOM" connectsTo="net.GND" layer="bottom" clearance="0.2mm" />
  </board>
)
