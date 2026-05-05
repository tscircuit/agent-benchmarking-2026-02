import { AP2112K_3_3TRG1 } from "./imports/AP2112K_3_3TRG1"
import { RP2040 } from "./imports/RP2040"
import { W25Q16JVSNIQ } from "./imports/W25Q16JVSNIQ"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"

export default () => (
  <board width="42mm" height="56mm" layers={2}>
    <connector
      name="USBC"
      standard="usb_c"
      pcbX={0}
      pcbY={24.4}
      pcbRotation={180}
      schX={-8}
      schY={7}
    />

    <AP2112K_3_3TRG1 name="U2" pcbX={-10.5} pcbY={7.5} pcbRotation={180} schX={-3} schY={7} />
    <capacitor name="C1" capacitance="10uF" footprint="0603" pcbX={-14.7} pcbY={7.5} schX={-5} schY={5.5} />
    <capacitor name="C2" capacitance="10uF" footprint="0603" pcbX={-6.8} pcbY={7.5} schX={0} schY={5.5} />

    <RP2040 name="U1" pcbX={0} pcbY={0} schX={0} schY={0} />
    <W25Q16JVSNIQ name="U3" pcbX={-9.5} pcbY={0} pcbRotation={90} schX={6} schY={0} />
    <X322512MSB4SI name="X1" pcbX={7.3} pcbY={-4.4} pcbRotation={90} schX={-5} schY={-4} />

    <resistor name="R1" resistance="27" footprint="0402" pcbX={-2.3} pcbY={7.2} schX={-4} schY={3} />
    <resistor name="R2" resistance="27" footprint="0402" pcbX={2.3} pcbY={7.2} schX={-4} schY={2} />
    <resistor name="R3" resistance="5.1k" footprint="0402" pcbX={6.7} pcbY={9.7} schX={-9} schY={4} />
    <resistor name="R4" resistance="5.1k" footprint="0402" pcbX={8.7} pcbY={9.7} schX={-9} schY={3} />

    <capacitor name="C3" capacitance="1uF" footprint="0402" pcbX={3.9} pcbY={5.2} schX={1.5} schY={4} />
    <capacitor name="C4" capacitance="100nF" footprint="0402" pcbX={-6.1} pcbY={3.8} schX={2.9} schY={4} />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX={-9.6} pcbY={4.6} schX={4.3} schY={4} />
    <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX={6.9} pcbY={1.6} schX={5.7} schY={4} />
    <capacitor name="C7" capacitance="100nF" footprint="0402" pcbX={6.9} pcbY={3} schX={7.1} schY={4} />
    <capacitor name="C8" capacitance="15pF" footprint="0402" pcbX={11.1} pcbY={-2.7} schX={-6} schY={-5} />
    <capacitor name="C9" capacitance="15pF" footprint="0402" pcbX={11.1} pcbY={-6} schX={-4} schY={-5} />

    <led name="D1" color="green" footprint="0603" pcbX={12.6} pcbY={6.3} schX={7} schY={7} />
    <resistor name="R5" resistance="1k" footprint="0603" pcbX={9.1} pcbY={6.3} schX={5.5} schY={7} />

    <pinheader
      name="J1"
      pinCount={18}
      pitch="2.54mm"
      footprint="pinrow18"
      gender="female"
      pinLabels={["VBUS", "3V3", "GND", "GPIO0", "GPIO1", "GPIO2", "GPIO3", "GPIO4", "GPIO5", "GPIO6", "GPIO7", "GPIO8", "GPIO9", "GPIO10", "GPIO11", "GPIO12", "GPIO13", "GPIO14"]}
      showSilkscreenPinLabels
      pcbX={-18.5}
      pcbY={0}
      pcbRotation={90}
      schX={-10}
      schY={0}
    />
    <pinheader
      name="J2"
      pinCount={18}
      pitch="2.54mm"
      footprint="pinrow18"
      gender="female"
      pinLabels={["GND", "3V3", "RUN", "SWCLK", "SWD", "GPIO15", "GPIO16", "GPIO17", "GPIO18", "GPIO19", "GPIO20", "GPIO21", "GPIO22", "GPIO23", "GPIO24", "GPIO25", "GPIO26_ADC0", "GPIO27_ADC1"]}
      showSilkscreenPinLabels
      pcbX={18.5}
      pcbY={0}
      pcbRotation={90}
      schX={10}
      schY={0}
    />

    <hole name="H1" diameter="2.2mm" pcbX={-12} pcbY={24.5} />
    <hole name="H2" diameter="2.2mm" pcbX={12} pcbY={24.5} />
    <hole name="H3" diameter="2.2mm" pcbX={-12} pcbY={-24.5} />
    <hole name="H4" diameter="2.2mm" pcbX={12} pcbY={-24.5} />

    <trace from="USBC.VBUS1" to="net.VBUS" />
    <trace from="USBC.VBUS2" to="net.VBUS" />
    <trace from="USBC.GND1" to="net.GND" />
    <trace from="USBC.GND2" to="net.GND" />
    <trace from="USBC.SHELL1" to="net.GND" />
    <trace from="USBC.SHELL2" to="net.GND" />
    <trace from="USBC.SHELL3" to="net.GND" />
    <trace from="USBC.SHELL4" to="net.GND" />
    <trace from="USBC.CC1" to="R3.pin1" />
    <trace from="USBC.CC2" to="R4.pin1" />
    <trace from="R3.pin2" to="net.GND" />
    <trace from="R4.pin2" to="net.GND" />

    <trace from="U2.VIN" to="net.VBUS" />
    <trace from="U2.EN" to="net.VBUS" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="U2.VOUT" to="net.V3_3" />
    <trace from="C1.pin1" to="net.VBUS" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin1" to="net.V3_3" />
    <trace from="C2.pin2" to="net.GND" />

    <trace from="U1.VREG_IN" to="net.V3_3" />
    <trace from="U1.VREG_VOUT" to="net.VREG_VOUT" />
    <trace from="U1.DVDD1" to="net.VREG_VOUT" />
    <trace from="U1.DVDD2" to="net.VREG_VOUT" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.TESTEN" to="net.GND" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.IOVDD1" to="net.V3_3" />
    <trace from="U1.IOVDD2" to="net.V3_3" />
    <trace from="U1.IOVDD3" to="net.V3_3" />
    <trace from="U1.IOVDD4" to="net.V3_3" />
    <trace from="U1.IOVDD5" to="net.V3_3" />
    <trace from="U1.IOVDD6" to="net.V3_3" />
    <trace from="C3.pin1" to="net.VREG_VOUT" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="C4.pin1" to="net.V3_3" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="C5.pin1" to="net.V3_3" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="C6.pin1" to="net.V3_3" />
    <trace from="C6.pin2" to="net.GND" />
    <trace from="C7.pin1" to="net.V3_3" />
    <trace from="C7.pin2" to="net.GND" />

    <trace from="USBC.DP1" to="R1.pin1" />
    <trace from="USBC.DP2" to="R1.pin1" />
    <trace from="R1.pin2" to="U1.USB_DP" />
    <trace from="USBC.DM1" to="R2.pin1" />
    <trace from="USBC.DM2" to="R2.pin1" />
    <trace from="R2.pin2" to="U1.USB_DM" />

    <trace from="X1.OSC1" to="U1.XIN" />
    <trace from="X1.OSC2" to="U1.XOUT" />
    <trace from="X1.GND1" to="net.GND" />
    <trace from="X1.GND2" to="net.GND" />
    <trace from="C8.pin1" to="U1.XIN" />
    <trace from="C8.pin2" to="net.GND" />
    <trace from="C9.pin1" to="U1.XOUT" />
    <trace from="C9.pin2" to="net.GND" />

    <trace from="U3.VCC" to="net.V3_3" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U3.CS" to="U1.QSPI_SS" />
    <trace from="U3.CLK" to="U1.QSPI_SCLK" />
    <trace from="U3.pin5" to="U1.QSPI_SD0" />
    <trace from="U3.pin2" to="U1.QSPI_SD1" />
    <trace from="U3.pin3" to="U1.QSPI_SD2" />
    <trace from="U3.pin7" to="U1.QSPI_SD3" />

    <trace from="U1.GPIO25" to="R5.pin1" />
    <trace from="R5.pin2" to="D1.anode" />
    <trace from="D1.cathode" to="net.GND" />

    <trace from="J1.VBUS" to="net.VBUS" />
    <trace from="J1.3V3" to="net.V3_3" />
    <trace from="J1.GND" to="net.GND" />
    <trace from="J2.GND" to="net.GND" />
    <trace from="J2.3V3" to="net.V3_3" />
    <trace from="J2.RUN" to="U1.RUN" />
    <trace from="J2.SWCLK" to="U1.SWCLK" />
    <trace from="J2.SWD" to="U1.SWD" />
    <trace from="J1.GPIO0" to="U1.GPIO0" />
    <trace from="J1.GPIO1" to="U1.GPIO1" />
    <trace from="J1.GPIO2" to="U1.GPIO2" />
    <trace from="J1.GPIO3" to="U1.GPIO3" />
    <trace from="J1.GPIO4" to="U1.GPIO4" />
    <trace from="J1.GPIO5" to="U1.GPIO5" />
    <trace from="J1.GPIO6" to="U1.GPIO6" />
    <trace from="J1.GPIO7" to="U1.GPIO7" />
    <trace from="J1.GPIO8" to="U1.GPIO8" />
    <trace from="J1.GPIO9" to="U1.GPIO9" />
    <trace from="J1.GPIO10" to="U1.GPIO10" />
    <trace from="J1.GPIO11" to="U1.GPIO11" />
    <trace from="J1.GPIO12" to="U1.GPIO12" />
    <trace from="J1.GPIO13" to="U1.GPIO13" />
    <trace from="J1.GPIO14" to="U1.GPIO14" />
    <trace from="J2.GPIO15" to="U1.GPIO15" />
    <trace from="J2.GPIO16" to="U1.GPIO16" />
    <trace from="J2.GPIO17" to="U1.GPIO17" />
    <trace from="J2.GPIO18" to="U1.GPIO18" />
    <trace from="J2.GPIO19" to="U1.GPIO19" />
    <trace from="J2.GPIO20" to="U1.GPIO20" />
    <trace from="J2.GPIO21" to="U1.GPIO21" />
    <trace from="J2.GPIO22" to="U1.GPIO22" />
    <trace from="J2.GPIO23" to="U1.GPIO23" />
    <trace from="J2.GPIO24" to="U1.GPIO24" />
    <trace from="J2.GPIO25" to="U1.GPIO25" />
    <trace from="J2.GPIO26_ADC0" to="U1.GPIO26_ADC0" />
    <trace from="J2.GPIO27_ADC1" to="U1.GPIO27_ADC1" />

    <copperpour name="GND_TOP" connectsTo="net.GND" layer="top" clearance="0.2mm" />
    <copperpour name="GND_BOTTOM" connectsTo="net.GND" layer="bottom" clearance="0.2mm" />
  </board>
)
