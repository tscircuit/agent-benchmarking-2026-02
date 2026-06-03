import { AP2112K_3_3TRG1 } from "./imports/AP2112K_3_3TRG1"
import { RP2040 } from "./imports/RP2040"
import { TYPE_C_16PIN_2MD_073_ } from "./imports/TYPE_C_16PIN_2MD_073_"
import { W25Q16JVUXIQ } from "./imports/W25Q16JVUXIQ"

const leftHeaderSignals = [
  "V3_3",
  "GND",
  "GPIO0",
  "GPIO1",
  "GPIO2",
  "GPIO3",
  "GPIO4",
  "GPIO5",
  "SWCLK",
  "SWD",
] as const

const rightHeaderSignals = [
  "VBUS",
  "GND",
  "GPIO6",
  "GPIO7",
  "GPIO8",
  "GPIO9",
  "GPIO10",
  "GPIO11",
  "RUN",
  "BOOTSEL",
] as const

export default () => (
  <board width="64mm" height="42mm" layers={4} autorouterEffortLevel="2x">
    <TYPE_C_16PIN_2MD_073_
      name="JUSB"
      pcbX={-8}
      pcbY={14}
      pcbRotation={0}
      schX={-7}
      schY={4}
      schSectionName="USB and Power"
    />

    <AP2112K_3_3TRG1
      name="U2"
      pcbX={-8}
      pcbY={5.5}
      pcbRotation={180}
      schX={-2}
      schY={4}
      schHeight={0.6}
      schSectionName="USB and Power"
    />

    <RP2040
      name="U1"
      pcbX={3}
      pcbY={-2}
      schX={0}
      schY={0}
      schHeight={3.6}
      schSectionName="RP2040"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "USB_DP",
            "USB_DM",
            "XIN",
            "XOUT",
            "QSPI_SS",
            "QSPI_SCLK",
            "QSPI_SD0",
            "QSPI_SD1",
            "QSPI_SD2",
            "QSPI_SD3",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
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
            "GPIO16",
            "GPIO17",
            "GPIO18",
            "GPIO19",
            "GPIO25",
          ],
        },
        topSide: {
          direction: "left-to-right",
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
          ],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: ["DVDD1", "DVDD2", "VREG_VOUT", "RUN", "SWCLK", "SWD", "TESTEN", "GND"],
        },
      }}
    />

    <W25Q16JVUXIQ
      name="U3"
      pcbX={3}
      pcbY={6.2}
      schX={-5}
      schY={-3}
      schHeight={1}
      schSectionName="QSPI Flash"
    />

    <crystal
      name="Y1"
      frequency="12MHz"
      loadCapacitance="18pF"
      footprint="hc49"
      pcbX={3}
      pcbY={-11}
      schX={-5}
      schY={0}
      schSectionName="RP2040"
    />

    <pinheader
      name="J1"
      pinCount={leftHeaderSignals.length}
      pitch="2.54mm"
      gender="female"
      footprint="pinrow10"
      showSilkscreenPinLabels
      pinLabels={[...leftHeaderSignals]}
      pcbX={-28}
      pcbY={0}
      pcbRotation={90}
      schX={5.5}
      schY={1.5}
      schWidth={0.675}
      schSectionName="Breakout Headers"
    />
    <pinheader
      name="J2"
      pinCount={rightHeaderSignals.length}
      pitch="2.54mm"
      gender="female"
      footprint="pinrow10"
      showSilkscreenPinLabels
      pinLabels={[...rightHeaderSignals]}
      pcbX={28}
      pcbY={0}
      pcbRotation={90}
      schX={8}
      schY={1.5}
      schWidth={0.865}
      schSectionName="Breakout Headers"
    />

    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX={16}
      pcbY={-10}
      schX={4}
      schY={-3.5}
      schSectionName="Status LED"
    />
    <resistor
      name="RLED"
      resistance="1k"
      footprint="0603"
      pcbX={12.5}
      pcbY={-10}
      schX={2.7}
      schY={-3.5}
      schSectionName="Status LED"
    />

    <resistor name="RCC1" resistance="5.1k" footprint="0603" pcbX={-15.5} pcbY={18.4} schX={-5.2} schY={5.1} schSectionName="USB and Power" />
    <resistor name="RCC2" resistance="5.1k" footprint="0603" pcbX={-12.2} pcbY={18.4} schX={-5.2} schY={3.2} schSectionName="USB and Power" />
    <resistor name="RRUN" resistance="10k" footprint="0603" pcbX={12} pcbY={-5.2} schX={2.6} schY={-1.1} schSectionName="RP2040" />

    <capacitor name="CIN" capacitance="1uF" footprint="0603" pcbX={-12.2} pcbY={6.7} schX={-3.7} schY={5.2} schRotation={90} schSectionName="USB and Power" />
    <capacitor name="COUT" capacitance="1uF" footprint="0603" pcbX={-4.4} pcbY={6.7} schX={-0.4} schY={5.2} schRotation={90} schSectionName="USB and Power" />
    <capacitor name="CUSB" capacitance="1uF" footprint="0603" pcbX={-4.2} pcbY={2.6} schX={2.5} schY={2.6} schRotation={90} schSectionName="RP2040" />
    <capacitor name="CVREG" capacitance="1uF" footprint="0603" pcbX={8.6} pcbY={2.6} schX={2.5} schY={-2.1} schRotation={90} schSectionName="RP2040" />
    <capacitor name="CFLASH" capacitance="100nF" footprint="0603" pcbX={7.0} pcbY={6.2} schX={-7.1} schY={-4.4} schRotation={90} schSectionName="QSPI Flash" />
    <capacitor name="CX1" capacitance="18pF" footprint="0603" pcbX={-1.4} pcbY={-15.4} schX={-6.4} schY={-1.2} schRotation={90} schSectionName="RP2040" />
    <capacitor name="CX2" capacitance="18pF" footprint="0603" pcbX={7.4} pcbY={-15.4} schX={-3.7} schY={-1.2} schRotation={90} schSectionName="RP2040" />

    <silkscreentext text="RP2040 USB BREAKOUT" pcbX={8} pcbY={17.2} fontSize="1mm" anchorAlignment="center" />
    <silkscreentext text="LED GP25" pcbX={16} pcbY={-12.5} fontSize="0.8mm" anchorAlignment="center" />

    <trace from=".JUSB > .A4B9" to="net.VBUS" />
    <trace from=".JUSB > .B4A9" to="net.VBUS" />
    <trace from=".JUSB > .A1B12" to="net.GND" />
    <trace from=".JUSB > .B1A12" to="net.GND" />
    <trace from=".JUSB > .EH1" to="net.GND" />
    <trace from=".JUSB > .EH2" to="net.GND" />
    <trace from=".JUSB > .A6" to=".U1 > .USB_DP" thickness="0.18mm" />
    <trace from=".JUSB > .B6" to=".U1 > .USB_DP" thickness="0.18mm" />
    <trace from=".JUSB > .A7" to=".U1 > .USB_DM" thickness="0.18mm" />
    <trace from=".JUSB > .B7" to=".U1 > .USB_DM" thickness="0.18mm" />
    <trace from=".JUSB > .A5" to=".RCC1 > .pin1" />
    <trace from=".RCC1 > .pin2" to="net.GND" />
    <trace from=".JUSB > .B5" to=".RCC2 > .pin1" />
    <trace from=".RCC2 > .pin2" to="net.GND" />

    <trace from="net.VBUS" to=".U2 > .VIN" thickness="0.3mm" />
    <trace from="net.VBUS" to=".U2 > .EN" />
    <trace from=".U2 > .GND" to="net.GND" />
    <trace from=".U2 > .VOUT" to="net.V3_3" thickness="0.3mm" />
    <trace from=".CIN > .pin1" to="net.VBUS" />
    <trace from=".CIN > .pin2" to="net.GND" />
    <trace from=".COUT > .pin1" to="net.V3_3" />
    <trace from=".COUT > .pin2" to="net.GND" />

    <trace from=".U1 > .VREG_IN" to="net.V3_3" />
    <trace from=".U1 > .TESTEN" to="net.GND" />
    <trace from=".U1 > .GND" to="net.GND" />
    <trace from=".U1 > .IOVDD1" to="net.V3_3" />
    <trace from=".U1 > .IOVDD2" to="net.V3_3" />
    <trace from=".U1 > .IOVDD3" to="net.V3_3" />
    <trace from=".U1 > .IOVDD4" to="net.V3_3" />
    <trace from=".U1 > .IOVDD5" to="net.V3_3" />
    <trace from=".U1 > .IOVDD6" to="net.V3_3" />
    <trace from=".U1 > .ADC_AVDD" to="net.V3_3" />
    <trace from=".U1 > .USB_VDD" to="net.V3_3" />
    <trace from=".U1 > .DVDD1" to="net.VREG_CORE" />
    <trace from=".U1 > .DVDD2" to="net.VREG_CORE" />
    <trace from=".U1 > .VREG_VOUT" to="net.VREG_CORE" />
    <trace from=".CUSB > .pin1" to="net.V3_3" />
    <trace from=".CUSB > .pin2" to="net.GND" />
    <trace from=".CVREG > .pin1" to="net.VREG_CORE" />
    <trace from=".CVREG > .pin2" to="net.GND" />
    <trace from=".RRUN > .pin1" to="net.V3_3" />
    <trace from=".RRUN > .pin2" to=".U1 > .RUN" />

    <trace from=".Y1 > .pin1" to=".U1 > .XIN" />
    <trace from=".Y1 > .pin2" to=".U1 > .XOUT" />
    <trace from=".CX1 > .pin1" to=".U1 > .XIN" />
    <trace from=".CX1 > .pin2" to="net.GND" />
    <trace from=".CX2 > .pin1" to=".U1 > .XOUT" />
    <trace from=".CX2 > .pin2" to="net.GND" />

    <trace from=".U3 > .VCC" to="net.V3_3" />
    <trace from=".U3 > .GND" to="net.GND" />
    <trace from=".U3 > .EP" to="net.GND" />
    <trace from=".CFLASH > .pin1" to=".U3 > .VCC" />
    <trace from=".CFLASH > .pin2" to="net.GND" />
    <trace from=".U3 > .CS" to=".U1 > .QSPI_SS" />
    <trace from=".U3 > .CLK" to=".U1 > .QSPI_SCLK" />
    <trace from=".U3 > .pin5" to=".U1 > .QSPI_SD0" />
    <trace from=".U3 > .pin2" to=".U1 > .QSPI_SD1" />
    <trace from=".U3 > .pin3" to=".U1 > .QSPI_SD2" />
    <trace from=".U3 > .pin7" to=".U1 > .QSPI_SD3" />
    <trace from=".U1 > .GPIO25" to=".RLED > .pin1" />
    <trace from=".RLED > .pin2" to=".D1 > .pin1" />
    <trace from=".D1 > .pin2" to="net.GND" />

    <trace from=".J1 > .pin1" to="net.V3_3" />
    <trace from=".J1 > .pin2" to="net.GND" />
    <trace from=".J1 > .pin3" to=".U1 > .GPIO0" />
    <trace from=".J1 > .pin4" to=".U1 > .GPIO1" />
    <trace from=".J1 > .pin5" to=".U1 > .GPIO2" />
    <trace from=".J1 > .pin6" to=".U1 > .GPIO3" />
    <trace from=".J1 > .pin7" to=".U1 > .GPIO4" />
    <trace from=".J1 > .pin8" to=".U1 > .GPIO5" />
    <trace from=".J1 > .pin9" to=".U1 > .SWCLK" />
    <trace from=".J1 > .pin10" to=".U1 > .SWD" />

    <trace from=".J2 > .pin1" to="net.VBUS" />
    <trace from=".J2 > .pin2" to="net.GND" />
    <trace from=".J2 > .pin3" to=".U1 > .GPIO6" />
    <trace from=".J2 > .pin4" to=".U1 > .GPIO7" />
    <trace from=".J2 > .pin5" to=".U1 > .GPIO8" />
    <trace from=".J2 > .pin6" to=".U1 > .GPIO9" />
    <trace from=".J2 > .pin7" to=".U1 > .GPIO10" />
    <trace from=".J2 > .pin8" to=".U1 > .GPIO11" />
    <trace from=".J2 > .pin9" to=".U1 > .RUN" />
    <trace from=".J2 > .pin10" to=".U3 > .CS" />
  </board>
)
