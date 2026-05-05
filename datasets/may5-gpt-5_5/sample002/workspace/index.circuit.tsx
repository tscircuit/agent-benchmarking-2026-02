import { RP2040 } from "./imports/RP2040"
import { W25Q16JVUXIQ } from "./imports/W25Q16JVUXIQ"
import { XC6206P332MR } from "./imports/XC6206P332MR"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"

export default () => (
  <board width="60mm" height="38mm" layers={2}>
    <connector
      name="JUSB"
      standard="usb_c"
      pcbX={-26.75}
      pcbY={0}
      pcbRotation={-90}
      schX={-8}
      schY={5}
    />

    <RP2040 name="U1" pcbX={0} pcbY={0} schX={0} schY={0} />
    <W25Q16JVUXIQ name="U2" pcbX={0} pcbY={8.4} pcbRotation={180} schX={5.2} schY={3.5} />
    <XC6206P332MR name="U3" pcbX={-17} pcbY={-6.8} pcbRotation={180} schX={-6.2} schY={1} />
    <X322512MSB4SI name="Y1" pcbX={-9.5} pcbY={6.6} pcbRotation={90} schX={-5.2} schY={-2.4} />

    <led name="D1" footprint="0603" color="green" pcbX={12.5} pcbY={-9.5} schX={7.2} schY={-4.5} />
    <resistor name="RLED" resistance="1k" footprint="0603" pcbX={8.8} pcbY={-9.5} schX={5.4} schY={-4.5} />

    <resistor name="RCC1" resistance="5.1k" footprint="0603" pcbX={-21.5} pcbY={4.8} schX={-5.8} schY={6.8} />
    <resistor name="RCC2" resistance="5.1k" footprint="0603" pcbX={-21.5} pcbY={2.7} schX={-5.8} schY={5.5} />
    <resistor name="RQSPI" resistance="10k" footprint="0603" pcbX={4.2} pcbY={9.9} schX={3.3} schY={5.9} />
    <resistor name="RRUN" resistance="10k" footprint="0603" pcbX={10} pcbY={-5.8} schX={3.3} schY={-5.9} />

    <capacitor name="CIN" capacitance="1uF" footprint="0603" pcbX={-20.7} pcbY={-8.9} schX={-8} schY={-0.8} schOrientation="vertical" />
    <capacitor name="COUT" capacitance="1uF" footprint="0603" pcbX={-13.5} pcbY={-8.9} schX={-4.6} schY={-0.8} schOrientation="vertical" />
    <capacitor name="CUSB" capacitance="1uF" footprint="0603" pcbX={-3.3} pcbY={-7.4} schX={-1.8} schY={-4.2} schOrientation="vertical" />
    <capacitor name="CVREG" capacitance="1uF" footprint="0603" pcbX={3.6} pcbY={-7.4} schX={1.8} schY={-4.2} schOrientation="vertical" />
    <capacitor name="C1" capacitance="100nF" footprint="0402" pcbX={-5.8} pcbY={-5.1} schX={-3.6} schY={3.8} schOrientation="vertical" />
    <capacitor name="C2" capacitance="100nF" footprint="0402" pcbX={-3.6} pcbY={-5.2} schX={-2.2} schY={3.8} schOrientation="vertical" />
    <capacitor name="C3" capacitance="100nF" footprint="0402" pcbX={4} pcbY={-5.2} schX={-0.8} schY={3.8} schOrientation="vertical" />
    <capacitor name="C4" capacitance="100nF" footprint="0402" pcbX={6.4} pcbY={-5.2} schX={0.8} schY={3.8} schOrientation="vertical" />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX={3.2} pcbY={5.1} schX={2.2} schY={3.8} schOrientation="vertical" />
    <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX={5.8} pcbY={5.1} schX={3.6} schY={3.8} schOrientation="vertical" />
    <capacitor name="CXTAL1" capacitance="15pF" footprint="0402" pcbX={-12.8} pcbY={8.9} schX={-7.1} schY={-4.2} schOrientation="vertical" />
    <capacitor name="CXTAL2" capacitance="15pF" footprint="0402" pcbX={-5.8} pcbY={9.8} schX={-3.3} schY={-4.2} schOrientation="vertical" />

    <pinheader
      name="JIO"
      pinCount={8}
      gender="female"
      pitch="2.54mm"
      showSilkscreenPinLabels
      pinLabels={["VBUS", "3V3", "GND", "GP0", "GP1", "GP2", "GP3", "GP4"]}
      pcbX={-5}
      pcbY={-16}
      pcbRotation={0}
      schX={-8.8}
      schY={-5}
    />
    <pinheader
      name="JSWD"
      pinCount={4}
      gender="male"
      pitch="2.54mm"
      showSilkscreenPinLabels
      pinLabels={["3V3", "SWD", "SWCLK", "GND"]}
      pcbX={22}
      pcbY={-10}
      schX={7}
      schY={-1}
    />
    <pinheader
      name="JCTRL"
      pinCount={3}
      gender="male"
      pitch="2.54mm"
      showSilkscreenPinLabels
      pinLabels={["RUN", "BOOT", "GND"]}
      pcbX={22}
      pcbY={10}
      schX={7}
      schY={-3}
    />

    <trace from="JUSB.VBUS1" to="net.VBUS" />
    <trace from="JUSB.VBUS2" to="net.VBUS" />
    <trace from="JUSB.GND1" to="net.GND" />
    <trace from="JUSB.GND2" to="net.GND" />
    <trace from="JUSB.SHELL1" to="net.GND" />
    <trace from="JUSB.SHELL2" to="net.GND" />
    <trace from="JUSB.SHELL3" to="net.GND" />
    <trace from="JUSB.SHELL4" to="net.GND" />
    <trace from="JUSB.DP1" to="U1.USB_DP" />
    <trace from="JUSB.DP2" to="U1.USB_DP" />
    <trace from="JUSB.DM1" to="U1.USB_DM" />
    <trace from="JUSB.DM2" to="U1.USB_DM" />
    <trace from="JUSB.CC1" to="RCC1.pin1" />
    <trace from="JUSB.CC2" to="RCC2.pin1" />
    <trace from="RCC1.pin2" to="net.GND" />
    <trace from="RCC2.pin2" to="net.GND" />

    <trace from="U3.VIN" to="net.VBUS" />
    <trace from="U3.VOUT" to="net.V3_3" />
    <trace from="U3.VSS" to="net.GND" />
    <trace from="CIN.pin1" to="net.VBUS" />
    <trace from="CIN.pin2" to="net.GND" />
    <trace from="COUT.pin1" to="net.V3_3" />
    <trace from="COUT.pin2" to="net.GND" />

    <trace from="U1.VREG_IN" to="net.V3_3" />
    <trace from="U1.VREG_VOUT" to="net.VREG_OUT" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.TESTEN" to="net.GND" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="CUSB.pin1" to="U1.USB_VDD" />
    <trace from="CUSB.pin2" to="net.GND" />
    <trace from="CVREG.pin1" to="U1.VREG_VOUT" />
    <trace from="CVREG.pin2" to="net.GND" />

    <trace from="U1.IOVDD1" to="net.V3_3" />
    <trace from="U1.IOVDD2" to="net.V3_3" />
    <trace from="U1.IOVDD3" to="net.V3_3" />
    <trace from="U1.IOVDD4" to="net.V3_3" />
    <trace from="U1.IOVDD5" to="net.V3_3" />
    <trace from="U1.IOVDD6" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.DVDD1" to="net.VREG_OUT" />
    <trace from="U1.DVDD2" to="net.VREG_OUT" />
    <trace from="C1.pin1" to="net.V3_3" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin1" to="net.V3_3" />
    <trace from="C2.pin2" to="net.GND" />
    <trace from="C3.pin1" to="net.V3_3" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="C4.pin1" to="net.V3_3" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="C5.pin1" to="net.VREG_OUT" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="C6.pin1" to="net.VREG_OUT" />
    <trace from="C6.pin2" to="net.GND" />

    <trace from="U1.XIN" to="Y1.OSC1" />
    <trace from="U1.XOUT" to="Y1.OSC2" />
    <trace from="Y1.GND1" to="net.GND" />
    <trace from="Y1.GND2" to="net.GND" />
    <trace from="CXTAL1.pin1" to="U1.XIN" />
    <trace from="CXTAL1.pin2" to="net.GND" />
    <trace from="CXTAL2.pin1" to="U1.XOUT" />
    <trace from="CXTAL2.pin2" to="net.GND" />

    <trace from="U1.QSPI_SS" to="U2.CS" />
    <trace from="U1.QSPI_SCLK" to="U2.CLK" />
    <trace from="U1.QSPI_SD0" to="U2.pin5" />
    <trace from="U1.QSPI_SD1" to="U2.pin2" />
    <trace from="U1.QSPI_SD2" to="U2.pin3" />
    <trace from="U1.QSPI_SD3" to="U2.pin7" />
    <trace from="U2.VCC" to="net.V3_3" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="U2.EP" to="net.GND" />
    <trace from="RQSPI.pin1" to="net.V3_3" />
    <trace from="RQSPI.pin2" to="U1.QSPI_SS" />

    <trace from="U1.RUN" to="RRUN.pin1" />
    <trace from="RRUN.pin2" to="net.V3_3" />
    <trace from="U1.GPIO25" to="RLED.pin1" />
    <trace from="RLED.pin2" to="D1.pin1" />
    <trace from="D1.pin2" to="net.GND" />

    <trace from="JIO.VBUS" to="net.VBUS" />
    <trace from="JIO.3V3" to="net.V3_3" />
    <trace from="JIO.GND" to="net.GND" />
    <trace from="JIO.GP0" to="U1.GPIO0" />
    <trace from="JIO.GP1" to="U1.GPIO1" />
    <trace from="JIO.GP2" to="U1.GPIO2" />
    <trace from="JIO.GP3" to="U1.GPIO3" />
    <trace from="JIO.GP4" to="U1.GPIO4" />
    <trace from="JSWD.3V3" to="net.V3_3" />
    <trace from="JSWD.SWD" to="U1.SWD" />
    <trace from="JSWD.SWCLK" to="U1.SWCLK" />
    <trace from="JSWD.GND" to="net.GND" />
    <trace from="JCTRL.RUN" to="U1.RUN" />
    <trace from="JCTRL.BOOT" to="U1.QSPI_SS" />
    <trace from="JCTRL.GND" to="net.GND" />

    <copperpour connectsTo="net.GND" layer="top" clearance="0.2mm" />
    <copperpour connectsTo="net.GND" layer="bottom" clearance="0.2mm" />
  </board>
)
