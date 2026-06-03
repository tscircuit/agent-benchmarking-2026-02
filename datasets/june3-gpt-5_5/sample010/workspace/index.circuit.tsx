import { RP2040 } from "./imports/RP2040"
import { XC6220B331MR_G } from "./imports/XC6220B331MR_G"

const gpioLeft = [
  "GPIO0",
  "GPIO1",
  "GPIO2",
  "GPIO3",
  "GPIO4",
  "GPIO5",
] as const

const gpioRight = [
  "GPIO16",
  "GPIO17",
  "GPIO18",
  "GPIO19",
] as const

export default () => (
  <board title="Minimal RP2040 USB Breakout" width="56mm" height="44mm" layers={2}>
    <connector
      name="USBC"
      standard="usb_c"
      pcbX={-24.5}
      pcbY={0}
      pcbRotation={-90}
      schX={-7}
      schY={3}
    />

    <XC6220B331MR_G
      name="U2"
      pcbX={-12.5}
      pcbY={5.5}
      pcbRotation={180}
      schX={-3}
      schY={3}
    />

    <RP2040 name="U1" pcbX={0} pcbY={0} schX={1.5} schY={0} />

    <chip
      name="U3"
      manufacturerPartNumber="W25Q16JVSSIQ"
      footprint="soic8"
      pinLabels={{
        pin1: ["CS"],
        pin2: ["IO1"],
        pin3: ["IO2"],
        pin4: ["GND"],
        pin5: ["IO0"],
        pin6: ["CLK"],
        pin7: ["IO3"],
        pin8: ["VCC"],
      }}
      pcbX={0}
      pcbY={9}
      pcbRotation={90}
      schX={4.5}
      schY={3}
    />

    <crystal
      name="Y1"
      frequency="12MHz"
      loadCapacitance="12pF"
      footprint="hc49"
      pcbX={0}
      pcbY={-9}
      schX={4.5}
      schY={-2.5}
    />

    <pinheader
      name="J1"
      pinCount={8}
      pitch="2.54mm"
      gender="female"
      footprint="pinrow8"
      showSilkscreenPinLabels
      pinLabels={[...gpioLeft, "3V3", "GND"]}
      pcbX={-5.5}
      pcbY={18.5}
      schX={-4.5}
      schY={-2.5}
    />

    <pinheader
      name="J2"
      pinCount={8}
      pitch="2.54mm"
      gender="female"
      footprint="pinrow8"
      showSilkscreenPinLabels
      pinLabels={[...gpioRight, "SWD", "SWCLK", "RUN", "GND"]}
      pcbX={5.5}
      pcbY={-18.5}
      schX={7.5}
      schY={-2.5}
    />

    <resistor name="R1" resistance="330ohm" footprint="0603" pcbX={9} pcbY={10.5} schX={7.5} schY={3} />
    <led name="D1" color="green" footprint="0603" pcbX={12} pcbY={10.5} schX={9.5} schY={3} />

    <resistor name="R2" resistance="5.1kohm" footprint="0603" pcbX={-17} pcbY={6.5} schX={-7} schY={1} />
    <resistor name="R3" resistance="5.1kohm" footprint="0603" pcbX={-17} pcbY={-6.5} schX={-7} schY={-1} />

    <capacitor name="C1" capacitance="10uF" footprint="0603" pcbX={-10} pcbY={8.5} schX={-4.5} schY={4.5} />
    <capacitor name="C2" capacitance="10uF" footprint="0603" pcbX={-9} pcbY={3} schX={-2} schY={4.5} />
    <capacitor name="C3" capacitance="100nF" footprint="0402" pcbX={-4.5} pcbY={5.4} schX={0.5} schY={4.2} />
    <capacitor name="C4" capacitance="100nF" footprint="0402" pcbX={4.5} pcbY={5.4} schX={1.8} schY={4.2} />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX={6.3} pcbY={0} schX={3.1} schY={4.2} />
    <capacitor name="C6" capacitance="1uF" footprint="0402" pcbX={-4.5} pcbY={-5.4} schX={4.4} schY={4.2} />
    <capacitor name="C7" capacitance="12pF" footprint="0402" pcbX={-4.2} pcbY={-12.5} schX={5.2} schY={-4.4} />
    <capacitor name="C8" capacitance="12pF" footprint="0402" pcbX={4.2} pcbY={-12.5} schX={6.5} schY={-4.4} />

    <testpoint
      name="BOOT"
      footprintVariant="pad"
      padShape="circle"
      padDiameter="1.2mm"
      pcbX={-7.5}
      pcbY={-10.5}
      schX={8}
      schY={-4}
    />
    <testpoint
      name="RUN"
      footprintVariant="pad"
      padShape="circle"
      padDiameter="1.2mm"
      pcbX={15}
      pcbY={-10.5}
      schX={9}
      schY={-4}
    />

    <silkscreentext text="RP2040 USB BREAKOUT" pcbX={0} pcbY={15} fontSize={1} />
    <silkscreentext text="BOOT" pcbX={-7.5} pcbY={-12} fontSize={0.8} />

    <trace from="USBC.VBUS1" to="net.VBUS" />
    <trace from="USBC.VBUS2" to="net.VBUS" />
    <trace from="USBC.GND1" to="net.GND" />
    <trace from="USBC.GND2" to="net.GND" />
    <trace from="USBC.DP1" to="net.USB_DP" />
    <trace from="USBC.DP2" to="net.USB_DP" />
    <trace from="USBC.DM1" to="net.USB_DM" />
    <trace from="USBC.DM2" to="net.USB_DM" />
    <trace from="USBC.CC1" to="R2.pin1" />
    <trace from="USBC.CC2" to="R3.pin1" />
    <trace from="R2.pin2" to="net.GND" />
    <trace from="R3.pin2" to="net.GND" />

    <trace from="U2.VIN" to="net.VBUS" />
    <trace from="U2.CE" to="net.VBUS" />
    <trace from="U2.VSS" to="net.GND" />
    <trace from="U2.VOUT" to="net.V3_3" />
    <trace from="C1.pin1" to="net.VBUS" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin1" to="net.V3_3" />
    <trace from="C2.pin2" to="net.GND" />

    <trace from="U1.VREG_IN" to="net.V3_3" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.IOVDD1" to="net.V3_3" />
    <trace from="U1.IOVDD2" to="net.V3_3" />
    <trace from="U1.IOVDD3" to="net.V3_3" />
    <trace from="U1.IOVDD4" to="net.V3_3" />
    <trace from="U1.IOVDD5" to="net.V3_3" />
    <trace from="U1.IOVDD6" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.VREG_VOUT" to="net.DVDD" />
    <trace from="U1.DVDD1" to="net.DVDD" />
    <trace from="U1.DVDD2" to="net.DVDD" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="C3.pin1" to="net.V3_3" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="C4.pin1" to="net.V3_3" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="C5.pin1" to="net.V3_3" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="C6.pin1" to="net.DVDD" />
    <trace from="C6.pin2" to="net.GND" />

    <trace from="U1.USB_DP" to="net.USB_DP" width="0.18mm" />
    <trace from="U1.USB_DM" to="net.USB_DM" width="0.18mm" />
    <trace from="U1.XIN" to="Y1.pin1" />
    <trace from="U1.XOUT" to="Y1.pin2" />
    <trace from="Y1.pin1" to="C7.pin1" />
    <trace from="Y1.pin2" to="C8.pin1" />
    <trace from="C7.pin2" to="net.GND" />
    <trace from="C8.pin2" to="net.GND" />

    <trace from="U3.VCC" to="net.V3_3" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U3.CS" to="U1.QSPI_SS" />
    <trace from="U3.IO1" to="U1.QSPI_SD1" />
    <trace from="U3.IO2" to="U1.QSPI_SD2" />
    <trace from="U3.IO0" to="U1.QSPI_SD0" />
    <trace from="U3.CLK" to="U1.QSPI_SCLK" />
    <trace from="U3.IO3" to="U1.QSPI_SD3" />

    <trace from="U1.GPIO25" to="R1.pin1" />
    <trace from="R1.pin2" to="D1.pos" />
    <trace from="D1.neg" to="net.GND" />
    <trace from="U1.QSPI_SS" to="BOOT.pin1" />
    <trace from="U1.RUN" to="RUN.pin1" />

    <trace from="J1.pin7" to="net.V3_3" />
    <trace from="J1.pin8" to="net.GND" />
    <trace from="J2.pin5" to="U1.SWD" />
    <trace from="J2.pin6" to="U1.SWCLK" />
    <trace from="J2.pin7" to="U1.RUN" />
    <trace from="J2.pin8" to="net.GND" />

    <trace from="U1.GPIO0" to="J1.pin1" />
    <trace from="U1.GPIO1" to="J1.pin2" />
    <trace from="U1.GPIO2" to="J1.pin3" />
    <trace from="U1.GPIO3" to="J1.pin4" />
    <trace from="U1.GPIO4" to="J1.pin5" />
    <trace from="U1.GPIO5" to="J1.pin6" />
    <trace from="U1.GPIO16" to="J2.pin1" />
    <trace from="U1.GPIO17" to="J2.pin2" />
    <trace from="U1.GPIO18" to="J2.pin3" />
    <trace from="U1.GPIO19" to="J2.pin4" />
  </board>
)
