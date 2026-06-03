import { RP2040 } from "./imports/RP2040"
import { TYPE_C_16PIN_2MD_073_ } from "./imports/TYPE_C_16PIN_2MD_073_"
import { W25Q16JVUXIQ } from "./imports/W25Q16JVUXIQ"
import { ME6211C33M5G_N } from "./imports/ME6211C33M5G_N"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"

const ioLeft = [
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
] as const

const ioRight = [] as const

const iovddPins = ["pin1", "pin10", "pin22", "pin33", "pin42", "pin49"] as const

export default () => (
  <board width="76mm" height="54mm" layers={4} borderRadius="1mm">
    <schematicsection name="Power" />
    <schematicsection name="USB" />
    <schematicsection name="RP2040" />
    <schematicsection name="Flash and Clock" />
    <schematicsection name="Breakout Headers" />

    <TYPE_C_16PIN_2MD_073_
      name="J_USB"
      pcbX={0}
      pcbY={-24}
      pcbRotation={180}
      schSectionName="USB"
      schX={-9}
      schY={5}
    />

    <ME6211C33M5G_N
      name="U_REG"
      pcbX={-13}
      pcbY={-17}
      pcbRotation={90}
      schSectionName="Power"
      schX={-9}
      schY={1}
    />

    <RP2040
      name="U_MCU"
      pcbX={0}
      pcbY={1}
      pcbRotation={0}
      schSectionName="RP2040"
      schX={0}
      schY={0}
    />

    <W25Q16JVUXIQ
      name="U_FLASH"
      pcbX={-8}
      pcbY={8}
      pcbRotation={90}
      schSectionName="Flash and Clock"
      schX={7}
      schY={3}
    />

    <X322512MSB4SI
      name="Y1"
      pcbX={-7}
      pcbY={-5.1}
      pcbRotation={90}
      schSectionName="Flash and Clock"
      schX={7}
      schY={-1}
    />

    <pinheader
      name="J_LEFT"
      pinCount={18}
      gender="female"
      pitch="2.54mm"
      pcbX={-34}
      pcbY={0}
      pcbRotation={90}
      schSectionName="Breakout Headers"
      schX={-8}
      schY={-5}
      showSilkscreenPinLabels
      pinLabels={["3V3", "GND", ...ioLeft]}
    />

    <pinheader
      name="J_RIGHT"
      pinCount={4}
      gender="female"
      pitch="2.54mm"
      pcbX={34}
      pcbY={0}
      pcbRotation={90}
      schSectionName="Breakout Headers"
      schX={8}
      schY={-5}
      showSilkscreenPinLabels
      pinLabels={["VBUS", "GND", "SWCLK", "SWD", ...ioRight]}
    />

    <resistor name="R_USB_DP" resistance="27" footprint="0402" pcbX={4.4} pcbY={-16.5} schSectionName="USB" schX={-4} schY={5.8} />
    <resistor name="R_USB_DM" resistance="27" footprint="0402" pcbX={1.8} pcbY={-16.5} schSectionName="USB" schX={-4} schY={4.8} />
    <resistor name="R_CC1" resistance="5.1k" footprint="0402" pcbX={-8.2} pcbY={-24} schSectionName="USB" schX={-7} schY={3.8} />
    <resistor name="R_CC2" resistance="5.1k" footprint="0402" pcbX={8.2} pcbY={-24} schSectionName="USB" schX={-7} schY={3} />

    <capacitor name="C_IN" capacitance="10uF" footprint="0603" pcbX={-16.5} pcbY={-18.8} schSectionName="Power" schX={-6} schY={1.5} />
    <capacitor name="C_OUT" capacitance="10uF" footprint="0603" pcbX={-16.5} pcbY={-15.2} schSectionName="Power" schX={-6} schY={0.5} />
    <capacitor name="C_IO" capacitance="1uF" footprint="0402" pcbX={11} pcbY={4.8} schSectionName="Power" schX={-3} schY={1} />
    <capacitor name="C_CORE" capacitance="1uF" footprint="0402" pcbX={13} pcbY={4.8} schSectionName="Power" schX={-3} schY={0} />
    <capacitor name="C_USB" capacitance="1uF" footprint="0402" pcbX={15} pcbY={4.8} schSectionName="Power" schX={-3} schY={-1} />
    <capacitor name="C_XIN" capacitance="18pF" footprint="0402" pcbX={-3.6} pcbY={-8.2} schSectionName="Flash and Clock" schX={10} schY={-2} />
    <capacitor name="C_XOUT" capacitance="18pF" footprint="0402" pcbX={-7} pcbY={-1.6} schSectionName="Flash and Clock" schX={10} schY={-3.2} />

    <resistor name="R_RUN" resistance="10k" footprint="0402" pcbX={5.9} pcbY={-4.6} schSectionName="RP2040" schX={3} schY={-2} />
    <pushbutton name="SW_RESET" footprint="pushbutton" pcbX={21} pcbY={-7.5} schSectionName="RP2040" schX={5} schY={-2} />
    <resistor name="R_BOOT" resistance="10k" footprint="0402" pcbX={-4.8} pcbY={11.5} schSectionName="Flash and Clock" schX={5} schY={5} />
    <pushbutton name="SW_BOOT" footprint="pushbutton" pcbX={-13.5} pcbY={16.5} schSectionName="Flash and Clock" schX={7} schY={5} />

    <resistor name="R_LED" resistance="1k" footprint="0402" pcbX={9.5} pcbY={8.5} schSectionName="RP2040" schX={3} schY={2} />
    <led name="D_LED" footprint="0603" color="green" pcbX={13} pcbY={8.5} schSectionName="RP2040" schX={5} schY={2} />
    <testpoint
      name="TP_GPIO22"
      footprintVariant="pad"
      padShape="circle"
      padDiameter="1mm"
      pcbX={6.8}
      pcbY={-0.6}
      schSectionName="Breakout Headers"
      schX={6}
      schY={-1}
    />
    <testpoint name="TP_GPIO20" footprintVariant="pad" padShape="circle" padDiameter="1mm" pcbX={6.8} pcbY={-3.4} schSectionName="Breakout Headers" schX={6} schY={0.2} />
    <testpoint name="TP_GPIO21" footprintVariant="pad" padShape="circle" padDiameter="1mm" pcbX={6.8} pcbY={-2} schSectionName="Breakout Headers" schX={6} schY={-0.4} />
    <testpoint name="TP_GPIO16" footprintVariant="pad" padShape="circle" padDiameter="1mm" pcbX={4.6} pcbY={-6.8} schSectionName="Breakout Headers" schX={6} schY={2.6} />
    <testpoint name="TP_GPIO17" footprintVariant="pad" padShape="circle" padDiameter="1mm" pcbX={6} pcbY={-6.8} schSectionName="Breakout Headers" schX={6} schY={2} />
    <testpoint name="TP_GPIO18" footprintVariant="pad" padShape="circle" padDiameter="1mm" pcbX={7.4} pcbY={-6.8} schSectionName="Breakout Headers" schX={6} schY={1.4} />
    <testpoint name="TP_GPIO19" footprintVariant="pad" padShape="circle" padDiameter="1mm" pcbX={8.8} pcbY={-6.8} schSectionName="Breakout Headers" schX={6} schY={0.8} />
    <testpoint name="TP_GPIO23" footprintVariant="pad" padShape="circle" padDiameter="1mm" pcbX={11.5} pcbY={-3.4} schSectionName="Breakout Headers" schX={8} schY={0.2} />
    <testpoint name="TP_GPIO24" footprintVariant="pad" padShape="circle" padDiameter="1mm" pcbX={11.5} pcbY={-2} schSectionName="Breakout Headers" schX={8} schY={-0.4} />
    <testpoint name="TP_GPIO26" footprintVariant="pad" padShape="circle" padDiameter="1mm" pcbX={6.8} pcbY={1} schSectionName="Breakout Headers" schX={6} schY={-1.6} />
    <testpoint name="TP_GPIO27" footprintVariant="pad" padShape="circle" padDiameter="1mm" pcbX={6.8} pcbY={2.4} schSectionName="Breakout Headers" schX={6} schY={-2.2} />
    <testpoint name="TP_GPIO28" footprintVariant="pad" padShape="circle" padDiameter="1mm" pcbX={6.8} pcbY={3.8} schSectionName="Breakout Headers" schX={6} schY={-2.8} />
    <testpoint name="TP_GPIO29" footprintVariant="pad" padShape="circle" padDiameter="1mm" pcbX={6.8} pcbY={6.4} schSectionName="Breakout Headers" schX={6} schY={-3.4} />

    <silkscreentext text="RP2040 USB BREAKOUT" pcbX={0} pcbY={25} fontSize={1.3} anchorAlignment="center" />
    <silkscreentext text="BOOT" pcbX={-13.5} pcbY={21.5} fontSize={0.8} anchorAlignment="center" />
    <silkscreentext text="RESET" pcbX={21} pcbY={-12.5} fontSize={0.8} anchorAlignment="center" />
    <silkscreentext text="GPIO25 LED" pcbX={13} pcbY={10.7} fontSize={0.8} anchorAlignment="center" />
    <silkscreentext text="GPIO16" pcbX={4.6} pcbY={-8.2} fontSize={0.65} anchorAlignment="center" />
    <silkscreentext text="GPIO17" pcbX={6} pcbY={-8.2} fontSize={0.65} anchorAlignment="center" />
    <silkscreentext text="GPIO18" pcbX={7.4} pcbY={-8.2} fontSize={0.65} anchorAlignment="center" />
    <silkscreentext text="GPIO19" pcbX={8.8} pcbY={-8.2} fontSize={0.65} anchorAlignment="center" />
    <silkscreentext text="GPIO20" pcbX={8.2} pcbY={-3.4} fontSize={0.65} anchorAlignment="center_left" />
    <silkscreentext text="GPIO21" pcbX={8.2} pcbY={-2} fontSize={0.65} anchorAlignment="center_left" />
    <silkscreentext text="GPIO22" pcbX={8.2} pcbY={-0.6} fontSize={0.65} anchorAlignment="center_left" />
    <silkscreentext text="GPIO23" pcbX={12.9} pcbY={-3.4} fontSize={0.65} anchorAlignment="center_left" />
    <silkscreentext text="GPIO24" pcbX={12.9} pcbY={-2} fontSize={0.65} anchorAlignment="center_left" />
    <silkscreentext text="ADC0" pcbX={8.2} pcbY={1} fontSize={0.65} anchorAlignment="center_left" />
    <silkscreentext text="ADC1" pcbX={8.2} pcbY={2.4} fontSize={0.65} anchorAlignment="center_left" />
    <silkscreentext text="ADC2" pcbX={8.2} pcbY={3.8} fontSize={0.65} anchorAlignment="center_left" />
    <silkscreentext text="ADC3" pcbX={8.2} pcbY={6.4} fontSize={0.65} anchorAlignment="center_left" />

    <trace from=".J_USB > .A4B9" to="net.VBUS" />
    <trace from=".J_USB > .B4A9" to="net.VBUS" />
    <trace from=".J_USB > .A1B12" to="net.GND" />
    <trace from=".J_USB > .B1A12" to="net.GND" />
    <trace from=".J_USB > .EH1" to="net.GND" />
    <trace from=".J_USB > .EH2" to="net.GND" />
    <trace from=".J_USB > .A5" to=".R_CC1 > .pin1" />
    <trace from=".R_CC1 > .pin2" to="net.GND" />
    <trace from=".J_USB > .B5" to=".R_CC2 > .pin1" />
    <trace from=".R_CC2 > .pin2" to="net.GND" />
    <trace from=".J_USB > .A6" to=".R_USB_DP > .pin1" />
    <trace from=".J_USB > .B6" to=".R_USB_DP > .pin1" />
    <trace from=".R_USB_DP > .pin2" to=".U_MCU > .USB_DP" />
    <trace from=".J_USB > .A7" to=".R_USB_DM > .pin1" />
    <trace from=".J_USB > .B7" to=".R_USB_DM > .pin1" />
    <trace from=".R_USB_DM > .pin2" to=".U_MCU > .USB_DM" />

    <trace from=".U_REG > .VIN" to="net.VBUS" />
    <trace from=".U_REG > .CE" to="net.VBUS" />
    <trace from=".U_REG > .VSS" to="net.GND" />
    <trace from=".U_REG > .VOUT" to="net.P3V3" />
    <trace from=".C_IN > .pin1" to="net.VBUS" />
    <trace from=".C_IN > .pin2" to="net.GND" />
    <trace from=".C_OUT > .pin1" to="net.P3V3" />
    <trace from=".C_OUT > .pin2" to="net.GND" />

    {iovddPins.map((pin) => (
      <trace key={`iovdd-${pin}`} from={`.U_MCU > .${pin}`} to="net.P3V3" />
    ))}
    <trace from=".U_MCU > .ADC_AVDD" to="net.P3V3" />
    <trace from=".U_MCU > .USB_VDD" to="net.P3V3" />
    <trace from=".U_MCU > .VREG_IN" to="net.P3V3" />
    <trace from=".U_MCU > .VREG_VOUT" to="net.VDD_CORE" />
    <trace from=".U_MCU > .DVDD1" to="net.VDD_CORE" />
    <trace from=".U_MCU > .DVDD2" to="net.VDD_CORE" />
    <trace from=".U_MCU > .GND" to="net.GND" />
    <trace from=".U_MCU > .TESTEN" to="net.GND" />
    <trace from=".C_IO > .pin1" to="net.P3V3" />
    <trace from=".C_IO > .pin2" to="net.GND" />
    <trace from=".C_CORE > .pin1" to="net.VDD_CORE" />
    <trace from=".C_CORE > .pin2" to="net.GND" />
    <trace from=".C_USB > .pin1" to="net.P3V3" />
    <trace from=".C_USB > .pin2" to="net.GND" />

    <trace from=".U_FLASH > .CS" to=".U_MCU > .QSPI_SS" />
    <trace from=".U_FLASH > .pin5" to=".U_MCU > .QSPI_SD0" />
    <trace from=".U_FLASH > .pin2" to=".U_MCU > .QSPI_SD1" />
    <trace from=".U_FLASH > .pin3" to=".U_MCU > .QSPI_SD2" />
    <trace from=".U_FLASH > .pin7" to=".U_MCU > .QSPI_SD3" />
    <trace from=".U_FLASH > .CLK" to=".U_MCU > .QSPI_SCLK" />
    <trace from=".U_FLASH > .VCC" to="net.P3V3" />
    <trace from=".U_FLASH > .GND" to="net.GND" />
    <trace from=".U_FLASH > .EP" to="net.GND" />

    <trace from=".Y1 > .OSC1" to=".U_MCU > .XIN" />
    <trace from=".Y1 > .OSC2" to=".U_MCU > .XOUT" />
    <trace from=".Y1 > .GND1" to="net.GND" />
    <trace from=".Y1 > .GND2" to="net.GND" />
    <trace from=".C_XIN > .pin1" to=".U_MCU > .XIN" />
    <trace from=".C_XIN > .pin2" to="net.GND" />
    <trace from=".C_XOUT > .pin1" to=".U_MCU > .XOUT" />
    <trace from=".C_XOUT > .pin2" to="net.GND" />

    <trace from=".R_RUN > .pin1" to="net.P3V3" />
    <trace from=".R_RUN > .pin2" to=".U_MCU > .RUN" />
    <trace from=".SW_RESET > .pin1" to=".U_MCU > .RUN" />
    <trace from=".SW_RESET > .pin2" to="net.GND" />
    <trace from=".R_BOOT > .pin1" to="net.P3V3" />
    <trace from=".R_BOOT > .pin2" to=".U_MCU > .QSPI_SS" />
    <trace from=".SW_BOOT > .pin1" to=".U_MCU > .QSPI_SS" />
    <trace from=".SW_BOOT > .pin2" to="net.GND" />

    <trace from=".R_LED > .pin1" to=".U_MCU > .GPIO25" />
    <trace from=".R_LED > .pin2" to=".D_LED > .pin1" />
    <trace from=".D_LED > .pin2" to="net.GND" />

    <trace from=".J_LEFT > .pin1" to="net.P3V3" />
    <trace from=".J_LEFT > .pin2" to="net.GND" />
    {ioLeft.map((gpio, index) => (
      <trace key={`left-${gpio}`} from={`.J_LEFT > .pin${index + 3}`} to={`.U_MCU > .${gpio}`} />
    ))}

    <trace from=".J_RIGHT > .pin1" to="net.VBUS" />
    <trace from=".J_RIGHT > .pin2" to="net.GND" />
    <trace from=".J_RIGHT > .pin3" to=".U_MCU > .SWCLK" />
    <trace from=".J_RIGHT > .pin4" to=".U_MCU > .SWD" />
    <trace from=".TP_GPIO16 > .pin1" to=".U_MCU > .GPIO16" />
    <trace from=".TP_GPIO17 > .pin1" to=".U_MCU > .GPIO17" />
    <trace from=".TP_GPIO18 > .pin1" to=".U_MCU > .GPIO18" />
    <trace from=".TP_GPIO19 > .pin1" to=".U_MCU > .GPIO19" />
    <trace from=".TP_GPIO20 > .pin1" to=".U_MCU > .GPIO20" />
    <trace from=".TP_GPIO21 > .pin1" to=".U_MCU > .GPIO21" />
    <trace from=".TP_GPIO22 > .pin1" to=".U_MCU > .GPIO22" />
    <trace from=".TP_GPIO23 > .pin1" to=".U_MCU > .GPIO23" />
    <trace from=".TP_GPIO24 > .pin1" to=".U_MCU > .GPIO24" />
    <trace from=".TP_GPIO26 > .pin1" to=".U_MCU > .GPIO26_ADC0" />
    <trace from=".TP_GPIO27 > .pin1" to=".U_MCU > .GPIO27_ADC1" />
    <trace from=".TP_GPIO28 > .pin1" to=".U_MCU > .GPIO28_ADC2" />
    <trace from=".TP_GPIO29 > .pin1" to=".U_MCU > .GPIO29_ADC3" />
    {ioRight.map((gpio, index) => (
      <trace key={`right-${gpio}`} from={`.J_RIGHT > .pin${index + 5}`} to={`.U_MCU > .${gpio}`} />
    ))}
  </board>
)
