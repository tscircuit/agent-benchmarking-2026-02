import { RP2040 } from "./imports/RP2040"
import { W25Q32JVSSIQ } from "./imports/W25Q32JVSSIQ"
import { XC6206P332MR } from "./imports/XC6206P332MR"

const ioVddPins = ["IOVDD1", "IOVDD2", "IOVDD3", "IOVDD4", "IOVDD5", "IOVDD6"]
const dvddPins = ["DVDD1", "DVDD2"]

const leftHeaderPins = [
  "VBUS",
  "GND",
  "V3_3",
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
]

const rightHeaderPins = [
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
  "GPIO26_ADC0",
  "GPIO27_ADC1",
  "GPIO28_ADC2",
  "GND",
]

export default () => (
  <board width="54mm" height="36mm" layers={2}>
    <schematicsection name="Power" />
    <schematicsection name="USB" />
    <schematicsection name="MCU" />
    <schematicsection name="Flash and Clock" />
    <schematicsection name="Breakout" />

    <connector
      name="J_USB"
      standard="usb_c"
      pcbX={-23.7}
      pcbY={0}
      pcbRotation={270}
      schWidth={0.85}
      schSectionName="USB"
      schX={-8}
      schY={-4}
    />

    <RP2040
      name="U1"
      pcbX={0}
      pcbY={0}
      schSectionName="MCU"
      schX={0}
      schY={0}
      schHeight={5.8}
    />

    <W25Q32JVSSIQ
      name="U2"
      pcbX={0}
      pcbY={8.4}
      pcbRotation={90}
      schSectionName="Flash and Clock"
      schX={7}
      schY={4}
    />

    <XC6206P332MR
      name="U3"
      pcbX={-13.5}
      pcbY={5.5}
      pcbRotation={180}
      schSectionName="Power"
      schX={-8}
      schY={4}
      schHeight={0.4}
    />

    <crystal
      name="Y1"
      frequency="12MHz"
      loadCapacitance="12pF"
      footprint={
        <footprint>
          <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0mm" width="1.2mm" height="1.4mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0mm" width="1.2mm" height="1.4mm" shape="rect" />
          <silkscreenrect pcbX="0mm" pcbY="0mm" width="3.2mm" height="2.5mm" />
          <courtyardrect pcbX="0mm" pcbY="0mm" width="3.8mm" height="3.1mm" />
        </footprint>
      }
      supplierPartNumbers={{ jlcpcb: ["C9002"] }}
      pcbX={-5.7}
      pcbY={-6.7}
      pcbRotation={90}
      schSectionName="Flash and Clock"
      schX={7}
      schY={1.5}
    />

    <pinheader
      name="J_LEFT"
      pinCount={15}
      gender="female"
      pitch="2.54mm"
      footprint="pinrow15"
      pinLabels={leftHeaderPins}
      schWidth={0.77}
      showSilkscreenPinLabels
      pcbX={0}
      pcbY={-16}
      schSectionName="Breakout"
      schX={6}
      schY={-4}
    />

    <pinheader
      name="J_RIGHT"
      pinCount={15}
      gender="female"
      pitch="2.54mm"
      footprint="pinrow15"
      pinLabels={rightHeaderPins}
      schWidth={1.245}
      showSilkscreenPinLabels
      pcbX={0}
      pcbY={16}
      schSectionName="Breakout"
      schX={10}
      schY={-4}
    />

    <pinheader
      name="J_SWD"
      pinCount={3}
      gender="male"
      pitch="2.54mm"
      footprint="pinrow3"
      pinLabels={["SWCLK", "SWD", "GND"]}
      showSilkscreenPinLabels
      pcbX={21}
      pcbY={-12}
      schSectionName="Breakout"
      schX={8}
      schY={-7}
    />

    <pushbutton
      name="SW_BOOT"
      footprint="pushbutton"
      supplierPartNumbers={{ jlcpcb: ["C318884"] }}
      pcbX={21}
      pcbY={7.2}
      schSectionName="Flash and Clock"
      schX={9.5}
      schY={4.8}
    />

    <pushbutton
      name="SW_RESET"
      footprint="pushbutton"
      supplierPartNumbers={{ jlcpcb: ["C318884"] }}
      pcbX={21}
      pcbY={-3.2}
      schSectionName="MCU"
      schX={3.5}
      schY={-2.5}
    />

    <led
      name="D1"
      color="green"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C72043"] }}
      pcbX={16}
      pcbY={3}
      pcbRotation={180}
      schSectionName="MCU"
      schX={3.5}
      schY={1.5}
    />

    <resistor
      name="R_LED"
      resistance="1k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C21190"] }}
      pcbX={12.3}
      pcbY={3}
      pcbRotation={180}
      schSectionName="MCU"
      schX={2.2}
      schY={1.5}
    />

    <resistor name="R_CC1" resistance="5.1k" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C23186"] }} pcbX={-14.8} pcbY={-5.2} schSectionName="USB" schX={-6.5} schY={-5} />
    <resistor name="R_CC2" resistance="5.1k" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C23186"] }} pcbX={-14.8} pcbY={-7.2} schSectionName="USB" schX={-6.5} schY={-6} />
    <resistor name="R_USB_DP" resistance="27" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C25100"] }} pcbX={-10.2} pcbY={2.6} pcbRotation={90} schSectionName="USB" schX={-4.5} schY={-3.5} />
    <resistor name="R_USB_DM" resistance="27" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C25100"] }} pcbX={-7} pcbY={2.6} pcbRotation={90} schSectionName="USB" schX={-4.5} schY={-4.5} />
    <resistor name="R_RUN" resistance="10k" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C25804"] }} pcbX={10.7} pcbY={-5.3} schSectionName="MCU" schX={2.8} schY={-1.6} />
    <resistor name="R_QSPI_CS" resistance="10k" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C25804"] }} pcbX={7} pcbY={9.8} schSectionName="Flash and Clock" schX={9.5} schY={3.2} />

    <capacitor name="C_IN" capacitance="1uF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C15849"] }} pcbX={-17.4} pcbY={7.4} schSectionName="Power" schX={-9.5} schY={3.2} schRotation={90} />
    <capacitor name="C_OUT" capacitance="1uF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C15849"] }} pcbX={-9.6} pcbY={7.4} schSectionName="Power" schX={-6.5} schY={3.2} schRotation={90} />
    <capacitor name="C_USB" capacitance="1uF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C15849"] }} pcbX={-6.1} pcbY={5.1} schSectionName="Power" schX={-5} schY={2.4} schRotation={90} />
    <capacitor name="C_VREG" capacitance="1uF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C15849"] }} pcbX={6.3} pcbY={4.6} schSectionName="Power" schX={-4.6} schY={4.2} schRotation={90} />
    <capacitor name="C_FLASH" capacitance="100nF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C14663"] }} pcbX={-6.2} pcbY={9.6} schSectionName="Flash and Clock" schX={6} schY={5.7} schRotation={90} />
    <capacitor name="C_XIN" capacitance="18pF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C1648"] }} pcbX={-8.9} pcbY={-8.1} schSectionName="Flash and Clock" schX={5.8} schY={1} schRotation={90} />
    <capacitor name="C_XOUT" capacitance="18pF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C1648"] }} pcbX={-2.5} pcbY={-8.1} schSectionName="Flash and Clock" schX={8.2} schY={1} schRotation={90} />
    <capacitor name="C_ADC" capacitance="100nF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C14663"] }} pcbX={7.4} pcbY={0} schSectionName="Power" schX={-4.6} schY={5.6} schRotation={90} />
    <capacitor name="C1" capacitance="100nF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C14663"] }} pcbX={-6.1} pcbY={-2.5} schSectionName="Power" schX={-2.8} schY={5.2} schRotation={90} />
    <capacitor name="C2" capacitance="100nF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C14663"] }} pcbX={6.1} pcbY={-2.5} schSectionName="Power" schX={-2.8} schY={3.9} schRotation={90} />
    <capacitor name="C3" capacitance="100nF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C14663"] }} pcbX={2.2} pcbY={-5.5} schSectionName="Power" schX={-2.8} schY={2.6} schRotation={90} />
    <capacitor name="C4" capacitance="100nF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C14663"] }} pcbX={6.4} pcbY={2.8} schSectionName="Power" schX={-2.8} schY={1.3} schRotation={90} />

    <copperpour name="GND_FILL_TOP" connectsTo="net.GND" layer="top" />
    <copperpour name="GND_FILL_BOTTOM" connectsTo="net.GND" layer="bottom" />

    <silkscreentext text="RP2040 BREAKOUT" pcbX={0} pcbY={12.4} fontSize={1} />
    <silkscreentext text="USB" pcbX={-20.4} pcbY={4.3} fontSize={0.8} />
    <silkscreentext text="BOOT" pcbX={21} pcbY={12} fontSize={0.7} />
    <silkscreentext text="RESET" pcbX={21} pcbY={1.6} fontSize={0.7} />

    <trace from="J_USB.VBUS1" to="net.VBUS" />
    <trace from="J_USB.VBUS2" to="net.VBUS" />
    <trace from="J_USB.GND1" to="net.GND" />
    <trace from="J_USB.GND2" to="net.GND" />
    <trace from="J_USB.CC1" to="R_CC1.pin1" />
    <trace from="R_CC1.pin2" to="net.GND" />
    <trace from="J_USB.CC2" to="R_CC2.pin1" />
    <trace from="R_CC2.pin2" to="net.GND" />
    <trace from="J_USB.DP1" to="J_USB.DP2" />
    <trace from="J_USB.DM1" to="J_USB.DM2" />
    <trace from="J_USB.DP1" to="R_USB_DP.pin1" />
    <trace from="R_USB_DP.pin2" to="U1.USB_DP" />
    <trace from="J_USB.DM1" to="R_USB_DM.pin1" />
    <trace from="R_USB_DM.pin2" to="U1.USB_DM" />

    <trace from="net.VBUS" to="U3.VIN" />
    <trace from="U3.VSS" to="net.GND" />
    <trace from="U3.VOUT" to="net.V3_3" />
    <trace from="C_IN.pin1" to="net.VBUS" />
    <trace from="C_IN.pin2" to="net.GND" />
    <trace from="C_OUT.pin1" to="net.V3_3" />
    <trace from="C_OUT.pin2" to="net.GND" />

    <trace from="net.VBUS" to="J_LEFT.VBUS" />
    <trace from="net.V3_3" to="J_LEFT.V3_3" />
    <trace from="net.GND" to="J_LEFT.GND" />
    <trace from="net.GND" to="J_RIGHT.GND" />

    {ioVddPins.map((pin) => <trace key={pin} from={`U1.${pin}`} to="net.V3_3" />)}
    {dvddPins.map((pin) => <trace key={pin} from={`U1.${pin}`} to="net.V1_1" />)}
    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.VREG_IN" to="net.V3_3" />
    <trace from="U1.VREG_VOUT" to="net.V1_1" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.TESTEN" to="net.GND" />
    <trace from="C_USB.pin1" to="U1.USB_VDD" />
    <trace from="C_USB.pin2" to="net.GND" />
    <trace from="C_VREG.pin1" to="U1.VREG_VOUT" />
    <trace from="C_VREG.pin2" to="net.GND" />
    <trace from="C_ADC.pin1" to="U1.ADC_AVDD" />
    <trace from="C_ADC.pin2" to="net.GND" />
    <trace from="C1.pin1" to="net.V3_3" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin1" to="net.V3_3" />
    <trace from="C2.pin2" to="net.GND" />
    <trace from="C3.pin1" to="net.V1_1" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="C4.pin1" to="net.V1_1" />
    <trace from="C4.pin2" to="net.GND" />

    <trace from="U1.XIN" to="Y1.pin1" />
    <trace from="U1.XOUT" to="Y1.pin2" />
    <trace from="C_XIN.pin1" to="U1.XIN" />
    <trace from="C_XIN.pin2" to="net.GND" />
    <trace from="C_XOUT.pin1" to="U1.XOUT" />
    <trace from="C_XOUT.pin2" to="net.GND" />

    <trace from="U1.QSPI_SS" to="U2.CS" />
    <trace from="U1.QSPI_SCLK" to="U2.CLK" />
    <trace from="U1.QSPI_SD0" to="U2.pin5" />
    <trace from="U1.QSPI_SD1" to="U2.pin2" />
    <trace from="U1.QSPI_SD2" to="U2.pin3" />
    <trace from="U1.QSPI_SD3" to="U2.pin7" />
    <trace from="U2.VCC" to="net.V3_3" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="C_FLASH.pin1" to="U2.VCC" />
    <trace from="C_FLASH.pin2" to="net.GND" />
    <trace from="R_QSPI_CS.pin1" to="U2.CS" />
    <trace from="R_QSPI_CS.pin2" to="net.V3_3" />
    <trace from="SW_BOOT.pin1" to="U2.CS" />
    <trace from="SW_BOOT.pin2" to="net.GND" />

    <trace from="R_RUN.pin1" to="U1.RUN" />
    <trace from="R_RUN.pin2" to="net.V3_3" />
    <trace from="SW_RESET.pin1" to="U1.RUN" />
    <trace from="SW_RESET.pin2" to="net.GND" />

    <trace from="U1.GPIO25" to="R_LED.pin1" />
    <trace from="R_LED.pin2" to="D1.pos" />
    <trace from="D1.neg" to="net.GND" />

    <trace from="U1.SWCLK" to="J_SWD.SWCLK" />
    <trace from="U1.SWD" to="J_SWD.SWD" />
    <trace from="net.GND" to="J_SWD.GND" />

    {leftHeaderPins.slice(3).map((pin) => <trace key={pin} from={`U1.${pin}`} to={`J_LEFT.${pin}`} />)}
    {rightHeaderPins.slice(0, 14).map((pin) => <trace key={pin} from={`U1.${pin}`} to={`J_RIGHT.${pin}`} />)}
  </board>
)
