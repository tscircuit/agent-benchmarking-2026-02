import { ME6211C33M5G_N } from "./imports/ME6211C33M5G_N"
import { RP2040 } from "./imports/RP2040"
import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12"
import { W25Q16JVSSIQ } from "./imports/W25Q16JVSSIQ"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"
import { YLED0603R } from "./imports/YLED0603R"

const leftHeaderPins = [
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
  "RUN",
  "3V3",
  "GND",
  "VBUS",
]

const rightHeaderPins = [
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
  "SWD",
  "SWCLK",
  "BOOT_QSPI_SS",
  "3V3",
  "GND",
  "VBUS",
]

export default () => (
  <board width="22mm" height="58mm" layers={4}>
    <TYPE_C_31_M_12
      name="USB1"
      pcbX="0mm"
      pcbY="-24mm"
      schX="-20mm"
      schY="-30mm"
    />

    <ME6211C33M5G_N
      name="U2"
      pcbX="-4.2mm"
      pcbY="-16.5mm"
      pcbRotation="90deg"
      schX="-35mm"
      schY="-10mm"
    />

    <RP2040 name="U1" pcbX="0mm" pcbY="-2mm" schX="0mm" schY="0mm" />

    <W25Q16JVSSIQ
      name="U3"
      pcbX="-3.8mm"
      pcbY="-10mm"
      pcbRotation="90deg"
      schX="-35mm"
      schY="16mm"
    />

    <X322512MSB4SI
      name="Y1"
      pcbX="0mm"
      pcbY="9.2mm"
      schX="22mm"
      schY="-18mm"
    />

    <YLED0603R
      name="D1"
      pcbX="4.8mm"
      pcbY="11.8mm"
      schX="26mm"
      schY="18mm"
    />

    <pinheader
      name="J1"
      pinCount={20}
      pcbX="-8.89mm"
      pcbY="0mm"
      pcbOrientation="vertical"
      schX="-60mm"
      schY="0mm"
      schFacingDirection="right"
      pinLabels={leftHeaderPins}
      showSilkscreenPinLabels
    />

    <pinheader
      name="J2"
      pinCount={20}
      pcbX="8.89mm"
      pcbY="0mm"
      pcbOrientation="vertical"
      schX="60mm"
      schY="0mm"
      schFacingDirection="left"
      pinLabels={rightHeaderPins}
      showSilkscreenPinLabels
    />

    <resistor name="R1" resistance="5.1k" footprint="0402" pcbX="-2mm" pcbY="-20mm" schX="-10mm" schY="-26mm" />
    <resistor name="R2" resistance="5.1k" footprint="0402" pcbX="2mm" pcbY="-20mm" schX="-4mm" schY="-26mm" />
    <resistor name="R3" resistance="27" footprint="0402" pcbX="-1.1mm" pcbY="-16.9mm" pcbRotation="90deg" schX="4mm" schY="-24mm" />
    <resistor name="R4" resistance="27" footprint="0402" pcbX="1.1mm" pcbY="-16.9mm" pcbRotation="90deg" schX="10mm" schY="-24mm" />
    <resistor name="R5" resistance="10k" footprint="0402" pcbX="-6.9mm" pcbY="-10mm" pcbRotation="90deg" schX="-46mm" schY="18mm" />
    <resistor name="R6" resistance="10k" footprint="0402" pcbX="4.2mm" pcbY="8.2mm" schX="16mm" schY="-10mm" />
    <resistor name="R7" resistance="1k" footprint="0402" pcbX="-4.2mm" pcbY="8.2mm" schX="-16mm" schY="-10mm" />
    <resistor name="R8" resistance="330" footprint="0402" pcbX="2.1mm" pcbY="11.8mm" schX="18mm" schY="18mm" />

    <capacitor name="C1" capacitance="1uF" footprint="0603" pcbX="-6.7mm" pcbY="-16.5mm" schX="-45mm" schY="-10mm" />
    <capacitor name="C2" capacitance="1uF" footprint="0603" pcbX="-1.8mm" pcbY="-16.5mm" schX="-25mm" schY="-10mm" />
    <capacitor name="C3" capacitance="1uF" footprint="0402" pcbX="2.8mm" pcbY="2.8mm" schX="10mm" schY="8mm" />
    <capacitor name="C4" capacitance="100nF" footprint="0402" pcbX="-5.3mm" pcbY="-3.6mm" schX="-10mm" schY="10mm" />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX="-5.3mm" pcbY="-0.3mm" schX="-10mm" schY="14mm" />
    <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX="5.3mm" pcbY="-3.6mm" schX="10mm" schY="10mm" />
    <capacitor name="C7" capacitance="100nF" footprint="0402" pcbX="5.3mm" pcbY="-0.3mm" schX="10mm" schY="14mm" />
    <capacitor name="C8" capacitance="100nF" footprint="0402" pcbX="5.4mm" pcbY="4.1mm" schX="18mm" schY="10mm" />
    <capacitor name="C9" capacitance="100nF" footprint="0402" pcbX="-3.9mm" pcbY="-5.9mm" schX="-28mm" schY="16mm" />
    <capacitor name="C10" capacitance="27pF" footprint="0402" pcbX="-3.3mm" pcbY="11.8mm" schX="16mm" schY="-18mm" />
    <capacitor name="C11" capacitance="27pF" footprint="0402" pcbX="3.3mm" pcbY="11.8mm" schX="28mm" schY="-18mm" />

    <trace from="USB1.A4B9" to="net.VBUS" />
    <trace from="USB1.B4A9" to="net.VBUS" />
    <trace from="USB1.A1B12" to="net.GND" />
    <trace from="USB1.B1A12" to="net.GND" />
    <trace from="USB1.EH1" to="net.GND" />
    <trace from="USB1.EH2" to="net.GND" />
    <trace from="USB1.EH3" to="net.GND" />
    <trace from="USB1.EH4" to="net.GND" />
    <trace from="USB1.A5" to="R1.pin1" />
    <trace from="R1.pin2" to="net.GND" />
    <trace from="USB1.B5" to="R2.pin1" />
    <trace from="R2.pin2" to="net.GND" />
    <trace from="USB1.A6" to="net.USB_DP_CONN" />
    <trace from="USB1.B6" to="net.USB_DP_CONN" />
    <trace from="USB1.A7" to="net.USB_DM_CONN" />
    <trace from="USB1.B7" to="net.USB_DM_CONN" />
    <trace from="net.USB_DP_CONN" to="R4.pin1" />
    <trace from="R4.pin2" to="U1.USB_DP" />
    <trace from="net.USB_DM_CONN" to="R3.pin1" />
    <trace from="R3.pin2" to="U1.USB_DM" />

    <trace from="net.VBUS" to="U2.VIN" width="0.5mm" />
    <trace from="net.VBUS" to="C1.pin1" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="U2.VSS" to="net.GND" />
    <trace from="U2.CE" to="net.VOUT_3V3" />
    <trace from="U2.VOUT" to="net.VOUT_3V3" width="0.5mm" />
    <trace from="net.VOUT_3V3" to="C2.pin1" />
    <trace from="C2.pin2" to="net.GND" />

    <trace from="net.VOUT_3V3" to="U1.VREG_IN" width="0.4mm" />
    <trace from="net.VOUT_3V3" to="U1.IOVDD1" />
    <trace from="net.VOUT_3V3" to="U1.IOVDD2" />
    <trace from="net.VOUT_3V3" to="U1.IOVDD3" />
    <trace from="net.VOUT_3V3" to="U1.IOVDD4" />
    <trace from="net.VOUT_3V3" to="U1.IOVDD5" />
    <trace from="net.VOUT_3V3" to="U1.IOVDD6" />
    <trace from="net.VOUT_3V3" to="U1.USB_VDD" />
    <trace from="net.VOUT_3V3" to="U1.ADC_AVDD" />

    <trace from="U1.VREG_VOUT" to="net.DVDD_1V1" />
    <trace from="net.DVDD_1V1" to="U1.DVDD1" />
    <trace from="net.DVDD_1V1" to="U1.DVDD2" />
    <trace from="net.DVDD_1V1" to="C3.pin1" />
    <trace from="C3.pin2" to="net.GND" />

    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.TESTEN" to="R7.pin1" />
    <trace from="R7.pin2" to="net.GND" />
    <trace from="U1.RUN" to="R6.pin1" />
    <trace from="R6.pin2" to="net.VOUT_3V3" />

    <trace from="U1.XIN" to="Y1.OSC1" />
    <trace from="U1.XOUT" to="Y1.OSC2" />
    <trace from="Y1.GND1" to="net.GND" />
    <trace from="Y1.GND2" to="net.GND" />
    <trace from="U1.XIN" to="C10.pin1" />
    <trace from="C10.pin2" to="net.GND" />
    <trace from="U1.XOUT" to="C11.pin1" />
    <trace from="C11.pin2" to="net.GND" />

    <trace from="U1.QSPI_SS" to="net.QSPI_SS" />
    <trace from="net.QSPI_SS" to="U3.pin1" />
    <trace from="net.QSPI_SS" to="R5.pin1" />
    <trace from="R5.pin2" to="net.VOUT_3V3" />
    <trace from="U1.QSPI_SD0" to="U3.pin5" />
    <trace from="U1.QSPI_SD1" to="U3.pin2" />
    <trace from="U1.QSPI_SD2" to="U3.IO2" />
    <trace from="U1.QSPI_SD3" to="U3.IO3" />
    <trace from="U1.QSPI_SCLK" to="U3.CLK" />
    <trace from="U3.VCC" to="net.VOUT_3V3" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U3.VCC" to="C9.pin1" />
    <trace from="C9.pin2" to="net.GND" />

    <trace from="net.VOUT_3V3" to="C4.pin1" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="net.VOUT_3V3" to="C5.pin1" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="net.VOUT_3V3" to="C6.pin1" />
    <trace from="C6.pin2" to="net.GND" />
    <trace from="net.VOUT_3V3" to="C7.pin1" />
    <trace from="C7.pin2" to="net.GND" />
    <trace from="net.VOUT_3V3" to="C8.pin1" />
    <trace from="C8.pin2" to="net.GND" />

    <trace from="U1.GPIO25" to="R8.pin1" />
    <trace from="R8.pin2" to="D1._POS" />
    <trace from="D1._NEG" to="net.GND" />

    <trace from="J1.pin1" to="U1.GPIO0" />
    <trace from="J1.pin2" to="U1.GPIO1" />
    <trace from="J1.pin3" to="U1.GPIO2" />
    <trace from="J1.pin4" to="U1.GPIO3" />
    <trace from="J1.pin5" to="U1.GPIO4" />
    <trace from="J1.pin6" to="U1.GPIO5" />
    <trace from="J1.pin7" to="U1.GPIO6" />
    <trace from="J1.pin8" to="U1.GPIO7" />
    <trace from="J1.pin9" to="U1.GPIO8" />
    <trace from="J1.pin10" to="U1.GPIO9" />
    <trace from="J1.pin11" to="U1.GPIO10" />
    <trace from="J1.pin12" to="U1.GPIO11" />
    <trace from="J1.pin13" to="U1.GPIO12" />
    <trace from="J1.pin14" to="U1.GPIO13" />
    <trace from="J1.pin15" to="U1.GPIO14" />
    <trace from="J1.pin16" to="U1.GPIO15" />
    <trace from="J1.pin17" to="U1.RUN" />
    <trace from="J1.pin18" to="net.VOUT_3V3" />
    <trace from="J1.pin19" to="net.GND" />
    <trace from="J1.pin20" to="net.VBUS" />

    <trace from="J2.pin1" to="U1.GPIO16" />
    <trace from="J2.pin2" to="U1.GPIO17" />
    <trace from="J2.pin3" to="U1.GPIO18" />
    <trace from="J2.pin4" to="U1.GPIO19" />
    <trace from="J2.pin5" to="U1.GPIO20" />
    <trace from="J2.pin6" to="U1.GPIO21" />
    <trace from="J2.pin7" to="U1.GPIO22" />
    <trace from="J2.pin8" to="U1.GPIO23" />
    <trace from="J2.pin9" to="U1.GPIO24" />
    <trace from="J2.pin10" to="U1.GPIO25" />
    <trace from="J2.pin11" to="U1.GPIO26_ADC0" />
    <trace from="J2.pin12" to="U1.GPIO27_ADC1" />
    <trace from="J2.pin13" to="U1.GPIO28_ADC2" />
    <trace from="J2.pin14" to="U1.GPIO29_ADC3" />
    <trace from="J2.pin15" to="U1.SWD" />
    <trace from="J2.pin16" to="U1.SWCLK" />
    <trace from="J2.pin17" to="net.QSPI_SS" />
    <trace from="J2.pin18" to="net.VOUT_3V3" />
    <trace from="J2.pin19" to="net.GND" />
    <trace from="J2.pin20" to="net.VBUS" />
  </board>
)
