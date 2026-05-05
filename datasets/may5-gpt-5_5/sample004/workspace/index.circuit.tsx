import { AP2112K_3_3TRG1 } from "./imports/AP2112K_3_3TRG1"
import { RP2040 } from "./imports/RP2040"
import { W25Q16JVSNIQ } from "./imports/W25Q16JVSNIQ"

const gpioHeaderLeft = [
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
  "3V3",
  "GND",
]

const gpioHeaderRight = [
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
  "GPIO25_LED",
  "RUN",
  "GND",
]

export default () => (
  <board width="48mm" height="58mm">
    <net name="VBUS" isPowerNet />
    <net name="V3_3" isPowerNet />
    <net name="VREG_1V1" isPowerNet />
    <net name="GND" isGroundNet />
    <net name="USB_DP" />
    <net name="USB_DM" />
    <net name="QSPI_CS" />
    <net name="QSPI_SCLK" />
    <net name="QSPI_SD0" />
    <net name="QSPI_SD1" />
    <net name="QSPI_SD2" />
    <net name="QSPI_SD3" />
    <net name="XIN" />
    <net name="XOUT" />
    <net name="RUN" />
    <net name="GPIO25_LED" />

    <connector
      name="JUSB"
      standard="usb_c"
      pcbX={0}
      pcbY={-25.4}
      pcbRotation={0}
      schX={-8}
      schY={-8}
      schWidth={0.85}
    />

    <AP2112K_3_3TRG1
      name="U2"
      pcbX={-10}
      pcbY={-18}
      pcbRotation={180}
      schX={-4}
      schY={-6}
      schHeight={0.6}
    />

    <RP2040 name="U1" pcbX={0} pcbY={1} schX={0} schY={2} schHeight={5.8} />
    <W25Q16JVSNIQ name="U3" pcbX={0} pcbY={12} pcbRotation={180} schX={5} schY={2} />

    <crystal
      name="Y1"
      frequency="12MHz"
      loadCapacitance="12pF"
      footprint={
        <footprint>
          <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0mm" width="0.9mm" height="1.4mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0mm" width="0.9mm" height="1.4mm" shape="rect" />
          <silkscreenrect pcbX="0mm" pcbY="0mm" width="3.2mm" height="2.5mm" />
          <courtyardrect pcbX="0mm" pcbY="0mm" width="3.8mm" height="3.1mm" />
        </footprint>
      }
      pcbX={-9}
      pcbY={7}
      schX={-5}
      schY={3}
    />

    <pinheader
      name="JLEFT"
      pinCount={14}
      gender="female"
      pitch="2.54mm"
      footprint="pinrow14"
      pinLabels={gpioHeaderLeft}
      pcbX={-22}
      pcbY={1}
      pcbRotation={90}
      schX={-9}
      schY={2}
      schWidth={0.77}
    />
    <pinheader
      name="JRIGHT"
      pinCount={14}
      gender="female"
      pitch="2.54mm"
      footprint="pinrow14"
      pinLabels={gpioHeaderRight}
      pcbX={22}
      pcbY={1}
      pcbRotation={90}
      schX={9}
      schY={2}
      schWidth={1.15}
    />
    <pinheader
      name="JSWD"
      pinCount={4}
      gender="male"
      pitch="2.54mm"
      footprint="pinrow4"
      pinLabels={["3V3", "SWD", "SWCLK", "GND"]}
      showSilkscreenPinLabels
      pcbX={0}
      pcbY={24}
      pcbRotation={0}
      schX={0}
      schY={8}
      schWidth={0.675}
    />

    <led name="D1" color="green" footprint="0603" pcbX={10} pcbY={19} schX={6} schY={7} />
    <resistor name="RLED" resistance="1k" footprint="0603" pcbX={6} pcbY={19} schX={4} schY={7} />
    <resistor name="RDP" resistance="27" footprint="0603" pcbX={4} pcbY={-13} schX={-4} schY={-3} />
    <resistor name="RDM" resistance="27" footprint="0603" pcbX={-4} pcbY={-13} schX={-4} schY={-4} />
    <resistor name="RCC1" resistance="5.1k" footprint="0603" pcbX={9} pcbY={-21} schX={-6.6} schY={-9.4} />
    <resistor name="RCC2" resistance="5.1k" footprint="0603" pcbX={13} pcbY={-21} schX={-5} schY={-9} />
    <resistor name="RRUN" resistance="10k" footprint="0603" pcbX={9} pcbY={13} schX={7} schY={4} />
    <resistor name="RBOOT" resistance="10k" footprint="0603" pcbX={-8} pcbY={17} schX={4} schY={4} />

    <pushbutton
      name="SW_BOOT"
      footprint="pushbutton"
      pinLabels={{ pin1: "QSPI_CS", pin2: "GND" }}
      pcbX={-13}
      pcbY={18}
      schX={2}
      schY={4}
    />
    <pushbutton
      name="SW_RESET"
      footprint="pushbutton"
      pinLabels={{ pin1: "RUN", pin2: "GND" }}
      pcbX={14}
      pcbY={13}
      schX={9}
      schY={4}
    />

    <capacitor name="CIN" capacitance="10uF" footprint="0603" pcbX={-15} pcbY={-18} schX={-6.6} schY={-5.9} schOrientation="vertical" />
    <capacitor name="COUT" capacitance="10uF" footprint="0603" pcbX={-6} pcbY={-18} schX={-1} schY={-6} schOrientation="vertical" />
    <capacitor name="CUSB" capacitance="1uF" footprint="0603" pcbX={8} pcbY={-8} schX={-1} schY={-3} schOrientation="vertical" />
    <capacitor name="C1V1" capacitance="1uF" footprint="0603" pcbX={6} pcbY={7} schX={2} schY={5} schOrientation="vertical" />
    <capacitor name="CFLASH" capacitance="100nF" footprint="0603" pcbX={6} pcbY={12} schX={7} schY={2} schOrientation="vertical" />
    <capacitor name="CXIN" capacitance="18pF" footprint="0603" pcbX={-14} pcbY={6} schX={-7.5} schY={3.1} schOrientation="vertical" />
    <capacitor name="CXOUT" capacitance="18pF" footprint="0603" pcbX={-14} pcbY={9} schX={-7} schY={2} schOrientation="vertical" />

    <silkscreentext text="RP2040 BREAKOUT" pcbX={0} pcbY={-23} fontSize="1.1mm" anchorAlignment="center" />
    <silkscreentext text="USB" pcbX={0} pcbY={-20.5} fontSize="0.9mm" anchorAlignment="center" />
    <silkscreentext text="BOOT" pcbX={-13} pcbY={14.7} fontSize="0.8mm" anchorAlignment="center" />
    <silkscreentext text="RESET" pcbX={14} pcbY={9.7} fontSize="0.8mm" anchorAlignment="center" />
    <silkscreentext text="GP25" pcbX={10} pcbY={16.6} fontSize="0.8mm" anchorAlignment="center" />

    <trace from=".JUSB > .VBUS1" to="net.VBUS" />
    <trace from=".JUSB > .VBUS2" to="net.VBUS" />
    <trace from=".JUSB > .GND1" to="net.GND" />
    <trace from=".JUSB > .GND2" to="net.GND" />
    <trace from=".JUSB > .SHELL1" to="net.GND" />
    <trace from=".JUSB > .SHELL2" to="net.GND" />
    <trace from=".JUSB > .SHELL3" to="net.GND" />
    <trace from=".JUSB > .SHELL4" to="net.GND" />
    <trace from=".JUSB > .DP1" to=".RDP > .pin1" />
    <trace from=".JUSB > .DP2" to=".RDP > .pin1" />
    <trace from=".RDP > .pin2" to="net.USB_DP" />
    <trace from=".JUSB > .DM1" to=".RDM > .pin1" />
    <trace from=".JUSB > .DM2" to=".RDM > .pin1" />
    <trace from=".RDM > .pin2" to="net.USB_DM" />
    <trace from=".JUSB > .CC1" to=".RCC1 > .pin1" />
    <trace from=".RCC1 > .pin2" to="net.GND" />
    <trace from=".JUSB > .CC2" to=".RCC2 > .pin1" />
    <trace from=".RCC2 > .pin2" to="net.GND" />

    <trace from=".U2 > .VIN" to="net.VBUS" />
    <trace from=".U2 > .EN" to="net.VBUS" />
    <trace from=".U2 > .GND" to="net.GND" />
    <trace from=".U2 > .VOUT" to="net.V3_3" />
    <trace from=".CIN > .pos" to="net.VBUS" />
    <trace from=".CIN > .neg" to="net.GND" />
    <trace from=".COUT > .pos" to="net.V3_3" />
    <trace from=".COUT > .neg" to="net.GND" />

    <trace from=".U1 > .USB_DP" to="net.USB_DP" />
    <trace from=".U1 > .USB_DM" to="net.USB_DM" />
    <trace from=".U1 > .USB_VDD" to="net.V3_3" />
    <trace from=".U1 > .VREG_IN" to="net.V3_3" />
    <trace from=".U1 > .VREG_VOUT" to="net.VREG_1V1" />
    <trace from=".U1 > .DVDD1" to="net.VREG_1V1" />
    <trace from=".U1 > .DVDD2" to="net.VREG_1V1" />
    <trace from=".CUSB > .pos" to="net.V3_3" />
    <trace from=".CUSB > .neg" to="net.GND" />
    <trace from=".C1V1 > .pos" to="net.VREG_1V1" />
    <trace from=".C1V1 > .neg" to="net.GND" />

    <trace from=".U1 > .IOVDD1" to="net.V3_3" />
    <trace from=".U1 > .IOVDD2" to="net.V3_3" />
    <trace from=".U1 > .IOVDD3" to="net.V3_3" />
    <trace from=".U1 > .IOVDD4" to="net.V3_3" />
    <trace from=".U1 > .IOVDD5" to="net.V3_3" />
    <trace from=".U1 > .IOVDD6" to="net.V3_3" />
    <trace from=".U1 > .ADC_AVDD" to="net.V3_3" />
    <trace from=".U1 > .GND" to="net.GND" />
    <trace from=".U1 > .TESTEN" to="net.GND" />

    <trace from=".Y1 > .pin1" to="net.XIN" />
    <trace from=".Y1 > .pin2" to="net.XOUT" />
    <trace from=".U1 > .XIN" to="net.XIN" />
    <trace from=".U1 > .XOUT" to="net.XOUT" />
    <trace from=".CXIN > .pos" to="net.XIN" />
    <trace from=".CXIN > .neg" to="net.GND" />
    <trace from=".CXOUT > .pos" to="net.XOUT" />
    <trace from=".CXOUT > .neg" to="net.GND" />

    <trace from=".U1 > .QSPI_SS" to="net.QSPI_CS" />
    <trace from=".U1 > .QSPI_SCLK" to="net.QSPI_SCLK" />
    <trace from=".U1 > .QSPI_SD0" to="net.QSPI_SD0" />
    <trace from=".U1 > .QSPI_SD1" to="net.QSPI_SD1" />
    <trace from=".U1 > .QSPI_SD2" to="net.QSPI_SD2" />
    <trace from=".U1 > .QSPI_SD3" to="net.QSPI_SD3" />
    <trace from=".U3 > .CS" to="net.QSPI_CS" />
    <trace from=".U3 > .CLK" to="net.QSPI_SCLK" />
    <trace from=".U3 > .pin5" to="net.QSPI_SD0" />
    <trace from=".U3 > .pin2" to="net.QSPI_SD1" />
    <trace from=".U3 > .pin3" to="net.QSPI_SD2" />
    <trace from=".U3 > .pin7" to="net.QSPI_SD3" />
    <trace from=".U3 > .VCC" to="net.V3_3" />
    <trace from=".U3 > .GND" to="net.GND" />
    <trace from=".CFLASH > .pos" to="net.V3_3" />
    <trace from=".CFLASH > .neg" to="net.GND" />
    <trace from=".RBOOT > .pin1" to="net.QSPI_CS" />
    <trace from=".RBOOT > .pin2" to="net.V3_3" />
    <trace from=".SW_BOOT > .QSPI_CS" to="net.QSPI_CS" />
    <trace from=".SW_BOOT > .GND" to="net.GND" />

    <trace from=".U1 > .RUN" to="net.RUN" />
    <trace from=".RRUN > .pin1" to="net.RUN" />
    <trace from=".RRUN > .pin2" to="net.V3_3" />
    <trace from=".SW_RESET > .RUN" to="net.RUN" />
    <trace from=".SW_RESET > .GND" to="net.GND" />

    <trace from=".U1 > .GPIO25" to="net.GPIO25_LED" />
    <trace from=".RLED > .pin1" to="net.GPIO25_LED" />
    <trace from=".RLED > .pin2" to=".D1 > .pos" />
    <trace from=".D1 > .neg" to="net.GND" />

    <trace from=".JLEFT > .GPIO0" to=".U1 > .GPIO0" />
    <trace from=".JLEFT > .GPIO1" to=".U1 > .GPIO1" />
    <trace from=".JLEFT > .GPIO2" to=".U1 > .GPIO2" />
    <trace from=".JLEFT > .GPIO3" to=".U1 > .GPIO3" />
    <trace from=".JLEFT > .GPIO4" to=".U1 > .GPIO4" />
    <trace from=".JLEFT > .GPIO5" to=".U1 > .GPIO5" />
    <trace from=".JLEFT > .GPIO6" to=".U1 > .GPIO6" />
    <trace from=".JLEFT > .GPIO7" to=".U1 > .GPIO7" />
    <trace from=".JLEFT > .GPIO8" to=".U1 > .GPIO8" />
    <trace from=".JLEFT > .GPIO9" to=".U1 > .GPIO9" />
    <trace from=".JLEFT > .GPIO10" to=".U1 > .GPIO10" />
    <trace from=".JLEFT > .GPIO11" to=".U1 > .GPIO11" />
    <trace from=".JLEFT > .3V3" to="net.V3_3" />
    <trace from=".JLEFT > .GND" to="net.GND" />

    <trace from=".JRIGHT > .GPIO12" to=".U1 > .GPIO12" />
    <trace from=".JRIGHT > .GPIO13" to=".U1 > .GPIO13" />
    <trace from=".JRIGHT > .GPIO14" to=".U1 > .GPIO14" />
    <trace from=".JRIGHT > .GPIO15" to=".U1 > .GPIO15" />
    <trace from=".JRIGHT > .GPIO16" to=".U1 > .GPIO16" />
    <trace from=".JRIGHT > .GPIO17" to=".U1 > .GPIO17" />
    <trace from=".JRIGHT > .GPIO18" to=".U1 > .GPIO18" />
    <trace from=".JRIGHT > .GPIO19" to=".U1 > .GPIO19" />
    <trace from=".JRIGHT > .GPIO20" to=".U1 > .GPIO20" />
    <trace from=".JRIGHT > .GPIO21" to=".U1 > .GPIO21" />
    <trace from=".JRIGHT > .GPIO22" to=".U1 > .GPIO22" />
    <trace from=".JRIGHT > .GPIO25_LED" to="net.GPIO25_LED" />
    <trace from=".JRIGHT > .RUN" to="net.RUN" />
    <trace from=".JRIGHT > .GND" to="net.GND" />

    <trace from=".JSWD > .3V3" to="net.V3_3" />
    <trace from=".JSWD > .SWD" to=".U1 > .SWD" />
    <trace from=".JSWD > .SWCLK" to=".U1 > .SWCLK" />
    <trace from=".JSWD > .GND" to="net.GND" />
  </board>
)
