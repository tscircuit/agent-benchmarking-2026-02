import { RP2040 } from "./imports/RP2040"

export default () => (
  <board width="45mm" height="50mm" layers={2} autorouterEffortLevel="1x" autorouterVersion="v4">
    <RP2040 name="U1" pcbX={0} pcbY={0} schX={0} schY={0} />

    <connector
      name="J1"
      standard="usb_c"
      pcbX={0}
      pcbY={21}
      pcbRotation={180}
      schX={-8}
      schY={4}
    />

    <chip
      name="U2"
      manufacturerPartNumber="W25Q16JVSSIQ"
      footprint="soic8"
      supplierPartNumbers={{ jlcpcb: ["C82317"] }}
      pcbX={-11}
      pcbY={0}
      schX={-6}
      schY={-5}
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
    />

    <chip
      name="U3"
      manufacturerPartNumber="XC6206P332MR"
      footprint="sot23_5"
      supplierPartNumbers={{ jlcpcb: ["C5446"] }}
      pcbX={12}
      pcbY={9}
      schX={5}
      schY={4}
      pinLabels={{
        pin1: "VIN",
        pin2: "GND",
        pin3: "EN",
        pin4: "NC",
        pin5: "VOUT",
      }}
      schPinArrangement={{
        leftSide: { pins: ["VIN", "EN"], direction: "top-to-bottom" },
        rightSide: { pins: ["VOUT", "NC"], direction: "top-to-bottom" },
        bottomSide: { pins: ["GND"], direction: "left-to-right" },
      }}
    />

    <crystal name="Y1" footprint="hc49" frequency="12MHz" loadCapacitance="18pF" pcbX={0} pcbY={-12} schX={-6} schY={0} />

    <led name="D1" color="green" footprint="0603" pcbX={12} pcbY={-10} schX={7} schY={-3} />
    <resistor name="R1" resistance="1k" footprint="0603" pcbX={8.5} pcbY={-10} schX={5} schY={-3} />
    <resistor name="R2" resistance="5.1k" footprint="0603" pcbX={-8} pcbY={16} schX={-10} schY={1} />
    <resistor name="R3" resistance="5.1k" footprint="0603" pcbX={8} pcbY={16} schX={-10} schY={0} />
    <resistor name="R4" resistance="27" footprint="0603" pcbX={-3} pcbY={12} schX={-4} schY={3} />
    <resistor name="R5" resistance="27" footprint="0603" pcbX={3} pcbY={12} schX={-4} schY={2} />
    <resistor name="R6" resistance="10k" footprint="0603" pcbX={-15} pcbY={-7} schX={-9} schY={-2} />

    <capacitor name="C1" capacitance="10uF" footprint="0603" pcbX={15} pcbY={13} schX={7} schY={4} />
    <capacitor name="C2" capacitance="10uF" footprint="0603" pcbX={15} pcbY={6} schX={7} schY={2} />
    <capacitor name="C3" capacitance="1uF" footprint="0603" pcbX={6.5} pcbY={-5.5} schX={3.2} schY={-5.8} />
    <capacitor name="C4" capacitance="100nF" footprint="0603" pcbX={-6.5} pcbY={-5.5} schX={1.8} schY={-5} />
    <capacitor name="C5" capacitance="100nF" footprint="0603" pcbX={-10} pcbY={4.5} schX={-3} schY={-7} />
    <capacitor name="C6" capacitance="27pF" footprint="0603" pcbX={-4.5} pcbY={-17} schX={-8} schY={-1} />
    <capacitor name="C7" capacitance="27pF" footprint="0603" pcbX={4.5} pcbY={-17} schX={-8} schY={1} />

    <pinheader
      name="J2"
      pinCount={8}
      gender="female"
      pitch="2.54mm"
      footprint="pinrow8"
      pcbX={-19}
      pcbY={0}
      pcbRotation={90}
      schX={-12}
      schY={-6}
      showSilkscreenPinLabels
      pinLabels={[
        "VBUS",
        "GND",
        "3V3",
        "RUN",
        "GP0",
        "GP1",
        "GP2",
        "GP3",
      ]}
    />

    <pinheader
      name="J3"
      pinCount={4}
      gender="female"
      pitch="2.54mm"
      footprint="pinrow4"
      pcbX={19}
      pcbY={0}
      pcbRotation={90}
      schX={12}
      schY={-6}
      showSilkscreenPinLabels
      pinLabels={[
        "SWD",
        "SWCLK",
        "GND",
        "GP4",
      ]}
    />

    <trace from="J1.VBUS1" to="net.VBUS" />
    <trace from="J1.VBUS2" to="net.VBUS" />
    <trace from="J1.GND1" to="net.GND" />
    <trace from="J1.GND2" to="net.GND" />
    <trace from="J1.CC1" to="R2.pin1" />
    <trace from="J1.CC2" to="R3.pin1" />
    <trace from="R2.pin2" to="net.GND" />
    <trace from="R3.pin2" to="net.GND" />
    <trace from="J1.DM1" to="R4.pin1" />
    <trace from="J1.DM2" to="R4.pin1" />
    <trace from="R4.pin2" to="U1.USB_DM" />
    <trace from="J1.DP1" to="R5.pin1" />
    <trace from="J1.DP2" to="R5.pin1" />
    <trace from="R5.pin2" to="U1.USB_DP" />

    <trace from="U3.VIN" to="net.VBUS" />
    <trace from="U3.EN" to="net.VBUS" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U3.VOUT" to="net.V3_3" />
    <trace from="C1.pin1" to="net.VBUS" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin1" to="net.V3_3" />
    <trace from="C2.pin2" to="net.GND" />

    <trace from="U1.VREG_IN" to="net.V3_3" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.VREG_VOUT" to="net.VREG_OUT" />
    <trace from="C3.pin1" to="net.VREG_OUT" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="C4.pin1" to="net.V3_3" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="C5.pin1" to="net.V3_3" />
    <trace from="C5.pin2" to="net.GND" />

    <trace from="U1.IOVDD1" to="net.V3_3" />
    <trace from="U1.IOVDD2" to="net.V3_3" />
    <trace from="U1.IOVDD3" to="net.V3_3" />
    <trace from="U1.IOVDD4" to="net.V3_3" />
    <trace from="U1.IOVDD5" to="net.V3_3" />
    <trace from="U1.IOVDD6" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.DVDD1" to="net.VREG_OUT" />
    <trace from="U1.DVDD2" to="net.VREG_OUT" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.TESTEN" to="net.GND" />

    <trace from="U1.XIN" to="Y1.left" />
    <trace from="U1.XOUT" to="Y1.right" />
    <trace from="Y1.left" to="C6.pin1" />
    <trace from="Y1.right" to="C7.pin1" />
    <trace from="C6.pin2" to="net.GND" />
    <trace from="C7.pin2" to="net.GND" />

    <trace from="U1.QSPI_SS" to="U2.CS" />
    <trace from="U1.QSPI_SD0" to="U2.DI" />
    <trace from="U1.QSPI_SD1" to="U2.DO" />
    <trace from="U1.QSPI_SD2" to="U2.WP" />
    <trace from="U1.QSPI_SD3" to="U2.HOLD" />
    <trace from="U1.QSPI_SCLK" to="U2.CLK" />
    <trace from="U2.VCC" to="net.V3_3" />
    <trace from="U2.GND" to="net.GND" />

    <trace from="U1.GPIO25" to="R1.pin1" />
    <trace from="R1.pin2" to="D1.anode" />
    <trace from="D1.cathode" to="net.GND" />
    <trace from="U1.RUN" to="R6.pin1" />
    <trace from="R6.pin2" to="net.V3_3" />

    <trace from="J2.VBUS" to="net.VBUS" />
    <trace from="J2.GND" to="net.GND" />
    <trace from="J2.3V3" to="net.V3_3" />
    <trace from="J2.RUN" to="U1.RUN" />
    <trace from="J2.GP0" to="U1.GPIO0" />
    <trace from="J2.GP1" to="U1.GPIO1" />
    <trace from="J2.GP2" to="U1.GPIO2" />
    <trace from="J2.GP3" to="U1.GPIO3" />

    <trace from="J3.SWD" to="U1.SWD" />
    <trace from="J3.SWCLK" to="U1.SWCLK" />
    <trace from="J3.GND" to="net.GND" />
    <trace from="J3.GP4" to="U1.GPIO4" />

    <copperpour name="GND_TOP" connectsTo="net.GND" layer="top" />
    <copperpour name="GND_BOTTOM" connectsTo="net.GND" layer="bottom" />
  </board>
)
