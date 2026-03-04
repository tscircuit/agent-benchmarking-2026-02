import { AMS1117_3_3 } from "./imports/AMS1117_3_3"
import { RP2040 } from "./imports/RP2040"
import { USB_B10_BRW } from "./imports/USB_B10_BRW"
import { W25Q16JVSNIQ } from "./imports/W25Q16JVSNIQ"

export default () => (
  <board width="48mm" height="28mm" routingDisabled>
    <USB_B10_BRW name="USBC" pcbX={0} pcbY={-6.5} />
    <AMS1117_3_3 name="U2" pcbX={-16} pcbY={2} pcbRotation={180} />
    <RP2040 name="U1" pcbX={0} pcbY={4} />
    <W25Q16JVSNIQ name="U3" pcbX={13} pcbY={6} pcbRotation={90} />

    <resistor name="R_LED" resistance="1k" footprint="0402" pcbX={14} pcbY={-3} />
    <led name="D1" color="green" footprint="0603" pcbX={18} pcbY={-3} />
    <resistor name="R_RUN" resistance="10k" footprint="0402" pcbX={8} pcbY={-6} />

    <capacitor name="C_IN" capacitance="10uF" footprint="0603" pcbX={-12} pcbY={-4} />
    <capacitor name="C_OUT" capacitance="10uF" footprint="0603" pcbX={-12} pcbY={6} />
    <capacitor name="C_3V3" capacitance="100nF" footprint="0402" pcbX={8} pcbY={10} />
    <capacitor name="C_VREG" capacitance="1uF" footprint="0402" pcbX={8} pcbY={7} />
    <capacitor name="C_FLASH" capacitance="100nF" footprint="0402" pcbX={18} pcbY={6} />

    <trace from=".USBC > .VBUS" to="net.VBUS" />
    <trace from=".USBC > .GND1" to="net.GND" />
    <trace from=".USBC > .GND2" to="net.GND" />
    <trace from=".USBC > .GND3" to="net.GND" />

    <trace from=".USBC > .D_POS" to="net.USB_DP" />
    <trace from=".U1 > .USB_DP" to="net.USB_DP" />
    <trace from=".USBC > .D_NEG" to="net.USB_DM" />
    <trace from=".U1 > .USB_DM" to="net.USB_DM" />

    <trace from=".U2 > .VIN" to="net.VBUS" />
    <trace from=".U2 > .pin1" to="net.GND" />
    <trace from=".U2 > .pin2" to="net.V3_3" />
    <trace from=".U2 > .TAB" to="net.V3_3" />
    <trace from=".C_IN > .pin1" to="net.VBUS" />
    <trace from=".C_IN > .pin2" to="net.GND" />
    <trace from=".C_OUT > .pin1" to="net.V3_3" />
    <trace from=".C_OUT > .pin2" to="net.GND" />

    <trace from=".U1 > .IOVDD1" to="net.V3_3" />
    <trace from=".U1 > .IOVDD2" to="net.V3_3" />
    <trace from=".U1 > .IOVDD3" to="net.V3_3" />
    <trace from=".U1 > .IOVDD4" to="net.V3_3" />
    <trace from=".U1 > .IOVDD5" to="net.V3_3" />
    <trace from=".U1 > .IOVDD6" to="net.V3_3" />
    <trace from=".U1 > .ADC_AVDD" to="net.V3_3" />
    <trace from=".U1 > .USB_VDD" to="net.V3_3" />
    <trace from=".U1 > .VREG_IN" to="net.V3_3" />
    <trace from=".U1 > .VREG_VOUT" to="net.V1V1" />
    <trace from=".U1 > .DVDD1" to="net.V1V1" />
    <trace from=".U1 > .DVDD2" to="net.V1V1" />
    <trace from=".U1 > .GND" to="net.GND" />

    <trace from=".C_3V3 > .pin1" to="net.V3_3" />
    <trace from=".C_3V3 > .pin2" to="net.GND" />
    <trace from=".C_VREG > .pin1" to="net.V1V1" />
    <trace from=".C_VREG > .pin2" to="net.GND" />

    <trace from=".R_RUN > .pin1" to="net.V3_3" />
    <trace from=".R_RUN > .pin2" to="net.RUN" />
    <trace from=".U1 > .RUN" to="net.RUN" />

    <trace from=".U1 > .QSPI_SS" to="net.QSPI_SS" />
    <trace from=".U3 > .CS" to="net.QSPI_SS" />
    <trace from=".U1 > .QSPI_SCLK" to="net.QSPI_SCLK" />
    <trace from=".U3 > .CLK" to="net.QSPI_SCLK" />
    <trace from=".U1 > .QSPI_SD0" to="net.QSPI_SD0" />
    <trace from=".U3 > .pin5" to="net.QSPI_SD0" />
    <trace from=".U1 > .QSPI_SD1" to="net.QSPI_SD1" />
    <trace from=".U3 > .pin2" to="net.QSPI_SD1" />
    <trace from=".U1 > .QSPI_SD2" to="net.QSPI_SD2" />
    <trace from=".U3 > .pin3" to="net.QSPI_SD2" />
    <trace from=".U1 > .QSPI_SD3" to="net.QSPI_SD3" />
    <trace from=".U3 > .pin7" to="net.QSPI_SD3" />
    <trace from=".U3 > .VCC" to="net.V3_3" />
    <trace from=".U3 > .GND" to="net.GND" />
    <trace from=".C_FLASH > .pin1" to="net.V3_3" />
    <trace from=".C_FLASH > .pin2" to="net.GND" />

    <trace from=".U1 > .GPIO25" to="net.LED_GPIO" />
    <trace from=".R_LED > .pin1" to="net.LED_GPIO" />
    <trace from=".R_LED > .pin2" to="net.LED_A" />
    <trace from=".D1 > .pin1" to="net.LED_A" />
    <trace from=".D1 > .pin2" to="net.GND" />
  </board>
)